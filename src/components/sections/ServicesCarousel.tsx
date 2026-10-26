"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons/arrow-right";

type ServicesCarouselProps = {
  header: ReactNode;
  description: string;
  slides: ReactNode[];
};

/** Horizontally scrolling, snap-aligned card rail with previous / next controls. */
export function ServicesCarousel({ header, description, slides }: ServicesCarouselProps) {
  const railRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setEdges({
      start: rail.scrollLeft <= 4,
      end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollBySlide = (direction: 1 | -1) => {
    const rail = railRef.current;
    const slide = rail?.firstElementChild as HTMLElement | null;
    if (!rail || !slide) return;
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
    rail.scrollBy({ left: direction * (slide.offsetWidth + gap), behavior: "smooth" });
  };

  const controlClasses =
    "flex size-9 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors duration-200 hover:bg-brand hover:text-white disabled:pointer-events-none disabled:opacity-40";

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {header}
        <div className="flex flex-col gap-9 lg:w-103.75 lg:items-end">
          <p className="px-4 py-2 text-base font-medium text-muted">{description}</p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Service précédent"
              onClick={() => scrollBySlide(-1)}
              disabled={edges.start}
              className={controlClasses}
            >
              <ArrowRightIcon className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Service suivant"
              onClick={() => scrollBySlide(1)}
              disabled={edges.end}
              className={controlClasses}
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={railRef}
        onScroll={updateEdges}
        aria-label="Nos services"
        className="-mr-4 flex snap-x snap-mandatory gap-6.75 overflow-x-auto scroll-smooth pb-2 scrollbar-none sm:-mr-8 lg:-mr-12 xl:-mr-20"
      >
        {slides.map((slide, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: Math.min(index, 3) * 0.12, ease: "easeOut" }}
            className="w-5/6 shrink-0 snap-start sm:w-153.25"
          >
            {slide}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
