import AISolutionsPage from "@/pages/AISolutions";
import { PageSeo } from "@/components/seo/PageSeo";

export default function AISolutionsRoute() {
  return (
    <>
      <PageSeo
        title="Generative AI Solutions Services"
        description="Explore generative AI solutions for automation, copilots, and enterprise workflows from Vibe IT Solutions."
        canonical="/ai-solutions"
      />
      <AISolutionsPage />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
