import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/FinalCta";
import { PageHeader } from "@/components/ui";
import { homes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mediola homes",
  description:
    "The Paragon, Society House, Pelagos and Azura — residences in Dubai with Mediola smart living built in, in partnership with IGO.",
};

export default function HomesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mediola homes"
        title={
          <>
            Homes where smart living is <em className="text-amber-700">built in.</em>
          </>
        }
      >
        <p>
          In partnership with developer IGO, Mediola is part of these Dubai
          residences from the walls out — so residents move into homes that
          already take care of them.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-24 space-y-20">
        {homes.map((home) => {
          const [first, ...rest] = home.shots;
          return (
            <Reveal as="section" key={home.slug}>
              <div id={home.slug} className="scroll-mt-28 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h2 className="text-3xl md:text-4xl text-navy-900">{home.name}</h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    home.status === "Completed"
                      ? "bg-navy-50 text-navy-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {home.status === "Completed" ? "Residents living in" : "Coming soon"}
                </span>
                <span className="text-sm text-navy-400">
                  {home.area} · by IGO
                </span>
              </div>

              <div className="mt-6 grid md:grid-cols-[1.4fr_1fr] gap-4">
                <figure className="relative aspect-[4/3] md:aspect-auto md:min-h-[460px] overflow-hidden rounded-3xl bg-sand-200">
                  <Image
                    src={first.src}
                    alt={`${home.name} — ${first.label}`}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                  {rest.slice(0, 3).map((shot) => (
                    <figure
                      key={shot.src}
                      className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-3xl bg-sand-200"
                    >
                      <Image
                        src={shot.src}
                        alt={`${home.name} — ${shot.label}`}
                        fill
                        sizes="(min-width: 768px) 40vw, 50vw"
                        className="object-cover"
                      />
                      <figcaption className="absolute left-3 bottom-3 rounded-full bg-navy-950/60 backdrop-blur px-3 py-1 text-xs text-white">
                        {shot.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}

        <Reveal className="rounded-3xl bg-amber-50 border border-amber-100 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-navy-900">Already a resident?</p>
            <p className="mt-2 text-navy-400 max-w-xl">
              Your system can do more than you might think — new scenes, voice
              control, music and alerts. Let’s set it up together.
            </p>
          </div>
          <Link
            href="/consultation?for=resident"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-700"
          >
            Unlock more from my home <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>

      <FinalCta
        title={
          <>
            Don’t live in one of these? <em className="text-amber-200">Your home can feel the same.</em>
          </>
        }
        text="Apartment, villa or penthouse — we bring the same calm, connected living to private homes across the UAE."
      />
    </>
  );
}
