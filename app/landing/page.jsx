import ProductCarousel from "../components/ProductCarousel";
import { sfy } from "@/lib/shopify"; // gracias al jsconfig.json podemos usar '@/'

const SHOP_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const WAPP = process.env.NEXT_PUBLIC_WAPP || "+528112345678";
const wappHref = `https://wa.me/${WAPP.replace(/\D/g,"")}?text=Hola%20quiero%20cotizar%20refacciones`;

async function getFeatured() {
  const data = await sfy(`
    query FeaturedProducts {
      products(first: 12, query: "status:ACTIVE", sortKey: BEST_SELLING) {
        nodes {
          id title
          featuredImage { url }
          priceRange { minVariantPrice { amount } }
          variants(first: 1) { nodes { legacyResourceId } }
        }
      }
    }
  `);

  return (data?.products?.nodes || []).map(n => ({
    id: n.id,
    title: n.title,
    image: n.featuredImage?.url || null,
    price: n.priceRange?.minVariantPrice
      ? Number(n.priceRange.minVariantPrice.amount)
      : null,
    variants: n.variants?.nodes || [],
  }));
}

export const metadata = {
  title: "Refacciones para camión — Compra o Cotiza | MRDiesel",
  description: "Precios claros, compra inmediata o cotiza por WhatsApp. Envíos 24–48h.",
};

export default async function Landing() {
  const featured = await getFeatured();

  return (
    <main>
      <section className="bg-gradient-to-b from-brandDark/20 to-transparent">
        <div className="container py-12 md:py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="badge mb-4 bg-brand/10 text-brand">
              Envíos 24–48h · Stock verificado
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Refacciones para camión <span className="text-brand">listas hoy</span>
            </h1>
            <p className="mt-4 text-lg text-ink/70">
              Compra directa o cotiza por WhatsApp. Validamos compatibilidad y enviamos rápido.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={wappHref} className="btn btn-primary">Cotizar por WhatsApp</a>
            </div>
          </div>
          <div className="relative h-56 md:h-80">
            {/* Si subes el logo a /public/logo-mrdiesel.png lo mostramos aquí */}
            <img src="/logo-mrdiesel.png" alt="MRDiesel" className="object-contain w-full h-full" />
          </div>
        </div>
      </section>

      <ProductCarousel items={featured} shopDomain={SHOP_DOMAIN} />
    </main>
  );
}
