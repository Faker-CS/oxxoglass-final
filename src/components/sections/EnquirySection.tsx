import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accent, Heading } from "@/components/ui/Heading";
import { sectionIds } from "@/data/site";
import { EnquiryForm } from "./EnquiryForm";

export function EnquirySection() {
  return (
    <section id={sectionIds.appointment} aria-labelledby="enquiry-title" className="mt-20 bg-night">
      <div className="mx-auto flex max-w-page flex-col gap-8 p-5 lg:min-h-200 lg:flex-row lg:items-center xl:pr-20">
        <Reveal
          offset={0}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative isolate flex min-h-120 flex-col justify-end overflow-hidden bg-graphite p-4 lg:min-h-190 lg:w-173 lg:shrink-0"
        >
          <Image
            src="/images/enquire-garage.png"
            alt="Client détendu attendant pendant qu’un mécanicien répare sa voiture au garage"
            fill
            sizes="(min-width: 1024px) 692px, 100vw"
            className="-z-10 object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/20" />
          <div className="flex flex-col lg:w-126">
            <Eyebrow uppercase className="mx-4 my-2">
              Enquire Form
            </Eyebrow>
            <Heading id="enquiry-title" tone="paper" className="px-4 py-2">
              Faites réparer votre pare-<Accent>brise sans tracas.</Accent>
            </Heading>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex-1 rounded-field p-4 backdrop-blur-form">
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
