import Image from "next/image";
import Link from "next/link";
import { Lock, Thermometer, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui";

// Future pacing: the visitor reads their own evening, already handled.
const statusChips = [
  { icon: Thermometer, label: "Inside 22° · Outside 41°" },
  { icon: Lightbulb, label: "Welcome lights · 70%" },
  { icon: Lock, label: "Front door locked" },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-4.5rem)] flex items-end overflow-hidden bg-navy-950">
      <Image
        src="/mediola_projects/completed_projects/paragon-living.jpg"
        alt="A calm, softly lit living room in The Paragon, Dubai"
        fill
        preload
        sizes="100vw"
        className="object-cover animate-slow-zoom -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/70 via-navy-950/20 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 pb-14 pt-32 md:pb-20">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-end">
          <div className="animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
              Smart homes · UAE
            </p>
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-white">
              Come home to a home that{" "}
              <em className="text-amber-200">already knows.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-white/80">
              The lights rise as you walk in. The air is already cool. The
              door locked itself behind you. This is an ordinary evening in a
              Mediola home.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button href="/consultation">Book a free home visit</Button>
              <Button href="#scenes" variant="ghost-light">
                Try it yourself
              </Button>
            </div>
          </div>

          <ul className="hidden lg:flex flex-col gap-3 items-end" aria-label="Your home right now">
            {statusChips.map(({ icon: Icon, label }, i) => (
              <li
                key={label}
                className="animate-rise flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-5 py-3.5 text-sm text-white"
                style={{ animationDelay: `${600 + i * 250}ms` }}
              >
                <span className="grid place-items-center w-8 h-8 rounded-full bg-amber-500/20">
                  <Icon className="w-4 h-4 text-amber-300" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-14 text-sm text-white/60">
          Already inside{" "}
          <Link href="/homes" className="text-white/90 underline-offset-4 hover:underline">
            The Paragon, Society House, Pelagos and Azura
          </Link>{" "}
          in Dubai.
        </p>
      </div>
    </section>
  );
}
