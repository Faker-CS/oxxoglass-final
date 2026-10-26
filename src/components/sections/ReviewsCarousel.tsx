"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GoogleIcon } from "@/components/icons/google";
import type { Review } from "@/data/landing";

/** Figma: "review card" → after 2s, smart animate 1s with cubic-bezier(0, 0, 0, 1.01). */
const HOLD_MS = 2000;
const SLIDE_SECONDS = 1;
const SLIDE_EASE = [0, 0, 0, 1.01] as const;

/** Number of cards that fit, read from the rendered layout so it follows the CSS breakpoints. */
function visibleCount(viewport: HTMLElement, track: HTMLElement) {
  const first = track.children[0] as HTMLElement | undefined;
  if (!first) return 1;
  return Math.max(1, Math.round(viewport.clientWidth / first.offsetWidth));
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col gap-8 rounded-card bg-surface p-2">
      <span className="flex size-12 items-center justify-center rounded-full bg-white">
        <GoogleIcon className="h-6.25 w-6" />
        <span className="sr-only">Avis Google</span>
      </span>
      <blockquote className="flex-1 px-4 py-2 text-base font-medium text-ink">{review.quote}</blockquote>
      <figcaption className="flex items-center">
        <span className="p-2.5">
          <Image src={review.avatar} alt="" width={56} height={56} className="size-14 rounded-full object-cover" />
        </span>
        <span className="flex flex-col">
          <span className="px-4 py-1 text-title font-extrabold text-ink">{review.author}</span>
          <span className="px-4 py-1 text-base font-medium text-muted">{review.date}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onResize = () => {
      setIndex(0);
      setOffset(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setTimeout(() => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      const next = index >= reviews.length - visibleCount(viewport, track) ? 0 : index + 1;
      const card = track.children[next] as HTMLElement | undefined;
      setIndex(next);
      setOffset(card?.offsetLeft ?? 0);
    }, HOLD_MS + SLIDE_SECONDS * 1000);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduceMotion, reviews.length]);

  return (
    <div
      ref={viewportRef}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Avis clients"
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <motion.ul
        ref={trackRef}
        className="relative -mx-2 flex"
        animate={{ x: -offset }}
        transition={{ duration: SLIDE_SECONDS, ease: SLIDE_EASE }}
      >
        {reviews.map((review, i) => (
          <li
            key={`${review.author}-${i}`}
            aria-roledescription="diapositive"
            aria-label={`${i + 1} sur ${reviews.length}`}
            className="shrink-0 basis-full px-2 sm:basis-1/2 lg:basis-1/4"
          >
            <ReviewCard review={review} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
