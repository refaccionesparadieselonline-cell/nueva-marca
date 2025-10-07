"use client";

import Image from "next/image";

function formatPrice(price, currency) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency }).format(+price);
}

export default function ProductCard({ p }) {
  const {
    id, title, image, price, currencyCode, qty, available, handle
  } = p;

  const whats = `https://wa.me/528111234567?text=${encodeURIComponent(
    `Hola, quiero cotizar este producto:\n\n${title}\nSKU/ID: ${id}\nPrecio: ${formatPrice(price, currencyCode)}\nLink: https://mrdiesel.mx/products/${handle}`
  )}`;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
        <Image
          src={image || "/placeholder.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${
            available ? "bg-emerald-500/90 text-white" : "bg-zinc-800/90 text-zinc-200"
          }`}>
            {available ? (qty > 0 ? `Stock: ${qty}` : "Disponible") : "Agotado"}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-base font-semibold leading-tight line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            {formatPrice(price, currencyCode)}
          </span>

          <a
            href={whats}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 text-sm font-semibold transition-colors"
          >
            Cotizar
          </a>
        </div>
      </div>
    </article>
  );
}
