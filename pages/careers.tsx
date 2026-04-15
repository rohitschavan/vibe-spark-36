import CareersPage from "@/pages/Careers";
import { PageSeo } from "@/components/seo/PageSeo";

export default function CareersRoute() {
  return (
    <>
      <PageSeo
        title="Careers at Vibe IT Solutions | Join Our Team"
        description="Explore career opportunities at Vibe IT Solutions. We're hiring engineers, designers, and AI specialists to build impactful software products."
        canonical="/careers"
      />
      <CareersPage />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
