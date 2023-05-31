import { FooterSection } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero";
import { PricingSection } from "@/components/landing/pricing";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <FooterSection />
    </>
  );
}
