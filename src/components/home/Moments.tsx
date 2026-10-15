import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

// The small daily worries a smart home quietly removes.
const moments = [
  { thought: "Did I lock the door?", when: "Asked halfway to the airport." },
  { thought: "Why is it 38° in here?", when: "Every August evening, opening the front door." },
  { thought: "Who left the lights on?", when: "Three empty rooms, all lit up." },
  { thought: "Ten switches, then sleep.", when: "The nightly walk around the house." },
];

export default function Moments() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
      <Reveal className="max-w-3xl">
        <Eyebrow>Sound familiar?</Eyebrow>
        <h2 className="mt-5 text-4xl md:text-5xl leading-[1.08] text-navy-900">
          How often does your home ask for your attention?
        </h2>
      </Reveal>

      <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {moments.map((m, i) => (
          <Reveal as="li" key={m.thought} delay={i * 120}>
            <div className="h-full rounded-3xl bg-sand-100 border border-sand-200 p-7">
              <p className="font-display text-2xl italic leading-snug text-navy-900">
                “{m.thought}”
              </p>
              <p className="mt-4 text-sm text-navy-400">{m.when}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-14 max-w-3xl">
        <p className="font-display text-2xl md:text-3xl leading-snug text-navy-900">
          Mediola takes these thoughts off your mind, so your home can go back to
          being the place you <em className="text-amber-700">rest</em>.
        </p>
      </Reveal>
    </section>
  );
}
