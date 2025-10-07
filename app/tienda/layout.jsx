// app/tienda/layout.jsx
export const metadata = {
  title: "Tienda MRDiesel",
  description: "Refacciones para camión — Tienda nueva",
};

export default function TiendaLayout({ children }) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "-apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif",
          color: "#0b0f1a",
          background: "#f7f8fb",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backdropFilter: "saturate(1.2) blur(6px)",
            background: "rgba(255,255,255,0.75)",
            borderBottom: "1px solid #eef1f6",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 20px" }}>
            <strong style={{ fontWeight: 800, letterSpacing: 0.2 }}>MRDiesel</strong>
            <span style={{ opacity: 0.6, marginLeft: 10 }}>— Refacciones para camión</span>
          </div>
        </header>

        <main style={{ maxWidth: 1100, margin: "32px auto", padding: "0 20px" }}>
          {children}
        </main>

        <footer
          style={{
            borderTop: "1px solid #eef1f6",
            marginTop: 48,
            padding: "24px 20px",
            textAlign: "center",
            opacity: 0.7,
          }}
        >
          © {new Date().getFullYear()} MRDiesel
        </footer>
      </body>
    </html>
  );
}
