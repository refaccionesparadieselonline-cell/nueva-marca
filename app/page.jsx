// app/page.jsx
import { redirect } from "next/navigation";

// evita servir en estático + cache
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  redirect("/tienda");
}
