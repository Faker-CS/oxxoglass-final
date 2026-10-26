"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { appointmentHref } from "@/data/site";

const CYCLE_MS = 6000;

const offers = [
  {
    id: "tires",
    image: { src: "/images/tires.svg", width: 416, height: 307 },
    title: (
      <>
        De <span className="text-brand">2</span> À <span className="text-brand">4</span>
      </>
    ),
    subtitle: "Nouveaux Pneus Proposés",
    description: [
      "Franchise annulée jusqu’à 80 €*",
      "Sous réserve de sélection et de disponibilité*",
      "Voir les termes et conditions de nos offres dans nos centres et sur notre site web",
    ],
    cta: "Claim It",
  },
  {
    id: "money",
    image: { src: "/images/money.svg", width: 460, height: 421 },
    title: (
      <>
        De <span className="text-brand">200 €</span> À <span className="text-brand">400 €</span>
      </>
    ),
    subtitle: "Virement Bancaire",
    description: [
      "Franchise annulée jusqu’à 80 €*",
      "Voir les termes et conditions de nos offres dans nos centres et sur notre site web",
    ],
    cta: "Claim",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function OfferCard() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hasCycled, setHasCycled] = useState(false);
  const offer = offers[index];

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setHasCycled(true);
      setIndex((i) => (i + 1) % offers.length);
    }, CYCLE_MS);
    return () => clearTimeout(timer);
  }, [index, paused]);

  return (
    <MotionConfig reducedMotion="user">
      <article
        aria-labelledby="offer-card-title"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative w-full max-w-115"
      >
        <div className="absolute inset-0 rounded-offer border-3 border-white/95 bg-brand-soft shadow-offer-card" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-16 z-10 h-60">
          <AnimatePresence mode="wait">
            <motion.div
              key={offer.id}
              className="absolute inset-0 origin-bottom"
              initial={{ y: 90, scale: 0.7, rotate: -8 }}
              animate={{ y: 0, scale: 1, rotate: 0 }}
              exit={{  y: 70, scale: 0.8, rotate: 6 }}
              transition={{ duration: 0.8, ease, delay: index === 0 && !hasCycled ? 0.6 : 0 }}
            >
              <div className="absolute inset-x-[10%] bottom-0 h-3/4 rounded-full bg-brand-amber/40 blur-glow-md" />
              <Image
                src={offer.image.src}
                alt=""
                width={offer.image.width}
                height={offer.image.height}
                priority={index === 0}
                className="size-full object-contain relative object-bottom drop-shadow-[0_0_20px_var(--color-white)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-offer">
          <Image
            src="/images/offer-card.svg"
            alt=""
            width={460}
            height={549}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute -top-1/4 -left-1/4 size-3/4 animate-glow-drift rounded-full bg-brand-amber/30 blur-glow-md" />
          <div className="absolute top-0 left-0 h-full w-1/3 animate-shine bg-linear-to-r from-white/0 via-white/35 to-white/0" />
        </div>

        <div className="relative z-30 flex min-h-137.25 flex-col justify-between gap-5.5 px-5 pt-46.5 pb-4">
          <div aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease }}
              >
                <h3 id="offer-card-title" className="px-4.5 py-2.25 text-3xl font-medium text-ink sm:text-offer-lg">
                  {offer.title}
                  <span className="mt-2 block text-offer font-semibold text-brand uppercase">{offer.subtitle}</span>
                </h3>
                <div className="p-3">
                  <p className="line-clamp-4 text-lg font-medium text-ink sm:text-offer">
                    {offer.description.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <a
            href={appointmentHref}
            className="flex h-15 items-center justify-center rounded-full border border-white bg-brand font-display text-cta font-extrabold text-white uppercase shadow-cta-inset transition-transform duration-200 hover:scale-102 active:scale-98"
          >
            {offer.cta}
          </a>
        </div>
      </article>
    </MotionConfig>
  );
}
