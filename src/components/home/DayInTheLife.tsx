import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

// Narrative transportation: walk the visitor through one ordinary day.
const day = [
  {
    time: "06:45",
    title: "A gentle start",
    text: "Curtains drift open and the lights warm up slowly. You wake to daylight, not an alarm.",
    image: "/mediola_projects/ongoing_projects/pelagos-bedroom.jpg",
  },
  {
    time: "08:10",
    title: "Out the door, nothing to check",
    text: "One touch by the door: every light off, the AC eases into eco, the door locks. You just leave.",
  },
  {
    time: "14:00",
    title: "44° outside, calm inside",
    text: "A glance at your phone: everything’s locked, dry and quiet. The AC rests while no one’s home.",
  },
  {
    time: "18:20",
    title: "Your home gets ready for you",
    text: "On the drive back, the cooling starts. By the time you arrive, it’s exactly how you like it.",
  },
  {
    time: "18:45",
    title: "Welcome home",
    text: "The hallway glows, your music picks up where you left it, and the door locks behind you.",
    image: "/mediola_projects/ongoing_projects/azura-living.jpg",
  },
  {
    time: "21:30",
    title: "Movie night, by voice",
    text: "“Alexa, movie time.” Lights dim, curtains close, and nobody has to get off the sofa.",
  },
  {
    time: "23:00",
    title: "One touch, and the house goes quiet",
    text: "Every light off, the door secured, a soft night path if you wake. You sleep without a last walk around.",
    image: "/mediola_projects/completed_projects/paragon-bedroom.jpg",
  },
];

export default function DayInTheLife() {
  return (
    <section className="bg-sand-100 border-y border-sand-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid lg:grid-cols-[1fr_1.4fr] gap-14">
        <div className="lg:sticky lg:top-32 self-start">
          <Reveal>
            <Eyebrow>A day in a Mediola home</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl leading-[1.08] text-navy-900">
              The best technology is the kind you{" "}
              <em className="text-amber-700">stop noticing.</em>
            </h2>
            <p className="mt-6 text-lg text-navy-400 leading-relaxed max-w-md">
              No apps to fight with, no learning curve. Your home simply follows
              the rhythm of your day.
            </p>
          </Reveal>
        </div>

        <ol className="relative border-l border-sand-300 ml-2">
          {day.map((step) => (
            <Reveal as="li" key={step.time} className="relative pl-10 pb-14 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-sand-100"
              />
              <p className="font-display text-lg text-amber-700">{step.time}</p>
              <h3 className="mt-1 text-2xl md:text-3xl text-navy-900">{step.title}</h3>
              <p className="mt-3 text-navy-400 leading-relaxed max-w-lg">{step.text}</p>
              {step.image && (
                <div className="mt-6 relative aspect-[16/9] max-w-xl overflow-hidden rounded-2xl">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
