// app/page.jsx

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              Refacciones para camión, <span className="accent">sin vueltas.</span>
            </h1>
            <p className="lead">
              Te cotizamos por WhatsApp y enviamos a todo México en 24–48h.
              Precios justos, piezas probadas. Mantén tu unidad trabajando.
            </p>

            <div className="actions">
              <a
                className="cta"
                href="https://wa.me/528111111111?text=Hola%2C%20necesito%20cotizaci%C3%B3n%20de%20refacciones%20para%20mi%20cam%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>
              <span className="social-proof">33 personas consultaron hoy</span>
            </div>

            <ul className="checklist">
              <li>Garantía 30 días</li>
              <li>Asesoría técnica</li>
              <li>Factura</li>
              <li>Envío nacional</li>
            </ul>
          </div>

          <div className="hero-card">
            <img
              src="/mrdiesel-logo.png"
              alt="MRDiesel"
              width="160"
              height="160"
              className="logo-hero"
            />
            <div className="hero-card-body">
              <p className="muted">¿No encuentras tu pieza?</p>
              <p className="muted">
                Envíanos foto o número de parte. Te conseguimos la refacción
                correcta al mejor precio.
              </p>
              <a
                className="cta cta--ghost"
                href="https://wa.me/528111111111?text=Hola%2C%20necesito%20ayuda%20con%20esta%20piezas%3A%20(foto%20o%20n%C3%BAmero%20de%20parte)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar foto por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="section">
        <h2>Categorías más pedidas</h2>
        <p className="muted">
          Encuentra rápido lo que necesitas. Si no lo ves, te lo conseguimos.
        </p>

        <div className="grid">
          {/* FRENOS */}
          <article className="card">
            <h3>Frenos</h3>
            <p className="muted">Pastas, discos, cilindros</p>
            <a
              className="link"
              href="https://wa.me/528111111111?text=Hola%2C%20quiero%20cotizar%20piezas%20de%20frenos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver piezas →
            </a>
          </article>

          {/* MOTOR */}
          <article className="card">
            <h3>Motor</h3>
            <p className="muted">Bombas, inyectores, juntas</p>
            <a
              className="link"
              href="https://wa.me/528111111111?text=Hola%2C%20quiero%20cotizar%20piezas%20de%20motor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver piezas →
            </a>
          </article>

          {/* ENFRIAMIENTO */}
          <article className="card">
            <h3>Enfriamiento</h3>
            <p className="muted">Bomba agua, radiador</p>
            <a
              className="link"
              href="https://wa.me/528111111111?text=Hola%2C%20quiero%20cotizar%20piezas%20de%20enfriamiento"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver piezas →
            </a>
          </article>

          {/* ELÉCTRICO */}
          <article className="card">
            <h3>Eléctrico</h3>
            <p className="muted">Alternador, marcha, arnés</p>
            <a
              className="link"
              href="https://wa.me/528111111111?text=Hola%2C%20quiero%20cotizar%20piezas%20el%C3%A9ctricas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver piezas →
            </a>
          </article>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div>
            <h3>¿Listo para cotizar?</h3>
            <p className="muted">
              Respuesta en minutos. Te ayudamos a pedir la pieza exacta.
            </p>
          </div>
          <a
            className="cta"
            href="https://wa.me/528111111111?text=Hola%2C%20listo%20para%20cotizar%20mi%20refacci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
