import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Libertinage = () => (
  <ContentPageLayout
    title="Le Libertinage Moderne : Définition, Pratiques & Consentement | AKOKY"
    description="Découvrez cet univers en 2026 : pratiques respectueuses, évolution culturelle et clés pour une exploration éclairée."
    canonical="https://akoky.com/libertinage"
    heroTitle="Le Libertinage Moderne : Définition, Pratiques & Consentement"
    heroSubtitle="Découvrez cet univers en 2026 : pratiques respectueuses, évolution culturelle et clés pour une exploration éclairée."
    heroImage="https://akoky.com/images/libertinage-cover.webp"
    breadcrumb={[{ label: "Libertinage" }]}
    faq={[
      { question: "Le libertinage, c'est de l'échangisme ?", answer: "L'échangisme est une pratique spécifique où des couples échangent leurs partenaires. Mais cet univers englobe bien plus : triolisme, mélangisme, candaulisme, voyeurisme, exhibitionnisme." },
      { question: "Peut-on pratiquer en célibataire ?", answer: "Oui. Les femmes seules sont très bienvenues. Les hommes seuls sont acceptés sous conditions selon les établissements." },
      { question: "Le consentement est-il vraiment respecté ?", answer: "Dans les clubs et événements sérieux, le consentement est la règle absolue. Le « non » est toujours respecté immédiatement." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Article", name: "Le Libertinage Moderne", url: "https://akoky.com/libertinage" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div><p className="text-3xl font-black text-primary">1.5M</p><p className="text-muted-foreground text-sm">Membres actifs</p></div>
          <div><p className="text-3xl font-black text-primary">120+</p><p className="text-muted-foreground text-sm">Clubs vérifiés</p></div>
          <div><p className="text-3xl font-black text-primary">300</p><p className="text-muted-foreground text-sm">Événements/mois</p></div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Qu'est-ce que le libertinage aujourd'hui ?</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Ce mode de vie est souvent entouré de fantasmes, d'idées reçues et de représentations qui ne reflètent que partiellement la réalité. Loin des clichés, cette approche moderne est avant tout une démarche libre, consentie et assumée, reposant sur le dialogue, le respect et la confiance mutuelle.</p>
            <p>Historiquement, le terme "libertin" désignait une personne affranchie des règles morales ou religieuses. Aujourd'hui, cette philosophie désigne une pratique sexuelle et relationnelle qui consiste à explorer sa sexualité en dehors du cadre exclusif du couple monogame traditionnel.</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Les différentes formes de pratiques</h2>
          <div className="space-y-6">
            {[
              { title: "Les pratiques soft", desc: "Expériences qui excluent la pénétration avec d'autres partenaires. Échanges de caresses, jeux sensuels. Souvent une première étape pour les couples débutants." },
              { title: "L'échangisme", desc: "Deux couples échangent leurs partenaires pour des moments intimes. Repose sur un accord mutuel entre les quatre personnes impliquées." },
              { title: "Le candaulisme", desc: "L'un des partenaires prend du plaisir à voir ou à savoir que son ou sa partenaire a des relations avec une autre personne." },
              { title: "Le triolisme", desc: "Relation sexuelle à trois personnes. Un couple invite une troisième personne à les rejoindre." },
              { title: "Les relations ouvertes", desc: "Les partenaires s'autorisent mutuellement à avoir des relations avec d'autres personnes, souvent de manière séparée." },
            ].map((p, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Le couple et le consentement</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Le consentement est la pierre angulaire de toute exploration. Sans consentement libre, éclairé et enthousiaste, il ne peut y avoir de pratique saine. Le consentement peut être retiré à tout moment. Le silence n'est PAS un consentement. L'hésitation n'est PAS un consentement. Seul un "oui" clair et enthousiaste en est un.</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">À qui s'adresse cet univers ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "💑", title: "Les couples établis", desc: "La majorité des pratiquants, en quête de nouvelles expériences et de complicité renforcée." },
              { icon: "👥", title: "Les célibataires", desc: "Hommes et femmes ont leur place dans ce milieu, avec des accès variés selon les établissements." },
              { icon: "🌈", title: "Toutes orientations", desc: "Hétérosexuel·le, bisexuel·le, homosexuel·le ou pansexuel·le : la diversité est une richesse." },
            ].map((p, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border text-center">
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Ressources pour aller plus loin</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Débuter dans ce mode de vie", link: "/debuter-libertinage" },
              { title: "Lexique complet", link: "/lexique" },
              { title: "Événements & Soirées", link: "/evenements" },
              { title: "Notre vision", link: "/vision" },
            ].map((r, i) => (
              <Link key={i} to={r.link} className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors text-foreground font-medium">{r.title} →</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Libertinage;
