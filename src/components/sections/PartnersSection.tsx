import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Accent } from "@/components/ui/Heading";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { partners } from "@/data/landing";

/** Logos repeated so one half of the strip always fills the row while the other scrolls in. */
const REPEAT = 4;

export function PartnersSection() {
  const strip = Array.from({ length: REPEAT }, () => partners).flat();

  return (
    <section aria-labelledby="partners-title" className="mt-25">
      <Container className="flex flex-col gap-15.5">
        <Reveal>
          <SectionIntro
            eyebrow="Nos Partenaires"
            eyebrowUppercase
            titleId="partners-title"
            title={
              <>
                <Accent>Marques</Accent> Du Groupe
              </>
            }
            description="La Confiance Des Grandes Marques Et Des Partenaires Du Secteur Pour Fournir Des Solutions De Vitrage Automobile Fiables Et Professionnelles."
            descriptionClassName="max-w-116.25"
          />
        </Reveal>

        <div className="group/marquee relative overflow-hidden mask-x-from-90% mask-x-to-100%">
          <ul aria-label="Nos marques partenaires" className="flex w-max animate-marquee group-hover/marquee:animate-paused">
            {[...strip, ...strip].map((partner, index) => (
              <li
                key={`${partner.name}-${index}`}
                aria-hidden={index >= partners.length ? true : undefined}
                className="mr-35 flex h-25 w-53.5 shrink-0 items-center justify-center px-3.5"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  sizes="194px"
                  className="h-auto max-h-18.25 w-auto max-w-full transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
