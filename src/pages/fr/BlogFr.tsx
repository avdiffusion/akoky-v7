import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { useState } from "react";

// ── Articles vedettes du site akoky.com/fr/blogs (contenu live) ──
const FEATURED_ARTICLES = [
  {
    title: "Clubs Libertins à Paris 2026 — Le Guide Complet AKOKY",
    description: "Découvrez les meilleurs clubs libertins de Paris en 2026 : ambiance, tarifs, dress code et conseils pour une première visite réussie.",
    image: "/images/panorama-paris-nuit.webp",
    href: "https://akoky.com/fr/blogs/clubs-libertins-paris-guide-2026",
    category: "Guide",
    readTime: "12 min",
  },
  {
    title: "La Scène Libertine à Lyon — Clubs et Événements 2026",
    description: "Explorez la scène libertine lyonnaise : meilleurs clubs, soirées et communauté swinger dans la capitale des Gaules en 2026.",
    image: "/images/clubs-libertins-villes.webp",
    href: "https://akoky.com/fr/blogs/scene-libertine-lyon-2026",
    category: "Guide",
    readTime: "10 min",
  },
  {
    title: "Débuter dans le Libertinage en France — Conseils Pratiques 2026",
    description: "Guide complet pour les débutants : comment préparer votre première expérience libertine, choisir un club et respecter les codes.",
    image: "/images/debuter-libertinage-cover.webp",
    href: "https://akoky.com/fr/blogs/debuter-libertinage-france-conseils",
    category: "Débutants",
    readTime: "15 min",
  },
  {
    title: "Cap d'Agde Libertin — Les Meilleurs Événements de l'Été 2026",
    description: "Guide complet du Cap d'Agde libertin : village naturiste, clubs, plages et événements incontournables de l'été 2026.",
    image: "/images/cap-agde-libertin.webp",
    href: "https://akoky.com/fr/blogs/cap-agde-libertinage-ete-2026",
    category: "Événements",
    readTime: "8 min",
  },
  {
    title: "Le Lifestyle Swinger en France — Communauté et Valeurs",
    description: "Tout comprendre sur le lifestyle swinger en France : valeurs, communauté, éthique et pourquoi AKOKY est la plateforme de référence.",
    image: "https://akoky.com/images/libertinage.webp",
    href: "https://akoky.com/fr/blogs/lifestyle-swinger-france-communaute",
    category: "Lifestyle",
    readTime: "11 min",
  },
  {
    title: "Clubs Libertins à Marseille et sur la Côte d'Azur — Guide AKOKY",
    description: "Guide des clubs libertins à Marseille, Nice, Toulon et sur la Côte d'Azur : les meilleurs spots pour le libertinage en PACA.",
    image: "https://akoky.com/images/panorama-PACA-COTEAZUR.webp",
    href: "https://akoky.com/fr/blogs/clubs-libertins-marseille-cote-azur",
    category: "Guide",
    readTime: "9 min",
  },
];

