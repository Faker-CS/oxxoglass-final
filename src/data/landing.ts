import type { ComponentType, SVGProps } from "react";
import { CertifiedIcon } from "@/components/icons/certified";
import { FastServiceIcon } from "@/components/icons/fast-service";
import { InsuranceIcon } from "@/components/icons/insurance";
import { MobileServiceIcon } from "@/components/icons/mobile-service";
import { ModernVehicleIcon } from "@/components/icons/modern-vehicle";
import { PrecisionIcon } from "@/components/icons/precision";
import { SafetyFirstIcon } from "@/components/icons/safety-first";
import { SafetyProcessIcon } from "@/components/icons/safety-process";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type Service = {
  number: string;
  title: string;
  description: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Remplacement Du Pare-Brise",
    description:
      "Remplacement Professionnel Du Pare-Brise Avec Un Vitrage Compatible Avec Le Véhicule Et Un Processus D’Installation Soigné.",
    linkLabel: "Découvrir Le Service",
    image: "/images/service-windshield.png",
    imageAlt: "Technicien réparant un pare-brise",
  },
  {
    number: "02",
    title: "Réparation D’Impact Sur Pare-Brise",
    description:
      "Réparation Des Impacts Ou Dommages Réparables Avant Qu’ils Ne S’étendent En Une Fissure Plus Importante.",
    linkLabel: "Découvrir Le Service",
    image: "/images/service-windshield.png",
    imageAlt: "Réparation d’un impact sur un pare-brise",
  },
  {
    number: "03",
    title: "ADAS Calibration",
    description:
      "Modern vehicles rely on cameras and sensors mounted around the windshield. Our calibration service helps ensure those systems are properly aligned after replacement.",
    linkLabel: "Explore Service",
    image: "/images/service-windshield.png",
    imageAlt: "Calibrage des caméras ADAS",
  },
  {
    number: "04",
    title: "Rear Window Replacement",
    description: "Professional replacement for damaged or shattered rear glass.",
    linkLabel: "Explore Service",
    image: "/images/service-windshield.png",
    imageAlt: "Remplacement de la vitre arrière",
  },
  {
    number: "05",
    title: "Side Window Replacement",
    description: "Fast replacement for damaged driver, passenger, and other side windows.",
    linkLabel: "Explore Service",
    image: "/images/service-windshield.png",
    imageAlt: "Remplacement d’une vitre latérale",
  },
  {
    number: "06",
    title: "Panoramic Roof Glass",
    description: "Professional replacement for damaged panoramic and specialty roof glass.",
    linkLabel: "Explore Service",
    image: "/images/service-windshield.png",
    imageAlt: "Remplacement d’un toit panoramique",
  },
];

export type Advantage = {
  title: string;
  description: string;
  icon: Icon;
};

export const advantages: Advantage[] = [
  {
    title: "Nous Venons À Vous",
    description:
      "Remplacement Professionnel Du Pare-Brise Avec Un Vitrage Compatible Avec Votre Véhicule Et Un Processus D’Installation Soigné.",
    icon: MobileServiceIcon,
  },
  {
    title: "Intervention Rapide",
    description: "Reprenez Rapidement La Route Grâce À Une Installation Professionnelle Efficace.",
    icon: FastServiceIcon,
  },
  {
    title: "Techniciens Certifiés",
    description: "Des Techniciens Expérimentés Qui Connaissent Votre Véhicule Et Ses Systèmes De Vitrage.",
    icon: CertifiedIcon,
  },
  {
    title: "Assistance Assurance",
    description:
      "Nous Vous Aidons À Simplifier Les Démarches D’Assurance Et De Déclaration De Sinistre Du Début À La Fin.",
    icon: InsuranceIcon,
  },
  {
    title: "Vitrage De Qualité",
    description:
      "Vitrage De Haute Qualité, Compatible Avec Votre Véhicule Et Installé Selon Les Normes Professionnelles.",
    icon: CertifiedIcon,
  },
  {
    title: "La Sécurité Avant Tout",
    description: "Chaque Installation Est Soigneusement Contrôlée Avant Que Vous Ne Repreniez La Route.",
    icon: SafetyFirstIcon,
  },
];

