import { Metadata } from "next/types";
import HeroSection from "@/app/HeroSection/HeroSection";
import TrustBar from "@/app/TrustBar/TrustBar";
import AboutSection from "@/app/AboutSection/AboutSection";
import ServicesSection from "@/app/ServicesSection/ServicesSection";
import ProcessSection from "@/app/ProcessSection/ProcessSection";
import BrandsSection from "@/app/BrandsSection/BrandsSection";
import TestimonialSection from "@/app/TestimonialSection/TestimonialSection";
import CTASection from "@/app/CTASection/CTASection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://webbinghub.io/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <BrandsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
