export type NavLink = {
  label: string;
  href: string;
};

export const contact = {
  phoneDisplay: "02 18 88 94 28",
  phoneHref: "tel:+33218889428",
  email: "contact@oxxoglass.fr",
} as const;

export const sectionIds = {
  home: "accueil",
  offers: "offres",
  services: "services",
  howItWorks: "comment-ca-marche",
  whyUs: "pourquoi-nous-choisir",
  locations: "emplacements",
  appointment: "rendez-vous",
  reviews: "avis",
} as const;

export const mainNav: NavLink[] = [
  { label: "Accueil", href: `#${sectionIds.home}` },
  { label: "Services", href: `#${sectionIds.services}` },
  { label: "Comment Ça Marche", href: `#${sectionIds.howItWorks}` },
  { label: "Pourquoi Nous Choisir", href: `#${sectionIds.whyUs}` },
  { label: "Emplacements", href: `#${sectionIds.locations}` },
];

export const appointmentHref = `#${sectionIds.appointment}`;

export const footerServices: NavLink[] = [
  { label: "Remplacement de pare-brise", href: `#${sectionIds.services}` },
  { label: "Remplacement de la vitre arrière", href: `#${sectionIds.services}` },
  { label: "Remplacement de la vitre latérale", href: `#${sectionIds.services}` },
  { label: "Réparation des impacts", href: `#${sectionIds.services}` },
  { label: "Recalibrage de la caméra ADAS", href: `#${sectionIds.services}` },
  { label: "Remplacement du toit panoramique", href: `#${sectionIds.services}` },
];

export const footerLinks: NavLink[] = [
  { label: "Bienvenue", href: `#${sectionIds.home}` },
  { label: "Nos offres", href: `#${sectionIds.offers}` },
  { label: "Nos centres", href: `#${sectionIds.locations}` },
  { label: "BLOG", href: "#" },
  { label: "Contact", href: `#${sectionIds.appointment}` },
];

export type SocialNetwork = "facebook" | "instagram" | "youtube";

export const socialLinks: { network: SocialNetwork; label: string; href: string }[] = [
  { network: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { network: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { network: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
];
