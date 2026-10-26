import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type WatermarkProps = {
  children: ReactNode;
  className?: string;
};

/** Oversized decorative display text that fades out towards the bottom. Hidden from assistive tech. */
export function Watermark({ children, className }: WatermarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none block bg-linear-to-b bg-clip-text font-display font-extrabold whitespace-nowrap text-transparent uppercase select-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
