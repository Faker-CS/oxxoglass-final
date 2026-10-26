"use client";

import { motion } from "motion/react";
import { mapPins } from "@/data/landing";

const MAP_WIDTH = 928.8;
const MAP_HEIGHT = 927.3;

/** Location pins drawn over the France map: they pop in one by one, then keep pulsing. */
export function MapPins() {
  return (
    <svg aria-hidden="true" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="absolute inset-0 size-full overflow-visible">
      {mapPins.map((pin, index) => {
        const cx = (pin.x / 100) * MAP_WIDTH;
        const cy = (pin.y / 100) * MAP_HEIGHT;
        return (
          <motion.g
            key={`${pin.x}-${pin.y}`}
            className="origin-center transform-fill"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.3 + index * 0.06 }}
          >
            <circle cx={cx} cy={cy} r={12} className="origin-center animate-pin-pulse fill-brand/40 transform-fill" />
            <circle cx={cx} cy={cy} r={9} className="fill-brand/25" />
            <circle cx={cx} cy={cy} r={6} className="fill-brand" />
          </motion.g>
        );
      })}
    </svg>
  );
}
