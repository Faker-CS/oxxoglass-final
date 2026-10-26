import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = "h1" | "h2" | "h3";
type HeadingSize = "hero" | "h2" | "h2-sm" | "h3";

const sizeClasses: Record<HeadingSize, string> = {
  hero: "text-4xl sm:text-6xl lg:text-hero",
  h2: "text-3xl sm:text-5xl lg:text-h2",
  "h2-sm": "text-3xl sm:text-5xl lg:text-h2-sm",
  h3: "text-xl sm:text-h3",
};

type HeadingProps = {
  as?: HeadingLevel;
  id?: string;
  size?: HeadingSize;
  tone?: "ink" | "paper";
  align?: "left" | "center";
  className?: string;
  children: ReactNode;
};

/** Uppercase display heading (GC Epicpro in Figma). Wrap highlighted words in <Accent>. */
export function Heading({ as: Tag = "h2", id, size = "h2", tone = "ink", align = "left", className, children }: HeadingProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-display font-extrabold uppercase max-lg:text-balance",
        sizeClasses[size],
        tone === "ink" ? "text-ink" : "text-paper",
        align === "center" && "text-center",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Line break taken from the Figma text; ignored below lg where lines wrap naturally. */
export function LineBreak() {
  return <br className="max-lg:hidden" />;
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-brand">{children}</span>;
}
