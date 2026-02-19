import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
  title: string;
  description: string;
  canonical: string;
  lang?: string;
  ogImage?: string;
}

const MetaTags = ({
  title,
  description,
  canonical,
  lang = "fr",
  ogImage = "https://akoky.com/images/logo-akoky.webp",
}: MetaTagsProps) => (
  <Helmet>
    <html lang={lang} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AKOKY" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:locale" content="fr_FR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@akoky_official" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
  </Helmet>
);

export default MetaTags;
