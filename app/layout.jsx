import "./globals.css";
export const metadata = { title: 'Nueva Marca', description: 'Base Next' };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
