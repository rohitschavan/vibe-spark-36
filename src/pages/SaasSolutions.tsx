import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Layers,
  ArrowRight,
  Rocket,
  Users,
  CreditCard,
  Shield,
  BarChart3,
  Globe,
  Zap,
  Settings,
  RefreshCw,
  Headphones,
  Lock,
  Database,
  Cloud,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { HeroHeader } from '@/components/blocks/hero-section';
import { FooterSection } from '@/components/blocks/footer-section';

const whyChoose = [
  {
    icon: Rocket,
    title: 'Rapid Time to Market',
    description:
      'We use proven frameworks and agile methodologies to launch your SaaS product faster without compromising quality.',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description:
      'Every interface we build is designed with the end user in mind, ensuring intuitive experiences that drive adoption and retention.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description:
      'From data encryption to role-based access control, we build SaaS platforms that meet the highest security and compliance standards.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Pricing Models',
    description:
      'We implement subscription billing, usage-based pricing, freemium tiers, and more to match your business strategy.',
  },
];

const impactMetrics = [
  { value: '50+ SaaS Products', description: 'Built and deployed across multiple industries' },
  { value: '99.9% Uptime', description: 'Reliable infrastructure designed for high availability' },
  { value: '3x Faster Launch', description: 'Accelerated development with reusable modules' },
  { value: 'Global Scale', description: 'Multi-tenant architecture ready for worldwide users' },
];

const saasServices = [
  {
    icon: Layers,
    title: 'Multi-Tenant Architecture',
    description:
      'We design SaaS platforms with robust multi-tenant architecture that isolates data, ensures security, and scales effortlessly as your user base grows.',
  },
  {
    icon: CreditCard,
    title: 'Subscription and Billing Systems',
    description:
      'Integrate payment gateways, recurring billing, invoicing, and subscription management with platforms like Stripe, Razorpay, and PayPal.',
  },
  {
    icon: BarChart3,
    title: 'Analytics and Reporting Dashboards',
    description:
      'Build interactive dashboards with real-time data visualization, custom reports, and actionable insights for your users and internal teams.',
  },
  {
    icon: Globe,
    title: 'API-First Development',
    description:
      'We build SaaS products with a robust API layer, enabling seamless integrations with third-party tools, mobile apps, and partner ecosystems.',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description:
      'Automate onboarding, notifications, task management, and internal workflows to reduce manual effort and improve user experience.',
  },
  {
    icon: Settings,
    title: 'White-Label and Customization',
    description:
      'Offer your clients a branded experience with white-label capabilities, custom themes, and configurable feature sets.',
  },
  {
    icon: Lock,
    title: 'Authentication and Access Control',
    description:
      'Implement SSO, OAuth, multi-factor authentication, and granular role-based permissions to secure your platform.',
  },
];

const advancedCapabilities = [
  {
    icon: Cloud,
    title: 'Cloud-Native Deployment',
    description:
      'Deploy on AWS, Azure, or Google Cloud with containerized microservices, auto-scaling, and CI/CD pipelines for continuous delivery.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Updates and Iteration',
    description:
      'We follow agile practices with regular sprints, ensuring your SaaS product evolves based on user feedback and market demands.',
  },
  {
    icon: Database,
    title: 'Data Migration and Integration',
    description:
      'Seamlessly migrate data from legacy systems and integrate with CRMs, ERPs, and other enterprise tools.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support and Maintenance',
    description:
      'Our dedicated support team monitors, maintains, and optimizes your SaaS platform for peak performance around the clock.',
  },
];

