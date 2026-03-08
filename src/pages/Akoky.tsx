import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const faqAkoky = [
  {
    question: "Qu'est-ce qu'AKOKY et à quoi sert la plateforme ?",
    answer: "AKOKY est une plateforme communautaire adulte européenne dédiée aux rencontres, aux clubs partenaires et aux événements privés. Elle s'adresse aux couples, célibataires et profils curieux souhaitant évoluer dans un cadre structuré, respectueux et sécurisé."
  },
  {
    question: "En quoi AKOKY se différencie-t-il des autres plateformes similaires ?",
    answer: "Contrairement à d'autres plateformes, AKOKY combine un réseau communautaire, un annuaire de clubs partenaires vérifiés, des événements privés encadrés, des lives exclusifs et une approche éthique centrée sur le consentement et la qualité des échanges."
  },
  {
    question: "Comment AKOKY garantit-il la sécurité et la discrétion des membres ?",
    answer: "Chaque profil est modéré manuellement, les données sont protégées selon les normes RGPD, et des outils avancés permettent de gérer la visibilité des profils et des photos. Le service AKOKY Safe renforce la protection des membres au quotidien."
  },
  {
    question: "L'inscription sur AKOKY est-elle gratuite ?",
    answer: "Oui. L'inscription est gratuite et permet de découvrir la plateforme, les clubs partenaires et les événements. Un abonnement VIP optionnel débloque des fonctionnalités avancées comme la messagerie illimitée et l'accès à des événements exclusifs."
  },
  {
    question: "Qui peut utiliser AKOKY ?",
    answer: "AKOKY est ouvert aux couples, femmes seules, hommes seuls (selon conditions), célibataires et profils polyamoureux. Chaque événement précise clairement les profils acceptés."
  },
  {
    question: "AKOKY propose-t-il des événements adaptés aux débutants ?",
    answer: "Oui. AKOKY organise des événements accessibles aux débutants, comme des apéros découverte, des visites guidées de clubs et des soirées pédagogiques. Un guide dédié est également disponible pour comprendre les codes."
  }
];

const jsonSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AKOKY",
  "url": "https://akoky.com",
  "logo": "https://akoky.com/images/logo-akoky.webp",
  "description": "Plateforme communautaire libertine premium en Europe",
  "foundingDate": "2014",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contact@akoky.com",
    "availableLanguage": ["fr", "en", "es", "de", "it", "pt"]
  },
  "sameAs": [
    "https://www.facebook.com/akokyofficial",
    "https://www.instagram.com/akoky_official",
    "https://twitter.com/akoky_official"
  ]
};

