import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/FinalCta";
import { Eyebrow, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Mediola designs and installs smart home systems in the UAE, built around how people actually live.",
};

const beliefs = [
  {
    title: "Your home should adapt to you",
    text: "Not the other way around. We start with your routines and design the system to fit them — never a generic package.",
  },
  {
    title: "Simple beats impressive",
    text: "If your parents can’t use it on the first day, it isn’t finished. Every system we hand over is easy to live with.",
  },
  {
    title: "Done right, the first time",
    text: "Our own trained technicians install, test and explain everything — and we stay a phone call away afterwards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            We believe home should be the one place you <em className="text-amber-700">don’t have to think.</em>
          </>
        }
      >
        <p>
          Mediola brings smart living to homes across the UAE. For the past
          few years we’ve built it into new residential developments with
          partners like IGO — lighting, climate, intercom, music and sensors
          that work together quietly in the background.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl">
          <Image
            src="/mediola_projects/ongoing_projects/azura-reception.jpg"
            alt="Reception lobby at Azura, Dubai"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-sand-100 border-y border-sand-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow>What we believe</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl leading-[1.08] text-navy-900">
              Technology should make home feel more like home.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 120}>
                <p className="font-display text-5xl text-amber-500">0{i + 1}</p>
                <h3 className="mt-5 text-2xl text-navy-900">{b.title}</h3>
                <p className="mt-3 text-navy-400 leading-relaxed">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-display text-3xl md:text-4xl leading-snug text-navy-900">
            We started inside new buildings. Now we bring the same calm,
            connected living to <em className="text-amber-700">your</em> home —
            one family, one routine at a time.
          </p>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
