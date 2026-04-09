import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Server, Shield, Activity, Wallet, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { HeroHeader } from '@/components/blocks/hero-section';
import { FooterSection } from '@/components/blocks/footer-section';

const infrastructurePillars = [
  {
    icon: Server,
    title: 'Scalable AI Runtime',
    description: 'Design inference and retrieval infrastructure that handles real traffic with predictable performance.',
  },
  {
    icon: Shield,
    title: 'Security and Compliance',
    description: 'Protect model interactions and data flows with policy controls, encryption, and audit-ready operations.',
  },
  {
    icon: Activity,
    title: 'Observability by Default',
    description: 'Track latency, token usage, costs, and quality signals so teams can tune systems continuously.',
  },
  {
    icon: Wallet,
    title: 'Cost-Optimized Architecture',
    description: 'Right-size cloud resources and model usage strategies to keep AI spend efficient as you scale.',
  },
];

const outcomes = [
  'Production deployment patterns for AWS, Azure, and GCP',
  'CI/CD pipelines for AI services with rollback and release controls',
  'Monitoring dashboards for model behavior, response quality, and cost',
  'Operational playbooks for incidents, scaling, and reliability targets',
  'Governance frameworks for secure enterprise AI operations',
];

const CloudAIInfrastructure = () => {
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
              <Cloud className="h-4 w-4" />
              Cloud & AI Infrastructure
            </div>
            <TextEffect
              preset="blur"
              className="text-4xl md:text-6xl font-bold font-display text-hero-foreground leading-tight max-w-3xl"
            >
              Reliable Foundation for Scalable AI Systems
            </TextEffect>
            <TextEffect
              per="word"
              preset="fade"
              delay={0.2}
              className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl leading-relaxed"
            >
              We architect cloud platforms that keep your AI workloads fast, secure, observable, and cost-efficient from pilot to scale.
            </TextEffect>
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
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Core Infrastructure</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
              Built for <span className="gradient-text">Performance and Trust</span>
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {infrastructurePillars.map((item, index) => (
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
              <span className="text-sm font-medium uppercase tracking-widest text-primary">What You Get</span>
              <h2 className="mt-4 text-3xl font-bold font-display md:text-4xl text-foreground">
                Enterprise-Grade Operations for <span className="gradient-text">AI Workloads</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We establish technical guardrails and operational standards so your teams can ship AI features confidently and sustainably.
              </p>
              <Link to="/contact" className="mt-8 inline-block">
                <Button size="lg" className="rounded-full">
                  Plan Your Infrastructure
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
              {outcomes.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3 rounded-xl bg-card border border-border p-4"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-card-foreground leading-relaxed">{item}</span>
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

export default CloudAIInfrastructure;