const industries = [
  { icon: BarChart3, name: 'FinTech', description: 'Payment platforms, lending systems, and financial analytics' },
  { icon: Users, name: 'EdTech', description: 'Learning management systems, virtual classrooms, and assessment tools' },
  { icon: Headphones, name: 'HealthTech', description: 'Telemedicine, patient management, and health analytics platforms' },
  { icon: Globe, name: 'E-Commerce', description: 'Marketplace platforms, inventory management, and order fulfillment' },
  { icon: Settings, name: 'HRTech', description: 'Recruitment platforms, payroll systems, and employee management tools' },
  { icon: Layers, name: 'PropTech', description: 'Property management, real estate marketplaces, and tenant portals' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function SaasSolutions() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      {/* Hero */}
      <section className="relative hero-section overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--vibe-blue)/0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-hero-muted/20 bg-hero-muted/5 px-4 py-1.5 text-sm text-hero-muted mb-6">
              <Layers className="h-4 w-4" />
              SaaS Platform Development
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-hero-foreground leading-tight">
              <TextEffect preset="blur" as="span" className="text-hero-foreground">
                Build Scalable SaaS
              </TextEffect>
              <br />
              <span className="gradient-text">Platforms That Grow With You</span>
            </h1>
            <p className="text-lg text-hero-muted max-w-2xl mb-10 leading-relaxed">
              From idea to launch and beyond, we design, develop, and scale SaaS products that deliver recurring value to your users and sustainable growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-vibe-blue to-vibe-purple hover:opacity-90 text-primary-foreground border-0"
              >
                <Link href="/contact">
                  Start Your SaaS Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                  className="rounded-full border-hero-muted/30 bg-transparent text-hero-foreground hover:bg-hero-muted/10 hover:text-hero-foreground"
              >
                <a href="#services">Explore Our Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={metric.value}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Build Your SaaS With <span className="gradient-text">Vibe IT Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine deep technical expertise with product thinking to deliver SaaS platforms that users love and businesses rely on.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-vibe-blue/10 to-vibe-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core SaaS Services */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our SaaS Development <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end SaaS development capabilities to bring your product vision to life.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saasServices.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-vibe-blue/10 to-vibe-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Beyond Development: <span className="gradient-text">Full Lifecycle Support</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We do not just build and walk away. Our team supports your SaaS product through every stage of its journey.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {advancedCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-5 p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-vibe-blue/10 to-vibe-purple/10 flex items-center justify-center">
                  <cap.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have built SaaS platforms across diverse industries, understanding the unique challenges and opportunities each one presents.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="h-14 w-14 mx-auto rounded-xl bg-gradient-to-br from-vibe-blue/10 to-vibe-purple/10 flex items-center justify-center mb-4">
                  <ind.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{ind.name}</h3>
                <p className="text-sm text-muted-foreground">{ind.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our SaaS Development <span className="gradient-text">Process</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery and Planning', desc: 'We understand your vision, define the product scope, identify target users, and create a detailed roadmap.' },
              { step: '02', title: 'Design and Prototyping', desc: 'Our design team creates wireframes, user flows, and interactive prototypes to validate the experience before development.' },
              { step: '03', title: 'Development and Testing', desc: 'We build using modern tech stacks with continuous integration, automated testing, and code reviews at every stage.' },
              { step: '04', title: 'Launch and Scale', desc: 'We deploy your SaaS product, monitor performance, and iterate based on real user feedback to ensure sustainable growth.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative p-6 rounded-2xl border border-border bg-card"
              >
                <span className="text-5xl font-bold gradient-text opacity-30 absolute top-4 right-4">{item.step}</span>
                <h3 className="font-display font-semibold text-foreground mb-2 mt-8">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-section">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-hero-foreground mb-6">
              Ready to Build Your <span className="gradient-text">SaaS Platform</span>?
            </h2>
            <p className="text-hero-muted mb-8 max-w-2xl mx-auto">
              Whether you are launching a new product or scaling an existing platform, our team is ready to help you succeed. Let us turn your idea into a market-ready SaaS solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-vibe-blue to-vibe-purple hover:opacity-90 text-primary-foreground border-0"
              >
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-hero-muted">
              {['No upfront commitment', 'Free initial consultation', 'NDA-protected discussions'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-vibe-cyan" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
