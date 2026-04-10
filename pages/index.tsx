import IndexPage from "@/pages/Index";
import { PageSeo } from "@/components/seo/PageSeo";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an AI software development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI software development company builds intelligent software products using machine learning, generative AI, cloud infrastructure, and automation to solve business problems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide custom software development services for startups and enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vibe IT Solutions builds custom software for startups and enterprises, including SaaS platforms, AI apps, cloud-native systems, and workflow automation products.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we launch an AI-powered product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most MVPs can be delivered in 8 to 16 weeks, based on scope and complexity. We prioritize rapid launch with iterative improvements.",
      },
    },
  ],
};

const homeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vibe IT Solutions",
  url: "https://vibeitsolutions.com",
  logo: "https://vibeitsolutions.com/logo.png",
  description:
    "AI software development company delivering custom software development services, generative AI solutions, cloud engineering, and SaaS development.",
  areaServed: "Worldwide",
  knowsAbout: [
    "AI app development",
    "custom software development services",
    "generative AI solutions",
    "cloud infrastructure",
    "SaaS development",
  ],
};

export default function Home() {
  return (
    <>
      <PageSeo
        title="AI Software Development Company"
        description="Vibe IT Solutions is an AI software development company delivering custom software, generative AI, cloud, and SaaS solutions for global businesses."
        canonical="/"
        jsonLd={[homeFaqSchema, homeServiceSchema]}
      />
      <IndexPage />
    </>
  );
}
