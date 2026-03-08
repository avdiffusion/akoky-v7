import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
    { question: "Comment participer aux concours AKOKY ?", answer: "Inscrivez-vous sur AKOKY, consultez les concours en cours dans votre espace membre et suivez les instructions de participation." },
    { question: "Les concours sont-ils gratuits ?", answer: "Oui. La participation aux concours AKOKY est entièrement gratuite pour tous les membres." },
    { question: "Comment multiplier ses chances de gagner ?", answer: "Grâce au parrainage : chaque ami parrainé vous rapporte des tickets supplémentaires pour tous les concours en cours." },
];

const Concours = () => (
  <>
    <MetaTags
      title="Concours Akoky - Gagnez des séjours libertins en Europe | Jeux communauté adulte"
      description="Participez aux concours exclusifs Akoky et gagnez des séjours libertins (Cap d"
      canonical="https://akoky.com/fr/concours"
      lang="fr"
    />
    <HreflangTags slug="concours" />
    <ContentPageLayout
      lang="fr"
      title="Concours Akoky - Gagnez des séjours libertins en Europe | Jeux communauté adulte"
      description="Participez aux concours exclusifs Akoky et gagnez des séjours libertins (Cap d"
      canonical="https://akoky.com/fr/concours"
      heroTitle="Concours Akoky - Gagnez des séjours libertins en Europe | Jeux communauté adulte"
      heroSubtitle="Transformez votre réseau en opportunités de victoire"
      heroImage="https://akoky.com/images/concours/six-cles.webp"
      breadcrumb={[{ label: "Concours Akoky - Gagnez des séjours libertins en Europe | Jeux communauté adulte" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto prose-custom">
          <li className="text-muted-foreground leading-relaxed">🎯 ESPACE CONCOURS AKOKY Gagnez des expériences libertines exclusives Participez gratuitement aux concours Akoky et tentez de gagner des séjours dans les meilleurs clubs libertins d'Europe, des abonnements VIP et des expériences uniques. Participer maintenant Voir le règlement 💎 PROGRAMME PARRAINAGE Multipliez vos chances avec le parrainage Certains concours Akoky offrent des bonus de participation aux membres actifs du programme de parrainage. Parrainez vos amis et débloquez des avantages exclus</li>
          <li className="text-muted-foreground leading-relaxed">✓ Accès anticipé à certains concours</li>
          <li className="text-muted-foreground leading-relaxed">✓ Bonus de points dans les jeux</li>
          <li className="text-muted-foreground leading-relaxed">✓ Récompenses cumulables avec les lots</li>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Parrainez & Gagnez</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Transformez votre réseau en opportunités de victoire</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Participez dès maintenant</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Concours actif jusqu'au 31 mars 2026</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🗝️ Le Jeu des Six Clés</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Jeu d'exploration / Chasse au trésor digitale</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Partez à la recherche des six clés secrètes dissimulées sur le site Akoky. La première personne à toutes les découvrir remporte un lot exceptionnel !</p>
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Grand Prix</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">Un séjour d'une semaine tout compris au RIAD5, club libertin de luxe au Cap d'Agde (valeur + 4 500€)</p>
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">📋 Comment participer ?</h4>
          <li className="text-muted-foreground leading-relaxed">Explorez les pages du site Akoky</li>
          <li className="text-muted-foreground leading-relaxed">Trouvez les 6 clés cachées (indices visuels subtils)</li>
          <li className="text-muted-foreground leading-relaxed">Notez les codes associés à chaque clé</li>
          <li className="text-muted-foreground leading-relaxed">Soumettez votre combinaison complète</li>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Prochains concours</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Restez connectés pour ne rien manquer des prochaines opportunités</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Concours Photo de Couple</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Partagez votre plus belle photo de couple libertin et gagnez un week-end tous compris dans un club premium au choix dans une rayon de 100km autour de chez vous !</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Meilleur Témoignage Libertin</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Racontez votre expérience libertine la plus mémorable. Les récits les plus authentiques seront récompensés.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Challenge Parrainage Été</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Concours spécial parrainage : les meilleurs ambassadeurs gagnent un WE-END de rêve, valable 1 ans.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Concours passés</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Découvrez les précédents gagnants et lots distribués</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎉 Tirage au Sort Nouvel An</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Gagnante : Sophie M. (Paris)</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Lot : Week-end au Club L'Overside (Bruxelles)</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">❄️ Calendrier de l'Avent Libertin</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">24 gagnants : Cadeaux quotidiens tout le mois</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Lots : Abonnements Premium, invitations clubs, coffrets cadeaux</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📝 Meilleur Avis de Club</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Gagnant : Marc & Julie D. (Lyon)</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Lot : Séjour 3 jours au Garden Club (Toulouse)</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎃 Halloween Libertin</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">3 gagnants : Déguisements les plus créatifs</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Lots : Invitations soirées thématiques + coffrets cadeaux</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tout savoir sur les concours Akoky</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Comment participer aux concours Akoky ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Pour participer, vous devez être membre inscrit sur Akoky . Chaque concours a ses propres règles de participation détaillées sur sa page dédiée. La plupart sont gratuits et ouverts à tous les membres actifs. Il suffit de suivre les instructions spécifiques du concours (formulaire, soumission de contenu, exploration du site, etc.).</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Les concours Akoky sont-ils vraiment gratuits ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Oui, tous les concours organisés par Akoky sont 100% gratuits . Aucun achat ou paiement n'est requis pour participer. Seule l'inscription gratuite sur la plateforme Akoky est nécessaire pour accéder aux concours et soumettre votre participation.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Puis-je utiliser mon parrainage pour les concours ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Certains concours incluent des bonus liés au programme de parrainage Akoky . Par exemple, des participations multiples aux tirages au sort, des points bonus dans les jeux, ou un accès prioritaire. Consultez le règlement de chaque concours pour connaître les avantages spécifiques du parrainage. Plus d'infos sur notre page parrainage .</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Quels sont les lots à gagner ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Les lots varient selon les concours et incluent :</p>
          <li className="text-muted-foreground leading-relaxed">• Séjours dans des clubs libertins premium (Cap d'Agde, Belgique, Espagne, France)</li>
          <li className="text-muted-foreground leading-relaxed">• Abonnements VIP Akoky (1 mois à 1 an)</li>
          <li className="text-muted-foreground leading-relaxed">• Invitations à des événements privés et soirées exclusives</li>
          <li className="text-muted-foreground leading-relaxed">• Coffrets cadeaux et expériences uniques</li>
          <li className="text-muted-foreground leading-relaxed">• Accès anticipé à de nouvelles fonctionnalités</li>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Comment sont désignés les gagnants ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Les gagnants sont désignés selon les modalités précisées dans chaque règlement :</p>
          <li className="text-muted-foreground leading-relaxed">• Tirage au sort : via un générateur aléatoire certifié</li>
          <li className="text-muted-foreground leading-relaxed">• Performance : premier à accomplir une tâche (ex: "Le jeu des six clés")</li>
          <li className="text-muted-foreground leading-relaxed">• Vote communautaire : les membres votent pour leurs favoris</li>
          <li className="text-muted-foreground leading-relaxed">• Jury Akoky : évaluation selon des critères définis</li>
          <p className="text-muted-foreground leading-relaxed mb-4">Tous les tirages sont effectués de manière transparente et les résultats sont publiés publiquement.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Puis-je participer à plusieurs concours simultanément ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Oui, vous pouvez participer à autant de concours Akoky que vous le souhaitez , tant que vous respectez les conditions d'éligibilité de chacun. Il n'y a aucune limite au nombre de participations, et gagner un concours ne vous empêche pas de participer aux suivants.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Les concours sont-ils réservés aux couples ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Non. Sauf mention contraire dans le règlement, les concours Akoky sont ouverts à tous les profils : couples, célibataires hommes, célibataires femmes, et groupes. Certains lots peuvent être adaptés selon le profil du gagnant (exemple : invitation double pour un couple, simple pour un célibataire).</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Combien de temps ai-je pour réclamer mon lot ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Les gagnants sont contactés par email à l'adresse enregistrée sur leur compte Akoky. Vous avez généralement 15 jours calendaires pour confirmer votre acceptation du lot et fournir les informations nécessaires. Passé ce délai sans réponse, le lot peut être redistribué lors d'un nouveau tirage au sort.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Mes données personnelles sont-elles protégées ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Oui, absolument. Akoky respecte strictement le RGPD et ne partage jamais vos données avec des tiers. Les informations collectées dans le cadre des concours (nom, email, préférences) sont uniquement utilisées pour la gestion du concours et la remise des lots. Consultez notre politique de confidentialité pour plus de détails.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Puis-je transférer mon lot à quelqu'un d'autre ?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Cela dépend du concours. Certains lots sont nominatifs et non transférables (abonnements Premium par exemple), tandis que d'autres peuvent être cédés (invitations à des événements, séjours en club). Cette information est toujours précisée dans le règlement spécifique du concours.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Prêt à tenter votre chance ?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Rejoignez des milliers de membres qui participent déjà aux concours Akoky et gagnent des expériences libertines inoubliables.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Concours;
