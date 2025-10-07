"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ productos }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("Todos");

  const tags = useMemo(() => {
    const all = new Set();
    productos.forEach(p => p.tags?.forEach(t => all.add(t)));
    return ["Todos", ...Array.from(all).sort()];
  }, [productos]);

  const filtered = useMemo(() => {
    return productos.filter(p => {
      const matchesQ = q.length < 2 || p.title.toLowerCase().includes(q.toLowerCase());
      const matchesTag = tag === "Todos" || p.tags?.includes(tag);
      return matchesQ && matchesTag;
    });
  }, [q, tag, productos]);

  return (
    <div className="space-y-6">
      {/* Controles */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          placeholder="Buscar refacción, código, etc."
          className="w-full sm:max-w-md rounded-xl border border-white/10 bg-white/5 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">Categoría:</span>
          <select
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            {tags.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(p => <ProductCard key={p.id} p={p} />)}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-zinc-400 py-10">No hay resultados con esos filtros.</p>
      )}
    </div>
  );
}
