import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ReferralSection } from "@/components/sections/ReferralSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

export default function HomePage() {
  return (
    <main id="contenu" className="overflow-x-clip pb-28">
      <HeroSection />
      <OfferSection />
      <ServicesSection />
      <AdvantagesSection />
      <WhyUsSection />
      <NetworkSection />
      <ReferralSection />
      <StepsSection />
      <EnquirySection />
      <ReviewsSection />
      <PartnersSection />
    </main>
  );
}
