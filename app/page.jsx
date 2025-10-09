// app/page.jsx
export const dynamic = "force-dynamic";

export default function Page() {
  const waLink =
    "https://wa.me/528111111111?text=Hola%2C%20necesito%20cotizaci%C3%B3n%20de%20refacciones%20para%20camion.";

  return (
    <main className="container" style={{ paddingBottom: 28 }}>
      {/* HERO */}
      <section className="hero">
        <div className="hero-top">
          <img src="/mrdiesel-logo.png" alt="MRDiesel Logo" />
          <div className="kicker">
            <i>🚚</i> Entrega 24–48h <i>🧰</i> Garantía 30 días <i>📞</i> Asesor experto
          </div>
        </div>

        <h1>Refacciones para camión, sin vueltas.</h1>
        <p>
          Cotizamos por WhatsApp y enviamos a todo México en 24–48h. Precios justos, piezas
          probadas. Mantén tu unidad trabajando.
        </p>

        <div className="cta-row">
          <a className="cta-primary" href={waLink} target="_blank" rel="noopener noreferrer">
            <span>💬 Cotizar por WhatsApp</span>
            <small>33 personas consultaron hoy</small>
          </a>
          <span className="cta-secondary">Factura • Envío nacional</span>
        </div>

        <div className="badges">
          <span>✓ Garantía 30 días</span>
          <span>✓ Asesoría técnica</span>
          <span>✓ Factura</span>
          <span>✓ Envío nacional</span>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="section">
        <h3>Categorías más pedidas</h3>
        <div className="grid">

          <article className="card">
            <h4>Frenos</h4>
            <p>Pastas, discos y cilindros probados.</p>
            <div className="price">$3,800 MXN • desde</div>
            <a className="btn" href={waLink} target="_blank">Ver piezas →</a>
          </article>

          <article className="card">
            <h4>Motor</h4>
            <p>Bombas, inyectores, juntas de alta calidad.</p>
            <div className="price">$7,800 MXN • desde</div>
            <a className="btn" href={waLink} target="_blank">Ver piezas →</a>
          </article>

          <article className="card">
            <h4>Enfriamiento</h4>
            <p>Bomba de agua, radiador, mangueras.</p>
            <div className="price">$1,450 MXN • desde</div>
            <a className="btn" href={waLink} target="_blank">Ver piezas →</a>
          </article>

        </div>
      </section>
    </main>
  );
import Image from "next/image";

export default function Page() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-top">
          <Image src="/logo.png" alt="Refacciones para Camión" width={64} height={64} />
          {/* ... resto del contenido ... */}
        </div>

        <aside /* tarjeta lateral */>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <Image src="/logo.png" alt="Refacciones para Camión" width={28} height={28} />
            <strong style={{ color: "#eaf1ff" }}>¿No encuentras tu pieza?</strong>
          </div>
          {/* ... resto ... */}
        </aside>
      </section>
    </main>
  );
}
}
