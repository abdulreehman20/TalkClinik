import { CTASection } from "@/components/landing/cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { FaqsSection } from "@/components/landing/faqs-section";
import { NavbarSection } from "@/components/landing/navbar-section";
import { FooterSection } from "@/components/landing/footer-section";
import { HowItWorksSection } from "@/components/landing/how-it-work";
import { PricingSection } from "@/components/landing/pricing-section";
import { FeaturesSection } from "@/components/landing/features-section";
// import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { OutcomesDifferenceSection } from "@/components/landing/outcomes-difference-section";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <OutcomesDifferenceSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <FaqsSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
  