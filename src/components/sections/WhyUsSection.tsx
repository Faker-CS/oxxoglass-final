import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, LineBreak } from "@/components/ui/Heading";
import { whyUsHighlights } from "@/data/landing";
import { appointmentHref, sectionIds } from "@/data/site";

export function WhyUsSection() {
  return (
    <section id={sectionIds.whyUs} aria-labelledby="why-title" className="mt-15.5">
      <div className="relative mx-auto max-w-page lg:grid lg:grid-cols-2 page:block page:h-215.25">
        <Reveal
          offset={0}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative z-10 h-80 overflow-hidden sm:h-120 lg:h-auto page:absolute page:top-0 page:left-0 page:h-152.75 page:w-207"
        >
          <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true" 
        className="h-full w-full object-cover object-[60%_center]">
        <source src="/videos/why-us.mp4" type="video/mp4" />
      </video>
        </Reveal>

        <div className="flex flex-col page:absolute page:top-16 page:right-0 page:w-293.75">
          <div className="relative isolate flex justify-end overflow-hidden bg-night px-4 py-10 sm:px-8 lg:px-12 page:min-h-158.5 page:pt-10 page:pr-20 page:pb-10 page:pl-2.5">
            <div
              aria-hidden="true"
              className="absolute -top-139.25 left-75 -z-10 size-278.5 rounded-full bg-radial from-brand-glow/40 to-brand-glow/0 blur-glow"
            />
            <Reveal className="flex w-full flex-col gap-4 page:w-118.75">
              <Eyebrow>Pourquoi Nous Choisir</Eyebrow>
              <Heading id="why-title" tone="paper">
                Plus Que Du <LineBreak />
                Vitrage. <LineBreak />
                C’est Votre <LineBreak />
                Sécurité.
              </Heading>
              <div className="flex flex-col gap-4 px-4 py-2 text-base font-medium text-paper">
                <p>
                  Votre Pare-Brise Fait Partie Du Système De Sécurité De Votre Véhicule — Ce N’est Pas Simplement Une
                  Autre Pièce De Verre.
                </p>
                <p>
                  C’est Pourquoi Chaque Installation Est Réalisée Avec Précision, Du Choix Et De La Pose Du Vitrage Aux
                  Contrôles Des Capteurs Et Au Calibrage ADAS.
                </p>
              </div>
              <Button href={appointmentHref} className="mt-4 self-start">
                Prendre Rendez-Vous
              </Button>
            </Reveal>
          </div>

          <ul className="grid gap-4 bg-brand px-4 py-8 sm:grid-cols-3 sm:px-8 lg:px-12 page:min-h-40.75 page:items-center page:gap-6.5 page:py-2.5 page:pr-20 page:pl-2.5">
            {whyUsHighlights.map(({ label, icon: Icon }, index) => (
              <li key={label}>
                <Reveal delay={index * 0.12} offset={16} className="flex items-center">
                  <span className="flex size-25 shrink-0 items-center justify-center text-paper">
                    <Icon className="h-auto max-h-17 w-auto max-w-18.75" />
                  </span>
                  <span className="px-4 py-2 text-title font-extrabold text-paper">{label}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
