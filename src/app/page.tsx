import HeroSection from "@/app/HeroSection/HeroSection";
import AnyIdeaSection from "./AnyIdeaSection/AnyIdeaSection";
import VisionExpertiseSection from "./VisionExpertiseSection/VisionExpertiseSection";
import { Metadata } from "next/types";
import OwnItSection from "./OwnItSection/OwnItSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://webbinghub.io",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <OwnItSection />
      <AnyIdeaSection />
      <VisionExpertiseSection />
    </>
  );
}