// ── Articles WordPress du blog akoky.com/blog/ (depuis sitemap) ──
const BLOG_CATEGORIES = [
  {
    id: "comparatifs",
    label: "⚔️ Comparatifs",
    description: "AKOKY vs la concurrence : comparaisons honnêtes et détaillées",
    image: "/images/blog-securite-discretion.webp",
    articles: [
      { title: "Jacquie et Michel Contact vs AKOKY", href: "https://www.akoky.com/blog/blog/jacquie-et-michel-contact-vs-akoky/", tag: "VS" },
      { title: "Libertic vs AKOKY", href: "https://www.akoky.com/blog/libertic-vs-akoky/", tag: "VS" },
      { title: "NousLibertins vs AKOKY", href: "https://www.akoky.com/blog/nouslibertins-vs-akoky/", tag: "VS" },
      { title: "Place Libertine vs AKOKY", href: "https://www.akoky.com/blog/place-libertine-vs-akoky/", tag: "VS" },
      { title: "Wyylde vs AKOKY", href: "https://www.akoky.com/blog/wyylde-vs-akoky/", tag: "VS" },
      { title: "Comparatif complet des sites libertins", href: "https://www.akoky.com/blog/comparatif-sites-libertins/", tag: "Top" },
    ],
  },
  {
    id: "clubs",
    label: "🏛️ Clubs & Soirées",
    description: "Guides des clubs libertins, soirées privées et événements partenaires",
    image: "/images/blog-clubs-libertins.webp",
    articles: [
      { title: "Clubs libertins, soirées privées : les événements partenaires d'AKOKY", href: "https://www.akoky.com/blog/clubs-libertins-soirees-privees-les-evenements-partenaires-dakoky/", tag: "Événements" },
      { title: "Événements libertins exclusifs AKOKY", href: "https://www.akoky.com/blog/evenements-libertins-exclusifs-akoky/", tag: "Exclusif" },
      { title: "Club échangiste Fougères", href: "https://www.akoky.com/blog/club-echangiste-fougeres/", tag: "Club" },
      { title: "Tous les clubs libertins", href: "https://www.akoky.com/blog/clubs-libertins/", tag: "Annuaire" },
    ],
  },
  {
    id: "couples",
    label: "💑 Couples & Rencontres",
    description: "Conseils pour couples, rencontres authentiques et premières expériences",
    image: "/images/blog-couples-libertins.webp",
    articles: [
      { title: "Couples libertins : guide complet", href: "https://www.akoky.com/blog/couples-libertins/", tag: "Guide" },
      { title: "Première fois échangiste : le guide AKOKY pour couples curieux", href: "https://www.akoky.com/blog/premiere-fois-echangiste-le-guide-akoky-pour-couples-curieux-et-complices/", tag: "Débutants" },
      { title: "Rencontres libertines authentiques", href: "https://www.akoky.com/blog/rencontres-libertines-authentiques/", tag: "Rencontres" },
      { title: "Femme seule libertine", href: "https://www.akoky.com/blog/femme-seule-libertine/", tag: "Solo" },
      { title: "Annonces libertines", href: "https://www.akoky.com/blog/annonces-libertines/", tag: "Annonces" },
      { title: "Toutes les rencontres libertines", href: "https://www.akoky.com/blog/rencontres-libertines/", tag: "Explorer" },
    ],
  },
  {
    id: "pratiques",
    label: "🔥 Pratiques & Lifestyle",
    description: "Échangisme, triolisme, mélangisme, candaulisme et bien plus",
    image: "/images/blog-rencontres.webp",
    articles: [
      { title: "Échangisme en couple : osez l'expérience à deux avec AKOKY", href: "https://www.akoky.com/blog/echangisme-en-couple-osez-lexperience-a-deux-avec-akoky/", tag: "Échangisme" },
      { title: "Échangisme couples", href: "https://www.akoky.com/blog/echangisme-couples/", tag: "Échangisme" },
      { title: "Triolisme libertin sur AKOKY", href: "https://www.akoky.com/blog/triolisme-libertin-sur-akoky/", tag: "Triolisme" },
      { title: "Triolisme & Candaulisme", href: "https://www.akoky.com/blog/triolisme-candaulisme/", tag: "Candaulisme" },
      { title: "Mélangisme libertin", href: "https://www.akoky.com/blog/melangisme-libertin/", tag: "Mélangisme" },
      { title: "Côte-à-côtisme", href: "https://www.akoky.com/blog/cote-a-cotisme/", tag: "Soft" },
      { title: "Une orgie douce, fluide, naturelle sur AKOKY", href: "https://www.akoky.com/blog/une-orgie-douce-fluide-naturelle-sur-akoky/", tag: "Orgie" },
      { title: "Libertinage & pluralité", href: "https://www.akoky.com/blog/libertinage-pluralite/", tag: "Lifestyle" },
      { title: "Sexe sans tabou", href: "https://www.akoky.com/blog/sexe-sans-tabou/", tag: "Sans tabou" },
    ],
  },
  {
    id: "regions",
    label: "🗺️ Libertinage par Région",
    description: "Découvrez la scène libertine en France, Belgique et Suisse",
    image: "/images/blog-libertinage-regions.webp",
    articles: [
      { title: "Libertinage en France", href: "https://www.akoky.com/blog/libertinage-en-france/", tag: "🇫🇷 France" },
      { title: "Libertinage en Belgique", href: "https://www.akoky.com/blog/libertinage-en-belgique/", tag: "🇧🇪 Belgique" },
      { title: "Libertinage en Suisse", href: "https://www.akoky.com/blog/libertinage-en-suisse/", tag: "🇨🇭 Suisse" },
      { title: "Cap d'Agde libertin", href: "https://www.akoky.com/blog/cap-d-agde-libertin/", tag: "🏖️ Cap d'Agde" },
      { title: "Cap d'Agde — Tous les guides", href: "https://www.akoky.com/blog/cap-agde/", tag: "🏖️ Explorer" },
      { title: "Libertinage par région", href: "https://www.akoky.com/blog/libertinage-par-region/", tag: "📍 Régions" },
    ],
  },
  {
    id: "jeux",
    label: "🎲 Jeux & Fun",
    description: "Jeux libertins, astro-sexo et histoires coquines",
    image: "/images/blog-jeux-libertins.webp",
    articles: [
      { title: "Jeux libertins AKOKY", href: "https://www.akoky.com/blog/jeux-libertins-akoky/", tag: "Jeux" },
      { title: "Jeux sexe érotique", href: "https://www.akoky.com/blog/jeux-sex-erotique/", tag: "Érotique" },
      { title: "Astro Sexo AKOKY", href: "https://www.akoky.com/blog/astro-sexo-akoky/", tag: "Astro" },
      { title: "Histoire libertine sur AKOKY", href: "https://www.akoky.com/blog/histoire-libertine-sur-akoky/", tag: "Histoires" },
    ],
  },
  {
    id: "akoky",
    label: "✨ Pourquoi AKOKY",
    description: "Sécurité, discrétion, communauté et tout ce qui fait d'AKOKY la référence",
    image: "/images/blog-securite-discretion.webp",
    articles: [
      { title: "Pourquoi choisir AKOKY ?", href: "https://www.akoky.com/blog/pourquoi-choisir-akoky/", tag: "AKOKY" },
      { title: "Pourquoi AKOKY", href: "https://www.akoky.com/blog/pourquoi-akoky/", tag: "AKOKY" },
      { title: "Communauté respectueuse libertine", href: "https://www.akoky.com/blog/communaute-respectueuse-libertine/", tag: "Communauté" },
      { title: "Sécurité & confidentialité sur AKOKY", href: "https://www.akoky.com/blog/securite-confidentialite-sur-akoky-ce-que-2025-fait-de-mieux/", tag: "Sécurité" },
      { title: "Sécurité du site libertin AKOKY", href: "https://www.akoky.com/blog/securite-site-libertin-akoky/", tag: "Safe" },
      { title: "Discrétion sur le site libertin AKOKY", href: "https://www.akoky.com/blog/discretion-site-libertin-akoky/", tag: "Discrétion" },
      { title: "Libertinage en confiance", href: "https://www.akoky.com/blog/libertinage-en-confiance/", tag: "Confiance" },
      { title: "Libertinage grandeur nature AKOKY", href: "https://www.akoky.com/blog/libertinage-grandeur-nature-akoky/", tag: "Lifestyle" },
      { title: "Support AKOKY — Assistance libertine", href: "https://www.akoky.com/blog/support-akoky-assistance-libertine/", tag: "Support" },
      { title: "FAQ libertine AKOKY", href: "https://www.akoky.com/blog/faq-libertine-akoky/", tag: "FAQ" },
      { title: "Nos sites libertins AKOKY", href: "https://www.akoky.com/blog/nos-sites-libertins-akoky/", tag: "Sites" },
    ],
  },
  {
    id: "divers",
    label: "🌈 Inclusivité & Conseils",
    description: "Libertinage LGBT, conseils pratiques et articles de fond",
    image: "/images/blog-lgbt-libertinage.webp",
    articles: [
      { title: "Libertinage LGBT", href: "https://www.akoky.com/blog/libertinage-lgbt/", tag: "🏳️‍🌈 LGBT" },
      { title: "Conseils libertins", href: "https://www.akoky.com/blog/conseils-libertins/", tag: "Conseils" },
      { title: "Amour & Sexe", href: "https://www.akoky.com/blog/amour-sex/", tag: "Amour" },
      { title: "Articles libertins", href: "https://www.akoky.com/blog/articles-libertin/", tag: "Articles" },
      { title: "Prêt à vivre de nouvelles expériences libertines ?", href: "https://www.akoky.com/blog/pret-a-vivre-de-nouvelles-experiences-libertines/", tag: "Expériences" },
      { title: "Une question, une envie, un frisson à partager", href: "https://www.akoky.com/blog/une-question-une-envie-un-frisson-a-partager/", tag: "Contact" },
      { title: "Inscription AKOKY — Offre 6 mois", href: "https://www.akoky.com/blog/inscription-akoky-offre-6-mois-abonnement-libertin/", tag: "🎁 Offre" },
    ],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Guide: "bg-primary/15 text-primary",
  Débutants: "bg-accent/50 text-accent-foreground",
  Événements: "bg-secondary text-secondary-foreground",
  Lifestyle: "bg-muted text-muted-foreground",
};

const TAG_COLORS = [
  "bg-primary/10 text-primary border-primary/20",
  "bg-accent/30 text-accent-foreground border-accent/30",
  "bg-secondary/80 text-secondary-foreground border-secondary",
  "bg-muted text-muted-foreground border-border",
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Le Blog Libertin AKOKY",
  description: "Articles, guides pratiques et conseils pour vivre le libertinage en toute confiance en France.",
  url: "https://akoky.com/fr/blogs",
  publisher: {
    "@type": "Organization",
    name: "AKOKY",
    logo: { "@type": "ImageObject", url: "https://akoky.com/images/logo-akoky.webp" },
  },
  blogPost: FEATURED_ARTICLES.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    image: a.image,
    url: a.href,
  })),
};

