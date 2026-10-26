import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** 1440px page frame with the Figma 80px gutters (1280px content), narrower gutters on small screens. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-page px-4 sm:px-8 lg:px-12 xl:px-20", className)}>{children}</div>;
}
