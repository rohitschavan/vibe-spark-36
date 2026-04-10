import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  ArrowRight,
  Briefcase,
  Handshake,
  ShieldCheck,
  CircleDollarSign,
  Bot,
  MessagesSquare,
  Eye,
  Sparkles,
  FileSearch,
  TrendingUp,
  Network,
  Wrench,
  Plug,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { HeroHeader } from '@/components/blocks/hero-section';
import { FooterSection } from '@/components/blocks/footer-section';

const whyChoose = [
  {
    icon: Briefcase,
    title: 'Industry-Focused Expertise',
    description:
      "Our AI teams understand your business domain, whether it's finance, healthcare, retail, or logistics, helping us deliver faster and more relevant solutions.",
  },
  {
    icon: Handshake,
    title: 'Flexible Engagement Models',
    description: 'Work with us your way, onshore, offshore, or hybrid, ensuring seamless collaboration and transparency.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Technology Partner',
    description: 'We focus on long-term partnerships, delivering scalable, secure, and future-ready AI systems.',
  },
  {
    icon: CircleDollarSign,
    title: 'Cost-Effective Innovation',
    description: 'Get enterprise-grade AI solutions without enterprise-level costs.',
  },
];

const impactMetrics = [
  { value: '10x Faster Operations', description: 'Automate repetitive processes and accelerate workflows' },
  { value: '70% Cost Optimization', description: 'Reduce manual effort and operational expenses' },
  { value: '90% Productivity Boost', description: 'Free your team to focus on strategic tasks' },
  { value: 'Data-Driven Decisions', description: 'Turn raw data into actionable insights instantly' },
];

const aiServices = [
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'We build intelligent systems that learn from your data to predict outcomes, detect patterns, and automate decision-making.',
  },
  {
    icon: Bot,
    title: 'Robotic Process Automation (RPA)',
    description: 'Automate repetitive tasks like data entry, document handling, and workflows to improve efficiency and accuracy.',
  },
  {
    icon: MessagesSquare,
    title: 'Natural Language Processing (NLP)',
    description: 'Enable machines to understand and respond to human language, ideal for chatbots, sentiment analysis, and document processing.',
  },
  {
    icon: MessagesSquare,
    title: 'Conversational AI',
    description: 'Build smart virtual assistants and AI chatbots to enhance customer support and internal operations.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Leverage image recognition, object detection, and visual intelligence for automation and analytics.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI Solutions',
    description: 'Develop AI systems that create content, text, images, code, and more, to boost productivity and innovation.',
  },
  {
    icon: FileSearch,
    title: 'Intelligent Document Processing',
    description: 'Extract, classify, and manage data from documents automatically with high accuracy.',
  },
];

const advancedCapabilities = [
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Make smarter decisions with AI models that forecast trends, risks, and opportunities.',
  },
  {
    icon: Network,
    title: 'Deep Learning Models',
    description: 'We design advanced neural networks for complex use cases like speech recognition, recommendation engines, and fraud detection.',
  },
  {
    icon: Wrench,
    title: 'Custom AI Development',
    description: 'Every business is unique, so are our AI solutions. We build tailored systems aligned with your goals.',
  },
  {
    icon: Plug,
    title: 'AI Integration Services',
    description: 'Seamlessly integrate AI into your existing applications, workflows, and infrastructure.',
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Improve diagnostics, patient care, and operational efficiency using AI-driven insights.',
  },
  {
    icon: Landmark,
    title: 'Finance',
    description: 'Enhance fraud detection, automate risk analysis, and optimize financial operations.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    description: 'Deliver personalized experiences, smart recommendations, and inventory optimization.',
  },
  {
    icon: Truck,
    title: 'Logistics & Transportation',
    description: 'Optimize routes, forecast demand, and improve supply chain efficiency.',
  },
];

const approachSteps = [
  {
    title: 'Discover & Strategize',
    description: 'We understand your business goals and identify AI opportunities.',
  },
  {
    title: 'Design & Develop',
    description: 'Build scalable AI models using the latest tools and technologies.',
  },
  {
    title: 'Integrate & Deploy',
    description: 'Seamlessly integrate AI into your systems with minimal disruption.',
  },
  {
    title: 'Monitor & Optimize',
    description: 'Continuously improve performance with ongoing support and enhancements.',
  },
];

const AISolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
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
              <Brain className="h-4 w-4" />
              AI Solutions
            </div>
            <TextEffect
              preset="blur"
              className="text-4xl md:text-6xl font-bold font-display text-hero-foreground leading-tight max-w-3xl"
            >
              Transform Your Business with Intelligent AI Solutions
            </TextEffect>
            <TextEffect
              per="word"
              preset="fade"
              delay={0.2}
              className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl leading-relaxed"
            >
              At Vibe IT Solutions, we empower businesses to scale faster, operate smarter, and innovate continuously using cutting-edge Artificial Intelligence. From automation to predictive insights, our AI solutions are designed to solve real-world business challenges.
            </TextEffect>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Request a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#why-choose">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-hero-muted/40 bg-transparent text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <section id="why-choose" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Why Choose Us</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
              Why Choose <span className="gradient-text">Vibe IT Solutions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A trusted partner for practical AI adoption and measurable business value
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-card border border-border p-8 card-glow"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-card-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">AI Impact</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
              AI Impact That <span className="gradient-text">Drives Results</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl bg-card border border-border p-8"
              >
                <h3 className="text-2xl font-bold font-display text-card-foreground">{metric.value}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Our Services</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">Our AI Services</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl bg-card border border-border p-8"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-card-foreground">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Capabilities</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
              Advanced AI <span className="gradient-text">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {advancedCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl bg-card border border-border p-8"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-card-foreground">{capability.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Industries</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
              AI Across <span className="gradient-text">Industries</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl bg-card border border-border p-8"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-card-foreground">{industry.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Our Approach</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">How We Deliver AI Success</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {approachSteps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-3 rounded-xl bg-card border border-border p-5">
                <div className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-card-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 hero-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 left-1/3 h-48 w-48 rounded-full bg-primary blur-[80px]" />
          <div className="absolute bottom-1/3 right-1/3 h-48 w-48 rounded-full bg-accent blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            <h2 className="text-3xl md:text-5xl font-bold font-display text-hero-foreground">
              Ready to Build Your Next <span className="gradient-text">AI Initiative</span>?
            </h2>
            <p className="mt-6 text-lg text-hero-muted max-w-xl mx-auto">
              Partner with Vibe IT Solutions to plan, build, and scale intelligent solutions tailored to your business goals.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Request a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AISolutions;
