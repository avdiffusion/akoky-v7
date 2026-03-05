import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqSections = [
  {
    icon: "📷", title: "Albums Photos", items: [
      { q: "Comment ajouter une photo à mon album ?", a: "Depuis votre profil, cliquez sur l'onglet « Albums », puis « Ajouter une photo ». Vous pouvez importer plusieurs fichiers à la fois, en JPEG ou PNG, avec un poids maximum de 5 Mo par image." },
      { q: "Mes photos sont-elles visibles par tout le monde ?", a: "Non. Par défaut, vos albums sont privés. Vous pouvez les rendre visibles à vos abonnés, à un groupe précis, ou les protéger par code." },
      { q: "Peut-on flouter ses photos pour les visiteurs ?", a: "Oui. Akoky propose un mode « flou par défaut » pour les visiteurs ou membres non connectés, afin de protéger votre intimité." },
      { q: "Puis-je supprimer une photo après publication ?", a: "Bien sûr ! Vous gardez le contrôle total de vos contenus. Cliquez sur la photo, puis sélectionnez « Supprimer »." },
      { q: "Quelle est la différence entre Album Privé et Album Public ?", a: "L'album privé est accessible uniquement sur invitation ou via un code. L'album public peut être consulté par tous les membres connectés, selon vos réglages." },
    ]
  },
  {
    icon: "🎥", title: "Vidéos", items: [
      { q: "Comment ajouter une vidéo sur mon profil ?", a: "Cliquez sur l'onglet « Vidéos », puis sélectionnez « Ajouter une vidéo ». Les formats acceptés sont MP4, MOV, WebM (max. 100 Mo)." },
      { q: "Mes vidéos sont-elles validées avant publication ?", a: "Oui. Toutes les vidéos sont modérées par notre équipe avant d'être visibles publiquement pour garantir le respect de notre charte." },
      { q: "Puis-je rendre certaines vidéos visibles uniquement pour mes abonnés ?", a: "Oui. Lors de l'ajout, vous pouvez choisir la visibilité : publique, abonnés ou privée." },
      { q: "Combien de vidéos puis-je ajouter ?", a: "Les profils standards peuvent ajouter jusqu'à 10 vidéos. Les membres premium disposent d'un espace illimité." },
      { q: "Peut-on signaler une vidéo inappropriée ?", a: "Bien sûr. Un bouton « Signaler » est présent sous chaque vidéo. Notre modération agit sous 24h." },
    ]
  },
  {
    icon: "📡", title: "Lives", items: [
      { q: "Comment lancer un live sur Akoky ?", a: "Depuis la section « Lives », cliquez sur « Démarrer un live ». Vous devez autoriser l'accès à votre caméra et micro." },
      { q: "Qui peut regarder mes lives ?", a: "Par défaut, seuls vos abonnés peuvent les voir. Vous pouvez élargir l'accès à tous les membres connectés." },
      { q: "Est-ce que les lives sont enregistrés ?", a: "Non. Les lives ne sont ni enregistrés ni sauvegardés, pour garantir votre confidentialité." },
      { q: "Peut-on interagir en direct avec les viewers ?", a: "Oui. Un chat en direct permet de discuter pendant le live." },
    ]
  },
  {
    icon: "📅", title: "Événements", items: [
      { q: "Comment participer à un événement ?", a: "Rendez-vous sur la page « Événements », sélectionnez celui qui vous intéresse, et cliquez sur « Participer » ou « S'inscrire »." },
      { q: "L'événement est-il réservé aux couples ?", a: "Certains événements sont ouverts à tous les profils, d'autres sont réservés aux couples ou femmes seules. L'information est précisée sur la fiche." },
      { q: "Les événements sont-ils payants ?", a: "Certains sont gratuits, d'autres payants. Les tarifs sont toujours indiqués en toute transparence." },
      { q: "Peut-on organiser son propre événement ?", a: "Oui. Les membres VIP peuvent proposer des événements, soumis à validation." },
      { q: "Que faire si je ne peux plus participer ?", a: "Vous pouvez annuler votre participation depuis la fiche événement. Cela libérera automatiquement votre place." },
    ]
  },
  {
    icon: "👥", title: "Groupes", items: [
      { q: "À quoi servent les groupes sur Akoky ?", a: "Les groupes permettent de réunir des membres autour d'un thème, d'un fantasme ou d'une région." },
      { q: "Puis-je créer mon propre groupe ?", a: "Oui. Tout membre peut créer un groupe, choisir une image, une description et gérer l'accès." },
      { q: "Comment rejoindre un groupe privé ?", a: "Vous devez demander l'accès. Le modérateur du groupe validera ou refusera selon ses critères." },
      { q: "Peut-on publier des photos dans un groupe ?", a: "Oui. Les groupes peuvent contenir photos, discussions, sondages et événements internes." },
      { q: "Puis-je quitter un groupe quand je veux ?", a: "Absolument. Vous pouvez quitter un groupe en un clic, sans justification." },
    ]
  },
  {
    icon: "🎮", title: "Jeux", items: [
      { q: "Où trouver les jeux libertins d'Akoky ?", a: "Accédez à la section « Jeux » depuis le menu principal. Vous y trouverez des jeux interactifs, quizz et défis libertins pour pimenter vos rencontres." },
      { q: "Les jeux sont-ils gratuits ?", a: "Oui, la majorité des jeux sont gratuits. Certains jeux premium avancés sont réservés aux membres VIP." },
      { q: "Peut-on jouer à plusieurs ?", a: "Absolument ! Beaucoup de jeux sont conçus pour être joués en couple ou en groupe. Certains proposent même des défis communautaires." },
      { q: "Les résultats des jeux sont-ils partagés ?", a: "Seulement si vous le souhaitez. Vous pouvez choisir de garder vos résultats privés ou de les partager avec la communauté." },
    ]
  },
  {
    icon: "🔐", title: "Sécurité", items: [
      { q: "Comment AKOKY protège-t-elle mes données personnelles ?", a: "Nous utilisons un cryptage SSL de niveau bancaire, des serveurs sécurisés en Europe, et nous sommes 100% conformes RGPD. Vos données ne sont jamais vendues ni partagées." },
      { q: "Puis-je bloquer un membre ?", a: "Oui. Rendez-vous sur son profil, cliquez sur les trois points, puis « Bloquer ». Cette personne ne pourra plus vous contacter ni voir votre profil." },
      { q: "Comment signaler un comportement inapproprié ?", a: "Chaque profil, message et contenu dispose d'un bouton « Signaler ». Notre équipe modération traite tous les signalements sous 24h." },
      { q: "Mes photos peuvent-elles être téléchargées par d'autres membres ?", a: "Nous avons mis en place des protections anti-téléchargement. Cependant, nous recommandons de ne jamais publier de contenu que vous ne voudriez pas voir circuler." },
      { q: "Comment supprimer définitivement mon compte ?", a: "Allez dans Paramètres > Mon compte > Supprimer mon compte. Toutes vos données seront effacées sous 30 jours conformément au RGPD." },
    ]
  },
  {
    icon: "📱", title: "Application Mobile", items: [
      { q: "L'application AKOKY est-elle disponible sur iOS et Android ?", a: "Oui, l'application AKOKY est disponible gratuitement sur l'App Store et Google Play Store." },
      { q: "Puis-je utiliser mon compte web sur l'application ?", a: "Oui, vos identifiants sont les mêmes. Toutes vos données sont synchronisées en temps réel." },
      { q: "L'application consomme-t-elle beaucoup de batterie ?", a: "Non. L'app est optimisée pour minimiser la consommation. Vous pouvez désactiver les notifications push dans les réglages." },
      { q: "Peut-on utiliser l'application en mode discret ?", a: "Oui. Vous pouvez activer le « Mode Fantôme » qui masque l'icône et les notifications sur votre écran d'accueil." },
      { q: "Les notifications sont-elles personnalisables ?", a: "Oui. Vous pouvez choisir quelles notifications recevoir : messages, événements, matchs, lives, etc." },
    ]
  },
  {
    icon: "✔️", title: "Certification", items: [
      { q: "Qu'est-ce que le badge « Profil Vérifié » ?", a: "C'est une certification qui atteste que votre identité a été vérifiée par notre équipe via une pièce d'identité officielle." },
      { q: "Comment obtenir le badge vérifié ?", a: "Rendez-vous dans Paramètres > Vérification du profil, puis suivez les étapes : selfie + pièce d'identité. Validation sous 48h." },
      { q: "La vérification est-elle obligatoire ?", a: "Non, mais elle augmente considérablement votre crédibilité et vos chances de rencontres. Certains événements premium sont réservés aux profils vérifiés." },
      { q: "Mes documents d'identité sont-ils conservés ?", a: "Non. Une fois la vérification effectuée, vos documents sont supprimés de nos serveurs sous 72h. Seul le badge reste visible." },
      { q: "Peut-on perdre son badge vérifié ?", a: "Oui, en cas de signalements répétés, d'usurpation d'identité ou de non-respect de la charte, le badge peut être révoqué." },
    ]
  },
  {
    icon: "📝", title: "Blog", items: [
      { q: "Qui rédige les articles du blog AKOKY ?", a: "Nos articles sont rédigés par notre équipe éditoriale, des experts en sexologie, psychologie, ainsi que des membres expérimentés de la communauté." },
      { q: "Puis-je proposer un article ou un témoignage ?", a: "Absolument. Envoyez votre proposition via notre formulaire de contact, elle sera étudiée par notre équipe." },
      { q: "À quelle fréquence publiez-vous de nouveaux articles ?", a: "Nous publions 3 à 4 nouveaux articles par semaine : conseils, témoignages, actualités et guides pratiques." },
      { q: "Puis-je partager un article sur mes réseaux sociaux ?", a: "Oui, chaque article dispose de boutons de partage. Attention toutefois à votre confidentialité." },
      { q: "Existe-t-il une newsletter blog ?", a: "Oui. Vous pouvez vous abonner pour recevoir chaque semaine une sélection des meilleurs articles." },
    ]
  },
  {
    icon: "☎️", title: "Contact & Support", items: [
      { q: "Comment contacter le support AKOKY ?", a: "Vous pouvez nous contacter via le formulaire de contact ou par email à contact@akoky.com." },
      { q: "Quel est le délai de réponse du support ?", a: "Nous répondons sous 24h ouvrées. Les urgences liées à la sécurité sont traitées en priorité." },
      { q: "Peut-on prendre rendez-vous avec un conseiller ?", a: "Oui, les membres Premium peuvent réserver un créneau de 30 minutes avec un conseiller Akoky." },
      { q: "Existe-t-il un chat en direct ?", a: "Oui, un chat support est disponible du lundi au vendredi pour les questions urgentes." },
      { q: "Comment signaler un bug technique ?", a: "Utilisez le formulaire dédié ou contactez-nous par email en décrivant précisément le problème." },
    ]
  },
  {
    icon: "👤", title: "Profil", items: [
      { q: "Comment rendre mon profil plus attractif ?", a: "Ajoutez plusieurs photos de qualité, rédigez une bio authentique, vérifiez votre profil et participez aux événements et groupes Akoky." },
      { q: "Puis-je masquer mon profil temporairement ?", a: "Oui. Activez le mode invisible dans les paramètres pour masquer votre profil des recherches." },
      { q: "Peut-on avoir plusieurs profils ?", a: "Non. Chaque utilisateur ne peut disposer que d'un seul profil actif." },
      { q: "Comment changer mon pseudo ?", a: "Le pseudo peut être modifié une fois tous les 30 jours depuis les paramètres du profil." },
      { q: "Puis-je passer d'un profil solo à un profil couple ?", a: "Oui. Contactez le support avec une demande motivée. La migration est effectuée sous 48h." },
    ]
  },
  {
    icon: "🔒", title: "Albums Privés", items: [
      { q: "À quoi sert un album privé ?", a: "Un album privé vous permet de partager des photos intimes uniquement avec les personnes que vous choisissez." },
      { q: "Comment créer un album privé ?", a: "Allez dans Albums > Créer un album > cochez « Album privé » et définissez les accès." },
      { q: "Peut-on révoquer l'accès à un album privé ?", a: "Oui. Vous pouvez retirer l'accès d'un membre ou modifier le code à tout moment." },
      { q: "Les albums privés sont-ils vraiment sécurisés ?", a: "Oui. Ils sont protégés par code et permissions spécifiques, mais la prudence reste recommandée." },
      { q: "Combien d'albums privés puis-je créer ?", a: "Les membres standards peuvent créer jusqu'à 3 albums privés. Les membres Premium n'ont pas de limite." },
    ]
  },
  {
    icon: "🔄", title: "Profils & gestion des fiches", items: [
      { q: "Qu'est-ce que le système de profils multiples Akoky ?", a: "Akoky permet de gérer plusieurs fiches depuis un seul compte : une fiche couple, une fiche femme seule et une fiche homme seul, toutes liées au même espace membre. Cette flexibilité permet d'explorer le libertinage sous différents angles." },
      { q: "Comment créer une fiche couple avec des fiches individuelles ?", a: "Lors de la création ou depuis les paramètres, vous pouvez ajouter des fiches secondaires liées à votre compte principal, sans créer de nouveaux comptes séparés." },
      { q: "Puis-je basculer d'une fiche à l'autre facilement ?", a: "Oui. Un simple clic permet de passer instantanément d'une fiche à une autre, tout en restant connecté au même compte Akoky." },
      { q: "La certification est-elle obligatoire pour les profils multiples ?", a: "Oui. Pour garantir la fiabilité et la sécurité, la certification est obligatoire pour activer et gérer plusieurs fiches liées à un même compte." },
      { q: "Faut-il un abonnement spécifique pour gérer plusieurs fiches ?", a: "Oui. L'option profils multiples est réservée aux membres VIP+, offrant une gestion centralisée, plus de visibilité et un confort d'utilisation avancé." },
    ]
  },
];

