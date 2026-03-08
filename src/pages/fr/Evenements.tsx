import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Comment participer à mon premier événement AKOKY ?", answer: "Créez votre profil gratuit sur Akoky.com, parcourez les événements à venir dans votre région, lisez attentivement les descriptions et les prérequis, puis réservez en ligne. Les débutants sont toujours bienvenus ! Nous vous recommandons de commencer par un apéro libertin pour vous familiariser avec la communauté dans une ambiance décontractée. Consu" },
  { question: "Les événements sont-ils réservés aux couples ?", answer: "Non, AKOKY organise des événements pour tous les profils : couples (hétéros, homos, bi), célibataires femmes, célibataires hommes (selon quotas pour maintenir l'équilibre), et groupes d'amis. Chaque fiche événement précise clairement les profils acceptés. Les femmes seules sont généralement bienvenues sans restriction, tandis que les hommes seuls p" },
  { question: "Quel est le tarif moyen d'un événement ?", answer: "Les tarifs varient selon le type d'événement : 20-40€ pour les soirées en club, 15-25€ pour les apéros libertins, 80-150€ pour les soirées privées thématiques, et 200-500€ pour les weekends exclusifs en château ou villa. Les membres VIP bénéficient de réductions allant jusqu'à 30% sur tous les événements. Consultez chaque fiche événement pour conna" },
  { question: "Comment annuler une réservation ?", answer: "L'annulation est gratuite jusqu'à 48h avant le début de l'événement. Vous pouvez annuler directement via votre espace membre sur le site web ou via l' application mobile Akoky . Au-delà de 48h, des frais d'annulation peuvent s'appliquer selon la politique spécifique de l'organisateur (généralement 50% du montant). En cas de force majeure (maladie, " },
  { question: "Les événements AKOKY respectent-ils le consentement ?", answer: "Absolument. Le consentement est au cœur de notre charte éthique. Tous nos événements suivent des protocoles stricts : personnel formé spécifiquement au respect des limites, système de safe words reconnu, espaces de retrait disponibles, présence d'une équipe de modération attentive. Tout comportement inapproprié, pression ou non-respect du consentem" },
  { question: "Où se déroulent les événements Akoky ?", answer: "Nos événements ont lieu dans les clubs libertins les plus réputés et établissements soigneusement sélectionnés de France, Belgique et Espagne. Pour garantir la discrétion de tous, les adresses exactes sont communiquées uniquement aux participants inscrits et validés, généralement 48h avant l'événement. Tous nos lieux partenaires respectent des stan" },
  { question: "Quelle est la fréquence des événements Akoky ?", answer: "Akoky organise plus de 300 événements par mois à travers l'Europe. Cela comprend : des soirées en club plusieurs fois par semaine dans les grandes villes, des apéros libertins réguliers (2-3 fois par semaine dans les métropoles), des événements thématiques mensuels, et des weekends exclusifs. Notre calendrier est constamment mis à jour pour vous of" },
  { question: "Y a-t-il un dress code pour les événements ?", answer: "Oui, chaque événement a des exigences vestimentaires spécifiques précisées dans sa description. En général : tenue élégante et soignée pour les soirées en club (costume/robe cocktail), tenue sexy-chic pour les apéros (business casual avec une touche sensuelle), code spécifique pour les événements thématiques (lingerie, latex, mascarade, etc.). Le r" },
  { question: "Peut-on venir seul à un événement Akoky ?", answer: "Oui, les célibataires sont les bienvenus selon les quotas établis pour chaque événement. Les femmes seules sont généralement acceptées sans restriction et souvent bénéficient de tarifs préférentiels. Les hommes seuls peuvent participer à certains événements spécifiques avec une sélection préalable basée sur leur profil, photos validées et référence" },
  { question: "Comment garantissez-vous la discrétion des participants ?", answer: "La discrétion est notre priorité absolue. Nos mesures incluent : vérification d'identité stricte lors de l'inscription, validation manuelle de toutes les photos de profil, interdiction formelle de prendre des photos ou vidéos pendant les événements (smartphones collectés ou scellés à l'entrée selon les lieux), personnel formé au respect de l'anonym" },
];

const FR_CARDS = [
  {
    img: "https://akoky.com/images/soirreeparis.webp",
    alt: "Soirée libertine Akoky en club à Paris",
    title: "Soirées Libertines en Club Parisien",
    text: "Paris accueille les événements libertins Akoky les plus exclusifs. Nos soirées dans les clubs parisiens réputés combinent raffinement et sensualité. Chaque soirée libertine à Paris est une expérience "
  },
  {
    img: "https://akoky.com/images/apero-libertin.webp",
    alt: "Apéro libertin Akoky afterwork à Paris",
    title: "Apéros Libertins Afterwork",
    text: "Les apéros libertins Akoky sont l'occasion parfaite de découvrir la communauté dans une ambiance décontractée. Ces événements afterwork à Paris et dans les grandes villes françaises permettent de fair"
  },
  {
    img: "https://akoky.com/images/evenement-libertin-europe.webp",
    alt: "Weekend libertin Akoky en château",
    title: "Weekends Libertins Exclusifs",
    text: "Les weekends libertins Akoky dans des châteaux privatisés offrent une immersion totale dans l'art de vivre libertin. Ces événements d'exception en France réunissent les membres dans des cadres somptue"
  },
];

