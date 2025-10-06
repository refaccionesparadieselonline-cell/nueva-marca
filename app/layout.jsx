import "./globals.css";

export const metadata = { title: "Nueva Marca", description: "Base Next" };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

