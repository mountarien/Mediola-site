import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { homes } from "@/lib/site";

export default function AlreadyHome() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>Already living it</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.08] text-navy-900">
            Built into some of Dubai’s newest addresses.
          </h2>
        </div>
        <Link
          href="/homes"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-amber-700"
        >
          See the homes <ArrowRight className="w-4 h-4" />
        </Link>
      </Reveal>

      <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {homes.map((home, i) => (
          <Reveal as="li" key={home.slug} delay={i * 100}>
            <Link href={`/homes#${home.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={home.cover}
                  alt={`${home.name}, ${home.area}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    {home.status === "Completed" ? "Lived in" : "Coming soon"} · {home.area}
                  </p>
                  <p className="mt-1 font-display text-2xl">{home.name}</p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-8 rounded-3xl bg-amber-50 border border-amber-100 p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl text-navy-900">
            Live in one of these buildings?
          </p>
          <p className="mt-2 text-navy-400 max-w-xl">
            Your home already has Mediola inside. Let us show you what more it
            can do — new scenes, voice control, music or sensors.
          </p>
        </div>
        <Link
          href="/consultation?for=resident"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-700"
        >
          Unlock more from my home <ArrowRight className="w-4 h-4" />
        </Link>
      </Reveal>
    </section>
  );
}
