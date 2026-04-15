import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Send, Upload, ChevronRight } from 'lucide-react';
import { TextEffect } from '@/components/ui/text-effect';
import { HeroHeader } from '@/components/blocks/hero-section';
import { FooterSection } from '@/components/blocks/footer-section';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const openPositions = [
  {
    title: 'Full-Stack Developer',
    type: 'Full-time',
    location: 'Pune / Remote',
    description:
      'Build scalable web applications using React, Node.js, and cloud-native technologies.',
  },
  {
    title: 'AI / ML Engineer',
    type: 'Full-time',
    location: 'Pune / Remote',
    description:
      'Design and deploy machine learning models, LLM integrations, and intelligent automation pipelines.',
  },
  {
    title: 'DevOps / Cloud Engineer',
    type: 'Full-time',
    location: 'Pune / Remote',
    description:
      'Architect and manage cloud infrastructure on AWS/Azure/GCP with CI/CD, monitoring, and security best practices.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time / Contract',
    location: 'Remote',
    description:
      'Craft intuitive user experiences and design systems for enterprise SaaS and healthtech products.',
  },
];

const whyJoinUs = [
  {
    title: 'Impactful Work',
    description:
      'Work on products like VIBEITHMS that are transforming healthcare across India.',
  },
  {
    title: 'Growth-First Culture',
    description:
      'Continuous learning, mentorship, and opportunities to work with cutting-edge AI and cloud technologies.',
  },
  {
    title: 'Flexible & Remote',
    description:
      'We support hybrid and fully remote work so you can do your best work from anywhere.',
  },
  {
    title: 'Collaborative Team',
    description:
      'A tight-knit team that values ownership, transparency, and shipping quality software.',
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Career Enquiry – ${formData.position || 'General'} | ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPosition: ${formData.position}\nExperience: ${formData.experience}\nPortfolio: ${formData.portfolio}\n\nMessage:\n${formData.message}`
    );

    window.open(
      `mailto:careers@vibeitsolutions.com?subject=${subject}&body=${body}`,
      '_self'
    );

    toast({
      title: 'Opening your email client…',
      description:
        'Your career enquiry details have been pre-filled. Just hit Send!',
    });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      {/* Hero */}
      <div className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Briefcase className="h-4 w-4" />
              Careers
            </div>
            <TextEffect
              preset="blur"
              className="text-4xl md:text-6xl font-bold font-display text-hero-foreground leading-tight max-w-3xl"
            >
              Join the Team Building the Future
            </TextEffect>
            <TextEffect
              per="word"
              preset="fade"
              delay={0.2}
              className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl leading-relaxed"
            >
              We are looking for passionate engineers, designers, and thinkers
              who want to create software that makes a real difference.
            </TextEffect>
          </motion.div>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display text-foreground text-center mb-12"
          >
            Why Join{' '}
            <span className="gradient-text">Vibe IT Solutions?</span>
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyJoinUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-border bg-card p-6 card-glow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display text-foreground text-center mb-4"
          >
            Open Positions
          </motion.h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Don&apos;t see a role that fits? Submit a general enquiry below —
            we&apos;re always on the lookout for great talent.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {openPositions.map((pos, i) => (
              <motion.div
                key={pos.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 card-glow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {pos.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {pos.type}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {pos.location}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {pos.description}
                </p>
                <a
                  href="#career-form"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Apply Now <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Enquiry Form */}
      <section id="career-form" className="py-20 bg-muted/30">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground text-center mb-4">
              Career Enquiry
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
              Fill in the form below and we&apos;ll get back to you.
              Alternatively, email us at{' '}
              <a
                href="mailto:careers@vibeitsolutions.com"
                className="text-primary hover:underline"
              >
                careers@vibeitsolutions.com
              </a>
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 rounded-2xl border border-border bg-card p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  maxLength={100}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  maxLength={255}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98238 85440"
                  maxLength={20}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Position of Interest <span className="text-destructive">*</span>
                </label>
                <Select
                  value={formData.position}
                  onValueChange={(val) =>
                    setFormData((prev) => ({ ...prev, position: val }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {openPositions.map((p) => (
                      <SelectItem key={p.title} value={p.title}>
                        {p.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Years of Experience
                </label>
                <Input
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 3 years"
                  maxLength={50}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Portfolio / LinkedIn URL
                </label>
                <Input
                  name="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  maxLength={500}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">
                Tell us about yourself
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Brief summary of your skills, experience, and what excites you about Vibe IT Solutions…"
                rows={5}
                maxLength={2000}
              />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <Send className="h-4 w-4 mr-2" />
              Submit Enquiry
            </Button>

            <p className="text-xs text-muted-foreground">
              You can also reach us at{' '}
              <a
                href="mailto:careers@vibeitsolutions.com"
                className="text-primary hover:underline"
              >
                careers@vibeitsolutions.com
              </a>{' '}
              or call{' '}
              <a
                href="tel:+919823885440"
                className="text-primary hover:underline"
              >
                +91 9823885440
              </a>
            </p>
          </motion.form>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Careers;
