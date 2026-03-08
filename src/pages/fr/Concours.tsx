import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Comment participer aux concours Akoky ?", answer: "Pour participer, vous devez être membre inscrit sur Akoky. Chaque concours a ses propres règles de participation détaillées sur sa page dédiée. La plupart sont gratuits et ouverts à tous les membres actifs. Il suffit de suivre les instructions spécifiques du concours (formulaire, soumission de contenu, exploration du site, etc.)." },
  { question: "Les concours Akoky sont-ils vraiment gratuits ?", answer: "Oui, tous les concours organisés par Akoky sont 100% gratuits. Aucun achat ou paiement n'est requis pour participer. Seule l'inscription gratuite sur la plateforme Akoky est nécessaire pour accéder aux concours et soumettre votre participation." },
  { question: "Puis-je utiliser mon parrainage pour les concours ?", answer: "Certains concours incluent des bonus liés au programme de parrainage Akoky. Par exemple, des participations multiples aux tirages au sort, des points bonus dans les jeux, ou un accès prioritaire. Consultez le règlement de chaque concours pour connaître les avantages spécifiques du parrainage." },
  { question: "Quels sont les lots à gagner ?", answer: "Les lots varient selon les concours et incluent : séjours dans des clubs libertins premium (Cap d'Agde, Belgique, Espagne, France), abonnements VIP Akoky (1 mois à 1 an), invitations à des événements privés et soirées exclusives, coffrets cadeaux et expériences uniques, accès anticipé à de nouvelles fonctionnalités." },
  { question: "Comment sont désignés les gagnants ?", answer: "Les gagnants sont désignés selon les modalités précisées dans chaque règlement : tirage au sort via un générateur aléatoire certifié, performance (premier à accomplir une tâche), vote communautaire, ou jury Akoky. Tous les tirages sont effectués de manière transparente et les résultats sont publiés publiquement." },
  { question: "Puis-je participer à plusieurs concours simultanément ?", answer: "Oui, vous pouvez participer à autant de concours Akoky que vous le souhaitez, tant que vous respectez les conditions d'éligibilité de chacun. Il n'y a aucune limite au nombre de participations, et gagner un concours ne vous empêche pas de participer aux suivants." },
  { question: "Les concours sont-ils réservés aux couples ?", answer: "Non. Sauf mention contraire dans le règlement, les concours Akoky sont ouverts à tous les profils : couples, célibataires hommes, célibataires femmes, et groupes. Certains lots peuvent être adaptés selon le profil du gagnant (exemple : invitation double pour un couple, simple pour un célibataire)." },
  { question: "Combien de temps ai-je pour réclamer mon lot ?", answer: "Les gagnants sont contactés par email à l'adresse enregistrée sur leur compte Akoky. Vous avez généralement 15 jours calendaires pour confirmer votre acceptation du lot et fournir les informations nécessaires. Passé ce délai sans réponse, le lot peut être redistribué lors d'un nouveau tirage au sort." },
  { question: "Mes données personnelles sont-elles protégées ?", answer: "Oui, absolument. Akoky respecte strictement le RGPD et ne partage jamais vos données avec des tiers. Les informations collectées dans le cadre des concours (nom, email, préférences) sont uniquement utilisées pour la gestion du concours et la remise des lots." },
  { question: "Puis-je transférer mon lot à quelqu'un d'autre ?", answer: "Cela dépend du concours. Certains lots sont nominatifs et non transférables (abonnements Premium par exemple), tandis que d'autres peuvent être cédés (invitations à des événements, séjours en club). Cette information est toujours précisée dans le règlement spécifique du concours." },
];

