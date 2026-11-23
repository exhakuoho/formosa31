import { notFound } from "next/navigation";
import CatalogPage from "@/components/CatalogPage";
import { cards, PAGE_SIZE } from "@/lib/list-fields";
export function generateStaticParams() {
  return Array.from({ length: Math.max(0, Math.ceil(cards.length / PAGE_SIZE) - 1) }, (_, i) => ({ number: String(i + 2) }));
}
export async function generateMetadata({ params }) {
  return { title: "精選錶款 · 第 " + (await params).number + " 頁" };
}
export default async function WatchPage({ params }) {
  const page = Number((await params).number);
  if (!Number.isInteger(page) || page < 2 || page > Math.ceil(cards.length / PAGE_SIZE)) notFound();
  return <CatalogPage page={page} />;
}
