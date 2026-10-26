import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: "brand" | "light";
  uppercase?: boolean;
  className?: string;
};

/** Small tinted pill label shown above section headings. */
export function Eyebrow({ children, tone = "brand", uppercase = false, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex w-fit items-center rounded-full bg-brand/10 px-4 py-2 text-xs font-medium backdrop-blur-tag",
        tone === "brand" ? "text-brand" : "text-brand-light",
        uppercase && "uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
