import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { progetti, progettoDaSlug, prossimoProgetto } from "@/data/progetti";
import { SchedaProgetto } from "@/components/scheda-progetto";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return progetti.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const progetto = progettoDaSlug(slug);
  if (!progetto) return {};

  return {
    title: `${progetto.nome} — ${progetto.sottotitolo}`,
    description: progetto.intro,
    openGraph: {
      title: `${progetto.nome} — BORU studio`,
      description: progetto.intro,
      images: [{ url: `/og/${progetto.slug}.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function PaginaProgetto({ params }: Props) {
  const { slug } = await params;
  const progetto = progettoDaSlug(slug);
  if (!progetto) notFound();

  return (
    <main>
      <SchedaProgetto progetto={progetto} prossimo={prossimoProgetto(slug)} />
    </main>
  );
}