const BENEFITS = [
  { icon: "✨", title: "Ambiance Premium", text: "Chaque événement libertin Akoky est organisé dans des lieux d'exception. Nos soirées libertines se déroulent dans les clubs les plus réputés et les espaces les plus élégants. L'amb" },
  { icon: "🛡️", title: "Sécurité & Respect", text: "La sécurité de nos membres est notre priorité absolue. Nos événements libertins appliquent des protocoles stricts de respect et de consentement. Chaque soirée Akoky est encadrée pa" },
  { icon: "🎭", title: "Liberté Assumée", text: "Les soirées libertines Akoky célèbrent la liberté d'être soi-même. Nos événements offrent un espace où chacun peut explorer ses désirs en toute sérénité. La philosophie Akoky encou" },
  { icon: "🌍", title: "Communauté Internationale", text: "Rejoindre les événements libertins Akoky, c'est intégrer la plus grande communauté libertine d'Europe. Nos soirées réunissent des membres de France, Belgique, Espagne et bien au-de" },
];

const GALLERY = [
  { img: "https://akoky.com/images/apéro-libertin-paris.webp", label: "Apéro libertin Akoky à Paris" },
  { img: "https://akoky.com/images/soiree-libertine-plage.webp", label: "Soirée libertine Akoky plage" },
  { img: "https://akoky.com/images/cap-agde-libertin.webp", label: "Événement libertin Akoky au Cap d'Agde" },
  { img: "https://akoky.com/images/soiree-couple-libertin.webp", label: "Soirée libertine couples" },
  { img: "https://akoky.com/images/apero-libertin-akoky.webp", label: "Apéro libertin Akoky en France" },
  { img: "https://akoky.com/images/jeux-libertin.webp", label: "Jeux libertin exclusif Akoky" },
  { img: "https://akoky.com/images/soiree-club-libertin.webp", label: "Soirée Akoky en club libertin" },
  { img: "https://akoky.com/images/apero-libertin.webp", label: "Apéro libertin afterwork Akoky" },
  { img: "https://akoky.com/images/evenement-libertin-europe.webp", label: "Événement libertin Akoky en Europe" },
  { img: "https://akoky.com/images/evenement-libertin-espagne.webp", label: "Événement libertin Akoky en Espagne" },
];

const CTA_LINKS = [
  { to: "/fr/libertinage", label: "Libertinage" },
  { to: "/fr/clubs-libertins", label: "Clubs Libertins" },
  { to: "/fr/clubbing", label: "Guide Clubbing" },
  { to: "/fr/guide-libertin-france", label: "Guide Libertin France" },
  { to: "/fr/vip", label: "Statut VIP" },
  { to: "/fr/live", label: "Lives Akoky" },
  { to: "/fr/debuter-libertinage", label: "Débuter dans le Libertinage" },
  { to: "/fr/application", label: "Application Mobile" },
];

const Evenements = () => (
  <>
    <MetaTags
      title="Événements Libertins Akoky 2026 – Soirées & Apéros Libertins"
      description="Soirées libertines, apéros afterwork et weekends exclusifs avec AKOKY. Rejoignez la communauté libertine premium en France."
      canonical="https://akoky.com/fr/evenements"
      lang="fr"
      ogImage="https://akoky.com/images/events-akoky-cover.webp"
    />
    <HreflangTags slug="evenements" />
    <ContentPageLayout
      lang="fr"
      title="Événements Libertins Akoky"
      description="Soirées, apéros et weekends libertins en France"
      canonical="https://akoky.com/fr/evenements"
      heroTitle="Événements libertins Akoky – Soirées & Apéros Libertins en France"
      heroSubtitle="Vivez l'expérience libertine premium : soirées en club, apéros exclusifs et rencontres authentiques"
      heroImage="https://akoky.com/images/events-akoky-cover.webp"
      breadcrumb={[{ label: "Événements libertins" }]}
      faq={FAQ}
    >

      {/* Soirées libertines Akoky en France */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Soirées libertines Akoky en France</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Les événements libertins Akoky en France incarnent l'excellence du lifestyle libertin . De Paris à Lyon, en passant par Marseille et Bordeaux, nos soirées libertines en club offrent une expérience unique où élégance et liberté se rencontrent. Chaque événement libertin est pensé pour créer des moments inoubliables dans une atmosphère raffinée et bienveillante.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {FR_CARDS.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed mb-3">Nos apéros libertins en France sont devenus des rendez-vous incontournables pour la communauté libertine francophone. Ces soirées Akoky se distinguent par leur ambiance chaleureuse et leur sélection rigoureuse des lieux. Que vous soyez habitué des soirées libertines ou curieux de découvrir ce monde, les événements Akoky en France vous accueillent dans un cadre sécurisé et respectueux.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Les clubs libertins partenaires d'Akoky en France proposent des espaces privatisés pour nos événements exclusifs. Des soirées thématiques aux apéros afterwork libertins, chaque événement libertin est une célébration du lifestyle en toute discrétion. Paris, capitale européenne de la vie libertine, accueille régulièrement nos soirées libertines les plus prisées, attirant des membres de toute l'Europe.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">L'expérience des événements libertins Akoky en France va au-delà de la simple soirée. C'est une communauté vibrante qui se retrouve pour partager des moments authentiques, dans le respect des valeurs qui font la réputation d'Akoky : élégance, bienveillance et liberté assumée.</p>
          </div>
        </div>
      </section>

      {/* Pourquoi participer */}
      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Pourquoi Participer aux Événements Libertins Akoky</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-md hover:border-primary/40 transition-all">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">L'Univers des Événements Libertins Akoky</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {GALLERY.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl relative group">
                <img src={g.img} alt={g.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-white text-xs font-medium">{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explorer */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">Explorer nos événements & ressources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CTA_LINKS.map((l, i) => (
              <Link key={i} to={l.to} className="p-3 bg-background border border-border rounded-lg text-center text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default Evenements;
