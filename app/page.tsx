import { HeroSection } from "./(sections)/hero";
import { AISection } from "./(sections)/ai";
import { SiteworksSection } from "./(sections)/siteworks";
import { AutomationsSection } from "./(sections)/automations";
import { WorkSection } from "./(sections)/work";
import { MyloSection } from "./(sections)/mylo";
import { StackSection } from "./(sections)/stack";
import { Footer } from "./(sections)/footer";
import { Nav } from "@/components/nav";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "George Burduhos",
  url: "https://georgeburduhos.com",
  jobTitle: "Software Engineer",
  email: "mailto:george.burduhos@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cluj-Napoca",
    addressCountry: "RO",
  },
  knowsAbout: ["React Native", "Web Development", "Expo", "TypeScript", "Node.js", "iOS", "Android", "Progressive Web Apps", "Agentic AI"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main>
        <HeroSection />
        <WorkSection />
        <MyloSection />
        <AISection />
        <SiteworksSection />
        <AutomationsSection />
        <StackSection />
      </main>
      <Footer />
    </>
  );
}
