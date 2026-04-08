import { motion } from 'framer-motion';
import { Award, Users, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Experience & Expertise',
    description:
      'Our team boasts extensive experience and deep expertise in custom software development, cloud solutions, and AI technologies.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description:
      'We prioritize our clients\' needs and goals, ensuring we understand and meet their requirements through a collaborative and tailored approach.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Reliable Support',
    description:
      'We provide ongoing support and maintenance services to ensure the long-term success and performance of our solutions.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Why Us</span>
          <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
            Why Choose <span className="gradient-text">Vibe IT</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card card-glow border border-border"
            >
              <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-2xl p-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-card-foreground">{reason.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
