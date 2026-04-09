import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Database, Cpu, Zap, CheckCircle, ArrowRight, Layers, MessageSquare, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FooterSection } from '@/components/blocks/footer-section';

const benefits = [
  {
    icon: Zap,
    title: 'Faster Decision Making',
    description: 'AI systems process and analyze data in real time, enabling businesses to make informed decisions quickly and accurately.',
  },
  {
    icon: Layers,
    title: 'Contextual Understanding',
    description: 'RAG combines retrieval and generation to provide responses grounded in your actual business data, reducing hallucinations and improving accuracy.',
  },
  {
    icon: Database,
    title: 'Knowledge Base Integration',
    description: 'Connect your existing documents, databases, and knowledge bases to AI models, making them aware of your specific domain and context.',
  },
  {
    icon: MessageSquare,
    title: 'Intelligent Customer Support',
    description: 'Build AI assistants that understand your products, policies, and customer history to provide accurate and helpful responses.',
  },
  {
    icon: Search,
    title: 'Semantic Search',
    description: 'Go beyond keyword matching with AI powered search that understands intent and meaning, delivering more relevant results from your data.',
  },
  {
    icon: Cpu,
    title: 'Process Automation',
    description: 'Automate complex workflows by combining AI reasoning with access to your internal systems and data sources.',
  },
];

const howWeHelp = [
  'Custom RAG pipeline development tailored to your data sources and business requirements',
  'Integration of AI models with your existing applications and infrastructure',
  'Vector database setup and optimization for efficient knowledge retrieval',
  'Fine tuning and prompt engineering to maximize accuracy for your use cases',
  'End to end AI application development from concept to production deployment',
  'Ongoing monitoring, evaluation, and improvement of AI system performance',
  'Data preparation and preprocessing pipelines for high quality AI inputs',
  'Security and compliance implementation for AI systems handling sensitive data',
];

const AISolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Brain className="h-4 w-4" />
              AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-hero-foreground leading-tight max-w-3xl">
              AI Integration and <span className="gradient-text">RAG Solutions</span> for Your Business
            </h1>
            <p className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl leading-relaxed">
              Leverage the power of Retrieval Augmented Generation and intelligent AI integration to transform your applications with context aware, accurate, and reliable AI capabilities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact-section">
                <Button size="lg" className="rounded-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#benefits">
                <Button size="lg" variant="outline" className="rounded-full border-hero-muted/30 text-hero-foreground hover:bg-hero-foreground/10">
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What is RAG */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-primary">Understanding RAG</span>
              <h2 className="mt-4 text-3xl font-bold font-display md:text-4xl text-foreground">
                What is Retrieval Augmented Generation?
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Retrieval Augmented Generation (RAG) is a technique that enhances AI language models by connecting them to external knowledge sources. Instead of relying solely on training data, RAG systems retrieve relevant information from your documents, databases, and knowledge bases before generating responses.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                This approach significantly improves the accuracy and reliability of AI outputs. By grounding responses in actual data, RAG reduces hallucinations and ensures that the AI provides information that is relevant, up to date, and specific to your business context.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                RAG is particularly valuable for enterprises that need AI systems to work with proprietary data without exposing that data during model training. It allows organizations to maintain control over their information while still benefiting from advanced AI capabilities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
                alt="AI and data integration visualization"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Benefits</span>
            <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
              Why Integrate AI and <span className="gradient-text">RAG</span> into Your Applications
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your applications with intelligent, context aware AI capabilities
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-card border border-border p-8 card-glow"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-card-foreground">{benefit.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Vibe IT Solutions Can Help */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-primary">Our Expertise</span>
              <h2 className="mt-4 text-3xl font-bold font-display md:text-4xl text-foreground">
                How Vibe IT Solutions Can <span className="gradient-text">Help You</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                At Vibe IT Solutions, we specialize in building AI powered applications that deliver real business value. Our team combines deep technical expertise with a practical understanding of business challenges to create solutions that work.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you need to build a customer facing AI assistant, automate internal processes, or integrate AI capabilities into your existing software, we have the experience and skills to make it happen. We work with you from initial concept through production deployment and ongoing optimization.
              </p>
              <a href="/#contact" className="mt-8 inline-block">
                <Button size="lg" className="rounded-full">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {howWeHelp.map((item, index) => (
                <motion.div
                  key={index}
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

      {/* CTA */}
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
              Ready to Build with <span className="gradient-text">AI</span>?
            </h2>
            <p className="mt-6 text-lg text-hero-muted max-w-xl mx-auto">
              Partner with Vibe IT Solutions to integrate intelligent AI capabilities into your applications. Let us help you unlock the full potential of your data.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link to="/#contact">
                <Button size="lg" className="rounded-full">
                  Contact Us
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
