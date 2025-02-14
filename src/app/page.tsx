import AboutSection from "@/components/AboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import FooterSection from "@/components/FooterSection";

import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection />
      <FeaturedSection />
      <TrustSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
}
