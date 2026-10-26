import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: string;
  /** Extra context for screen readers, e.g. the card title. */
  srContext?: string;
  className?: string;
};

/** Orange "Découvrir le service ›" link. */
export function TextLink({ href, children, srContext, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn("group/link inline-flex w-fit items-center text-base font-medium text-brand", className)}
    >
      <span className="underline-offset-4 group-hover/link:underline">{children}</span>
      {srContext ? <span className="sr-only"> : {srContext}</span> : null}
      <span className="inline-flex size-9 items-center justify-center transition-transform duration-200 group-hover/link:translate-x-1">
        <ArrowRightIcon className="size-5" />
      </span>
    </Link>
  );
}
