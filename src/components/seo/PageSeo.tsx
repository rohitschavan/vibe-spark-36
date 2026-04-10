import Head from "next/head";

interface PageSeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "Vibe IT Solutions";
const SITE_URL = "https://vibeitsolutions.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export function PageSeo({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  noindex = false,
  jsonLd,
}: PageSeoProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const resolvedCanonical = canonical ? `${SITE_URL}${canonical}` : undefined;
  const resolvedImage = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {resolvedCanonical && <link rel="canonical" href={resolvedCanonical} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      {resolvedCanonical && <meta property="og:url" content={resolvedCanonical} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd),
          }}
        />
      )}
    </Head>
  );
}
