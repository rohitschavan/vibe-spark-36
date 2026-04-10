import CloudAIInfrastructurePage from "@/pages/CloudAIInfrastructure";
import { PageSeo } from "@/components/seo/PageSeo";

export default function CloudAIInfrastructureRoute() {
  return (
    <>
      <PageSeo
        title="Cloud Solutions Company for AI Workloads"
        description="Scale AI products with secure, observable, and cost-optimized cloud infrastructure services from Vibe IT Solutions."
        canonical="/cloud-ai-infrastructure"
      />
      <CloudAIInfrastructurePage />
    </>
  );
}
