import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accent, Heading, LineBreak } from "@/components/ui/Heading";
import { steps } from "@/data/landing";
import { appointmentHref, contact } from "@/data/site";
import { StepsTimeline } from "./StepsTimeline";

export function StepsSection() {
  return (
    <section aria-labelledby="steps-title" className="mt-25">
      <Container className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <Reveal className="flex flex-col lg:w-122.5 lg:shrink-0">
          <Eyebrow className="mx-4 my-2">Nos Services</Eyebrow>
          <div className="flex flex-col gap-8.5">
            <Heading id="steps-title" className="px-4 py-2 lg:w-159.75">
              Vous Êtes À Un <LineBreak />
              Clic De <LineBreak />
              <Accent>
                Ne Rien <LineBreak />
                Payer
              </Accent>
            </Heading>
            <p className="px-4 py-2 text-base font-medium text-muted">
              Votre Pare-Brise Peut Vous Coûter Moins Cher Que Vous Ne Le Pensez. Vérifiez Votre Couverture, Bénéficiez
              De Vos Avantages Disponibles Et Réservez Votre Remplacement — Le Tout En Quelques Clics.
            </p>
            <div className="flex flex-row  gap-4 px-4 sm:gap-8 ">
              <Button href={appointmentHref} variant="brand" size="sm">
                Prendre Rendez-Vous
              </Button>
              <Button href={contact.phoneHref} variant="brand-soft">
                Demander Un Rappel
              </Button>
            </div>
          </div>
        </Reveal>

        <StepsTimeline steps={steps} />
      </Container>
    </section>
  );
}
