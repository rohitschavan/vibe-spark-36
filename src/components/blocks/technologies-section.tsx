import { motion } from 'framer-motion';

const technologies = [
  { name: 'ReactJS', desc: 'Build dynamic and responsive user interfaces' },
  { name: 'React Native', desc: 'High-quality mobile apps for iOS and Android' },
  { name: 'Angular', desc: 'Powerful and scalable web applications' },
  { name: 'Ionic', desc: 'Cross-platform mobile applications' },
  { name: 'NodeJS', desc: 'Fast and scalable server-side applications' },
  { name: '.NET', desc: 'Modern, scalable, high-performance applications' },
  { name: 'MongoDB', desc: 'Flexible NoSQL database for scalability' },
  { name: 'PostgreSQL', desc: 'Advanced open-source relational database' },
  { name: 'SQL Server', desc: 'Robust relational database management' },
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
          <span className="text-sm font-medium uppercase tracking-widest text-hero-muted">Our Stack</span>
          <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-hero-foreground">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-xl border border-hero-muted/10 bg-hero/50 backdrop-blur p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold font-display text-hero-foreground">{tech.name}</h3>
              <p className="mt-2 text-sm text-hero-muted">{tech.desc}</p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
