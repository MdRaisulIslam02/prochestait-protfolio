import { notFound } from "next/navigation";
import { servicesApi } from "@/lib/api";
import { STATIC_SERVICES } from "@/lib/services-fallback";
import ServiceDetailClient from "./ServiceDetailClient";

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const res = await servicesApi.list();
    const slugs = res.data
      .map((s) => s.slug)
      .filter((s): s is string => typeof s === 'string' && s.length > 0);
    if (slugs.length > 0) return slugs.map((slug) => ({ slug }));
  } catch { /* fall through to static */ }
  return STATIC_SERVICES
    .filter((s): s is typeof s & { slug: string } => typeof s.slug === 'string' && s.slug.length > 0)
    .map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const res = await servicesApi.get(slug);
    return <ServiceDetailClient service={res.data} />;
  } catch {
    const fallback = STATIC_SERVICES.find((s) => s.slug === slug);
    if (!fallback) notFound();
    return <ServiceDetailClient service={fallback} />;
  }
}
