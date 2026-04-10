import ContactPage from "@/pages/ContactUs";
import { PageSeo } from "@/components/seo/PageSeo";

export default function ContactRoute() {
  return (
    <>
      <PageSeo
        title="Book a Free Consultation"
        description="Talk to Vibe IT Solutions about AI software development, custom software, cloud engineering, and SaaS product delivery."
        canonical="/contact"
      />
      <ContactPage />
    </>
  );
}
