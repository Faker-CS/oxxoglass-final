import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, LineBreak } from "@/components/ui/Heading";
import { Watermark } from "@/components/ui/Watermark";
import { OfferCard } from "./OfferCard";
import { appointmentHref, contact, sectionIds } from "@/data/site";

export function OfferSection() {
  return (
    <section
      id={sectionIds.offers}
      aria-labelledby="offer-title"
      className="relative isolate overflow-hidden bg-night py-20 lg:min-h-200 lg:py-0"
    >
      <Watermark className="absolute -top-3 left-1/2 -z-10 -translate-x-1/2 text-watermark-sm from-paper/10 to-paper/0 sm:text-watermark-md lg:text-watermark-lg">
        Offer
      </Watermark>
      <div
        aria-hidden="true"
        className="absolute -top-160 left-1/2 -z-10 size-335 -translate-x-1/2 rounded-full bg-radial from-brand-glow/40 to-brand-glow/0 blur-glow"
      />

      <Container className="flex flex-col items-stretch gap-16 lg:min-h-200 lg:flex-row lg:items-center lg:gap-0">
        <Reveal className="flex flex-col gap-4 lg:w-141.5 lg:shrink-0">
          <Eyebrow>OFFERS</Eyebrow>
          <Heading id="offer-title" tone="paper" className="max-w-133.5">
            Franchise <LineBreak />
            Gratuite + 1 <LineBreak />
            Cadeau De Votre <LineBreak />
            Choix*
          </Heading>
          <p className="max-w-133.5 text-base font-medium text-paper">
            Réparation Et Remplacement Professionnels De Pare-Brise Livrés À Votre Domicile, Lieu De Travail Ou
            Emplacement De Votre Choix. Tous Les Véhicules. Tous Les Principaux Assureurs. Une Expérience Fluide.
          </p>
          <div className="mt-6.5 flex flex-wrap gap-4 sm:gap-8">
            <Button href={appointmentHref}>Prendre Rendez-Vous</Button>
            <Button href={contact.phoneHref} variant="glass">
              Demander Un Rappel
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-1 justify-center lg:pl-16 xl:pl-19">
          <OfferCard />
        </Reveal>
      </Container>
    </section>
  );
}
