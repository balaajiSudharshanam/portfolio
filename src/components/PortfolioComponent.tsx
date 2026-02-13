import { AboutSection } from "@/app/sections/AboutSection";
import { HeroSection } from "./HeroSection";
// import Testimonal from "@/sanity/schemaTypes/testimonal";
import TestimonialSection from "@/app/sections/TestimonialSection";
import { SkillsSection } from "@/app/sections/SkillSection";

async function PortfolioComponent() {
  return(
  <>
  <HeroSection />
  <AboutSection/>
  <TestimonialSection/>
  <SkillsSection/>
  </>
);
}
export default PortfolioComponent;
