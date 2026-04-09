import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { TextEffect } from '@/components/ui/text-effect';
import { HeroHeader } from '@/components/blocks/hero-section';
import { ContactSection } from '@/components/blocks/contact-section';
import { FooterSection } from '@/components/blocks/footer-section';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <div className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <MessageSquare className="h-4 w-4" />
              Contact Us
            </div>
            <TextEffect
              preset="blur"
              className="text-4xl md:text-6xl font-bold font-display text-hero-foreground leading-tight max-w-3xl"
            >
              Let&apos;s Build Something Great Together
            </TextEffect>
            <TextEffect
              per="word"
              preset="fade"
              delay={0.2}
              className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl leading-relaxed"
            >
              Tell us what you are building and our team will help you plan the right path from idea to production.
            </TextEffect>
          </motion.div>
        </div>
      </div>

      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default ContactUs;
