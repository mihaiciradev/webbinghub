import { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/utils";
import HeroSection from "@/app/HeroSection/HeroSection";
import TrustBar from "@/app/TrustBar/TrustBar";
import AboutSection from "@/app/AboutSection/AboutSection";
import ServicesSection from "@/app/ServicesSection/ServicesSection";
import ProcessSection from "@/app/ProcessSection/ProcessSection";
import BrandsSection from "@/app/BrandsSection/BrandsSection";
import TestimonialSection from "@/app/TestimonialSection/TestimonialSection";
import CTASection from "@/app/CTASection/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "https://webbinghub.io/en/" },
};

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);

  return (
    <>
      <HeroSection locale={locale} t={t.hero} />
      <TrustBar t={t.trustBar} />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <BrandsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
