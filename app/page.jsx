const PRODUCTOS = [
  { id: 1, titulo: "Filtro Aceite Cummins ISX", sku: "FA-ISX-01", precio: 890 },
  { id: 2, titulo: "Bomba Agua Detroit DD15", sku: "BA-DD15-02", precio: 4290 },
  { id: 3, titulo: "Compresor Aire Meritor", sku: "CA-MER-03", precio: 8990 },
  { id: 4, titulo: "Turbocargador CAT C15", sku: "TB-C15-04", precio: 15990 },
  { id: 5, titulo: "Inyector Bosch Common Rail", sku: "INJ-BOS-05", precio: 3790 },
  { id: 6, titulo: "Sensor Árbol Kenworth T680", sku: "SN-680-06", precio: 1290 }
];

export default function Page() {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <h1>MRDiesel</h1>
          <a
            className="cta"
            href="https://wa.me/521528111111?text=Hola%20MRDiesel%2C%20necesito%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noreferrer"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </header>

      <main className="wrap">
        <h2>Refacciones destacadas</h2>
        <div className="grid">
          {PRODUCTOS.map((p) => (
            <article key={p.id} className="card">
              <div className="img">IMG</div>
              <h3>{p.titulo}</h3>
              <p className="sku">{p.sku}</p>
              <div className="row">
                <strong>${p.precio}</strong>
                <a
                  className="btn"
                  href={`https://wa.me/521528111111?text=Quiero%20cotizar%20${encodeURIComponent(
                    p.titulo
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Cotizar
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="ctaBox">
          <h3>¿Buscas otra pieza?</h3>
          <p>Escríbenos por WhatsApp y te la conseguimos.</p>
          <a
            className="cta"
            href="https://wa.me/521528111111?text=Hola%20MRDiesel%2C%20necesito%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noreferrer"
          >
            Cotizar ahora
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">© {new Date().getFullYear()} MRDiesel</div>
      </footer>

      <style jsx>{`
        :root { --wrap: 1120px; }
        body { margin: 0; font-family: system-ui, Arial, sans-serif; color: #111; background: #fafafa; }
        .wrap { max-width: var(--wrap); margin: 0 auto; padding: 16px; }
        .header { background: #fff; border-bottom: 1px solid #eee; }
        .header .wrap { display: flex; align-items: center; justify-content: space-between; }
        h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.3px; }
        h2 { margin: 24px 0 12px; }
        .cta, .btn { background: #111; color: #fff; text-decoration: none; padding: 10px 14px; border-radius: 8px; font-size: 14px; }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
          margin: 12px 0 24px;
        }
        .card { background: #fff; border: 1px solid #eee; border-radius: 12px; padding: 12px; }
        .img {
          height: 160px; border-radius: 8px; background: #f0f0f0;
          display: flex; align-items: center; justify-content: center; color: #bbb; margin-bottom: 8px;
        }
        h3 { font-size: 15px; margin: 0 0 4px; }
        .sku { margin: 0 0 8px; color: #666; font-size: 12px; }
        .row { display: flex; align-items: center; justify-content: space-between; }
        .ctaBox { background: #fff; border: 1px solid #eee; border-radius: 12px; padding: 16px; }
        .footer { margin-top: 32px; border-top: 1px solid #eee; background: #fff; }
      `}</style>
    </>
  );
}