export const whyUsHighlights: { label: string; icon: Icon }[] = [
  { label: "Installation De Précision", icon: PrecisionIcon },
  { label: "Processus Axé Sur La Sécurité", icon: SafetyProcessIcon },
  { label: "Expertise Des Véhicules Modernes", icon: ModernVehicleIcon },
];

export const cities: string[] = [
  "Perpignan",
  "Joué-lès-Tours",
  "Trappes",
  "Bois-Guillaume",
  "Carcassonne",
  "Le Havre",
  "Houilles",
  "Fleury-sur-Orne",
  "Pau",
  "Séméac",
  "Villemoisson-sur-Orge",
  "Roquebrune-sur-Argens",
  "Toulouse",
  "Amiens",
  "Pompignan",
  "Exincourt",
];

/** Map pin centres as % of the France map box (from Figma "Component 14" instances). */
export const mapPins: { x: number; y: number }[] = [
  { x: 45.71, y: 20.63 },
  { x: 53.35, y: 36.59 },
  { x: 38.28, y: 35.94 },
  { x: 26.97, y: 24.73 },
  { x: 18.68, y: 35.3 },
  { x: 77.47, y: 35.3 },
  { x: 57.66, y: 28.4 },
  { x: 57.66, y: 7.37 },
  { x: 61.97, y: 16.86 },
  { x: 70.9, y: 16.86 },
  { x: 85.44, y: 23.22 },
  { x: 85.44, y: 56.86 },
  { x: 61.97, y: 56.86 },
  { x: 51.42, y: 56.86 },
  { x: 51.42, y: 83.07 },
  { x: 68.97, y: 81.13 },
  { x: 90.82, y: 81.13 },
  { x: 30.42, y: 85.01 },
];

export type Step = {
  label: string;
  description: string;
};

export const steps: Step[] = [
  { label: "Étape 1", description: "Remplissez Notre Formulaire Et Partagez Votre Demande Avec Nous." },
  {
    label: "Étape 2",
    description:
      "Un Expert Oxxoglass Vous Contactera Dans Les 24 Heures Afin De Répondre Au Mieux À Vos Attentes.",
  },
  {
    label: "Étape 3",
    description:
      "Nous Pouvons Nous Déplacer Partout En France Sous 48 Heures. Nous Prenons En Charge La Franchise Et Vous Bénéficiez De L’Offre Que Vous Avez Sélectionnée.",
  },
];

export type Review = {
  quote: string;
  author: string;
  date: string;
  avatar: string;
};

export const reviews: Review[] = [
  { quote: "“Le café est excellent et le service est rapide. Excellent..”", author: "Tumar Bahs", date: "Il y a 10 mois", avatar: "/images/avatar-reviewer.png" },
  { quote: "“Le café est excellent et le service est rapide. Excellent..”", author: "Tumar Baris", date: "Il y a 10 mois", avatar: "/images/avatar-reviewer.png" },
  { quote: "“Le café est excellent et le service est rapide. Excellent..”", author: "Tumar Baris", date: "Il y a 10 mois", avatar: "/images/avatar-reviewer.png" },
  { quote: "“Le café est excellent et le service est rapide. Excellent..”", author: "Tumar Baris", date: "Il y a 10 mois", avatar: "/images/avatar-reviewer.png" },
  { quote: "“The coffee is excellent and the service is quick. Top-notch.”", author: "Tumar Baris", date: "10 months ago", avatar: "/images/avatar-reviewer.png" },
  { quote: "“The coffee is excellent and the service is quick. Top-notch.”", author: "Tumar Baris", date: "10 months ago", avatar: "/images/avatar-reviewer.png" },
  { quote: "“The coffee is excellent and the service is quick. Top-notch.”", author: "Tumar Baris", date: "10 months ago", avatar: "/images/avatar-reviewer.png" },
  { quote: "“The coffee is excellent and the service is quick. Top-notch.”", author: "Tumar Baris", date: "10 months ago", avatar: "/images/avatar-reviewer.png" },
];

export type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export const partners: Partner[] = [
  { name: "Ness Glass", logo: "/images/partner-nessglass.png", width: 194, height: 73 },
  { name: "Ness Pare-Brise", logo: "/images/partner-ness-pare-brise.png", width: 127, height: 73 },
  { name: "Nexxy Tire", logo: "/images/partner-nexxytire.png", width: 169, height: 69 },
];
