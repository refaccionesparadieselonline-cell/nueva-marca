import { redirect } from "next/navigation";
export const dynamic = "force-dynamic"; // evita que quede estática

export default function Home() {
  redirect("/landing");
}
