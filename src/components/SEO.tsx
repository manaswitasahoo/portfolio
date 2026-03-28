import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  pagePath?: string;
  keywords?: string;
  imageUrl?: string;
}

export default function SEO({ title, description, canonical, pagePath, keywords, imageUrl }: SEOProps) {
  const siteUrl = 'https://manaswita.vercel.app/';
  const fullUrl = pagePath ? `${siteUrl}${pagePath}` : siteUrl;
  const defaultImage = `${siteUrl}/manaswita_logo.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical || fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl || defaultImage} />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Manaswita Sahoo - Growth Marketing Professional",
          url: siteUrl,
          sameAs: [
            "https://www.linkedin.com/in/manaswita-sahoo-62227a1a6"
          ],
          jobTitle: "Growth Marketing Associate",
          worksFor: {
            "@type": "Organization",
            name: "Aurm"
          }
        })}
      </script>
    </Head>
  );
}