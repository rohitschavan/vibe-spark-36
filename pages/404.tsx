import Head from "next/head";
import NotFoundPage from "@/pages/NotFound";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Vibe IT Solutions</title>
      </Head>
      <NotFoundPage />
    </>
  );
}
