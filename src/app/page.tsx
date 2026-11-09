import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Moments from "@/components/home/Moments";
import SceneDemo from "@/components/home/SceneDemo";
import DayInTheLife from "@/components/home/DayInTheLife";
import Feelings from "@/components/home/Feelings";
import Details from "@/components/home/Details";
import AlreadyHome from "@/components/home/AlreadyHome";
import HowItWorks from "@/components/home/HowItWorks";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Story order: desire (hero) → recognise the pain → feel the control →
// picture a whole day → name the emotional payoff → admire the details →
// trust (real buildings) → a small, safe first step → act.
export default function Home() {
  return (
    <>
      <Hero />
      <Moments />
      <SceneDemo />
      <DayInTheLife />
      <Feelings />
      <Details />
      <AlreadyHome />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
