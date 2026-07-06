import { notFound } from "next/navigation";
import Link from "next/link";
import { services, categories } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.nameKr} — Maison 831`,
    description: service.descriptionKr,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) notFound();

  const cat = categories.find((c) => c.id === service.category);
  const related = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="lg:ml-[220px]">
        <ServiceDetailClient service={service} cat={cat} related={related} />
      </main>
      <footer className="lg:ml-[220px]">
        <Footer />
      </footer>
    </>
  );
}
