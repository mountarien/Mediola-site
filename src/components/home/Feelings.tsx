import { ShieldCheck, Wind, Clock, Leaf, Moon, HeartHandshake } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

const feelings = [
  {
    icon: ShieldCheck,
    title: "Peace of mind",
    text: "Know your home is locked, safe and dry — from the office, the airport or the other side of the world.",
  },
  {
    icon: Wind,
    title: "Comfort on arrival",
    text: "Step out of the summer heat into a home that cooled itself just in time.",
  },
  {
    icon: Clock,
    title: "Time back",
    text: "No more rounds of switches. The routines you repeat every day now run on their own.",
  },
  {
    icon: Leaf,
    title: "Lighter bills",
    text: "Lights and AC work when someone needs them, and rest when no one does.",
  },
  {
    icon: Moon,
    title: "Deeper rest",
    text: "Evenings that wind down slowly, and nights without a last check around the house.",
  },
  {
    icon: HeartHandshake,
    title: "Care for your family",
    text: "Know the kids got home, keep an eye on elderly parents, and hear about a leak before it spreads.",
  },
];

export default function Feelings() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
      <Reveal className="max-w-3xl">
        <Eyebrow>What changes</Eyebrow>
        <h2 className="mt-5 text-4xl md:text-5xl leading-[1.08] text-navy-900">
          It isn’t about technology. It’s about how you{" "}
          <em className="text-amber-700">feel</em> at home.
        </h2>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {feelings.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={(i % 3) * 120}>
            <div className="grid place-items-center w-12 h-12 rounded-full bg-amber-50 border border-amber-100">
              <Icon className="w-5 h-5 text-amber-700" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-2xl text-navy-900">{title}</h3>
            <p className="mt-2.5 text-navy-400 leading-relaxed">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
