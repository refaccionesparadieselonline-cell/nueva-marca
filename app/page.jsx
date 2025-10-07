import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // evita que quede estático

export default function Home() {
  redirect("/tienda");
}
