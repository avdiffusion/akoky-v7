import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const BLOG_ARTICLES = [
  {
    title: "Clubs Libertins à Paris 2026 — Le Guide Complet AKOKY",
    description: "Découvrez les meilleurs clubs libertins de Paris en 2026 : ambiance, tarifs, dress code et conseils pour une première visite réussie.",
    image: "https://akoky.com/images/panorama-paris-nuit.webp",
    href: "https://akoky.com/fr/blogs/clubs-libertins-paris-guide-2026",
    category: "Guide",
    readTime: "12 min",
  },
  {
    title: "La Scène Libertine à Lyon — Clubs et Événements 2026",
    description: "Explorez la scène libertine lyonnaise : meilleurs clubs, soirées et communauté swinger dans la capitale des Gaules en 2026.",
    image: "https://akoky.com/images/clubs-libertins-villes.webp",
    href: "https://akoky.com/fr/blogs/scene-libertine-lyon-2026",
    category: "Guide",
    readTime: "10 min",
  },
  {
    title: "Débuter dans le Libertinage en France — Conseils Pratiques 2026",
    description: "Guide complet pour les débutants : comment préparer votre première expérience libertine, choisir un club et respecter les codes.",
    image: "https://akoky.com/images/debuter-libertinage-cover.webp",
    href: "https://akoky.com/fr/blogs/debuter-libertinage-france-conseils",
    category: "Débutants",
    readTime: "15 min",
  },
  {
    title: "Cap d'Agde Libertin — Les Meilleurs Événements de l'Été 2026",
    description: "Guide complet du Cap d'Agde libertin : village naturiste, clubs, plages et événements incontournables de l'été 2026.",
    image: "https://akoky.com/images/cap-agde-libertin.webp",
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

const CATEGORY_COLORS: Record<string, string> = {
  Guide: "bg-primary/15 text-primary",
  Débutants: "bg-accent/50 text-accent-foreground",
  Événements: "bg-secondary text-secondary-foreground",
  Lifestyle: "bg-muted text-muted-foreground",
};

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
  blogPost: BLOG_ARTICLES.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    image: a.image,
    url: a.href,
  })),
};

const BlogFr = () => (
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
      breadcrumb={[{ label: "Blog" }]}
      faq={[]}
    >
      {/* Featured Article */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <a
            href={BLOG_ARTICLES[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300"
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img
                  src={BLOG_ARTICLES[0].image}
                  alt={BLOG_ARTICLES[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[BLOG_ARTICLES[0].category]}`}>
                    {BLOG_ARTICLES[0].category}
                  </span>
                  <span className="text-xs text-muted-foreground">⏱ {BLOG_ARTICLES[0].readTime}</span>
                  <span className="text-xs text-primary font-semibold px-2 py-0.5 border border-primary/30 rounded-full">⭐ À la une</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                  {BLOG_ARTICLES[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {BLOG_ARTICLES[0].description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                  Lire l'article <span className="text-xl">→</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tous nos articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_ARTICLES.slice(1).map((article, i) => (
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
                    loading="lazy"
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

      {/* CTA Communauté */}
      <section className="py-16 px-4 bg-background">
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

export default BlogFr;
