"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Vertical offset in px the element travels while fading in. */
  offset?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades and slides its children in once they scroll into view. */
export function Reveal({ delay = 0, offset = 32, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
