// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "MRDiesel — Refacciones para camión",
  description:
    "Refacciones para camión con envío nacional. Asesor experto, garantía 30 días y factura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Top trust bar */}
        <div className="topbar">
          <span>🚚 Entrega 24–48h</span>
          <span>📄 Factura</span>
          <span>🛡️ Garantía 30 días</span>
          <span>👨‍🔧 Asesor experto</span>
        </div>

        {/* Header */}
        <header className="header">
          <div className="container header-inner">
            <a href="/" className="brand">
              <img
                src="/mrdiesel-logo.png"
                alt="MRDiesel — Refacciones para camión"
                width="56"
                height="56"
                className="brand-logo"
              />
              <div className="brand-text">
                <strong>MRDiesel</strong>
                <small>Refacciones para camión</small>
              </div>
            </a>

            <a
              className="cta cta--ghost"
              href="https://wa.me/528111111111?text=Hola%2C%20quiero%20cotizar%20refacciones%20para%20mi%20camión"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-brand">
              <img
                src="/mrdiesel-logo.png"
                alt="MRDiesel logo"
                width="40"
                height="40"
              />
              <span>MRDiesel</span>
            </div>
            <p className="muted">
              © {new Date().getFullYear()} MRDiesel. Todos los derechos
              reservados.
            </p>
            <p className="muted">Envío nacional • Piezas probadas • Soporte por WhatsApp</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
