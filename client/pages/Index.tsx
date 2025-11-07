import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Projects } from "@/components/Projects/Projects";
import { ContactForm } from "@/components/ContactForm/ContactForm";

export default function Index() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      <ContactForm />
    </>
  );
}
