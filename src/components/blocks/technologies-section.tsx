import { motion } from 'framer-motion';

const deliveryPillars = [
  {
    title: 'Discovery & Strategy',
    desc: 'We align on business goals, audience needs, and measurable outcomes before writing code.',
  },
  {
    title: 'Design & Prototype',
    desc: 'Wireframes and interactive prototypes help validate the user journey early.',
  },
  {
    title: 'Build & Integrate',
    desc: 'We deliver scalable features with clean architecture and seamless third-party integrations.',
  },
  {
    title: 'Test & Optimize',
    desc: 'Quality checks, performance tuning, and analytics-driven iteration keep products reliable.',
  },
  {
    title: 'Launch & Support',
    desc: 'From rollout planning to post-launch maintenance, we stay with you for long-term success.',
  },
  {
    title: 'Continuous Growth',
    desc: 'We improve conversion, retention, and operational efficiency through ongoing enhancements.',
  },
];

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-24 hero-section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-hero-muted">Our Process</span>
          <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-hero-foreground">
            How We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-hero-muted">
            We combine product thinking, design, and engineering to build experiences that drive real business outcomes.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliveryPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-xl border border-hero-muted/10 bg-hero/50 backdrop-blur p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold font-display text-hero-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm text-hero-muted">{pillar.desc}</p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
