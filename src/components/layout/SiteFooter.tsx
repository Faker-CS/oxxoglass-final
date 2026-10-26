import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { FacebookIcon } from "@/components/icons/facebook";
import { InstagramIcon } from "@/components/icons/instagram";
import { YoutubeIcon } from "@/components/icons/youtube";
import { Watermark } from "@/components/ui/Watermark";
import { contact, footerLinks, footerServices, socialLinks, type NavLink, type SocialNetwork } from "@/data/site";
import { Logo } from "./Logo";

const socialIcons: Record<SocialNetwork, ComponentType<SVGProps<SVGSVGElement>>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-bold text-paper">{title}</h2>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-base text-paper transition-colors duration-200 hover:text-brand">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-night">
      <div className="relative z-10 mx-auto flex max-w-content flex-col gap-10 px-4 pt-12.5 sm:px-8 lg:px-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-43.5 flex-col gap-6">
            <Logo className="w-29.25 p-2.5" />
            <p className="text-base font-light text-paper">
              Le spécialiste du remplacement et de la réparation de pare-brise, juste près de chez vous ! À domicile ou
              sur votre lieu de travail.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:w-226.75 lg:justify-between lg:gap-16">
            <div className="lg:w-54.5">
              <FooterColumn title="Nos services" links={footerServices} />
            </div>
            <div className="lg:w-54.5">
              <FooterColumn title="Liens utiles" links={footerLinks} />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-base font-bold text-paper">Contactez-nous</h2>
              <a href={contact.phoneHref} className="text-base text-paper hover:text-brand">
                {contact.phoneDisplay}
              </a>
              <a href={`mailto:${contact.email}`} className="text-base text-paper hover:text-brand">
                {contact.email}
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base font-bold text-paper">Réseaux sociaux</h2>
              <ul className="flex items-center gap-4">
                {socialLinks.map(({ network, label, href }) => {
                  const Icon = socialIcons[network];
                  return (
                    <li key={network}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} (nouvel onglet)`}
                        className="flex size-9 items-center justify-center rounded-full text-paper transition-colors duration-200 hover:bg-white/10 hover:text-brand"
                      >
                        <Icon className="h-5 w-auto" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line-dark py-5 font-manrope text-base font-light text-paper sm:flex-row sm:items-center sm:justify-between">
          <p lang="fr">Français (Fr)</p>
          <p>2024 © Droits d’auteur | Tous droits réservés</p>
        </div>
      </div>

      <Watermark className="-mt-2 -mb-6 text-center text-6xl from-white/8 to-white/0 sm:-mb-10 sm:text-9xl lg:-mt-4 lg:-mb-16 lg:text-watermark-md">
        Oxxoglass
      </Watermark>
    </footer>
  );
}