const Faq = () => {
  // Build all FAQ items for schema
  const allFaqItems = faqSections.flatMap(s => s.items.map(i => ({ question: i.q, answer: i.a })));

  return (
    <ContentPageLayout
      title="FAQ – Questions Fréquentes | AKOKY"
      description="Toutes les réponses aux questions les plus posées sur la communauté Akoky : albums, vidéos, lives, événements, sécurité, application mobile et plus."
      canonical="https://akoky.com/faq"
      heroTitle="Questions Fréquentes"
      heroSubtitle="Toutes les réponses aux questions les plus posées sur la communauté Akoky"
      heroImage="https://akoky.com/images/faq-akoky.webp"
      breadcrumb={[{ label: "FAQ" }]}
      faq={allFaqItems.slice(0, 10)}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "FAQ AKOKY",
        url: "https://akoky.com/faq",
      }}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          {/* Guides links */}
          <div className="mb-12 p-6 bg-card/50 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Guides étape par étape</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/premier-club-libertin" className="px-4 py-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors text-sm font-medium">1. Votre premier club libertin</Link>
              <Link to="/premier-rendez-vous-libertin" className="px-4 py-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors text-sm font-medium">2. Votre premier rendez-vous</Link>
              <Link to="/questions-debutants-libertinage" className="px-4 py-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors text-sm font-medium">3. FAQ débutants</Link>
            </div>
          </div>

          {/* FAQ Sections */}
          {faqSections.map((section, sIdx) => (
            <div key={sIdx} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-display flex items-center gap-3">
                <span className="text-3xl">{section.icon}</span> {section.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {section.items.map((item, iIdx) => (
                  <AccordionItem key={iIdx} value={`${sIdx}-${iIdx}`} className="border border-border rounded-xl px-4 bg-card/50 data-[state=open]:border-primary/30">
                    <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="text-center mt-16 p-8 bg-card/50 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Vous ne trouvez pas votre réponse ?</h2>
            <p className="text-muted-foreground mb-6">Notre équipe est là pour vous aider</p>
            <Link to="/contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Faq;
