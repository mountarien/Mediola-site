import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export default function FinalCta({
  title = (
    <>
      Imagine tonight. <em className="text-amber-200">One touch,</em> and the
      whole house goes quiet.
    </>
  ),
  text = "Book a free, no-obligation home visit. We’ll show you what your home could do — and you decide from there.",
}: {
  title?: React.ReactNode;
  text?: string;
}) {
  const wa = whatsappLink();

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <Image
        src="/mediola_projects/completed_projects/paragon-bedroom.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-10 opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />

      <Reveal className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-36">
        <h2 className="max-w-3xl text-4xl md:text-6xl leading-[1.05]">{title}</h2>
        <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">{text}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button href="/consultation">Book a free home visit</Button>
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
