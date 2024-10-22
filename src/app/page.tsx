import HeroSection from "@/app/HeroSection/HeroSection";
import AnyIdeaSection from "./AnyIdeaSection/AnyIdeaSection";
import VisionExpertiseSection from "./VisionExpertiseSection/VisionExpertiseSection";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://webbinghub.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnyIdeaSection />
      <VisionExpertiseSection />
    </>
  );
}
