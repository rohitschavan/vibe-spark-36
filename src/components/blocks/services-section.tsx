import { motion } from 'framer-motion';
import { Code, Cloud, Brain, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Brain,
    title: 'Generative AI Solutions',
    description:
      'From AI copilots and chat assistants to workflow automation and RAG systems, we build production-ready generative AI products tailored to your business.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    href: '/ai-solutions',
  },
  {
    icon: Code,
    title: 'AI-Integrated Software Development',
    description:
      'We build secure web and mobile applications that integrate LLMs, vector databases, APIs, and internal systems for real-world AI adoption.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    href: '/ai-integrated-software',
  },
  {
    icon: Cloud,
    title: 'Cloud & AI Infrastructure',
    description:
      'Deploy and scale AI workloads on AWS, Azure, and Google Cloud with observability, cost control, and enterprise-grade reliability.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    href: '/cloud-ai-infrastructure',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">AI-First Services</span>
          <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
            Generative AI <span className="gradient-text">Overview</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI solutions focused on measurable business impact
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-card card-glow border border-border"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-card-foreground">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <Link href={service.href} className="mt-5 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  Explore solution
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
