import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Accent, LineBreak } from "@/components/ui/Heading";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { cities } from "@/data/landing";
import { sectionIds } from "@/data/site";
import { MapPins } from "./MapPins";

export function NetworkSection() {
  return (
    <section id={sectionIds.locations} aria-labelledby="network-title" className="mt-25 flex flex-col gap-10">
      <Container className="flex flex-col items-center gap-15.25">
        <Reveal>
          <SectionIntro
            eyebrow="Réseau"
            titleId="network-title"
            title={
              <>
                Vitrage Automobile Professionnel, <LineBreak />
                <Accent>Près De Chez Vous.</Accent>
              </>
            }
            description="Des rues des villes aux allées de banlieue, notre réseau de services mobiles facilite l’accès au vitrage automobile professionnel."
          />
        </Reveal>
        <Reveal offset={0} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} className="relative w-full max-w-232.25">
          <Image
            src="/images/france-map.svg"
            alt="Carte de France des centres Oxxoglass"
            width={929}
            height={927}
            className="h-auto w-full"
          />
          <MapPins />
        </Reveal>
      </Container>

      <div className="bg-brand py-12.5">
        <Container>
          <h3 className="sr-only">Nos villes d’intervention</h3>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-8 lg:grid-cols-4 lg:grid-rows-4">
            {cities.map((city, index) => (
              <li key={city}>
                <Reveal delay={Math.floor(index / 4) * 0.1 + (index % 4) * 0.05} offset={12} className="flex h-8 items-center">
                  <span aria-hidden="true" className="m-0.75 size-4 shrink-0 rounded-full bg-paper" />
                  <span className="px-4 py-2 text-base leading-none font-medium text-paper">{city}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
