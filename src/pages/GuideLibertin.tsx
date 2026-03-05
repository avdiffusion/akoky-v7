import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const GuideLibertin = () => (
  <ContentPageLayout
    title="Guide du Libertinage en France | AKOKY"
    description="Le guide de référence pour comprendre et découvrir le monde libertin en toute sérénité. 120 établissements vérifiés, 1.5M de membres actifs."
    canonical="https://akoky.com/guide-libertin-france"
    heroTitle="Guide du Libertinage en France"
    heroSubtitle="Le guide de référence pour comprendre et découvrir le monde libertin en toute sérénité"
    heroImage="https://akoky.com/images/guide-libertin-france.webp"
    breadcrumb={[{ label: "Guide Libertin France" }]}
    faq={[
      { question: "Qu'est-ce que le libertinage ?", answer: "Le libertinage est une approche de la sexualité basée sur la liberté consentie, l'exploration et le partage d'expériences érotiques. Il repose sur des valeurs de respect, communication et consentement mutuel." },
      { question: "Club libertin ou sauna libertin : que choisir ?", answer: "Le club offre une ambiance lounge et sensuelle avec dress code. Le sauna propose détente spa et naturalisme. Pour une première fois, le club est souvent plus rassurant." },
      { question: "Comment se déroule une première visite ?", answer: "Accueil à la réception, exploration des lieux, installation au bar, observation de l'ambiance. Vous pouvez rester habillé et ne faire que discuter." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Article", name: "Guide du Libertinage en France", url: "https://akoky.com/guide-libertin-france" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div className="flex flex-wrap gap-3 mb-8">
          <Link to="/premier-club-libertin" className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">1. Premier club libertin</Link>
          <Link to="/premier-rendez-vous-libertin" className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">2. Premier rendez-vous</Link>
          <Link to="/questions-debutants-libertinage" className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">3. FAQ débutants</Link>
        </div>

        <div>
          <p className="text-muted-foreground text-lg leading-relaxed">Bienvenue dans le <strong>guide complet du libertinage en France</strong>, la ressource éditoriale de référence créée par AKOKY. Avec <strong>1,5 million de membres actifs</strong> et <strong>120 établissements vérifiés</strong>, AKOKY s'impose comme la plateforme de confiance pour explorer ce monde en toute sécurité.</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Qu'est-ce que le libertinage ?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Le libertinage désigne une approche de la sexualité basée sur la <strong>liberté consentie</strong>. Il repose sur trois piliers : le consentement explicite, une communication claire, et le respect absolu des limites de chacun.</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {[
              { title: "L'échangisme classique", desc: "Deux couples qui échangent leurs partenaires." },
              { title: "Le candaulisme", desc: "Plaisir de voir son conjoint avec d'autres personnes." },
              { title: "Le triolisme", desc: "Pratique sexuelle à trois personnes." },
              { title: "Le voyeurisme/exhibitionnisme", desc: "Plaisir de regarder ou d'être regardé." },
              { title: "Le soft", desc: "Caresses, baisers, sans pénétration." },
              { title: "Le hard", desc: "Pratiques complètes incluant la pénétration." },
            ].map((p, i) => (
              <div key={i} className="p-4 bg-card/50 rounded-xl border border-border">
                <h3 className="text-foreground font-bold text-sm mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Club libertin ou sauna libertin ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">Club Libertin</h3>
              <p className="text-muted-foreground text-sm">Ambiance lounge et sensuelle. Tenue chic au départ. Éclairage tamisé. Idéal pour une première découverte.</p>
            </div>
            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">Sauna Libertin</h3>
              <p className="text-muted-foreground text-sm">Ambiance spa et détente. Nu ou serviette. Plus lumineux. Plutôt expérimenté.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Ressources complémentaires</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Guide ultime (8000+ mots)", link: "/guide-ultime-libertinage-france" },
              { title: "Débuter dans le libertinage", link: "/debuter-libertinage" },
              { title: "Premier club libertin", link: "/premier-club-libertin" },
              { title: "Questions débutants", link: "/questions-debutants-libertinage" },
              { title: "Lexique libertin A-Z", link: "/lexique" },
              { title: "Saunas libertins", link: "/saunas-libertins" },
            ].map((r, i) => (
              <Link key={i} to={r.link} className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors text-foreground font-medium text-sm">{r.title} →</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default GuideLibertin;
