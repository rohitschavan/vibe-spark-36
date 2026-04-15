import AIIntegratedSoftwarePage from "@/pages/AIIntegratedSoftware";
import { PageSeo } from "@/components/seo/PageSeo";

export default function AIIntegratedSoftwareRoute() {
  return (
    <>
      <PageSeo
        title="AI App Development and SaaS Development"
        description="Build AI-integrated applications and SaaS platforms with scalable architecture, secure integrations, and production-ready delivery."
        canonical="/ai-integrated-software"
      />
      <AIIntegratedSoftwarePage />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