const BlogFr = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      <MetaTags
        title="Blog Libertin AKOKY — Guides, Conseils & Actualités 2026"
        description="Articles, guides pratiques et conseils pour vivre le libertinage en toute confiance en France. Contenu authentique, sans tabou, pour curieux et initiés."
        canonical="https://akoky.com/fr/blogs"
        lang="fr"
        ogImage="https://akoky.com/images/panorama-paris-nuit.webp"
      />
      <HreflangTags slug="blogs" />
      <SchemaOrg schema={blogSchema} />

      <ContentPageLayout
        lang="fr"
        title="Blog Libertin AKOKY — Guides, Conseils & Actualités 2026"
        description="Articles, guides pratiques et conseils pour vivre le libertinage en toute confiance en France."
        canonical="https://akoky.com/fr/blogs"
        heroTitle="Le Blog Libertin AKOKY"
        heroSubtitle="Articles, guides pratiques et conseils pour vivre le libertinage en toute confiance en France. Contenu authentique, sans tabou, pour curieux et initiés."
        heroImage="/images/blog-cover-ak.webp"
        breadcrumb={[{ label: "Blog" }]}
        faq={[]}
      >
        {/* ═══════════════ FEATURED ARTICLES (from akoky.com/fr/blogs) ═══════════════ */}
        <section className="py-12 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_ARTICLES.map((article, i) => (
                <a
                  key={i}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[article.category]}`}>
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">⏱ {article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                      Lire l'article <span>→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ BLOG WORDPRESS — PAR CATÉGORIE ═══════════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                📚 Tous nos articles du Blog
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Plus de 50 articles sur le libertinage, les clubs, les pratiques et la communauté AKOKY. Explorez par thème.
              </p>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  activeCategory === null
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                Tout voir
              </button>
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Category cards */}
            <div className="space-y-8">
              {BLOG_CATEGORIES.filter((cat) => !activeCategory || cat.id === activeCategory).map((cat) => (
                <div
                  key={cat.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
                >
                  <div className="grid md:grid-cols-[280px_1fr]">
                    {/* Category image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.label}
                        className="w-full h-full object-cover min-h-[200px] md:min-h-full"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-4">
                        <h3 className="text-xl font-black text-foreground mb-1">{cat.label}</h3>
                        <p className="text-sm text-muted-foreground max-w-[220px]">{cat.description}</p>
                      </div>
                    </div>

                    {/* Articles list */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {cat.articles.map((article, j) => (
                          <a
                            key={j}
                            href={article.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium hover:border-primary hover:shadow-md hover:shadow-primary/10 transition-all duration-200 ${
                              TAG_COLORS[j % TAG_COLORS.length]
                            }`}
                          >
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                              {article.tag}
                            </span>
                            <span className="text-foreground group-hover:text-primary transition-colors">
                              {article.title}
                            </span>
                            <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ STATS SECTION ═══════════════ */}
        <section className="py-16 px-4 bg-background">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "50+", label: "Articles publiés" },
                { value: "8", label: "Catégories" },
                { value: "1,5M", label: "Lecteurs mensuels" },
                { value: "100%", label: "Contenu authentique" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-card border border-border rounded-xl">
                  <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CTA COMMUNAUTÉ ═══════════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="bg-card border border-primary/20 rounded-2xl p-10 shadow-lg shadow-primary/5">
              <span className="text-4xl mb-4 block">✨</span>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Envie de rejoindre la communauté libertine la plus active d'Europe ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Créez votre profil gratuitement et accédez à des articles exclusifs, des guides pratiques et une communauté bienveillante de 1,5M de membres.
              </p>
              <a
                href="https://app.akoky.com/register"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Rejoignez AKOKY gratuitement
              </a>
            </div>
          </div>
        </section>
      </ContentPageLayout>
    </>
  );
};

export default BlogFr;
