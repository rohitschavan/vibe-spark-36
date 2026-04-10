import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What does an AI software development company do?",
    answer:
      "An AI software development company designs and builds applications that use machine learning, large language models, automation, and analytics to solve real business problems. This includes strategy, product development, cloud deployment, security, and ongoing optimization.",
  },
  {
    question: "How long does it take to build an AI-powered SaaS product?",
    answer:
      "Most MVPs take 8-16 weeks, depending on scope, integrations, and compliance requirements. We usually start with a focused use case, launch quickly, and improve in iterative releases.",
  },
  {
    question: "Do you offer custom software development services for startups?",
    answer:
      "Yes. We help startups validate ideas, design scalable architecture, and ship investor-ready products with clear roadmaps for growth.",
  },
  {
    question: "Can you modernize our existing software with generative AI solutions?",
    answer:
      "Yes. We can integrate AI into your existing product using APIs, model orchestration, retrieval pipelines, and workflow automation without rebuilding everything from scratch.",
  },
  {
    question: "Why choose a cloud solutions company for AI app development?",
    answer:
      "AI workloads need scalable infrastructure, observability, and cost controls. A cloud-first approach ensures your product remains fast, secure, and economical as usage grows.",
  },
];

export function SeoContentSection() {
  return (
    <section id="ai-software-development-company" className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground leading-tight">
          AI Software Development Company for Scalable Digital Growth
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          Vibe IT Solutions is an AI software development company helping startups and enterprises build intelligent products that
          scale globally. We combine custom software development services, generative AI solutions, cloud engineering, and SaaS
          product expertise to create measurable business impact. If you need a practical technology partner that can move from
          strategy to production, we are built for exactly that.
        </p>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold font-display text-foreground">
          Build AI Products That Deliver Business Outcomes
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Many teams adopt AI for experimentation, but struggle to convert prototypes into business value. We close that gap with
          a delivery model focused on outcomes: revenue growth, efficiency gains, risk reduction, and better customer experiences.
          From AI app development to enterprise workflow automation, we design systems that are reliable in production and clear in
          ROI. Our teams work across product strategy, architecture, engineering, data pipelines, and cloud operations so you can
          move faster with fewer handoffs.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We support both greenfield products and modernization initiatives. That means we can build a new SaaS platform from zero
          or integrate AI features into your existing stack. Every engagement starts with business context, not just tooling.
          Instead of asking what model is trending, we ask what process needs improvement, what decisions need better intelligence,
          and what customer journey needs less friction.
        </p>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold font-display text-foreground">
          Core Services for AI-Led Product Teams
        </h2>
        <h3 className="mt-6 text-xl font-bold font-display text-foreground">Custom Software Development Services</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          We engineer web and mobile applications designed for long-term scale. Our teams focus on robust architecture, secure API
          design, and modular codebases that support rapid iteration. Whether you are building internal platforms or customer-facing
          products, we align delivery with your product and revenue goals.
        </p>

        <h3 className="mt-6 text-xl font-bold font-display text-foreground">Generative AI Solutions</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          We build practical generative AI systems, including copilots, AI assistants, knowledge search, automated document
          processing, and content workflows. Our approach includes guardrails, retrieval architecture, prompt strategy, and model
          evaluation so outputs remain useful, safe, and aligned with your business context.
        </p>

        <h3 className="mt-6 text-xl font-bold font-display text-foreground">Cloud Solutions Company Expertise</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          AI performance depends on infrastructure quality. We design and operate cloud foundations for latency, reliability, and
          cost control across AWS, Azure, and GCP. This includes CI/CD, observability, security controls, and scalable deployment
          patterns that keep your team productive after launch.
        </p>

        <h3 className="mt-6 text-xl font-bold font-display text-foreground">AI App Development and SaaS Development</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          We help founders and product teams turn ideas into SaaS products with built-in intelligence. From onboarding flows to
          analytics dashboards and usage-based billing, we build full product systems that support growth, retention, and expansion.
          The result is not just a feature demo, but a market-ready product with clear value.
        </p>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold font-display text-foreground">Real-World Use Cases</h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Our clients choose us when they need execution depth and business clarity. Here are examples of where our work creates
          immediate impact:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong>AI automation for operations:</strong> automate ticket triage, claims workflows, and repetitive data tasks to
            reduce manual effort and improve response times.
          </li>
          <li>
            <strong>Customer support copilots:</strong> build AI assistants that answer queries using internal knowledge bases with
            escalation logic for complex cases.
          </li>
          <li>
            <strong>SaaS analytics intelligence:</strong> embed forecasting, anomaly detection, and recommendation engines directly
            in dashboards.
          </li>
          <li>
            <strong>Document and contract intelligence:</strong> extract key clauses, classify content, and generate summaries for
            legal, finance, and compliance teams.
          </li>
          <li>
            <strong>Enterprise modernization:</strong> integrate AI capabilities into legacy software without disrupting critical
            systems.
          </li>
        </ul>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold font-display text-foreground">How We Work</h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Our process is structured, transparent, and built for commercial outcomes.
        </p>
        <ol className="mt-4 list-decimal pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong>Discovery and opportunity mapping:</strong> define business goals, user pain points, and high-impact AI or
            software opportunities.
          </li>
          <li>
            <strong>Solution architecture and roadmap:</strong> select the right stack, define milestones, and de-risk delivery
            with a phased plan.
          </li>
          <li>
            <strong>Build and integration:</strong> ship production-grade features with quality engineering, automation, and
            measurable acceptance criteria.
          </li>
          <li>
            <strong>Launch and optimization:</strong> monitor outcomes, improve model behavior, and iterate based on user and
            business feedback.
          </li>
        </ol>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold font-display text-foreground">Why Choose Vibe IT Solutions</h2>
        <ul className="mt-5 list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Business-first AI:</strong> we prioritize ROI, not hype.</li>
          <li><strong>End-to-end delivery:</strong> strategy, design, engineering, cloud, and support under one team.</li>
          <li><strong>Global delivery capability from India:</strong> cost-efficient execution with strong quality standards.</li>
          <li><strong>Security and reliability by design:</strong> governance, observability, and maintainable systems.</li>
          <li><strong>Fast iteration cycles:</strong> clear sprints, transparent updates, and outcome-focused milestones.</li>
        </ul>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold font-display text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold font-display text-card-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-card-foreground">
            Ready to Build with an AI Software Development Company?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Book a free consultation with Vibe IT Solutions to plan your next AI initiative, SaaS platform, or custom software
            product with a clear roadmap and measurable outcomes.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
