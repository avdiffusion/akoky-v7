import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Concours = () => (
  <ContentPageLayout
    title="Concours AKOKY – Gagnez des Expériences Libertines Exclusives"
    description="Participez gratuitement aux concours Akoky et tentez de gagner des séjours dans les meilleurs clubs libertins d'Europe, des abonnements VIP et des expériences uniques."
    canonical="https://akoky.com/concours"
    heroTitle="Gagnez des expériences libertines exclusives"
    heroSubtitle="Participez gratuitement aux concours Akoky et tentez de gagner des séjours, abonnements VIP et expériences uniques."
    heroType="gradient"
    breadcrumb={[{ label: "Concours" }]}
    faq={[
      { question: "Comment participer aux concours Akoky ?", answer: "Pour participer, vous devez être membre inscrit sur Akoky. Chaque concours a ses propres règles de participation détaillées sur sa page dédiée. La plupart sont gratuits et ouverts à tous les membres actifs." },
      { question: "Les concours Akoky sont-ils vraiment gratuits ?", answer: "Oui, tous les concours organisés par Akoky sont 100% gratuits. Aucun achat ou paiement n'est requis pour participer." },
      { question: "Quels sont les lots à gagner ?", answer: "Les lots varient : séjours dans des clubs libertins premium, abonnements VIP Akoky, invitations à des événements privés, coffrets cadeaux et expériences uniques." },
      { question: "Puis-je participer à plusieurs concours simultanément ?", answer: "Oui, vous pouvez participer à autant de concours Akoky que vous le souhaitez." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Concours AKOKY", url: "https://akoky.com/concours" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        {/* Programme parrainage */}
        <div className="p-8 bg-card/50 rounded-2xl border border-border">
          <p className="text-primary text-sm font-bold mb-2">💎 PROGRAMME PARRAINAGE</p>
          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Multipliez vos chances avec le parrainage</h2>
          <p className="text-muted-foreground mb-4">Certains concours Akoky offrent des <strong>bonus de participation</strong> aux membres actifs du programme de parrainage.</p>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>✓ Participations multiples aux tirages au sort</li>
            <li>✓ Accès anticipé à certains concours</li>
            <li>✓ Bonus de points dans les jeux</li>
            <li>✓ Récompenses cumulables avec les lots</li>
          </ul>
          <Link to="/parrainage" className="text-primary hover:underline text-sm font-medium mt-4 inline-block">Découvrir le parrainage →</Link>
        </div>

        {/* Current contest */}
        <div>
          <p className="text-primary text-sm font-bold mb-2">🔥 CONCOURS EN COURS</p>
          <h2 className="text-2xl font-bold text-foreground mb-6 font-display">Participez dès maintenant</h2>
          <div className="p-8 bg-card/50 rounded-2xl border border-primary/30">
            <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">EN COURS</span>
            <h3 className="text-xl font-bold text-foreground mt-4 mb-2">🗝️ Le Jeu des Six Clés</h3>
            <p className="text-muted-foreground text-sm mb-2">Jeu d'exploration / Chasse au trésor digitale</p>
            <p className="text-muted-foreground mb-4">Partez à la recherche des <strong>six clés secrètes</strong> dissimulées sur le site Akoky. La première personne à toutes les découvrir remporte un lot exceptionnel !</p>
            <p className="text-foreground font-bold mb-4">🏆 Grand Prix : Un séjour d'une semaine tout compris au RIAD5, Cap d'Agde (valeur + 4 500€)</p>
            <Link to="/concours-six-cles" className="text-primary hover:underline font-medium">Participer au jeu des six clés →</Link>
          </div>
        </div>

        {/* Upcoming */}
        <div>
          <p className="text-muted-foreground/60 text-sm font-bold mb-2">⏳ BIENTÔT DISPONIBLES</p>
          <h2 className="text-2xl font-bold text-foreground mb-6 font-display">Prochains concours</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📸", title: "Concours Photo de Couple", date: "fin 2026 - début 2027", lot: "Week-end Les Chandelles Paris" },
              { icon: "✍️", title: "Meilleur Témoignage Libertin", date: "2027", lot: "3 abonnements Premium 1 an" },
              { icon: "🌴", title: "Challenge Parrainage Été", date: "Été 2027", lot: "5 séjours clubs libertins Europe" },
            ].map((c, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border opacity-75">
                <p className="text-muted-foreground/60 text-xs mb-2">{c.date}</p>
                <span className="text-3xl block mb-3">{c.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm"><strong>Lot :</strong> {c.lot}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Créer mon compte gratuit</a>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Concours;
