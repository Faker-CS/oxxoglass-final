import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Accent, LineBreak } from "@/components/ui/Heading";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TextLink } from "@/components/ui/TextLink";
import { advantages, type Advantage } from "@/data/landing";
import { appointmentHref, sectionIds } from "@/data/site";

function AdvantageCard({ advantage }: { advantage: Advantage }) {
  const Icon = advantage.icon;
  return (
    <article className="group/card flex h-full flex-col gap-4 rounded-card bg-surface p-2 lg:gap-11.5 transition-[background-color,box-shadow,translate] duration-100 ease-linear  hover:bg-brand hover:shadow-card-hover">
      <div className="flex size-19.5 items-center justify-center text-brand transition-colors duration-100 ease-linear group-hover/card:text-white">
        <Icon className="h-auto max-h-15.5 w-auto max-w-14.75 transition-transform duration-300 group-hover/card:scale-110 " />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="px-4 py-2 text-title font-extrabold text-ink uppercase group-hover/card:text-white">{advantage.title}</h3>
          <p className="px-4 py-2 text-base font-medium text-muted group-hover/card:text-white">{advantage.description}</p>
        </div>
        <TextLink href={appointmentHref} srContext={advantage.title} className="px-4 py-2 group-hover/card:text-white">
          Découvrir Le Service
        </TextLink>
      </div>
    </article>
  );
}

export function AdvantagesSection() {
  return (
    <section id={sectionIds.howItWorks} aria-labelledby="advantages-title" className="mt-25">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionIntro
            eyebrow="AVANTAGES"
            titleId="advantages-title"
            title={
              <>
                Un Service Vitrage Conçu <LineBreak />
                Autour De <Accent>Votre Temps.</Accent>
              </>
            }
            description="Du Premier Devis Au Contrôle De Sécurité Final, Nous Rendons Le Remplacement De Vitrage Automobile Simple, Rapide Et Fiable."
          />
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <li key={advantage.title}>
              <Reveal delay={(index % 3) * 0.1} className="h-full">
                <AdvantageCard advantage={advantage} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