const Concours = () => (
  <>
    <MetaTags
      title="Concours AKOKY – Gagnez des Expériences Libertines Exclusives"
      description="Participez gratuitement aux concours Akoky et tentez de gagner des séjours dans les meilleurs clubs libertins d'Europe, des abonnements VIP et des expériences uniques."
      canonical="https://akoky.com/fr/concours"
      lang="fr"
    />
    <HreflangTags slug="concours" />
    <ContentPageLayout
      lang="fr"
      title="Concours AKOKY – Gagnez des Expériences Libertines Exclusives"
      description="Participez gratuitement aux concours Akoky et tentez de gagner des séjours dans les meilleurs clubs libertins d'Europe, des abonnements VIP et des expériences uniques."
      canonical="https://akoky.com/fr/concours"
      heroTitle="Gagnez des expériences libertines exclusives"
      heroSubtitle="Participez gratuitement aux concours Akoky et tentez de gagner des séjours dans les meilleurs clubs libertins d'Europe, des abonnements VIP et des expériences uniques."
      heroImage="/images/concours/six-cles.webp"
      breadcrumb={[{ label: "Concours" }]}
      faq={FAQ}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-16">

          {/* Programme parrainage */}
          <div className="p-8 bg-card/50 rounded-2xl border border-border">
            <p className="text-primary text-sm font-bold mb-2">💎 PROGRAMME PARRAINAGE</p>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Multipliez vos chances avec le parrainage</h2>
            <p className="text-muted-foreground mb-4">Certains concours Akoky offrent des <strong>bonus de participation</strong> aux membres actifs du programme de parrainage. Parrainez vos amis et débloquez des avantages exclusifs dans les jeux et tirages au sort.</p>
            <ul className="text-muted-foreground space-y-1 text-sm list-none">
              <li>✓ Participations multiples aux tirages au sort</li>
              <li>✓ Accès anticipé à certains concours</li>
              <li>✓ Bonus de points dans les jeux</li>
              <li>✓ Récompenses cumulables avec les lots</li>
            </ul>
            <Link to="/fr/parrainage" className="text-primary hover:underline text-sm font-medium mt-4 inline-block">Découvrir le parrainage →</Link>
          </div>

          {/* Parrainez & Gagnez */}
          <div className="text-center p-8 bg-card/50 rounded-2xl border border-border">
            <span className="text-4xl block mb-3">🎁</span>
            <h3 className="text-xl font-bold text-foreground mb-2">Parrainez &amp; Gagnez</h3>
            <p className="text-muted-foreground">Transformez votre réseau en opportunités de victoire</p>
          </div>

          {/* Concours en cours */}
          <div>
            <p className="text-primary text-sm font-bold mb-2">🔥 CONCOURS EN COURS</p>
            <h2 className="text-2xl font-bold text-foreground mb-2 font-display">Participez dès maintenant</h2>
            <p className="text-muted-foreground mb-6">Concours actif jusqu'au <strong>31 mars 2026</strong></p>
            <div className="p-8 bg-card/50 rounded-2xl border border-primary/30">
              <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">EN COURS</span>
              <img src="/images/concours/six-cles.webp" alt="Le jeu des six clés - Concours Akoky" className="w-full rounded-xl mt-4 mb-4" loading="lazy" />
              <h3 className="text-xl font-bold text-foreground mt-4 mb-2">🗝️ Le Jeu des Six Clés</h3>
              <p className="text-muted-foreground text-sm mb-2">Jeu d'exploration / Chasse au trésor digitale</p>
              <p className="text-muted-foreground mb-4">Partez à la recherche des <strong>six clés secrètes</strong> dissimulées sur le site Akoky. La première personne à toutes les découvrir remporte un lot exceptionnel !</p>
              <p className="text-foreground font-bold mb-4">🏆 Grand Prix : <strong>Un séjour d'une semaine tout compris</strong> au RIAD5, club libertin de luxe au Cap d'Agde (valeur + 4 500€)</p>
              <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">📋 Comment participer ?</h4>
              <ol className="text-muted-foreground space-y-1 text-sm list-decimal list-inside mb-4">
                <li>Explorez les pages du site Akoky</li>
                <li>Trouvez les 6 clés cachées (indices visuels subtils)</li>
                <li>Notez les codes associés à chaque clé</li>
                <li>Soumettez votre combinaison complète</li>
              </ol>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4 mb-4">
                <div><span className="text-muted-foreground">Début</span><br /><strong className="text-foreground">1er février 2026</strong></div>
                <div><span className="text-muted-foreground">Fin</span><br /><strong className="text-foreground">31 mars 2026</strong></div>
                <div><span className="text-muted-foreground">Difficulté</span><br /><strong className="text-foreground">⭐⭐⭐⭐</strong></div>
                <div><span className="text-muted-foreground">Participants</span><br /><strong className="text-foreground">Ouvert à tous les membres AKOKY</strong></div>
              </div>
              <Link to="/fr/concours-six-cles" className="text-primary hover:underline font-medium">Participer au jeu des six clés →</Link>
            </div>
          </div>

          {/* Prochains concours */}
          <div>
            <p className="text-muted-foreground/60 text-sm font-bold mb-2">⏳ BIENTÔT DISPONIBLES</p>
            <h2 className="text-2xl font-bold text-foreground mb-2 font-display">Prochains concours</h2>
            <p className="text-muted-foreground mb-6">Restez connectés pour ne rien manquer des prochaines opportunités</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "📸", title: "Concours Photo de Couple", date: "fin 2026 - début 2027", desc: "Partagez votre plus belle photo de couple libertin et gagnez un week-end tous compris dans un club premium au choix dans une rayon de 100km autour de chez vous !", lot: "Week-end Les Chandelles Paris" },
                { icon: "✍️", title: "Meilleur Témoignage Libertin", date: "2027", desc: "Racontez votre expérience libertine la plus mémorable. Les récits les plus authentiques seront récompensés.", lot: "3 abonnements Premium 1 an a offrir a qui vous voulez !" },
                { icon: "🌴", title: "Challenge Parrainage Été", date: "Été 2027", desc: "Concours spécial parrainage : les meilleurs ambassadeurs gagnent un WE-END de rêve, valable 1 ans.", lot: "5 séjours clubs libertins Europe" },
              ].map((c, i) => (
                <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border opacity-75">
                  <p className="text-muted-foreground/60 text-xs mb-2">{c.date}</p>
                  <span className="text-3xl block mb-3">{c.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{c.desc}</p>
                  <p className="text-muted-foreground text-sm"><strong>Lot :</strong> {c.lot}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Concours passés */}
          <div>
            <p className="text-primary text-sm font-bold mb-2">🏆 HISTORIQUE</p>
            <h2 className="text-2xl font-bold text-foreground mb-2 font-display">Concours passés</h2>
            <p className="text-muted-foreground mb-6">Découvrez les précédents gagnants et lots distribués</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🎉", title: "Tirage au Sort Nouvel An", winner: "Gagnante : Sophie M. (Paris)", lot: "Lot : Week-end au Club L'Overside (Bruxelles)" },
                { icon: "❄️", title: "Calendrier de l'Avent Libertin", winner: "24 gagnants : Cadeaux quotidiens tout le mois", lot: "Lots : Abonnements Premium, invitations clubs, coffrets cadeaux" },
                { icon: "📝", title: "Meilleur Avis de Club", winner: "Gagnant : Marc & Julie D. (Lyon)", lot: "Lot : Séjour 3 jours au Garden Club (Toulouse)" },
                { icon: "🎃", title: "Halloween Libertin", winner: "3 gagnants : Déguisements les plus créatifs", lot: "Lots : Invitations soirées thématiques + coffrets cadeaux" },
              ].map((c, i) => (
                <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.icon} {c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.winner}</p>
                  <p className="text-muted-foreground text-sm">{c.lot}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground font-display">Prêt à tenter votre chance ?</h2>
            <p className="text-muted-foreground">Rejoignez des milliers de membres qui participent déjà aux concours Akoky et gagnent des expériences libertines inoubliables.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#concours-actif" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-all inline-block">Voir le concours en cours</a>
              <a href="https://app.akoky.com/register" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Créer mon compte gratuit</a>
            </div>
          </div>

        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Concours;
