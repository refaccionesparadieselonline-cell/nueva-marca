// app/page.jsx
export const dynamic = "force-dynamic";

const PHONE = "525512345678"; // <-- cambia por tu número con lada (sin +)

const productos = [
  { title: "Bomba de agua", price: 2500 },
  { title: "Filtro de aceite", price: 450 },
  { title: "Kit frenos", price: 3800 },
  { title: "Bujías diésel", price: 780 },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#fff" }}>
      <div style={{ maxWidth: 980, width: "100%" }}>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 36, margin: 0 }}>Refacciones MRDiesel</h1>
          <p style={{ opacity: 0.75, margin: "8px 0 0" }}>
            Catálogo rápido de refacciones para camión. Pide precio por WhatsApp.
          </p>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {productos.map((p, i) => (
            <article
              key={i}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 16,
              }}
            >
              <h3 style={{ fontSize: 18, margin: "0 0 6px" }}>{p.title}</h3>
              <p style={{ margin: "0 0 12px" }}>${p.price} MXN</p>
              <a
                href={`https://wa.me/${PHONE}?text=Quiero%20cotizar:%20${encodeURIComponent(p.title)}`}
                style={{
                  display: "inline-block",
                  padding: "8px 12px",
                  border: "1px solid #111827",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Cotizar por WhatsApp
              </a>
            </article>
          ))}
        </section>

        <footer style={{ marginTop: 24 }}>
          <a
            href={`https://wa.me/${PHONE}?text=Necesito%20ayuda%20con%20refacciones`}
            style={{ textDecoration: "none" }}
          >
            Soporte inmediato
          </a>
        </footer>
      </div>
    </main>
  );
}
