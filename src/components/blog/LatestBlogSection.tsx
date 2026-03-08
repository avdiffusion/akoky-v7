import { Link } from "react-router-dom";
import { getPublishedArticles } from "@/lib/blog-store";
import { BLOG_CATEGORIES, CATEGORY_ICONS, type BlogLang } from "@/lib/blog-types";

type Lang = "fr" | "es" | "de" | "it" | "pt";

interface LatestBlogSectionProps {
  lang: Lang;
}

interface FallbackArticle {
  title: string;
  desc: string;
  image: string;
  href: string;
  tag: string;
}

const LABELS: Record<Lang, { title: string; subtitle: string; readMore: string; viewAll: string }> = {
  fr: { title: "📖 Derniers Articles du Blog", subtitle: "Guides, conseils et actualités pour vivre le libertinage en toute confiance.", readMore: "Lire l'article →", viewAll: "📚 Voir tous les articles du blog" },
  es: { title: "📖 Últimos Artículos del Blog", subtitle: "Guías, consejos y actualidad para vivir el libertinaje con total confianza.", readMore: "Leer el artículo →", viewAll: "📚 Ver todos los artículos del blog" },
  de: { title: "📖 Neueste Blog-Artikel", subtitle: "Leitfäden, Tipps und Neuigkeiten, um den Libertinismus mit vollem Vertrauen zu erleben.", readMore: "Artikel lesen →", viewAll: "📚 Alle Blog-Artikel ansehen" },
  it: { title: "📖 Ultimi Articoli del Blog", subtitle: "Guide, consigli e attualità per vivere il libertinismo con totale fiducia.", readMore: "Leggi l'articolo →", viewAll: "📚 Vedi tutti gli articoli del blog" },
  pt: { title: "📖 Últimos Artigos do Blog", subtitle: "Guias, conselhos e atualidade para viver o libertinismo com toda a confiança.", readMore: "Ler o artigo →", viewAll: "📚 Ver todos os artigos do blog" },
};

