import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ActualitesLibertines = () => (
  <ContentPageLayout
    title="Actualités & Tendances Libertines | AKOKY"
    description="Veille éditoriale indépendante sur les clubs et établissements libertins en France. Tendances, analyses et signaux faibles du secteur."
    canonical="https://akoky.com/actualites-libertines"
    heroTitle="Actualités & Tendances Libertines"
    heroSubtitle="Veille éditoriale indépendante sur les clubs et établissements libertins en France"
    heroImage="https://akoky.com/images/actualites-libertines-cover.webp"
    breadcrumb={[{ label: "Actualités" }]}
    faq={[
      { question: "Cette page est-elle un fil d'actualité en temps réel ?", answer: "Non, il s'agit d'une veille éditoriale mise à jour régulièrement (environ tous les 3 mois)." },
      { question: "D'où proviennent les informations présentées ?", answer: "Notre veille s'appuie sur des sources publiques reconnues, le monitoring des sites web des établissements et les retours d'expérience de nos membres." },
      { question: "Les informations sont-elles fiables ?", answer: "Nous croisons plusieurs sources avant de publier. Cependant, le secteur évolue rapidement : vérifiez directement auprès des établissements." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Actualités Libertines", url: "https://akoky.com/actualites-libertines" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div>
          <p className="text-muted-foreground text-lg leading-relaxed">Cette page constitue notre veille éditoriale sur l'univers des clubs libertins en France. Mise à jour régulièrement, elle compile des analyses de tendances, des signaux faibles du secteur et des observations issues de sources publiques reconnues.</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Tendances Nationales 2026</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🏛️", title: "Montée en Gamme des Établissements", desc: "Les clubs investissent dans des rénovations haut de gamme, créant des espaces plus luxueux avec attention portée à la décoration et au confort." },
              { icon: "🌿", title: "Bien-être et Approche Holistique", desc: "Intégration d'espaces bien-être : saunas, jacuzzis, bars à champagne. Les établissements deviennent des destinations complètes." },
              { icon: "📱", title: "Digitalisation de l'Expérience", desc: "Réservations en ligne, applications mobiles, systèmes de fidélité. La transformation digitale facilite l'accès." },
              { icon: "🎭", title: "Diversification des Concepts", desc: "Soirées thématiques, clubs réservés aux couples, espaces LGBTQ+ inclusifs, espaces dédiés aux débutants." },
            ].map((t, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Focus Régionaux</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">🏛️ Île-de-France</h3>
              <p className="text-muted-foreground text-sm mb-2">Le Pôle de Référence</p>
              <p className="text-primary font-bold">25+ établissements actifs</p>
            </div>
            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">☀️ PACA</h3>
              <p className="text-muted-foreground text-sm mb-2">Dynamique Méditerranéenne</p>
              <p className="text-primary font-bold">15+ clubs référencés</p>
            </div>
            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">🏖️ Cap d'Agde</h3>
              <p className="text-muted-foreground text-sm mb-2">La Destination Mythique</p>
              <p className="text-primary font-bold">~30 établissements en saison</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clubbing" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all">Voir l'Annuaire Complet</Link>
            <Link to="/application" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all">Télécharger l'Application</Link>
          </div>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default ActualitesLibertines;
