import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  preload?: boolean;
};

export function Logo({ className, preload = false }: LogoProps) {
  return (
    <Link href="/" aria-label="Oxxoglass, retour à l’accueil" className={cn("inline-flex shrink-0", className)}>
      <Image src="/images/logo-oxxoglass.png" alt="Oxxoglass" width={125} height={53} preload={preload} className="h-auto w-full" />
    </Link>
  );
}
