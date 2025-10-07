// app/page.jsx
import { redirect } from "next/navigation";

// Fuerza que no se sirva estático y evite cache
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  redirect("/tienda");
}
