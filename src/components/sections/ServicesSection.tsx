import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accent, Heading, LineBreak } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { services, type Service } from "@/data/landing";
import { appointmentHref, sectionIds } from "@/data/site";
import { ServicesCarousel } from "./ServicesCarousel";

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group/card flex h-full flex-col gap-4 sm:flex-row">
      <div className="relative h-64 shrink-0 overflow-hidden rounded-card sm:h-104.25 sm:w-77.5">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 640px) 310px, 85vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col sm:w-71.75">
        <p
          aria-hidden="true"
          className="bg-linear-to-b from-ink/20 to-ink/0 bg-clip-text font-display text-7xl font-extrabold text-transparent transition-transform duration-500 group-hover/card:-translate-y-1 sm:text-number"
        >
          {service.number}
        </p>
        <div className="flex flex-1 flex-col justify-between gap-4">
          <div className="flex flex-col gap-4 px-4 py-2">
            <h3 className="font-display text-xl font-extrabold text-ink uppercase sm:text-h3">{service.title}</h3>
            <p className="text-base font-medium text-muted">{service.description}</p>
          </div>
          <TextLink href={appointmentHref} srContext={service.title} className="px-4 pb-2">
            {service.linkLabel}
          </TextLink>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id={sectionIds.services} aria-labelledby="services-title" className="mt-25 overflow-hidden">
      <Container>
        <ServicesCarousel
          header={
            <Reveal className="flex flex-col gap-4 lg:max-w-178.25">
              <Eyebrow>Nos Services</Eyebrow>
              <Heading id="services-title">
                Quel Que Soit Le <LineBreak />
                Vitrage, <LineBreak />
                <Accent>
                  Nous Avons <LineBreak />
                  La Solution.
                </Accent>
              </Heading>
            </Reveal>
          }
          description="D’un Petit Impact Au Remplacement Complet Du Pare-Brise, Nos Spécialistes Proposent Des Solutions Professionnelles De Vitrage Automobile Pour Les Véhicules Modernes."
          slides={services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        />
      </Container>
    </section>
  );
}
