import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const PremierClubLibertin = () => (
  <ContentPageLayout
    title="Votre Premier Club Libertin : Le Guide Complet | AKOKY"
    description="Tout ce qu'il faut savoir pour vivre cette première expérience sereinement et avec confiance."
    canonical="https://akoky.com/premier-club-libertin"
    heroTitle="Votre Premier Club Libertin : Le Guide Complet"
    heroSubtitle="Tout ce qu'il faut savoir pour vivre cette première expérience sereinement et avec confiance"
    heroImage="https://akoky.com/images/premier-club-cover.webp"
    breadcrumb={[{ label: "Guides", href: "/debuter-libertinage" }, { label: "Premier Club" }]}
    faq={[
      { question: "Faut-il forcément participer lors d'une première soirée ?", answer: "Non. Vous pouvez simplement observer, discuter ou participer aux ambiances. Beaucoup de débutants passent leur première soirée à visiter le lieu et discuter." },
      { question: "Y a-t-il un dress code à respecter ?", answer: "Oui, la plupart des clubs demandent une tenue correcte et soignée. Hommes : chemise, pantalon. Femmes : robe, lingerie ou tenue élégante." },
      { question: "Comment dire non sans être mal à l'aise ?", answer: "Simplement et clairement. Un « non merci » suffit toujours. Le refus est normal et respecté dans le milieu libertin." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Article", name: "Premier Club Libertin - Guide", url: "https://akoky.com/premier-club-libertin" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div className="flex flex-wrap gap-3">
          <Link to="/premier-club-libertin" className="px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium">1. Votre premier club libertin</Link>
          <Link to="/premier-rendez-vous-libertin" className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">2. Votre premier rendez-vous</Link>
          <Link to="/questions-debutants-libertinage" className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">3. FAQ débutants</Link>
        </div>

        <div>
          <div className="p-6 bg-card/50 rounded-2xl border border-border mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">📌 Points clés à retenir</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Aucune obligation de participer activement dès la première visite</li>
              <li>• Observer fait partie intégrante de l'expérience</li>
              <li>• Le "non" est toujours respecté sans exception</li>
              <li>• Vous pouvez partir à tout moment</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">🧠 Préparation mentale : L'essentiel avant de partir</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">1. Définissez vos limites en couple</h3>
              <p className="text-muted-foreground mb-4">Avant même de franchir la porte, ayez une <strong>discussion approfondie avec votre partenaire</strong>.</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Qu'est-ce qui nous attire dans cette expérience ?</li>
                <li>• Quelles sont nos limites absolues (hard limits) ?</li>
                <li>• Comment signalerons-nous si quelque chose ne va pas ?</li>
                <li>• Avons-nous un "safe word" ou un signal discret ?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">2. Gérez vos attentes</h3>
              <p className="text-muted-foreground">Beaucoup de débutants arrivent avec des attentes irréalistes. La réalité d'un club est souvent plus douce, plus humaine et moins "performative" qu'imaginé.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">⏱️ Déroulé type d'une première soirée</h2>
          <div className="space-y-6">
            {[
              { time: "21h00", title: "Arrivée & Accueil", desc: "Accueil, explication du règlement. Mentionnez que c'est votre première fois." },
              { time: "21h30", title: "Installation & Observation", desc: "Installez-vous au bar, prenez un verre, observez l'ambiance." },
              { time: "22h30", title: "Premiers Échanges", desc: "L'ambiance se réchauffe. Engagez la conversation avec d'autres couples." },
              { time: "23h30", title: "Observation Active", desc: "Si vous vous sentez à l'aise, rapprochez-vous des espaces câlins." },
              { time: "00h30", title: "Point Couple", desc: "Prenez une pause pour faire le point ensemble." },
              { time: "01h30", title: "Participation ou Départ", desc: "Si l'occasion se présente, envisagez de participer. Sinon, il est acceptable de rentrer." },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold flex-shrink-0">{s.time}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/debuter-libertinage" className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
            <p className="text-foreground font-bold">🌱 Guide complet débutants</p>
            <p className="text-muted-foreground text-sm">Retour au guide principal →</p>
          </Link>
          <Link to="/questions-debutants-libertinage" className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
            <p className="text-foreground font-bold">❓ Questions fréquentes débutants</p>
            <p className="text-muted-foreground text-sm">Voir les questions →</p>
          </Link>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default PremierClubLibertin;
