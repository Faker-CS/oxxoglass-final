import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Roboto, Unbounded } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const epicPro = localFont({
  src: "../fonts/GCEpicProDemo-ExtraBold.ttf",
  weight: "800",
  style: "normal",
  variable: "--font-epicpro",
  // No generated Arial fallback: missing glyphs must reach the Unbounded fallback below.
  adjustFontFallback: false,
});

// The GC EPICPRO demo file only has A–Z / a–z: digits, punctuation and accented letters fall back to this.
const displayFallback = Unbounded({
  variable: "--font-display-fallback",
  subsets: ["latin"],
  weight: ["800"],
});

const inter = Inter({
  variable: "--font-inter-face",
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  variable: "--font-manrope-face",
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Oxxoglass — Vitrage automobile mobile partout en France",
  description:
    "Remplacement et réparation de pare-brise à domicile ou sur votre lieu de travail. Franchise offerte, techniciens certifiés, intervention rapide partout en France.",
};

export const viewport: Viewport = {
  themeColor: "#1a0e1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${roboto.variable} ${epicPro.variable} ${displayFallback.variable} ${inter.variable} ${manrope.variable}`}>
      <body className="min-h-dvh">
        <MotionProvider>
          <a
            href="#contenu"
            className="sr-only z-50 rounded-full bg-white px-4 py-2 font-medium text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
          >
            Aller au contenu
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
