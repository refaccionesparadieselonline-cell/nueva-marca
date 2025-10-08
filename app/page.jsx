// app/page.jsx
export const metadata = {
  title: "Refacciones para Camión | MRDiesel",
  description:
    "Refacciones para camión con entrega 24–48h. Garantía 30 días, factura, asesor experto por WhatsApp. Cotiza ahora.",
  openGraph: {
    title: "Refacciones para Camión | MRDiesel",
    description:
      "Refacciones para camión con entrega 24–48h. Garantía 30 días, factura, asesor experto por WhatsApp.",
    images: ["/mrdiesel-logo.png"],
  },
};

const PHONE = "525512345678"; // <-- TU NÚMERO AQUÍ (sin +)
const wa = (msg) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}&utm_source=landing&utm_medium=cta&utm_campaign=mrdiesel`;

const categories = [
  { key: "frenos", label: "Frenos", desc: "Pastas, discos, cilindros" },
  { key: "motor", label: "Motor", desc: "Bombas, inyectores, juntas" },
  { key: "enfriamiento", label: "Enfriamiento", desc: "Bomba agua, radiador" },
  { key: "electrico", label: "Eléctrico", desc: "Alternador, marchas" },
  { key: "suspension", label: "Suspensión", desc: "Bujes, ballestas" },
  { key: "filtros", label: "Filtros", desc: "Aceite, aire, combustible" },
];

const destacados = [
  { title: "Bomba de agua Cummins", price: 2650, stock: 5 },
  { title: "Kit de frenos 4700", price: 3890, stock: 3 },
  { title: "Filtro de aceite Fleetguard", price: 480, stock: 12 },
  { title: "Alternador 24V Heavy Duty", price: 4990, stock: 2 },
];

function priceMXN(n) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function Page() {
  const viewsToday = 12 + Math.floor(Math.random() * 24); // prueba social dinámica

  return (
    <>
      {/* Barra superior de confianza */}
      <div className="topbar">
        <span>⚡ Entrega 24–48h</span>
        <span>🧾 Factura</span>
        <span>🛡️ Garantía 30 días</span>
        <span>📞 Asesor experto</span>
      </div>

      <main className="container">
        {/* HERO */}
        <header className="hero">
          <img
            src="/mrdiesel-logo.png"
            alt="MRDiesel"
            width={84}
            height={84}
            className="logo"
          />

          <div className="hero-copy">
            <h1>Refacciones para camión, sin vueltas.</h1>
            <p className="sub">
              Te cotizamos por WhatsApp y enviamos a todo México en 24–48h.
              Precios justos, piezas probadas. Mantén tu unidad trabajando.
            </p>

            <div className="hero-cta">
              <a
                className="btn-primary"
                href={wa("Hola MRDiesel, necesito una refacción para camión")}
              >
                Cotizar por WhatsApp
              </a>
              <small className="social-proof">
                {viewsToday} personas consultaron hoy
              </small>
            </div>

            <ul className="badges">
              <li>✔ Garantía 30 días</li>
              <li>✔ Asesoría técnica</li>
              <li>✔ Factura</li>
              <li>✔ Envío nacional</li>
            </ul>
          </div>
        </header>

        {/* CATEGORÍAS (fluidez cognitiva: menos opciones, más claro) */}
        <section className="block">
          <div className="block-head">
            <h2>Categorías más pedidas</h2>
            <p className="hint">
              Encuentra rápido lo que necesitas. Si no lo ves, te lo conseguimos.
            </p>
          </div>

          <div className="grid">
            {categories.map((c) => (
              <article key={c.key} className="card">
                <div className="card-title">{c.label}</div>
                <p className="muted">{c.desc}</p>
                <a
                  className="link"
                  href={wa(`Busco refacciones de ${c.label}`)}
                >
                  Ver piezas →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* DESTACADOS (escasez controlada + ancla de valor) */}
        <section className="block">
          <div className="block-head">
            <h2>Destacados en existencia</h2>
            <p className="hint">Precios publicados hoy. Quedan pocas piezas.</p>
          </div>

          <div className="grid">
            {destacados.map((p, i) => (
              <article key={i} className="card">
                <div className="card-title">{p.title}</div>
                <div className="price">{priceMXN(p.price)}</div>
                <p className="stock">
                  {p.stock <= 3 ? "Quedan pocas unidades" : "Stock disponible"}
                </p>
                <a
                  className="btn-secondary"
                  href={wa(`Quiero ${p.title} a ${priceMXN(p.price)}`)}
                >
                  Cotizar
                </a>
                <small className="micro">
                  Paga contra entrega en paquetería (según zona) o transferencia.
                </small>
              </article>
            ))}
          </div>
        </section>

        {/* VALORES (autoridad + riesgo invertido) */}
        <section className="value">
          <h3>¿Por qué elegir MRDiesel?</h3>
          <ul className="ticks">
            <li>
              <strong>Sin riesgo:</strong> garantía 30 días y piezas probadas en
              flotillas.
            </li>
            <li>
              <strong>Resolvemos:</strong> danos síntomas y te guiamos a la pieza
              correcta.
            </li>
            <li>
              <strong>Rápidos:</strong> envío en 24–48h; urgencias disponible.
            </li>
            <li>
              <strong>Confianza:</strong> factura, seguimiento y soporte humano.
            </li>
          </ul>
          <a className="btn-primary" href={wa("Quiero una recomendación experta")}>
            Hablar con un asesor
          </a>
        </section>

        {/* FAQ (reduce fricción y objeciones) */}
        <section className="block">
          <div className="block-head">
            <h2>Preguntas frecuentes</h2>
          </div>

          <details className="faq">
            <summary>¿Cómo es el envío?</summary>
            <p>
              Enviamos por paquetería nacional y ocurre. Tiempos típicos 24–48h.
              Te compartimos guía y seguimiento.
            </p>
          </details>

          <details className="faq">
            <summary>¿Cómo pago?</summary>
            <p>
              Transferencia o depósito. En algunas zonas puedes pagar al recibir
              (según disponibilidad de paquetería).
            </p>
          </details>

          <details className="faq">
            <summary>¿Tienen garantía?</summary>
            <p>
              Sí, 30 días contra defecto de fabricación. Si algo falla,
              sustituimos o te damos crédito.
            </p>
          </details>

          <details className="faq">
            <summary>¿Pueden ayudarme a identificar la pieza?</summary>
            <p>
              Claro. Envíanos modelo/serie de la unidad, síntomas y fotos. Un
              asesor te responde por WhatsApp.
            </p>
          </details>
        </section>
      </main>

      {/* CTA flotante (acorta el camino a la acción) */}
      <a className="floating" href={wa("Hola, quiero cotizar refacciones")}>
        💬 Cotizar por WhatsApp
      </a>

      <footer className="foot">
        <div className="container foot-wrap">
          <span>© {new Date().getFullYear()} MRDiesel</span>
          <a className="link" href={wa("Necesito soporte de mi pedido")}>
            Soporte de pedido
          </a>
        </div>
      </footer>
      export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Header con logo */}
      <header className="flex items-center gap-3">
        <img
          src="/mrdiesel-logo.png"
          alt="MRDiesel — Refacciones para camión"
          width={84}
          height={84}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold tracking-tight">
          Refacciones MRDiesel
        </h1>
      </header>

      {/* ...el resto de tu página... */}
    </main>
  );
}

    </>
  );
}
