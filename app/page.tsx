import { HeroSection } from "./(sections)/hero";
import { AISection } from "./(sections)/ai";
import { AutomationsSection } from "./(sections)/automations";
import { ExperienceSection } from "./(sections)/experience";
import { LabsSection } from "./(sections)/labs";
import { StackSection } from "./(sections)/stack";
import { Footer } from "./(sections)/footer";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <AISection />
        <AutomationsSection />
        <ExperienceSection />
        <LabsSection />
        <StackSection />
      </main>
      <Footer />
    </>
  );
}
