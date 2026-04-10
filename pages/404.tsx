import NotFoundPage from "@/pages/NotFound";
import { PageSeo } from "@/components/seo/PageSeo";

export default function Custom404() {
  return (
    <>
      <PageSeo title="Page Not Found" description="The page you are looking for could not be found." noindex />
      <NotFoundPage />
    </>
  );
}
