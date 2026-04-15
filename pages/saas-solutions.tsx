import SaasSolutionsPage from "@/pages/SaasSolutions";
import { PageSeo } from "@/components/seo/PageSeo";

export default function SaasSolutionsRoute() {
  return (
    <>
      <PageSeo
        title="SaaS Development Services"
        description="Build scalable SaaS platforms with Vibe IT Solutions, from architecture and billing systems to cloud deployment and continuous product growth."
        canonical="/saas-solutions"
      />
      <SaasSolutionsPage />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
