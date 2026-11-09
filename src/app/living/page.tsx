import type { Metadata } from "next";
import Image from "next/image";
import { Check, Droplets, DoorOpen, Activity } from "lucide-react";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/FinalCta";
import { Eyebrow, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/living" },
  title: "Smart living",
  description:
    "Lighting moods, a home that cools itself before you arrive, video intercom, music in every room, voice control and alerts that protect your home.",
};

type Experience = {
  feeling: string;
  title: string;
  story: string;
  can: string[];
  image?: { src: string; alt: string };
};

const experiences: Experience[] = [
  {
    feeling: "Lighting & moods",
    title: "Every room, exactly the right light.",
    story:
      "Bright and clear for busy mornings, warm and low for long dinners, almost dark for movie night. Set a mood once and recall it with one touch, your voice or a schedule.",
    can: [
      "One-touch scenes: welcome, dinner, movie, good night",
      "Dimming that feels natural, not on/off",
      "“All off” from the door or your bed",
      "Elegant glass panels in black or white",
    ],
    image: {
      src: "/mediola_projects/real-products-used/white-3gang-switch.jpeg",
      alt: "White glass three-button lighting panel on a wall",
    },
  },
  {
    feeling: "Climate",
    title: "Walk out of the heat into the perfect temperature.",
    story:
      "Your home starts cooling before you get there and rests when nobody’s in. Each room stays the way you like it — and you stop paying to cool empty spaces.",
    can: [
      "Pre-cool on your way home",
      "Room-by-room temperature",
      "Eco mode when you’re out or away",
      "Control from your phone, anywhere",
    ],
    image: {
      src: "/images/products/switch-thermostat-closeup-01.jpg",
      alt: "Smart thermostat beside lighting switches",
    },
  },
  {
    feeling: "Doorbell & intercom",
    title: "Know who’s at the door before you get up.",
    story:
      "See and speak to visitors on a screen by the door or on your phone. Let in a delivery from the sofa, or from the other side of the city.",
    can: [
      "Video intercom inside the home",
      "Answer the door from your phone",
      "Doorbell panels engraved with your building’s name",
      "Connected to building entry",
    ],
    image: {
      src: "/images/products/intercom-01.jpg",
      alt: "Video intercom screen mounted on a wall",
    },
  },
  {
    feeling: "Music",
    title: "Your soundtrack, following you room to room.",
    story:
      "Soft music in the living room as guests arrive, a podcast in the kitchen, quiet in the bedroom. Discreet ceiling speakers, one simple control.",
    can: [
      "Background music in living areas",
      "Different music in different rooms",
      "Control by panel, phone or voice",
      "Part of your scenes — music starts on “Welcome home”",
    ],
    image: {
      src: "/mediola_projects/ongoing_projects/pelagos-living.jpg",
      alt: "Bright living room at Pelagos",
    },
  },
  {
    feeling: "Voice control",
    title: "Just say it.",
    story:
      "“Alexa, good night.” Lights off, door locked, the AC set for sleep. Hands full, kids asleep on your shoulder, or just comfortable on the sofa — your voice is enough.",
    can: [
      "Works with Amazon Alexa",
      "Control lights, climate, music and scenes",
      "Natural, everyday commands",
      "Easy for parents and grandparents",
    ],
    image: {
      src: "/images/products/alexa-01.jpg",
      alt: "Amazon Echo Show smart display",
    },
  },
];

const sensors = [
  { icon: Droplets, title: "Water leak", text: "Hear about a leak under the sink before it reaches the floor below." },
  { icon: DoorOpen, title: "Doors & windows", text: "Know if something was left open — wherever you are." },
  { icon: Activity, title: "Motion", text: "Lights that turn on as you walk in, and alerts when nobody should be home." },
];

export default function LivingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Smart living"
        title={
          <>
            Not gadgets. <em className="text-amber-700">Better days at home.</em>
          </>
        }
      >
        <p>
          Everything below works together as one calm system, designed around
          your routines and installed by our own team.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-24 space-y-24 md:space-y-32">
        {experiences.map((exp, i) => (
          <Reveal
            as="section"
            key={exp.feeling}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {exp.image && (
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand-200 ${
                  i % 2 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={exp.image.src}
                  alt={exp.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <Eyebrow>{exp.feeling}</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl leading-[1.1] text-navy-900">{exp.title}</h2>
              <p className="mt-5 text-lg text-navy-400 leading-relaxed">{exp.story}</p>
              <ul className="mt-7 space-y-3">
                {exp.can.map((c) => (
                  <li key={c} className="flex gap-3 text-navy-700">
                    <Check className="w-5 h-5 mt-0.5 shrink-0 text-amber-600" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal as="section" className="rounded-3xl bg-navy-900 text-white p-8 md:p-14">
          <Eyebrow tone="light">Sensors & alerts</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl leading-[1.1] max-w-2xl">
            Your home keeps watch, so you don’t have to.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {sensors.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="w-7 h-7 text-amber-400" strokeWidth={1.75} />
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-2 text-navy-100 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <FinalCta
        title={
          <>
            Which of these would change your day <em className="text-amber-200">the most?</em>
          </>
        }
        text="Tell us on a free home visit. We’ll start there and build the rest around how you live."
      />
    </>
  );
}
