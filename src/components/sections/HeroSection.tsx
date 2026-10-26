import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accent, Heading, LineBreak } from "@/components/ui/Heading";
import { appointmentHref, contact, sectionIds } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id={sectionIds.home}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-200 items-end overflow-hidden bg-night pt-30 pb-16.75"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true" 
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_center]">
        <source src="/videos/hero-windshield-rain.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/50" />

      <Container className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-4">
        <div className="flex max-w-227.5 flex-col gap-9 lg:w-227.5 lg:shrink-0">
          <div className="flex flex-col gap-4">
            <Reveal delay={0.1} offset={16}>
              <Eyebrow tone="light">Vitrage Automobile Mobile</Eyebrow>
            </Reveal>
            <Reveal delay={0.2}>
              <Heading as="h1" id="hero-title" size="hero" tone="paper">
                Votre <LineBreak />
                <span className="whitespace-nowrap">Pare-Brise.</span>
                <LineBreak /> <Accent>Réparé Comme Il Faut.</Accent> Où Que Vous <LineBreak />
                Soyez.
              </Heading>
            </Reveal>
          </div>
          <Reveal delay={0.35} className="flex flex-wrap gap-4 sm:gap-8">
            <Button href={appointmentHref}>Prendre Rendez-Vous</Button>
            <Button href={contact.phoneHref} variant="glass" icon="phone" aria-label={`Appeler le ${contact.phoneDisplay}`}>
              {contact.phoneDisplay}
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.5} offset={16} className="lg:w-88.5 lg:shrink-0 lg:pb-2">
          <Link
            href={`#${sectionIds.locations}`}
            className="text-base font-medium text-paper uppercase underline-offset-4 hover:underline"
          >
            Un réseau agréé sur toute la France.
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
