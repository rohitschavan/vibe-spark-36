import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@vibeitsolutions.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 hero-section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-hero-muted">Get In Touch</span>
          <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-hero-foreground">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-hero-foreground">Email</h3>
                <a href="mailto:info@vibeitsolutions.com" className="text-hero-muted hover:text-primary transition-colors">
                  info@vibeitsolutions.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-hero-foreground">Phone</h3>
                <a href="tel:+919823885440" className="text-hero-muted hover:text-primary transition-colors">
                  +91 9823885440
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-hero-foreground">Pune</h3>
                <p className="text-hero-muted text-sm">
                  4th Floor, Balaji Business Centre, Pashan Hwy Side Rd, Baner, Pune, Maharashtra 411045
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-hero-foreground">Ranchi</h3>
                <p className="text-hero-muted text-sm">
                  405 Savera Enclave, Piska More, Ranchi, Jharkhand-834005
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-hero-muted/10 bg-hero/50 backdrop-blur p-8"
          >
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-hero-muted/5 border-hero-muted/90 text-hero-foreground placeholder:text-hero-muted/95"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-hero-muted/5 border-hero-muted/90 text-hero-foreground placeholder:text-hero-muted/95"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-hero-muted/5 border-hero-muted/90 text-hero-foreground placeholder:text-hero-muted/95"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full gap-2 bg-gradient-to-r from-vibe-blue to-vibe-purple hover:opacity-90 text-primary-foreground border-0">
              Send Message
              <Send className="h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
