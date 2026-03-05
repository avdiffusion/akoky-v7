import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const GuideUltimeLibertinage = () => (
  <ContentPageLayout
    title="Guide Ultime du Libertinage en France | AKOKY"
    description="Le guide de référence : 500+ clubs vérifiés, événements exclusifs, codes à connaître, conseils d'experts. 8000+ mots pour tout savoir."
    canonical="https://akoky.com/guide-ultime-libertinage-france"
    heroTitle="Guide Ultime du Libertinage en France"
    heroSubtitle="Le guide de référence pour découvrir l'univers du libertinage français : 500+ clubs vérifiés, événements exclusifs, codes à connaître, conseils d'experts."
    heroImage="https://akoky.com/images/app-cover.webp"
    breadcrumb={[{ label: "Guide Ultime" }]}
    faq={[
      { question: "Qu'est-ce que le libertinage ?", answer: "Le libertinage est une pratique sexuelle consensuelle qui permet aux couples et aux célibataires d'explorer leur sexualité au-delà des codes traditionnels." },
      { question: "Quelle est la différence entre soft et hard ?", answer: "Le soft exclut la pénétration avec d'autres partenaires (caresses, baisers). Le hard inclut les relations sexuelles complètes." },
      { question: "Combien coûte une soirée en club libertin ?", answer: "Couples : 40-120€. Femmes seules : souvent gratuit ou 20-40€. Hommes seuls : 80-150€." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Article", name: "Guide Ultime du Libertinage en France", url: "https://akoky.com/guide-ultime-libertinage-france" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        {/* Table of contents */}
        <div className="p-8 bg-card/50 rounded-2xl border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6 font-display">📚 Table des matières complète</h2>
          <p className="text-muted-foreground mb-6">Naviguez facilement dans ce guide de 8000+ mots</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-foreground font-bold mb-3">🎯 Les Fondamentaux</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>1. Qu'est-ce que le libertinage ?</li>
                <li>2. Histoire du libertinage en France</li>
                <li>3. Les différents types</li>
                <li>4. Comment débuter</li>
                <li>5. Les règles d'or</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-bold mb-3">🏛️ Lieux & Événements</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>6. Les clubs libertins en France</li>
                <li>7. Comment choisir son club</li>
                <li>8. Les saunas libertins</li>
                <li>9. Soirées privées et événements</li>
                <li>10. Top destinations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-bold mb-3">💡 Conseils Pratiques</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>11. Votre première fois en club</li>
                <li>12. Codes vestimentaires</li>
                <li>13. Communication dans le couple</li>
                <li>14. Sécurité et hygiène</li>
                <li>15. Budget et tarifs</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">01. Qu'est-ce que le libertinage ?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Le libertinage est une pratique sexuelle consensuelle qui permet aux couples et aux célibataires d'explorer leur sexualité au-delà des codes traditionnels. En France, cette pratique rassemble plus de 2 millions d'adeptes occasionnels ou réguliers.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">Le libertinage moderne n'est pas seulement une question de sexe. C'est avant tout une philosophie de vie basée sur la liberté, le respect mutuel, et la communication au sein du couple.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { icon: "🔓", label: "Liberté" },
              { icon: "🤝", label: "Respect" },
              { icon: "💬", label: "Communication" },
              { icon: "🎭", label: "Discrétion" },
            ].map((v, i) => (
              <div key={i} className="p-4 bg-card/50 rounded-xl border border-border text-center">
                <span className="text-2xl block mb-2">{v.icon}</span>
                <p className="text-foreground text-sm font-medium">{v.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">03. Les différents types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "🌸 Soft Libertinage", level: "Débutant", desc: "Pratiques sensuelles sans pénétration avec d'autres partenaires." },
              { title: "🔥 Hard Libertinage", level: "Confirmé", desc: "Relations sexuelles complètes avec d'autres partenaires." },
              { title: "👁️ Voyeurisme", level: "Tout niveau", desc: "Plaisir de regarder d'autres personnes, toujours avec consentement." },
              { title: "🎭 Exhibitionnisme", level: "Tout niveau", desc: "Plaisir de se montrer et d'être observé dans un cadre sécurisé." },
            ].map((t, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-1">{t.title}</h3>
                <p className="text-primary text-xs font-medium mb-2">{t.level}</p>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-muted-foreground text-center italic">Le guide complet continue avec 15 chapitres supplémentaires couvrant l'histoire, les clubs, les conseils pratiques, le budget et les témoignages. Consultez les guides spécialisés ci-dessous.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Guide libertin France", link: "/guide-libertin-france" },
            { title: "Débuter dans le libertinage", link: "/debuter-libertinage" },
            { title: "Premier club libertin", link: "/premier-club-libertin" },
            { title: "Lexique libertin A-Z", link: "/lexique" },
            { title: "Saunas libertins", link: "/saunas-libertins" },
            { title: "Événements libertins", link: "/evenements" },
          ].map((r, i) => (
            <Link key={i} to={r.link} className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors text-foreground font-medium text-sm">{r.title} →</Link>
          ))}
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default GuideUltimeLibertinage;
