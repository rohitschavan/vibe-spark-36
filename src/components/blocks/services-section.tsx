import { motion } from 'framer-motion';
import { Code, Cloud, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Transform your business with high-quality web applications using ReactJS, Angular, and NodeJS. Our expertise extends to mobile development with React Native and Ionic, delivering robust and intuitive solutions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
  },
  {
    icon: Cloud,
    title: 'Hosting & Cloud Solutions',
    description:
      'Elevate your business with comprehensive cloud solutions. We provide expert services in AWS, Azure, and Google Cloud for scalable, secure, and efficient infrastructure tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    icon: Brain,
    title: 'Generative AI Solutions',
    description:
      'Unlock the potential of AI with cutting-edge generative AI solutions. We create intelligent systems that enhance productivity, drive decision-making, and foster innovation for your business.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
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
          <span className="text-sm font-medium uppercase tracking-widest text-primary">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
            Services <span className="gradient-text">Overview</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions to bring your vision to life
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
