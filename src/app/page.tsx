import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { TapeSection } from "@/sections/Tape";
import { ProjectsSection } from "@/sections/Projects";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <AboutSection/>
      <TapeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}