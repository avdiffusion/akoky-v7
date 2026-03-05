import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const PremierRendezVousLibertin = () => (
  <ContentPageLayout
    title="Votre Premier Rendez-vous Libertin : Guide Complet | AKOKY"
    description="De la prise de contact à la rencontre : tout ce qu'il faut savoir pour vivre cette première expérience sereinement."
    canonical="https://akoky.com/premier-rendez-vous-libertin"
    heroTitle="Votre Premier Rendez-vous Libertin : Guide Complet pour Réussir"
    heroSubtitle="De la prise de contact à la rencontre : tout ce qu'il faut savoir pour vivre cette première expérience sereinement"
    heroImage="https://akoky.com/images/premier-rendez-vous-libertin-cover.webp"
    breadcrumb={[{ label: "Guides", href: "/debuter-libertinage" }, { label: "Premier Rendez-vous" }]}
    faq={[
      { question: "Faut-il obligatoirement participer lors du premier rendez-vous ?", answer: "Non. Un premier rendez-vous ne signifie pas automatiquement une participation active. Le feeling doit être mutuel." },
      { question: "Où se donner rendez-vous pour la première fois ?", answer: "Un lieu public (bar, restaurant) est recommandé pour la première rencontre. Si tout se passe bien, vous pourrez ensuite décider ensemble de continuer en club ou lieu privé." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Article", name: "Premier Rendez-vous Libertin", url: "https://akoky.com/premier-rendez-vous-libertin" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div className="flex flex-wrap gap-3">
          <Link to="/premier-club-libertin" className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">1. Votre premier club libertin</Link>
          <Link to="/premier-rendez-vous-libertin" className="px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium">2. Votre premier rendez-vous</Link>
          <Link to="/questions-debutants-libertinage" className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">3. FAQ débutants</Link>
        </div>

        <div className="p-6 bg-card/50 rounded-2xl border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">📌 Principes fondamentaux</h3>
          <ul className="text-muted-foreground space-y-2">
            <li>• Un premier rendez-vous ne signifie pas automatiquement une participation active</li>
            <li>• Le feeling doit être mutuel entre toutes les personnes impliquées</li>
            <li>• Vous pouvez écourter la rencontre à tout moment sans justification</li>
            <li>• La communication avant, pendant et après est essentielle</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">📋 Préparation : Avant le rendez-vous</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">1. La conversation préalable en couple</h3>
              <p className="text-muted-foreground mb-3">Cette discussion est <strong>non négociable</strong>. Elle pose les bases de votre expérience.</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>✅ Quelles sont vos attentes pour ce premier rendez-vous ?</li>
                <li>✅ Jusqu'où êtes-vous prêts à aller ?</li>
                <li>✅ Y a-t-il des pratiques à éviter absolument ?</li>
                <li>✅ Quel est votre signal de sécurité ?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">2. Choisir le bon lieu</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-card/50 rounded-xl border border-border">
                  <p className="text-foreground font-bold text-sm">✅ Lieu public</p>
                  <p className="text-muted-foreground text-xs">Bar, restaurant ou café dans un quartier animé.</p>
                </div>
                <div className="p-4 bg-card/50 rounded-xl border border-border">
                  <p className="text-foreground font-bold text-sm">🏠 Domicile privé</p>
                  <p className="text-muted-foreground text-xs">Réservé à ceux qui se sentent déjà très à l'aise.</p>
                </div>
                <div className="p-4 bg-card/50 rounded-xl border border-border">
                  <p className="text-foreground font-bold text-sm">🎭 Directement en club</p>
                  <p className="text-muted-foreground text-xs">Environnement sécurisé, espace bar/détente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">🤝 Pendant le rendez-vous : Les étapes clés</h2>
          <div className="space-y-6">
            {[
              { time: "0-15 min", title: "Briser la glace", desc: "Sujets légers d'abord. Installez-vous confortablement." },
              { time: "15-30 min", title: "Évaluer le feeling", desc: "Observez comment la conversation se déroule et si vous vous sentez à l'aise." },
              { time: "30-60 min", title: "Aborder le sujet", desc: "Si tout se passe bien, parlez plus ouvertement de vos attentes et limites." },
              { time: "1h+", title: "Décision", desc: "Soit vous continuez vers un club ou lieu privé, soit vous en restez là." },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold flex-shrink-0 whitespace-nowrap">{s.time}</div>
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
            <p className="text-foreground font-bold">🌱 Guide complet débutants →</p>
          </Link>
          <Link to="/premier-club-libertin" className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
            <p className="text-foreground font-bold">🎭 Premier club libertin →</p>
          </Link>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default PremierRendezVousLibertin;
