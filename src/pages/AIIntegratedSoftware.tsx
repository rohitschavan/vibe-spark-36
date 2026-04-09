import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Blocks, Link2, ShieldCheck, Gauge, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { HeroHeader } from '@/components/blocks/hero-section';
import { FooterSection } from '@/components/blocks/footer-section';

const capabilities = [
  {
    icon: Blocks,
    title: 'Product-Ready Architecture',
    description:
      'We design and develop AI-enabled web and mobile applications with clean code, modular services, and well-defined APIs for long-term maintainability.',
    details: [
      'Our architecture supports scalability from the beginning, whether your product serves hundreds or millions of users.',
      'We focus on clarity in structure so your internal teams can understand, extend, and maintain the platform.',
      'AI components are integrated into the core product experience rather than delivered as isolated features.',
    ],
  },
  {
    icon: Link2,
    title: 'LLM and System Integrations',
    description:
      'We integrate large language models, vector databases, CRMs, ERPs, and internal tools into a unified ecosystem.',
    details: [
      'Connecting LLM providers for conversational interfaces, automation, and decision support',
      'Implementing vector search for semantic retrieval and knowledge-based applications',
      'Integrating business systems such as CRM and ERP platforms for context-aware workflows',
      'Building custom pipelines that allow data to flow securely and efficiently across systems',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    description: 'Security is built into every layer from day one, not treated as an afterthought.',
    details: [
      'Role-based access control so users only access what they are authorized to use',
      'Auditability for tracking and reviewing every critical action',
      'AI guardrails to reduce misuse, hallucinations, and data integrity issues',
      'Input validation, output filtering, and policy enforcement for safer operations',
    ],
  },
  {
    icon: Gauge,
    title: 'Performance and Reliability',
    description: 'We optimize every layer so AI systems remain fast and dependable in real-world usage.',
    details: [
      'Reducing latency in model responses for smoother user experiences',
      'Optimizing throughput to support high request volumes',
      'Designing failover mechanisms to maintain availability during disruptions',
      'Implementing monitoring and alerting for proactive issue resolution',
    ],
  },
];

const engagementPhases = [
  {
    title: 'Discovery and Use Case Definition',
    description:
      'We begin with focused workshops to understand your business, users, and goals, then prioritize high-impact AI use cases aligned with your strategy.',
  },
  {
    title: 'Technical Design and Planning',
    description:
      'Once use cases are defined, we design the technical foundation for long-term scalability, maintainability, and control.',
    points: [
      'Data flow architecture and system interactions',
      'Model selection based on performance, cost, and use case requirements',
      'Integration planning across internal and external systems',
      'Security and governance considerations',
    ],
  },
  {
    title: 'Incremental Delivery',
    description:
      'We follow an iterative process with regular demos and feedback cycles, so stakeholders see value early and requirements stay grounded in real outcomes.',
  },
  {
    title: 'Production Hardening',
    description: 'Before launch, we ensure the system is stable, secure, and ready for real users.',
    points: [
      'Comprehensive testing across edge cases and real-world scenarios',
      'Performance tuning to handle scale',
      'Monitoring and logging setup for visibility and control',
      'Governance frameworks to manage AI behavior and outputs',
    ],
  },
  {
    title: 'Continuous Optimization',
    description:
      'Post-launch, we improve performance and business outcomes continuously based on usage data and feedback.',
    points: [
      'Improving model performance and accuracy',
      'Enhancing user workflows based on feedback',
      'Reducing operational costs through optimization',
      'Expanding capabilities as new opportunities emerge',
    ],
  },
];

const AIIntegratedSoftware = () => {
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
              <Code className="h-4 w-4" />
              AI-Integrated Software Development
            </div>
            <TextEffect
              preset="blur"
              className="text-4xl md:text-6xl font-bold font-display text-hero-foreground leading-tight max-w-3xl"
            >
              Build Modern Applications with Intelligence at the Core
            </TextEffect>
            <TextEffect
              per="word"
              preset="fade"
              delay={0.2}
              className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl leading-relaxed"
            >
              Software is no longer just about features. It is about intelligence, adaptability, and delivering meaningful outcomes for users. We design and build AI-integrated applications where AI is a foundational layer.
            </TextEffect>
            <p className="mt-4 text-base md:text-lg text-hero-muted max-w-3xl leading-relaxed">
              Our approach combines deep software engineering expertise with practical AI implementation. The result is production-ready systems that are scalable, secure, and aligned with real business needs.
            </p>
            <p className="mt-4 text-base md:text-lg text-hero-muted max-w-3xl leading-relaxed">
              We focus on creating systems that users trust, teams can maintain, and businesses can scale.
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
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Successful AI products are not just technically impressive. They are reliable, intuitive, and aligned with how users actually work.
            </p>
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
                <div className="mt-4 space-y-2">
                  {item.details.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                      <p className="text-sm text-card-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">How We Engage</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-4xl text-foreground">
              End-to-End Delivery with <span className="gradient-text">Clear Milestones</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We follow a structured and transparent approach where every engagement is designed to deliver measurable outcomes through clearly defined phases. Our process is built to reduce uncertainty, accelerate progress, and ensure that every stage of development contributes directly to your business objectives.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We combine strategic thinking, technical expertise, and continuous collaboration to turn ideas into production-ready AI-powered systems.
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <Button size="lg" className="rounded-full">
                Discuss Your Product
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-12 rounded-2xl bg-card border border-border p-8"
          >
            <h3 className="text-2xl font-bold font-display text-card-foreground">Discuss Your Product</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Every successful project begins with a deep understanding of your product vision. This is not just an introductory conversation. It is a focused engagement where we align on what success looks like and how AI can meaningfully contribute to your product.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We start by understanding your business context, target users, and the problems you are trying to solve. This includes identifying workflow gaps, inefficiencies that can be improved, and opportunities where AI can create competitive advantage.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Our discovery workshops bring together stakeholders, product owners, and technical experts to uncover high-impact use cases and prioritize them based on feasibility, business value, and implementation complexity.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-5">
                <h4 className="text-sm font-semibold text-card-foreground">Scope and Technical Foundation</h4>
                <div className="mt-3 space-y-2">
                  {[
                    'Define product scope, key features, user journeys, and system interactions',
                    'Design data flow architecture and component interactions',
                    'Evaluate model choices across accuracy, cost, latency, and scalability',
                    'Plan integration points for CRMs, ERPs, and internal tools',
                    'Address security, compliance, and access control from day one',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                      <p className="text-sm text-card-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-5">
                <h4 className="text-sm font-semibold text-card-foreground">Execution Clarity and Alignment</h4>
                <div className="mt-3 space-y-2">
                  {[
                    'Define success metrics such as engagement, accuracy, efficiency, and revenue impact',
                    'Create a delivery roadmap with timelines, milestones, and expected outcomes',
                    'Set regular check-ins, progress updates, and feedback workflows',
                    'Identify technical and operational risks early and define mitigation strategies',
                    'Deliver a clear, actionable plan before build execution begins',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                      <p className="text-sm text-card-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              By the end of this phase, you have a clear and actionable plan: the problem being solved, the solution approach, the technology direction, and a roadmap to execution. This foundation enables us to move into delivery with speed, precision, and confidence.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4">
            {engagementPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-3 rounded-xl bg-card border border-border p-4"
              >
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">{phase.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                  {phase.points && (
                    <div className="mt-3 space-y-1.5">
                      {phase.points.map((point) => (
                        <p key={point} className="text-sm text-card-foreground leading-relaxed">
                          - {point}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Build with Confidence</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold font-display text-foreground">
              Practical AI. Reliable Software. <span className="gradient-text">Real Impact.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              AI has the potential to transform how software is built and used. The key is implementing it in a way that is practical, scalable, and aligned with real-world needs.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              If you are planning to build or scale an AI-powered application, we are ready to partner with you.
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <Button size="lg" className="rounded-full">
                Build with Confidence
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

export default AIIntegratedSoftware;
