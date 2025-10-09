import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Refacciones para Camión",
  description:
    "Catálogo rápido por WhatsApp. Entrega 24–48h, garantía 30 días, factura y envío nacional.",
  icons: { icon: "/logo.png", shortcut: "/logo.png" },
  openGraph: {
    title: "Refacciones para Camión",
    description: "Cotiza por WhatsApp en minutos. Entrega 24–48h y garantía 30 días.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <a href="/" className="brand" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Image src="/logo.png" alt="Refacciones para Camión" width={40} height={40} priority />
            <div>
              <strong style={{ fontSize: 16, color: "#eaf1ff" }}>Refacciones para Camión</strong>
              <div style={{ fontSize: 12, color: "#9fb0ca" }}>Catálogo rápido por WhatsApp</div>
            </div>
          </a>

          <nav className="topbar-right" style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
            <a className="chip">🚚 Entrega 24–48h</a>
            <a className="chip">🧾 Factura</a>
            <a className="chip">🛡️ Garantía 30 días</a>
            <a className="chip">👨‍🔧 Asesor experto</a>
            <a
              href="https://wa.me/528111111111?text=Hola%2C%20quisiera%20cotizar%20refacciones%20para%20camion."
              target="_blank"
              className="top-cta"
            >
              WhatsApp
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

