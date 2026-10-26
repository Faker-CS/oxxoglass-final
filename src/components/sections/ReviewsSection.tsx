import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Accent, LineBreak } from "@/components/ui/Heading";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { reviews } from "@/data/landing";
import { sectionIds } from "@/data/site";
import { ReviewsCarousel } from "./ReviewsCarousel";

export function ReviewsSection() {
  return (
    <section id={sectionIds.reviews} aria-labelledby="reviews-title" className="mt-25">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionIntro
            eyebrow="AVIS"
            titleId="reviews-title"
            title={
              <>
                Ce Que Les Gens Disent <LineBreak />
                <Accent>De Nous</Accent>
              </>
            }
            description="Des témoignages réels de clients qui nous ont choisis pour un service de vitrage automobile rapide, professionnel et sans tracas."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ReviewsCarousel reviews={reviews} />
        </Reveal>
      </Container>
    </section>
  );
}
