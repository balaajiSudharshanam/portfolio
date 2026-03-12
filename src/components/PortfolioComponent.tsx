import { AboutSection } from "@/app/sections/AboutSection";
import { HeroSection } from "./HeroSection";
// import Testimonal from "@/sanity/schemaTypes/testimonal";
import TestimonialSection from "@/app/sections/TestimonialSection";
import { SkillsSection } from "@/app/sections/SkillSection";
import { ExperienceSection } from "@/app/sections/ExperienceSection";
import { EducationSection } from "@/app/sections/EducationSections";
import { ProjectsSection } from "@/app/sections/ProjectSection";
import { CertificationsSection } from "@/app/sections/CertificationsSection";
import { ContactSection } from "@/app/sections/ContactSection";

async function PortfolioComponent() {
  return(
  <>
  <HeroSection />
  <AboutSection/>
  <TestimonialSection/>
  <SkillsSection/>
  <ExperienceSection/>
  <EducationSection/>
  <ProjectsSection/>
  <CertificationsSection/>
  <ContactSection/>
  </>
);
}
export default PortfolioComponent;
