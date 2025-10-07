// app/tienda/page.jsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TiendaPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-2">Tienda MRDiesel</h1>
      <p className="text-neutral-600 mb-6">Catálogo de refacciones listo.</p>

      {/* Placeholder para probar que la ruta funciona */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <article className="card">
          <h3 className="font-semibold">Ejemplo de Producto</h3>
          <p className="text-sm text-neutral-600">$1,234.00</p>
          <a
            className="btn-primary mt-2 inline-block"
            href={`https://wa.me/521234567890?text=${encodeURIComponent('Hola, quiero cotizar el producto ejemplo')}`}
            target="_blank"
          >
            Cotizar por WhatsApp
          </a>
        </article>
      </div>
    </main>
  );
}
