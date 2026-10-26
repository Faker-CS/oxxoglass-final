import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Heading } from "./Heading";

type SectionIntroProps = {
  eyebrow: string;
  eyebrowUppercase?: boolean;
  title: ReactNode;
  titleId?: string;
  description?: ReactNode;
  descriptionClassName?: string;
  align?: "left" | "center";
  tone?: "ink" | "paper";
  className?: string;
};

/** Eyebrow pill + display heading + supporting paragraph, as used at the top of most sections. */
export function SectionIntro({
  eyebrow,
  eyebrowUppercase,
  title,
  titleId,
  description,
  descriptionClassName,
  align = "center",
  tone = "ink",
  className,
}: SectionIntroProps) {
  const centered = align === "center";
  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      <Eyebrow uppercase={eyebrowUppercase}>{eyebrow}</Eyebrow>
      <Heading id={titleId} align={align} tone={tone} className={cn(centered && "max-w-250")}>
        {title}
      </Heading>
      {description ? (
        <p className={cn("text-base font-medium text-muted", centered && "max-w-232", descriptionClassName)}>{description}</p>
      ) : null}
    </div>
  );
}
