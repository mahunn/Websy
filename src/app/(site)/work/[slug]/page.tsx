import { notFound } from "next/navigation";
import { WorkDetailContent } from "@/components/pages/work-detail-content";
import { portfolio } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolio.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  if (!portfolio.find((p) => p.slug === slug)) notFound();
  return <WorkDetailContent slug={slug} />;
}