const FALLBACK_ARTICLES: Record<Lang, FallbackArticle[]> = {
  fr: [
    { title: "Clubs Libertins à Paris 2026 — Le Guide Complet", desc: "Découvrez les meilleurs clubs libertins de Paris en 2026 : ambiance, tarifs, dress code et conseils pour une première visite réussie.", image: "/images/panorama-paris-nuit.webp", href: "/fr/blog", tag: "Guide" },
    { title: "La Scène Libertine à Lyon — Clubs et Événements 2026", desc: "Explorez la scène libertine lyonnaise : meilleurs clubs, soirées et communauté swinger dans la capitale des Gaules.", image: "/images/clubs-libertins-villes.webp", href: "/fr/blog", tag: "Guide" },
    { title: "Débuter dans le Libertinage — Conseils Pratiques", desc: "Guide complet pour les débutants : comment préparer votre première expérience libertine et respecter les codes.", image: "/images/debuter-libertinage-cover.webp", href: "/fr/blog", tag: "Débutants" },
  ],
  es: [
    { title: "Clubes Libertinos en Barcelona 2026 — Guía Completa", desc: "Descubre los mejores clubes libertinos de Barcelona en 2026: ambiente, precios, dress code y consejos para una primera visita exitosa.", image: "/images/hero-es-desktop.webp", href: "/es/blog", tag: "Guía" },
    { title: "La Escena Libertina en Madrid — Clubes y Eventos 2026", desc: "Explora la escena libertina madrileña: mejores clubes, noches temáticas y comunidad swinger en la capital de España.", image: "/images/clubs-libertins-villes.webp", href: "/es/blog", tag: "Guía" },
    { title: "Empezar en el Libertinaje — Consejos Prácticos", desc: "Guía completa para principiantes: cómo preparar tu primera experiencia libertina y respetar los códigos.", image: "/images/debuter-libertinage-cover.webp", href: "/es/blog", tag: "Principiantes" },
  ],
  de: [
    { title: "Libertine Clubs in Berlin 2026 — Der komplette Guide", desc: "Entdecke die besten libertinen Clubs in Berlin 2026: Atmosphäre, Preise, Dresscode und Tipps für einen ersten gelungenen Besuch.", image: "/images/clubs-libertins-villes.webp", href: "/de/blog", tag: "Guide" },
    { title: "Die Libertine Szene in München — Clubs und Events 2026", desc: "Erkunde die Münchner libertine Szene: beste Clubs, Themenabende und Swinger-Community in der bayerischen Hauptstadt.", image: "/images/panorama-paris-nuit.webp", href: "/de/blog", tag: "Guide" },
    { title: "Mit dem Libertinismus anfangen — Praktische Tipps", desc: "Kompletter Leitfaden für Anfänger: Wie du deine erste libertine Erfahrung vorbereitest und die Codes respektierst.", image: "/images/debuter-libertinage-cover.webp", href: "/de/blog", tag: "Anfänger" },
  ],
  it: [
    { title: "Club Libertini a Roma 2026 — La Guida Completa", desc: "Scopri i migliori club libertini di Roma nel 2026: atmosfera, prezzi, dress code e consigli per una prima visita di successo.", image: "/images/hero-it-desktop.webp", href: "/it/blog", tag: "Guida" },
    { title: "La Scena Libertina a Milano — Club ed Eventi 2026", desc: "Esplora la scena libertina milanese: migliori club, serate a tema e community swinger nella capitale della moda.", image: "/images/clubs-libertins-villes.webp", href: "/it/blog", tag: "Guida" },
    { title: "Iniziare nel Libertinismo — Consigli Pratici", desc: "Guida completa per principianti: come preparare la tua prima esperienza libertina e rispettare i codici.", image: "/images/debuter-libertinage-cover.webp", href: "/it/blog", tag: "Principianti" },
  ],
  pt: [
    { title: "Clubes Libertinos em Lisboa 2026 — Guia Completo", desc: "Descobre os melhores clubes libertinos de Lisboa em 2026: ambiente, preços, dress code e conselhos para uma primeira visita bem-sucedida.", image: "/images/hero-pt-desktop.webp", href: "/pt/blog", tag: "Guia" },
    { title: "A Cena Libertina no Porto — Clubes e Eventos 2026", desc: "Explora a cena libertina do Porto: melhores clubes, noites temáticas e comunidade swinger na Invicta.", image: "/images/clubs-libertins-villes.webp", href: "/pt/blog", tag: "Guia" },
    { title: "Começar no Libertinismo — Conselhos Práticos", desc: "Guia completo para principiantes: como preparar a tua primeira experiência libertina e respeitar os códigos.", image: "/images/debuter-libertinage-cover.webp", href: "/pt/blog", tag: "Principiantes" },
  ],
};

const LatestBlogSection = ({ lang }: LatestBlogSectionProps) => {
  const labels = LABELS[lang];
  const blogPath = lang === "fr" ? "/fr/blog" : `/${lang}/blog`;

  // Try to get real published articles
  const published = getPublishedArticles(lang as BlogLang).slice(0, 3);

  // Build article cards: dynamic if available, fallback otherwise
  const articles = published.length > 0
    ? published.map((a) => {
        const t = a.translations[lang as BlogLang]!;
        const catLabel = BLOG_CATEGORIES.find((c) => c.value === a.category)?.label[lang as BlogLang] ?? a.category;
        return {
          title: t.title,
          desc: t.metaDescription,
          image: a.image,
          href: `${blogPath}/${t.slug}`,
          tag: catLabel,
          icon: CATEGORY_ICONS[a.category],
        };
      })
    : FALLBACK_ARTICLES[lang].map((a) => ({ ...a, icon: "📘" }));

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">{labels.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{labels.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Link
              key={i}
              to={article.href}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-hover-glow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                  {article.tag}
                </span>
                <h3 className="font-bold text-lg mt-3 mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  {labels.readMore}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to={blogPath}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-gradient-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            {labels.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
