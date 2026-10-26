"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "@/components/icons/check";
import type { Step } from "@/data/landing";
import { cn } from "@/lib/cn";

/** Curved connector from the Figma vector network ("Vector 8"), in the 626×631 step group space. */
const CURVE = "M31.72 63C-7.11 128.67 -41.78 265.7 130.22 288.5C302.22 311.3 162.22 429.67 70.72 486";

/** Share of the connector drawn before the timeline is activated (Figma: orange fade near step 1). */
const IDLE_PROGRESS = 0.18;

/** Absolute positions (Figma group space) used on large screens. */
const desktopLayout = [
  { circle: "lg:top-8.25 lg:left-1.5", text: "lg:top-0 lg:left-19.5" },
  { circle: "lg:top-67.25 lg:left-39", text: "lg:top-55 lg:left-56.5" },
  { circle: "lg:top-114.5 lg:left-12.5", text: "lg:top-126.25 lg:left-28.5" },
];

const markerDelay = ["delay-0", "delay-500", "delay-1000"];

function StepMarker({ active, index }: { active: boolean; index: number }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative flex size-14 shrink-0 items-center justify-center rounded-full transition-[background-color,box-shadow,scale] duration-400 ease-out",
        active ? "scale-100 bg-brand shadow-step-active" : "scale-90 bg-surface-strong",
        active && markerDelay[index],
      )}
    >
      <CheckIcon
        className={cn(
          "h-4.25 w-6 transition-colors duration-400",
          active ? "text-white" : "text-line-strong",
          active && markerDelay[index],
        )}
      />
    </span>
  );
}

export function StepsTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timer = window.setTimeout(() => setActive(true), 800);
    return () => window.clearTimeout(timer);
  }, [inView]);

  return (
    <ol
      ref={ref}
      onMouseEnter={() => setActive(true)}
      className="relative flex flex-col gap-10 lg:block lg:h-157.75 lg:w-156.5 lg:shrink-0"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 626 631"
        fill="none"
        className="pointer-events-none absolute inset-0 hidden size-full overflow-visible lg:block"
      >
        <path d={CURVE} strokeWidth={7} strokeLinecap="round" className="stroke-line-strong/40" />
        <motion.path
          d={CURVE}
          strokeWidth={7}
          strokeLinecap="round"
          className="stroke-brand"
          initial={{ pathLength: IDLE_PROGRESS }}
          animate={{ pathLength: active ? 1 : IDLE_PROGRESS }}
          transition={{ duration: 1, ease: "linear" }}
        />
      </svg>
      <span aria-hidden="true" className="absolute top-14 bottom-14 left-7 w-1.75 rounded-full bg-line-strong/40 lg:hidden">
        <motion.span
          className="block size-full origin-top rounded-full bg-brand"
          initial={{ scaleY: IDLE_PROGRESS }}
          animate={{ scaleY: active ? 1 : IDLE_PROGRESS }}
          transition={{ duration: 1, ease: "linear" }}
        />
      </span>

      {steps.map((step, index) => {
        const layout = desktopLayout[index];
        return (
          <li key={step.label} className="relative flex items-start gap-4 lg:static">
            <span className={cn("relative z-10 lg:absolute", layout?.circle)}>
              <StepMarker active={active || index === 0} index={index} />
            </span>
            <div className={cn("flex-1 lg:absolute lg:w-100", layout?.text)}>
              <h3 className="px-4 py-2 text-title font-extrabold text-ink">{step.label}</h3>
              <p className="px-4 py-2 text-base font-medium text-muted">{step.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
