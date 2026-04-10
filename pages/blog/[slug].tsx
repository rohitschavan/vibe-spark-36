import BlogPostPage from "@/pages/BlogPost";
import { PageSeo } from "@/components/seo/PageSeo";

export default function BlogPostRoute() {
  return (
    <>
      <PageSeo
        title="AI Software Development Insights"
        description="Read practical insights on AI software development, generative AI solutions, cloud platforms, and SaaS growth."
      />
      <BlogPostPage />
    </>
  );
}
