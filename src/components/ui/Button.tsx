import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { PhoneIcon } from "@/components/icons/phone";
import { cn } from "@/lib/cn";

type Variant = "light" | "glass" | "brand" | "brand-soft";
type Size = "md" | "sm";
type IconKind = "arrow" | "phone";

const variantClasses: Record<Variant, { root: string; badge: string }> = {
  light: {
    root: "bg-white text-ink hover:bg-paper",
    badge: "bg-brand text-white",
  },
  glass: {
    root: "border border-glass-border/25 bg-white/5 text-paper backdrop-blur-glass hover:bg-white/10",
    badge: "bg-paper text-brand",
  },
  brand: {
    root: "bg-brand text-white hover:bg-brand-glow",
    badge: "bg-white text-brand",
  },
  "brand-soft": {
    root: "border border-glass-border/25 bg-brand/10 text-brand backdrop-blur-glass hover:bg-brand/15",
    badge: "bg-paper text-brand",
  },
};

const sizeClasses: Record<Size, { root: string; badge: string; icon: string }> = {
  md: { root: "min-h-14 gap-2 py-2 pr-2 pl-4 text-base", badge: "size-9", icon: "size-5" },
  sm: { root: "min-h-13.25 gap-2 py-2 pr-2 pl-4 text-sm", badge: "size-8.5", icon: "size-4.75" },
};

const icons: Record<IconKind, typeof ArrowRightIcon> = {
  arrow: ArrowRightIcon,
  phone: PhoneIcon,
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconKind;
  className?: string;
};

type LinkButtonProps = BaseProps & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;
type NativeButtonProps = BaseProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { children, variant = "light", size = "md", icon = "arrow", className, ...rest } = props;
  const v = variantClasses[variant];
  const s = sizeClasses[size];
  const Icon = icons[icon];
  const classes = cn(
    "group/button inline-flex max-w-full items-center justify-between rounded-full text-left font-medium transition-colors duration-200 sm:shrink-0 sm:whitespace-nowrap",
    v.root,
    s.root,
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover/button:scale-110",
          icon === "arrow" && "group-hover/button:-rotate-45",
          v.badge,
          s.badge,
        )}
      >
        <Icon className={s.icon} />
      </span>
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<NativeButtonProps, keyof BaseProps>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
