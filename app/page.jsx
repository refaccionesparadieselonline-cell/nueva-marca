import Image from "next/image";
import { sfy } from "@/lib/shopify";
import ProductGrid from "@/components/ProductGrid";

export const dynamic = "force-dynamic"; // asegura que no se congele estático

async function getProducts() {
  // Trae 24 productos (ajusta) con variante principal + stock
  const query = /* GraphQL */ `
    query Productos($n:Int!) {
      products(first:$n, sortKey:UPDATED_AT, reverse:true) {
        nodes {
          id
          title
          handle
          tags
          featuredImage { url }
          variants(first:1) {
            nodes {
              id
              availableForSale
              quantityAvailable
              price { amount currencyCode }
            }
          }
        }
      }
    }
  `;

  const data = await sfy(query, { n: 24 });

  return data.products.nodes.map(p => {
    const v = p.variants.nodes[0] || {};
    return {
      id: p.id,
      title: p.title,
      handle: p.handle,
      tags: p.tags || [],
      image: p.featuredImage?.url ?? null,
      available: !!v.availableForSale,
      qty: v.quantityAvailable ?? 0,
      price: v.price?.amount ?? "0",
      currencyCode: v.price?.currencyCode ?? "MXN",
    };
  });
}

export default async function TiendaPage() {
  const productos = await getProducts();

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black text-zinc-100">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 space-y-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mrd.svg" // sube tu logo a /public/logo-mrd.svg
              alt="MRDiesel"
              width={44}
              height={44}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">MRDiesel – Refacciones</h1>
              <p className="text-sm text-zinc-400">Stock en tiempo real y cotización por WhatsApp</p>
            </div>
          </div>
        </header>

        <ProductGrid productos={productos} />

        <footer className="pt-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} MRDiesel. Hecho para vender rápido 🚀
        </footer>
      </section>
    </main>
  );
}
