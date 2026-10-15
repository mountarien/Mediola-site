import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

const real = "/mediola_projects/real-products-used";

export default function Details() {
  return (
    <section className="bg-navy-900 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow tone="light">Designed to be touched</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.08]">
            Beautiful enough to notice.{" "}
            <em className="text-amber-200">Simple enough to forget.</em>
          </h2>
          <p className="mt-6 text-lg text-navy-100 leading-relaxed max-w-lg">
            Glass-finish panels in black or white sit flush against your walls
            and replace rows of plastic switches. Even the doorbell can carry
            your building’s name. Guests notice the details; you just enjoy
            how easy it all is.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          <Reveal className="relative aspect-[3/4] overflow-hidden rounded-3xl row-span-2">
            <Image
              src={`${real}/azura-push-button.jpeg`}
              alt="Black glass doorbell panel engraved with the Azura name"
              fill
              sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={`${real}/black-3gang-switch.jpeg`}
              alt="Black glass three-button light switch"
              fill
              sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={240} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={`${real}/white-2gang-switch.jpeg`}
              alt="White glass two-button light switch"
              fill
              sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
