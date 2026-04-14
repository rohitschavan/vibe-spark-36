import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cloud, Server, Shield, Activity, Wallet, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { HeroHeader } from '@/components/blocks/hero-section';
import { FooterSection } from '@/components/blocks/footer-section';

const infrastructurePillars = [
  {
    icon: Server,
    title: 'Scalable AI Runtime',
    description:
      'We design and implement runtime environments that can handle real-world traffic with predictable performance. This includes optimizing inference pipelines, managing compute resources efficiently, and ensuring low-latency responses even under heavy loads. Our infrastructure supports dynamic scaling, allowing your systems to adapt to changing demand without compromising performance or user experience.',
  },
  {
    icon: Shield,
    title: 'Security and Compliance',
    description:
      'Security is a fundamental requirement for any AI system, especially when dealing with sensitive data and model interactions. We implement robust security measures, including encryption, access control, and secure API gateways, to protect your data at every stage. Our solutions align with industry standards and compliance requirements, ensuring your AI operations remain secure, auditable, and trustworthy.',
  },
  {
    icon: Activity,
    title: 'Observability by Default',
    description:
      'Understanding how your AI system behaves in production is essential for continuous improvement. We integrate observability into every layer of your infrastructure, enabling you to track key metrics such as latency, token usage, cost, and response quality. With real-time monitoring and detailed insights, your team can quickly identify issues, optimize performance, and maintain high-quality outputs.',
  },
  {
    icon: Wallet,
    title: 'Cost-Optimized Architecture',
    description:
      'AI workloads can become expensive if not managed properly. We design cost-efficient architectures by optimizing resource allocation, selecting the right models, and implementing smart usage strategies. Our approach ensures that you achieve the best performance while keeping operational costs under control, making your AI initiatives sustainable as they scale.',
  },
];

const outcomes = [
  {
    title: 'Cloud Deployment Patterns',
    desc: 'We define and implement cloud deployment patterns tailored to your business needs, leveraging platforms such as AWS, Azure, and GCP. These patterns ensure consistency, scalability, and reliability across your environments, whether you are running a single service or a complex distributed system.',
  },
  {
    title: 'CI/CD Pipelines for AI Services',
    desc: 'We set up CI/CD pipelines specifically designed for AI services. These pipelines include version control, automated testing, rollback mechanisms, and release management, allowing your team to deploy updates safely and efficiently.',
  },
  {
    title: 'Monitoring & Analytics Dashboards',
    desc: 'We provide customized dashboards that give you visibility into model performance, system health, response quality, and operational costs. This enables data-driven decision-making and helps your team maintain optimal performance at all times.',
  },
  {
    title: 'Operational Playbooks',
    desc: 'We develop operational playbooks that guide your team in handling incidents, scaling systems, and meeting reliability targets. These playbooks ensure that your operations remain smooth and predictable, even in high-pressure scenarios.',
  },
  {
    title: 'Governance Frameworks',
    desc: 'We establish governance frameworks that define policies, access controls, and compliance standards for your AI systems. This ensures that your infrastructure remains secure, compliant, and aligned with enterprise requirements as your organization grows.',
  },
];

const CloudAIInfrastructure = () => {
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
              Modern AI systems require more than just powerful models — they demand robust, scalable, and secure infrastructure that supports real-world usage from pilot to enterprise scale.
            </TextEffect>
          </motion.div>
        </div>
      </div>

      {/* Intro paragraph */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed text-center"
          >
            From early-stage pilots to enterprise-scale deployments, our approach focuses on building a strong technical foundation that enables your AI systems to evolve seamlessly. Whether you are deploying machine learning models, building intelligent applications, or integrating AI into existing systems, we ensure your infrastructure is production-ready and future-proof.
          </motion.p>
        </div>
      </section>

      {/* Core Infrastructure Pillars */}
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
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A well-architected infrastructure is critical to delivering consistent and high-quality AI experiences. We focus on four key pillars that ensure your systems are both reliable and scalable.
            </p>
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

      {/* What You Get */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">What You Get</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-4xl text-foreground">
              Enterprise-Grade Operations for <span className="gradient-text">AI Workloads</span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              Our goal is to provide you with a complete operational framework that enables your team to build, deploy, and manage AI systems with confidence. We go beyond infrastructure setup to establish the processes and standards required for long-term success.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl bg-card border border-border p-6 card-glow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <h3 className="text-base font-bold font-display text-card-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                Plan Your Infrastructure
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CloudAIInfrastructure;
