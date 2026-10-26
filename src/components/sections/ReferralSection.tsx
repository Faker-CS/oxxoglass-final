import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Watermark } from "@/components/ui/Watermark";
import { appointmentHref } from "@/data/site";

const WATERMARK_LINES = 5;

export function ReferralSection() {
  return (
    <section aria-labelledby="referral-title" className="mt-11">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-panel border border-panel-border bg-black lg:h-145.5">
          {/* Glows and background type */}
          <div aria-hidden="true" className="absolute -top-40.25 left-122.5 -z-10 size-203 rounded-full bg-brand-glow/50 blur-glow-xl" />
          <div aria-hidden="true" className="absolute top-86 left-266 -z-10 size-119 rounded-full bg-brand-glow/40 blur-glow-xl" />
          <div aria-hidden="true" className="absolute -top-0.75 left-0 -z-10 flex flex-col gap-3 opacity-10">
            {Array.from({ length: WATERMARK_LINES }, (_, line) => (
              <Watermark key={line} className="text-6xl from-ink to-white bg-linear-to-r lg:text-watermark-sm">
                Unlimited rewards
              </Watermark>
            ))}
          </div>
          <div aria-hidden="true" className="absolute top-20.5 -left-4.5 -z-10 size-119 rounded-full bg-black blur-glow-xl" />
          <div aria-hidden="true" className="absolute top-20.5 left-30.25 -z-10 size-119 rounded-full bg-black blur-glow-xl" />

          <div className="relative flex flex-col gap-10 p-4 sm:p-10 lg:h-full lg:flex-row lg:items-center lg:justify-between lg:py-11 lg:pr-8.5 lg:pl-16.25">
            <div className="flex flex-col gap-10 lg:w-125.25">
              <div className="flex flex-col gap-7.5">
                <Heading id="referral-title" size="h2-sm" tone="paper" className="px-4 py-2 max-sm:text-2xl lg:w-163.5">
                  Recevez <Accent>40 €</Accent> Pour Chaque Recommandation
                </Heading>
                <p className="px-4 py-2 text-xl font-medium text-paper sm:text-lead">
                  40 € Supplémentaires Pour Chaque Tranche De 4 Recommandations
                  <br />
                  (Pour Un Total De 200 €)
                </p>
                <p className="px-4 py-2 text-xl font-medium text-brand sm:text-lead">Mode De Paiement : Virement Bancaire</p>
              </div>
              <Button href={appointmentHref} variant="brand" size="sm" className="self-start">
                Profitez D’une Remise Allant Jusqu’à 50%
              </Button>
            </div>

            <div className="relative mx-auto w-full max-w-137.25 lg:mx-0">
              <Image
                src="/images/banknote-1.png"
                alt=""
                aria-hidden="true"
                width={126}
                height={129}
                className="absolute -top-51 -left-52.75 hidden w-66.25 -rotate-18 animate-float blur-object lg:block"
              />
              <Image
                src="/images/banknote-1.png"
                alt=""
                aria-hidden="true"
                width={126}
                height={129}
                className="absolute -top-3 -right-6.5 w-14 rotate-43 animate-float blur-object animation-delay-1200 sm:w-28"
              />
              <Image
                src="/images/banknote-2.png"
                alt=""
                aria-hidden="true"
                width={158}
                height={205}
                className="absolute -right-2 bottom-2 w-16 -rotate-77 animate-float blur-object animation-delay-2400 sm:w-34.5"
              />
              <Image
                src="/images/banknote-3.png"
                alt=""
                aria-hidden="true"
                width={146}
                height={104}
                className="absolute -bottom-28.25 -left-72 hidden w-71 animate-float blur-object animation-delay-600 lg:block"
              />
              <Reveal
                delay={0.2}
                offset={0}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <Image
                  src="/images/referral-car.png"
                  alt="Cliente souriante tenant des billets et un téléphone depuis la portière d’une voiture orange"
                  width={1312}
                  height={1199}
                  sizes="(min-width: 1024px) 549px, 90vw"
                  className="relative h-auto w-full"
                />
                <div aria-hidden="true" className="absolute -bottom-1 left-15.75 -z-10 h-4.5 w-65 rounded-full bg-black blur-shadow" />
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
