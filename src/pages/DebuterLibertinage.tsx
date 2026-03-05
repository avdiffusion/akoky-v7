import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const DebuterLibertinage = () => (
  <ContentPageLayout
    title="Débuter dans le Libertinage – Guide Complet | AKOKY"
    description="Le guide de référence pour comprendre et découvrir le libertinage en toute sérénité, porté par l'expérience réelle d'un couple libertin depuis plus de 25 ans."
    canonical="https://akoky.com/debuter-libertinage"
    heroTitle="Guide du Libertinage en France"
    heroSubtitle="Le guide de référence pour comprendre et découvrir le libertinage en toute sérénité, porté par l'expérience réelle d'un couple libertin depuis plus de 25 ans."
    heroImage="https://akoky.com/images/debuter-libertinage-cover.webp"
    breadcrumb={[{ label: "Guides", href: "/guide-libertin-france" }, { label: "Débuter" }]}
    faq={[
      { question: "Par où commencer quand on est débutant ?", answer: "Commencez par vous informer : lire des guides, comprendre les règles du milieu et échanger avec des personnes bienveillantes. Sur AKOKY, vous pouvez consulter les avis, participer à des événements soft ou simplement observer." },
      { question: "Comment aborder le sujet avec son ou sa partenaire ?", answer: "Choisissez un moment calme, sans pression. Exprimez vos envies avec honnêteté et écoutez celles de votre partenaire. Le libertinage repose sur la communication et le respect mutuel." },
      { question: "La jalousie est-elle normale quand on débute ?", answer: "Oui, c'est fréquent au début. L'important est d'en parler ouvertement avec son ou sa partenaire et d'avancer progressivement." },
      { question: "Peut-on découvrir le libertinage sans aller en club ?", answer: "Absolument. Apéros libertins, événements soft, discussions en ligne et lives permettent de découvrir l'ambiance sans pression." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Article", name: "Débuter dans le libertinage", url: "https://akoky.com/debuter-libertinage" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Débuter dans le libertinage, à votre rythme</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Le libertinage ne commence pas par un club ou une rencontre, mais par la compréhension, la réflexion et le respect de vos propres limites.</p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Link to="/guide-ultime-libertinage-france" className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <h3 className="text-foreground font-bold mb-1">📘 Comprendre le libertinage</h3>
              <p className="text-muted-foreground text-sm">Lire le guide ultime →</p>
            </Link>
            <Link to="/questions-debutants-libertinage" className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <h3 className="text-foreground font-bold mb-1">❓ Questions fréquentes</h3>
              <p className="text-muted-foreground text-sm">Consulter la FAQ débutants →</p>
            </Link>
            <Link to="/premier-club-libertin" className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <h3 className="text-foreground font-bold mb-1">🏛️ Première expérience</h3>
              <p className="text-muted-foreground text-sm">Préparer sa première fois →</p>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Se poser les bonnes questions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "💭", title: "Vos envies", desc: "Qu'est-ce qui vous attire dans le libertinage ? La curiosité ? Le désir de sortir de la routine ?" },
              { icon: "🛡️", title: "Vos limites", desc: "Qu'est-ce qui vous semble acceptable ou non ? Définir vos limites n'est pas un signe de fermeture." },
              { icon: "✨", title: "Vos attentes", desc: "Recherchez-vous du plaisir, de la nouveauté, de la connexion humaine ?" },
              { icon: "💬", title: "La communication", desc: "Si vous êtes en couple, avez-vous abordé le sujet ouvertement ?" },
              { icon: "⏳", title: "Votre rythme", desc: "Le libertinage n'est pas une course. Avancez sans pression." },
              { icon: "❤️", title: "Vos émotions", desc: "Êtes-vous prêt à gérer des émotions parfois inattendues comme la jalousie ?" },
            ].map((q, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{q.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{q.title}</h3>
                <p className="text-muted-foreground text-sm">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Les premières expériences possibles</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Discussions en ligne", desc: "Commencez par échanger sur des plateformes spécialisées." },
              { step: "2", title: "Apéros libertins", desc: "Événements conviviaux parfaits pour une première immersion." },
              { step: "3", title: "Événements soft", desc: "Spécialement conçus pour les débutants, avec ambiance douce." },
              { step: "4", title: "Observation dans un club", desc: "Visiter un club en tant qu'observateur est tout à fait possible." },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Sécurité, consentement et respect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🛡️", title: "Outils de sécurité", desc: "Des espaces comme safe.akoky.com existent pour informer et accompagner." },
              { icon: "🚫", title: "Le droit de dire non", desc: "À tout moment, vous pouvez refuser. Votre consentement est essentiel." },
              { icon: "👂", title: "Écoutez votre partenaire", desc: "Vérifiez régulièrement que votre partenaire se sent bien." },
              { icon: "🚪", title: "Partir à tout moment", desc: "Aucune obligation de rester si vous ne vous sentez pas à l'aise." },
              { icon: "🏛️", title: "Lieux sûrs", desc: "Privilégiez les clubs reconnus et les événements encadrés." },
              { icon: "🕶️", title: "Protégez votre identité", desc: "Utilisez un pseudo, restez discret sur votre vie privée." },
            ].map((s, i) => (
              <div key={i} className="p-4 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <h3 className="text-foreground font-bold mb-1 text-sm">{s.title}</h3>
                <p className="text-muted-foreground text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="https://app.akoky.com/login" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Créer mon compte gratuitement</a>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default DebuterLibertinage;
