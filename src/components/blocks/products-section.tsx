import { motion } from 'framer-motion';
import { Hospital, Users, FileText, CreditCard, Pill, FlaskConical, UserCog, CalendarCheck, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import vibeithmsDashboard from '@/assets/vibeithms-dashboard.jpg';

const dashboardSrc = typeof vibeithmsDashboard === 'string' ? vibeithmsDashboard : (vibeithmsDashboard as any).src ?? vibeithmsDashboard;

const capabilities = [
  { icon: Users, label: 'Patient Management (OPD/IPD)' },
  { icon: FileText, label: 'Electronic Medical Records' },
  { icon: ShieldCheck, label: 'ABHA ID & ABDM Compliance' },
  { icon: CreditCard, label: 'Billing & Revenue Cycle' },
  { icon: Pill, label: 'Pharmacy & Inventory' },
  { icon: FlaskConical, label: 'Lab & Radiology Integration' },
  { icon: UserCog, label: 'Doctor & Staff Management' },
  { icon: CalendarCheck, label: 'Appointment & Queue Management' },
];

const impactStats = [
  { value: '12+', label: 'Modules' },
  { value: '70+', label: 'Features' },
  { value: '99.9%', label: 'Uptime' },
  { value: 'ABDM', label: 'Certified' },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Products
          </span>
          <h2 className="mt-4 text-3xl font-bold font-display md:text-5xl text-foreground">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade products powering digital transformation across industries
          </p>
        </motion.div>

        {/* Product Card — VIBEITHMS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-border card-glow bg-card"
        >
          {/* Top: Image + Overview */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Dashboard Image */}
            <div className="relative overflow-hidden bg-[hsl(var(--hero-bg))] flex items-center justify-center p-8">
              <img
                src={vibeithmsDashboard}
                alt="VIBEITHMS Hospital Management Dashboard"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">HealthTech</Badge>
                <Badge variant="secondary" className="text-xs">ABDM Certified</Badge>
                <Badge variant="secondary" className="text-xs">ABHA Compliant</Badge>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                  <Hospital className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-card-foreground">
                  VIBEITHMS
                </h3>
              </div>

              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
                Hospital Management System
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                A fully integrated, ABHA-compliant Hospital Management System built in alignment with India's Ayushman Bharat Digital Mission (ABDM). VIBEITHMS enables hospitals and clinics to digitize end-to-end operations — from patient registration and EMR to billing, pharmacy, and lab management.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="https://vibeithms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Visit VIBEITHMS
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Bottom: Key Capabilities */}
          <div className="border-t border-border p-8 md:p-10">
            <h4 className="text-sm font-medium uppercase tracking-widest text-primary mb-6">
              Key Capabilities
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-xl bg-secondary/50 p-4"
                >
                  <cap.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-card-foreground">{cap.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <div className="border-t border-border p-8 md:p-10 bg-primary/5">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                With VIBEITHMS, we are contributing to India's mission of making healthcare accessible, efficient, and paperless. Every hospital that goes live on VIBEITHMS becomes part of a connected national health network — reducing errors, cutting wait times, and empowering patients with control over their own health data.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
