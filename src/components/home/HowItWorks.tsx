import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

// Risk reversal: make the first step feel small, free and safe.
const steps = [
  {
    title: "A free home visit",
    text: "We come to you, see your space and listen to how you live. No cost, no obligation.",
  },
  {
    title: "A plan made for your home",
    text: "A clear proposal built around your routines — never a generic package.",
  },
  {
    title: "Careful, tidy installation",
    text: "Our own trained technicians install and test everything, then walk you through it.",
  },
  {
    title: "Here for you after",
    text: "A local team that answers when you call, for adjustments, new scenes or support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-sand-100 border-y border-sand-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl leading-[1.08] text-navy-900">
            The first step takes one conversation.
          </h2>
        </Reveal>

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120}>
              <div className="h-full rounded-3xl bg-sand-50 border border-sand-200 p-7">
                <p className="font-display text-5xl text-amber-500">{i + 1}</p>
                <h3 className="mt-6 text-2xl text-navy-900">{step.title}</h3>
                <p className="mt-3 text-navy-400 leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
