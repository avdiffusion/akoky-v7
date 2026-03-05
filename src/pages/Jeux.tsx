import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Jeux = () => (
  <ContentPageLayout
    title="AKOKY Space – Jeux Libertins Nouvelle Génération | AKOKY"
    description="Des jeux libertins immersifs pour pimenter vos soirées, stimuler vos désirs et partager des moments complices. 100% gratuit."
    canonical="https://akoky.com/jeux"
    heroTitle="AKOKY Space — Jeux Libertins Nouvelle Génération"
    heroSubtitle="Des jeux libertins immersifs pour pimenter vos soirées, stimuler vos désirs et partager des moments complices"
    heroImage="https://akoky.com/images/cover-jeux.webp"
    breadcrumb={[{ label: "Jeux" }]}
    faq={[
      { question: "Les jeux AKOKY sont-ils gratuits ?", answer: "Oui, 100% gratuits ! AKOKY Space est entièrement accessible sans abonnement, sans achat intégré et sans limitation." },
      { question: "Peut-on jouer en couple ?", answer: "Absolument ! La plupart de nos jeux sont conçus pour être joués en couple, mais vous pouvez aussi jouer seul(e) ou en groupe." },
      { question: "Les jeux sont-ils anonymes ?", answer: "Oui, votre anonymat est garanti. Aucune inscription obligatoire, aucune donnée personnelle collectée sans votre consentement." },
      { question: "Faut-il installer l'application ?", answer: "Non, vous pouvez jouer directement depuis votre navigateur sur akoky.space. L'installation est optionnelle." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "AKOKY Space – Jeux Libertins", url: "https://akoky.com/jeux" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://akoky.space/" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all">🎮 Jouer maintenant</a>
            <a href="https://akoky.space/" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all">📲 Télécharger l'application</a>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Nos Jeux Libertins AKOKY</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎲", title: "Roulette des Gages Libertins", desc: "Faites tourner la roue et découvrez des gages sensuels, amusants ou audacieux." },
              { icon: "🎯", title: "Dé du Désir AKOKY", desc: "Lancez les dés et laissez-vous guider par vos envies." },
              { icon: "💋", title: "Vérité ou Action Libertine", desc: "Le grand classique revisité version libertine." },
              { icon: "🔥", title: "Défis Coquins de Couple", desc: "Relevez des défis en duo pour renforcer votre complicité." },
              { icon: "🃏", title: "Cartes Twist Sensuelles", desc: "Piochez une carte et découvrez des scénarios inattendus." },
              { icon: "🧠", title: "Quiz Libertin Interactif", desc: "Testez vos connaissances sur l'univers libertin." },
              { icon: "💑", title: "Jeu Couple – Connexion & Désirs", desc: "Un jeu interactif pensé pour les couples qui veulent renforcer leur complicité." },
              { icon: "🌈", title: "Jeu 100% Bi – Exploration & Connexion", desc: "Un jeu dédié à l'exploration de la fluidité et des connexions." },
            ].map((g, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{g.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{g.desc}</p>
                <a href="https://akoky.space/" className="text-primary hover:underline text-sm font-medium">Lancer le jeu →</a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Pourquoi AKOKY Space ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "✨", title: "100% Gratuit", desc: "Aucun abonnement caché, aucune limitation." },
              { icon: "🎨", title: "Créé par AKOKY", desc: "Développé par la référence libertine européenne." },
              { icon: "🔒", title: "Privé & Anonyme", desc: "Vos données restent confidentielles. Sans inscription obligatoire." },
              { icon: "💎", title: "Design Élégant", desc: "Une interface premium et immersive." },
              { icon: "📱", title: "Multi-supports", desc: "Compatible mobile, tablette et desktop." },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border text-center">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Jeux;
