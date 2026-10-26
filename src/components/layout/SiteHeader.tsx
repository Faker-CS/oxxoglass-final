"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { appointmentHref, mainNav } from "@/data/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex h-30 max-w-page items-center justify-between gap-6 px-4 sm:px-8 lg:px-20"
      >
        <Logo preload className="w-24 sm:w-31.25" />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center rounded-full border border-glass-border/25 bg-white/5 p-2 backdrop-blur-glass">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-full px-4 py-2 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={appointmentHref}>Prendre Rendez-Vous</Button>
        </div>

        <button
          type="button"
          className="relative flex size-12 items-center justify-center rounded-full border border-glass-border/25 bg-white/5 backdrop-blur-glass lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 rounded-full bg-white transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id={menuId}
            aria-label="Navigation mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-4 rounded-card border border-glass-border/25 bg-night/90 p-4 backdrop-blur-glass sm:mx-8 lg:hidden"
          >
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block rounded-field px-4 py-3 text-base font-medium text-white hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href={appointmentHref} onClick={close} className="mt-3 w-full">
              Prendre Rendez-Vous
            </Button>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