const Akoky = () => {
  return (
    <ContentPageLayout
      title="Notre Mission AKOKY – Communauté adulte premium & événements"
      description="Découvrez les valeurs, la vision et les engagements de la communauté Akoky. Plateforme communautaire adulte premium en Europe."
      canonical="https://akoky.com/fr/akoky"
      heroTitle="Notre mission AKOKY"
      heroSubtitle="Découvrez les valeurs, la vision et les engagements de la communauté Akoky"
      heroImage="/images/akoky.webp"
      faq={faqAkoky}
      schema={jsonSchema}
    >
      {/* Application Mobile */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-5xl mx-auto">
          <span className="text-primary font-bold tracking-wider text-sm mb-2 block">Notre Mission</span>
          <h2 className="text-3xl font-bold text-foreground mb-6">L'Application AKOKY : l'expérience communautaire adulte dans votre poche</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Issu d'un projet communautaire initié en 2014 et structuré sous sa forme actuelle depuis 2020, AKOKY développe une <Link to="/fr/application" className="text-primary hover:underline">application mobile premium</Link> disponible sur iOS et Android.</p>
                <p>Elle permet à plus de <Link to="/fr" className="text-primary hover:underline">1,5 million de membres</Link> de découvrir des <Link to="/fr/clubs" className="text-primary hover:underline">clubs partenaires vérifiés</Link>, de suivre <Link to="/fr/evenements" className="text-primary hover:underline">des événements privés chaque mois</Link> et d'accéder à un écosystème pensé pour les rencontres adultes modernes, fondé sur la discrétion, le respect et une approche éthique du lifestyle.</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <a href="https://akoky.com/application" className="px-6 py-3 bg-foreground text-background rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                  <span>📱</span> Télécharger pour iOS
                </a>
                <a href="https://akoky.com/application" className="px-6 py-3 border border-border text-foreground rounded-lg font-bold hover:bg-accent transition-colors flex items-center gap-2">
                  <span>🤖</span> Télécharger pour Android
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Compatible iOS 13+ | ChromeOS | Android TV</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
              <img src="/images/3tel.webp" alt="AKOKY App Screenshot" className="relative z-10 rounded-2xl shadow-2xl border border-border mx-auto max-w-sm" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Chiffres */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-primary tracking-widest mb-12 uppercase">Nos Chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1.5M+", label: "Membres Actifs", href: "/fr" },
              { value: "120+", label: "Clubs Libertins Vérifiés", href: "/fr/clubs" },
              { value: "300+", label: "Événements Libertins/Mois", href: "/fr/evenements" },
              { value: "20+", label: "Lives Libertins/Semaine", href: "/fr/live" },
            ].map((stat, i) => (
              <Link key={i} to={stat.href} className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary transition-colors">
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lexique */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Lexique Libertin Complet : Maîtrisez le Vocabulaire du Libertinage Moderne</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Notre <Link to="/fr/lexique" className="text-primary hover:underline">lexique libertin</Link> référence plus de 200 termes essentiels pour comprendre le <Link to="/fr/libertinage" className="text-primary hover:underline">libertinage moderne</Link>. De l'<strong className="text-foreground">échangisme</strong> au <strong className="text-foreground">mélangisme</strong>, du <strong className="text-foreground">candaulisme</strong> au <strong className="text-foreground">triolisme</strong>, découvrez les définitions précises de toutes les pratiques libertines. Que vous soyez <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">débutant</Link> ou membre confirmé, ce dictionnaire libertin vous permettra de naviguer en toute confiance dans les <Link to="/fr/clubs-libertins" className="text-primary hover:underline">clubs libertins</Link>, lors des <Link to="/fr/evenements" className="text-primary hover:underline">événements</Link> et sur notre plateforme.</p>
            <p>AKOKY se distingue de <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong>, <strong className="text-foreground">Libertic</strong> et <strong className="text-foreground">SexyLib</strong> par son approche pédagogique unique. Notre <Link to="/fr/vision" className="text-primary hover:underline">charte éthique</Link> place le <strong className="text-foreground">consentement explicite</strong>, la <strong className="text-foreground">discrétion absolue</strong> et le <strong className="text-foreground">respect des limites</strong> au cœur de chaque interaction. Plus qu'un simple site de rencontre libertin, AKOKY est une communauté éducative où chaque membre peut s'épanouir en toute sécurité.</p>
            <p>Explorez notre lexique pour comprendre les codes des <strong className="text-foreground">soirées libertines</strong>, les pratiques du <strong className="text-foreground">soft swap</strong> et du <strong className="text-foreground">full swap</strong>, les nuances entre <strong className="text-foreground">exhibitionnisme</strong> et <strong className="text-foreground">voyeurisme</strong>, ou encore les règles du <strong className="text-foreground">gang bang</strong> respectueux. Que ce soit en <Link to="/fr/saunas-libertins" className="text-primary hover:underline">sauna libertin</Link> ou en club, chaque terme est expliqué simplement, sans jugement, avec des exemples concrets issus des témoignages de notre <Link to="/fr/avis" className="text-primary hover:underline">communauté de 1.5M membres</Link>. Une démarche éducative qui valorise l'authenticité, le respect mutuel et la communication honnête.</p>
            <p><strong className="text-foreground">Pourquoi ce lexique est unique :</strong> Contrairement aux autres plateformes, AKOKY enrichit continuellement son lexique grâce aux retours de la communauté. Nos définitions intègrent les évolutions du <Link to="/fr/libertinage" className="text-primary hover:underline">libertinage moderne</Link>, les nouvelles pratiques (comme le <strong className="text-foreground">throuple</strong> ou le <strong className="text-foreground">polyamour éthique</strong>), et les codes spécifiques de chaque région (France, Belgique, Espagne). Téléchargez notre <Link to="/fr/application" className="text-primary hover:underline">application</Link> pour accéder au lexique hors ligne lors de vos soirées en <Link to="/fr/clubs" className="text-primary hover:underline">club</Link>.</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/fr/lexique" className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg">Explorer le Lexique Libertin Complet (200+ Termes) →</Link>
            <a href="https://www.youtube.com/@akoky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground font-medium hover:text-foreground text-lg">🎥 Découvrir la chaîne YouTube d'AKOKY</a>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Les valeurs fondatrices d'AKOKY</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">AKOKY repose sur une vision claire des rencontres adultes modernes : un cadre structuré, une éthique assumée et des règles conçues pour garantir des expériences respectueuses, sûres et de qualité.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "Authenticité des profils et des échanges", text: "AKOKY valorise des profils réels, transparents et cohérents. La sincérité prime sur la mise en scène, afin de favoriser des rencontres adultes basées sur la confiance et des attentes clairement exprimées." },
              { num: "02", title: "Sécurité, confidentialité et protection des données", text: "La plateforme intègre des outils de sécurité avancés, une modération humaine active et une gestion rigoureuse des données personnelles pour garantir la discrétion et le bien-être de chaque membre." },
              { num: "03", title: "Respect, consentement et limites claires", text: "Le consentement explicite, le respect des limites et la tolérance zéro face aux comportements intrusifs ou déplacés constituent le socle de toutes les interactions sur AKOKY." },
              { num: "04", title: "Élégance et approche responsable du lifestyle adulte", text: "AKOKY défend une vision raffinée et responsable du lifestyle adulte, à l'opposé du voyeurisme, du contenu trash ou des plateformes opportunistes, en privilégiant la qualité des expériences plutôt que la quantité." },
            ].map((v, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border">
                <span className="text-4xl font-black text-muted/30 mb-4 block">{v.num}</span>
                <h3 className="text-xl font-bold text-foreground mb-4">{v.title}</h3>
                <p className="text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg">Chez AKOKY, les rencontres adultes ne sont pas un prétexte. <strong className="text-foreground">Elles impliquent responsabilité, respect et maturité.</strong></p>
        </div>
      </section>

      {/* Jeux */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider text-sm mb-2 block">🎲 Jeux Akoky</span>
              <h2 className="text-3xl font-bold text-foreground mb-4">Jouez sur votre téléphone… ou sur votre TV</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Dé animé, gages coquins, immersion totale. Les jeux Akoky sont conçus pour pimenter vos soirées à deux ou à plusieurs, sur mobile comme sur grand écran.</p>
              <Link to="/fr/jeux" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">▶ Jouer maintenant – Gratuit</Link>
              <p className="text-xs text-muted-foreground mt-4">📺 Compatible TV · Chromecast · Smart TV</p>
            </div>
            <div>
              <img src="https://akoky.com/fr/images/app-tv.webp" alt="Jeux Akoky sur télévision et grand écran" className="rounded-2xl shadow-2xl border border-border mx-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission complète */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-3xl font-bold text-foreground mb-4">Notre Mission : Révolutionner le Libertinage avec Éthique et Transparence</h2>
          <p>Fondé en <strong className="text-foreground">2014</strong> par une équipe de passionnés du <Link to="/fr/libertinage" className="text-primary hover:underline">lifestyle libertin</Link>, AKOKY est devenu en 4 ans la <strong className="text-foreground">l'une des plateformes communautaires libertines les plus actives en Europe</strong> avec 1.5 million de membres actifs. Nous nous positionnons comme l'alternative éthique à <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong>, <strong className="text-foreground">Libertic</strong> et <strong className="text-foreground">SexyLib</strong>, en plaçant le <Link to="/fr/vision" className="text-primary hover:underline">consentement</Link> et la <strong className="text-foreground">transparence</strong> au cœur de notre ADN.</p>
          <p>Notre écosystème unique combine un <strong className="text-foreground">réseau social libertin sécurisé</strong>, un <Link to="/fr/clubs" className="text-primary hover:underline">annuaire de 120 clubs vérifiés</Link> (France, Belgique, Espagne), <Link to="/fr/evenements" className="text-primary hover:underline">300 événements mensuels</Link> organisés par des professionnels formés, <Link to="/fr/live" className="text-primary hover:underline">20 lives libertins hebdomadaires</Link> et une <Link to="/fr/application" className="text-primary hover:underline">application mobile de pointe</Link> avec géolocalisation en temps réel. Chaque fonctionnalité est pensée pour faciliter les <strong className="text-foreground">rencontres libertines authentiques</strong> tout en garantissant <strong className="text-foreground">discrétion</strong> et <strong className="text-foreground">sécurité</strong>.</p>
          <p>AKOKY n'est pas qu'un simple site de rencontre : c'est une <strong className="text-foreground">communauté bienveillante</strong> qui accompagne <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">les débutants</Link> avec un <Link to="/fr/lexique" className="text-primary hover:underline">lexique complet</Link>, une <Link to="/fr/faq" className="text-primary hover:underline">FAQ détaillée</Link>, un <Link to="/fr/blog" className="text-primary hover:underline">blog éducatif</Link> et des <Link to="/fr/avis" className="text-primary hover:underline">témoignages authentiques</Link> (note moyenne 4.7/5). Notre mission : démocratiser le libertinage moderne en cassant les tabous, en éduquant sans juger, et en créant un espace où couples, célibataires et curieux peuvent s'épanouir librement dans le respect mutuel.</p>
        </div>
      </section>

      {/* Espace Presse */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Espace Presse AKOKY – Dossier média & ressources officielles</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Bienvenue dans l'espace presse d'AKOKY (akoky.com), la plateforme libertine de référence en Europe. Retrouvez ici tous nos communiqués de presse, dossiers médias, visuels officiels et coordonnées pour toute demande journalistique.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Notre mission ? Offrir un espace sûr, moderne et authentique pour les couples et célibataires souhaitant explorer le lifestyle libertin avec élégance et respect.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">Vous souhaitez parler d'AKOKY dans vos médias ? Contactez notre équipe presse pour des interviews, visuels HD, ou toute information complémentaire.</p>
              <Link to="/fr/presse" className="text-primary font-bold hover:underline">Accéder au dossier de presse →</Link>
            </div>
            <div>
              <img src="https://akoky.com/fr/images/akoky-presse.webp" alt="AKOKY Press Kit" className="rounded-2xl shadow-xl border border-border" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité AKOKY Safe */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🛡️</span>
            <h2 className="text-3xl font-bold text-foreground">Sécurité Maximale & Discrétion Garantie : La Différence AKOKY</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Face aux problèmes de <strong className="text-foreground">faux profils</strong> et de <strong className="text-foreground">fuites de données</strong> rencontrés sur d'autres plateformes libertines, AKOKY a développé <strong className="text-foreground">AKOKY Safe</strong>, notre système de sécurité propriétaire triple couche. Chaque profil est <strong className="text-foreground">vérifié manuellement</strong> par notre équipe (photo + pièce d'identité optionnelle pour le badge certifié), toutes les données personnelles sont <strong className="text-foreground">chiffrées end-to-end</strong> (norme bancaire AES-256), et notre infrastructure est <strong className="text-foreground">conforme RGPD</strong> avec hébergement en Europe.</p>
            <p>Contrairement à autres sites libertins, AKOKY offre un <strong className="text-foreground">mode incognito</strong> dans l'<Link to="/fr/application" className="text-primary hover:underline">application</Link>, la possibilité de flouter vos photos (visibles uniquement après acceptation mutuelle), et un système de <strong className="text-foreground">géolocalisation approximative</strong> (rayon de 5-10km) pour protéger votre adresse exacte. Vos <Link to="/fr/evenements" className="text-primary hover:underline">réservations d'événements</Link> et visites en <Link to="/fr/clubs" className="text-primary hover:underline">club</Link> restent strictement confidentielles : aucune information n'est partagée sans votre consentement explicite.</p>
            <p>Notre équipe de <strong className="text-foreground">modération 24/7</strong> (humains, pas des bots) supprime immédiatement tout contenu inapproprié, harcèlement ou non-respect du <Link to="/fr/vision" className="text-primary hover:underline">consentement</Link>. Résultat : AKOKY affiche un taux de satisfaction de <strong className="text-foreground">4.7/5</strong> sur la sécurité selon nos <Link to="/fr/avis" className="text-primary hover:underline">60+ témoignages vérifiés</Link>. La discrétion fait partie de notre ADN depuis 2020.</p>
          </div>
          <div className="mt-6">
            <a href="https://safe.akoky.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">🛡️ Découvrir AKOKY Safe →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Prêt à rejoindre la communauté ?</h2>
          <p className="text-muted-foreground mb-8">Inscrivez-vous gratuitement et découvrez un univers de possibilités</p>
          <a href="https://app.akoky.com/register" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity">Créer mon compte gratuit</a>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Akoky;
