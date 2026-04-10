import IndexPage from "@/pages/Index";
import { PageSeo } from "@/components/seo/PageSeo";

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
        jsonLd={homeServiceSchema}
      />
      <IndexPage />
    </>
  );
}
