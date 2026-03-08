import { Helmet } from "react-helmet-async";

interface HreflangTagsProps {
  slug?: string; // e.g. "" for home, "clubs" for /clubs
}

const LANGS = ["fr", "de", "es", "pt", "it"];
const BASE = "https://akoky.com";

const HreflangTags = ({ slug = "" }: HreflangTagsProps) => {
  const path = slug ? `/${slug}` : "";
  return (
    <Helmet>
      {LANGS.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${BASE}/${lang}${path}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE}/fr${path}`} />
      <link rel="alternate" hrefLang="fr-BE" href={`https://akoky.be${path}`} />
    </Helmet>
  );
};

export default HreflangTags;
