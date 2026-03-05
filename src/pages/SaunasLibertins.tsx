import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const SaunasLibertins = () => (
  <ContentPageLayout
    title="Saunas Libertins en France – Bien-être, Détente & Sensualité | AKOKY"
    description="L'alliance parfaite entre bien-être, détente et sensualité. Guide complet des saunas libertins en France."
    canonical="https://akoky.com/saunas-libertins"
    heroTitle="Saunas Libertins en France"
    heroSubtitle="L'alliance parfaite entre bien-être, détente et sensualité"
    heroImage="https://akoky.com/images/sauna-cover.webp"
    breadcrumb={[{ label: "Saunas Libertins" }]}
    faq={[
      { question: "C'est quoi exactement un sauna libertin ?", answer: "Un sauna libertin est un établissement qui combine détente spa (hammam, jacuzzi, sauna) et rencontres sensuelles entre adultes consentants. L'ambiance y est feutrée et apaisante." },
      { question: "Est-ce que les saunas libertins acceptent les célibataires ?", answer: "Les femmes seules sont généralement bienvenues. Pour les hommes seuls, chaque sauna a sa politique : certains les acceptent tous les jours, d'autres uniquement certains créneaux." },
      { question: "Quelle tenue porter dans un sauna libertin ?", answer: "On vous fournit un peignoir et une serviette à l'entrée. Vous pouvez circuler en peignoir, en serviette, en maillot de bain ou nu selon les espaces." },
      { question: "Combien coûte l'entrée dans un sauna libertin ?", answer: "En moyenne : 40-70€ pour un couple, 25-50€ pour une femme seule, 70-100€ pour un homme seul." },
      { question: "Peut-on juste profiter du spa sans participer aux activités libertines ?", answer: "Oui, absolument. Vous êtes totalement libre de simplement profiter des équipements spa sans participer aux jeux sensuels." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Saunas Libertins en France", url: "https://akoky.com/saunas-libertins" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Les <strong>saunas libertins</strong> représentent une approche unique du libertinage, où l'expérience sensuelle se mêle à la détente et au bien-être. Contrairement aux clubs traditionnels orientés fête et musique, ces établissements privilégient une ambiance apaisante, feutrée, propice aux rencontres intimes dans un cadre raffiné.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">En France, les saunas libertins attirent aussi bien les couples débutants que les habitués en quête d'une expérience plus zen.</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Sauna libertin ou club libertin : quelle différence ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Sauna Libertin</h3>
              <p className="text-primary text-sm mb-3">Zen & Détente</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Ambiance feutrée et apaisante</li>
                <li>• Espaces spa : hammam, jacuzzi, piscine</li>
                <li>• Ouvert en journée et soirée</li>
                <li>• Idéal pour les débutants et les discrets</li>
                <li>• Tenue : peignoir, serviette</li>
              </ul>
            </div>
            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Club Libertin</h3>
              <p className="text-primary text-sm mb-3">Festif & Nocturne</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Ambiance festive et musicale</li>
                <li>• DJ, piste de danse, bar animé</li>
                <li>• Ouvert principalement le soir et la nuit</li>
                <li>• Public plus expérimenté</li>
                <li>• Tenue : sexy, élégante, dress code strict</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Comment bien choisir son sauna libertin ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "✨", title: "Hygiène irréprochable", desc: "Propreté parfaite, serviettes propres fournies, gel hydroalcoolique disponible." },
              { icon: "⭐", title: "Réputation en ligne", desc: "Privilégiez les établissements référencés sur AKOKY avec des avis vérifiés." },
              { icon: "🏊", title: "Équipements modernes", desc: "Vérifiez la présence de jacuzzi, hammam, sauna finlandais, piscine, cabines VIP." },
              { icon: "🚪", title: "Politique d'accueil", desc: "Assurez-vous que votre profil est accepté (couple, femme seule, homme seul)." },
            ].map((c, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/clubbing" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Accéder à l'annuaire complet →</Link>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default SaunasLibertins;
