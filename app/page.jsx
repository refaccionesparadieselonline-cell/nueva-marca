import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // ← en minúsculas
// o, si prefieres, puedes usar: export const revalidate = 0;

export default function Home() {
  redirect("/landing");
}
