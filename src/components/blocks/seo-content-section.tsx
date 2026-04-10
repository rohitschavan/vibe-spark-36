import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SeoContentSection() {
  return (
    <section id="ai-software-development-company" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">AI Software Development Company</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold font-display text-foreground">
            Build AI Products That Drive Measurable Growth
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            We help startups and enterprises ship scalable products with custom software development services, generative AI
            solutions, cloud engineering, and SaaS development expertise.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold font-display text-card-foreground">Core Services</h3>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Custom software development services</strong> for web and mobile applications.</li>
              <li><strong>Generative AI solutions</strong> including copilots, assistants, and RAG workflows.</li>
              <li><strong>Cloud solutions company support</strong> for secure, scalable AI infrastructure.</li>
              <li><strong>AI app development and SaaS development</strong> for product-led growth.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold font-display text-card-foreground">High-Impact Use Cases</h3>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>AI automation for operations and back-office workflows.</li>
              <li>Customer support copilots with knowledge retrieval and escalation.</li>
              <li>SaaS analytics intelligence with forecasting and anomaly detection.</li>
              <li>Document intelligence for legal, finance, and compliance teams.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-card-foreground">
            Need a Partner That Can Execute End-to-End?
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Book a free consultation and get a practical roadmap for your AI initiative, SaaS platform, or custom software product.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
