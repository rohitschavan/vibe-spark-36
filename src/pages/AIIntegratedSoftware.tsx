import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Blocks, Link2, ShieldCheck, Gauge, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FooterSection } from '@/components/blocks/footer-section';

const capabilities = [
  {
    icon: Blocks,
    title: 'Product-Ready Architecture',
    description: 'We design AI-enabled web and mobile systems with reliable APIs, scalable services, and clean maintainable codebases.',
  },
  {
    icon: Link2,
    title: 'LLM and System Integrations',
    description: 'Connect LLM providers, vector stores, CRMs, ERPs, and internal tools into one seamless user experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    description: 'Role based access, auditability, and guardrails are built in from day one for enterprise-grade safety.',
  },
  {
    icon: Gauge,
    title: 'Performance and Reliability',
    description: 'We optimize latency, throughput, and failure handling so AI features remain dependable at scale.',
  },
];

const engagementSteps = [
  'Discovery workshops to define high-impact AI use cases',
  'Technical design for data flow, model choice, and integration points',
  'Incremental delivery with demos and stakeholder feedback loops',
  'Production hardening with testing, monitoring, and governance',
  'Continuous optimization after launch to improve business outcomes',
];

const AIIntegratedSoftware = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-hero-muted hover:text-hero-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Code className="h-4 w-4" />
              AI-Integrated Software Development
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-hero-foreground leading-tight max-w-3xl">
              Build Modern Apps with <span className="gradient-text">AI at the Core</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl leading-relaxed">
              We combine strong software engineering with applied AI to deliver products that are secure, scalable, and ready for real users.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">What We Build</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
              Engineering for <span className="gradient-text">Real Adoption</span>
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
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

      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-primary">How We Engage</span>
              <h2 className="mt-4 text-3xl font-bold font-display md:text-4xl text-foreground">
                End-to-End Delivery with <span className="gradient-text">Clear Milestones</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every project is scoped for measurable outcomes, delivered in iterative phases, and supported with long-term technical ownership.
              </p>
              <Link to="/#contact" className="mt-8 inline-block">
                <Button size="lg" className="rounded-full">
                  Discuss Your Product
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {engagementSteps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3 rounded-xl bg-card border border-border p-4"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-card-foreground leading-relaxed">{step}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AIIntegratedSoftware;
