// app/tienda/page.jsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

const sample = [
  { id: "1", title: "Filtro de Aceite Cummins", price: 820, image: "https://picsum.photos/seed/cummins/640/480" },
  { id: "2", title: "Bomba de Agua Detroit",    price: 3590, image: "https://picsum.photos/seed/detroit/640/480" },
  { id: "3", title: "Kit de Frenos Freightliner", price: 4990, image: "https://picsum.photos/seed/freightliner/640/480" },
  { id: "4", title: "Balatas Kenworth",           price: 1490, image: "https://picsum.photos/seed/kenworth/640/480" },
  { id: "5", title: "Tensor de Banda",            price: 990,  image: "https://picsum.photos/seed/tensor/640/480" },
  { id: "6", title: "Filtro de Aire Volvo",       price: 1150, image: "https://picsum.photos/seed/volvo/640/480" },
];

function Card({ p }) {
  const wa = `https://wa.me/52${process.env.NEXT_PUBLIC_WAPP || "8112345678"}?text=` +
             encodeURIComponent(`Hola, quiero cotizar: ${p.title}`);

  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid #eef1f6",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ aspectRatio: "4/3", background: "#f0f3f8", overflow: "hidden" }}>
        <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      <div style={{ padding: 16, display: "grid", gap: 8 }}>
        <div style={{ fontWeight: 700, lineHeight: 1.2 }}>{p.title}</div>
        <div style={{ opacity: 0.7 }}>${p.price.toLocaleString("es-MX")} MXN</div>

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid #0b0f1a",
              textDecoration: "none",
              color: "#0b0f1a",
              flex: 1,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Cotizar por WhatsApp
          </a>

          <button
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid #eef1f6",
              background: "#101828",
              color: "white",
              fontWeight: 700,
              flex: 1,
              cursor: "pointer",
            }}
            onClick={() => alert("Pago en línea próximamente")}
          >
            Pagar ahora
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Tienda() {
  return (
    <>
      <section style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: 0.2 }}>Tienda MRDiesel</h1>
        <p style={{ opacity: 0.7, marginTop: 6 }}>Nueva tienda — simple, rápida y enfocada en convertir 🧲</p>
      </section>

      {/* Carrusel “fake” para versión 1 */}
      <section
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "85%",
          gap: 12,
          overflowX: "auto",
          paddingBottom: 10,
          scrollSnapType: "x mandatory",
        }}
      >
        {sample.slice(0, 3).map((p) => (
          <div key={p.id} style={{ scrollSnapAlign: "start" }}>
            <Card p={p} />
          </div>
        ))}
      </section>

      {/* Grid */}
      <section
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          marginTop: 24,
        }}
      >
        {sample.map((p) => (
          <Card p={p} key={p.id} />
        ))}
      </section>
    </>
  );
}
