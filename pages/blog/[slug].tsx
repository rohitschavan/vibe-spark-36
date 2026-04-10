import Head from "next/head";
import BlogPostPage from "@/pages/BlogPost";

export default function BlogPostRoute() {
  return (
    <>
      <Head>
        <title>Blog | Vibe IT Solutions</title>
      </Head>
      <BlogPostPage />
    </>
  );
}
