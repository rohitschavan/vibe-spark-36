import { HeroSection } from '@/components/blocks/hero-section';
import { ServicesSection } from '@/components/blocks/services-section';
import { TechnologiesSection } from '@/components/blocks/technologies-section';
import { WhyChooseUsSection } from '@/components/blocks/why-choose-us-section';
import { ContactSection } from '@/components/blocks/contact-section';
import { FooterSection } from '@/components/blocks/footer-section';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TechnologiesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
