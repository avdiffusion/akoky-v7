import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Application = () => {
  const faq = [
    {
      question: "L'application Akoky est-elle gratuite ?",
      answer: "Oui, l'installation de l'application est totalement gratuite. Vous pouvez utiliser Akoky avec votre abonnement actuel (gratuit ou premium) sans frais supplémentaires."
    },
    {
      question: "Dois-je créer un nouveau compte pour l'application ?",
      answer: "Non ! L'application utilise votre compte Akoky existant. Connectez-vous simplement avec vos identifiants habituels."
    },
    {
      question: "L'application est-elle discrète ?",
      answer: "Absolument. L'icône de l'application est sobre et épurée. Vous pouvez également la masquer ou désactiver les notifications pour une discrétion maximale."
    },
    {
      question: "Puis-je supprimer l'application facilement ?",
      answer: "Oui, comme n'importe quelle application. Sur iPhone : appui long puis \"Supprimer l'app\". Sur Android : appui long puis \"Désinstaller\" ou via les paramètres."
    },
    {
      question: "Est-ce une application officielle Akoky ?",
      answer: "Oui, l'application provient directement d'Akoky.com. C'est la version mobile officielle de la plateforme, optimisée pour les smartphones et tablettes."
    },
    {
      question: "L'application fonctionne-t-elle hors connexion ?",
      answer: "L'application nécessite une connexion Internet pour accéder au contenu et aux fonctionnalités. Cependant, certaines pages visitées peuvent être mises en cache pour un accès plus rapide."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Akoky",
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": "iOS, Android, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Application mobile officielle Akoky : messagerie sécurisée, géolocalisation des 120+ clubs libertins, notifications événements.",
    "url": "https://akoky.com/fr/application"
  };

  return (
    <ContentPageLayout
      title="App AKOKY iOS/Android | Messagerie & Géolocalisation Clubs"
      description="Téléchargez l'app AKOKY : messagerie sécurisée, géolocalisation des 120 clubs libertins, notifications événements. Disponible iOS & Android. Gratuit."
      canonical="https://akoky.com/fr/application"
      heroTitle="Téléchargez l'application Akoky"
      heroSubtitle="La version mobile officielle d'Akoky : fluide, élégante et confidentielle"
      heroImage="/images/app-cover.webp"
      heroType="cover"
      schema={schema}
      faq={faq}
      breadcrumb={[{ label: "Application" }]}
    >
      {/* Intro & Download */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Installez l'application Akoky</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Accédez rapidement à Akoky et profitez d'une expérience immersive comme une vraie application.
            Installation rapide, aucun compte Apple ou Google requis. Découvrez{" "}
            <Link to="/fr/clubs" className="text-primary hover:underline">nos 120+ clubs partenaires</Link>{" "}
            géolocalisés et leurs{" "}
            <Link to="/fr/evenements" className="text-primary hover:underline">événements en temps réel</Link>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#install-iphone" className="flex items-center gap-4 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all text-left">
              <span className="text-4xl">📱</span>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Télécharger sur</div>
                <div className="text-lg font-bold text-foreground">iPhone / iPad</div>
              </div>
            </a>

            <a href="#install-android" className="flex items-center gap-4 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all text-left">
              <span className="text-4xl">🤖</span>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Télécharger sur</div>
                <div className="text-lg font-bold text-foreground">Android</div>
              </div>
            </a>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg py-3 px-4 inline-block text-sm text-primary">
            ✅ Utilisateurs iPhone / iPad : <strong>Installation directe depuis Safari</strong>
          </div>
        </div>
      </section>

      {/* Mockup */}
      <section className="py-8 px-4 flex justify-center">
        <div className="max-w-xs w-full">
          <img
            src="/images/application-akoky.webp"
            alt="Aperçu de l'application Akoky sur smartphone"
            className="w-full h-auto drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Pourquoi installer */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Pourquoi installer l'application Akoky ?</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Découvrez tous les avantages d'avoir Akoky directement sur votre appareil
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Expérience fluide et optimisée", desc: "Navigation ultra-rapide, interface native, chargement instantané. L'application Akoky offre une fluidité incomparable par rapport au navigateur web." },
              { icon: "🔒", title: "Confidentialité renforcée", desc: "Icône discrète, aucune trace dans l'historique du navigateur, connexion sécurisée. Votre vie privée reste totalement protégée." },
              { icon: "⚡", title: "Accès instantané", desc: "Un simple tap sur l'icône et vous êtes connecté. Fini les recherches dans vos favoris ou l'historique de navigation." },
              { icon: "🔔", title: "Notifications maîtrisées", desc: "Recevez des alertes personnalisées pour les messages, événements libertins et activités. Vous contrôlez tout depuis les paramètres de l'application." },
              { icon: "🌍", title: "Akoky partout avec vous", desc: "À la maison, en déplacement, en voyage : gardez le contact avec la communauté libertine où que vous soyez, sur tous vos appareils." },
              { icon: "🚀", title: "Performance optimale", desc: "Messagerie instantanée, Lives fluides, chargement des profils optimisé. L'application Akoky est conçue pour la rapidité." }
            ].map((feat, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition-all text-center">
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feat.title}</h3>
                <p className="text-muted-foreground text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Akoky partout avec vous - SEO text */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Akoky partout avec vous</h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              L'<strong>application libertine Akoky</strong> vous accompagne dans tous vos moments de vie.
              Que vous soyez à la maison, en déplacement professionnel, en vacances ou lors d'un événement libertin,
              restez connecté à la communauté grâce à notre <strong>plateforme libertine mobile</strong> optimisée.
              Nouveau dans <Link to="/fr/libertinage" className="text-primary hover:underline">le libertinage</Link> ?
              Consultez notre <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">guide pour débutants</Link> directement depuis l'app.
            </p>
            <p>
              Compatible sur <strong>mobile, tablette et ordinateur</strong>, l'application site libertin Akoky s'adapte
              à votre style de vie. Conversations privées, recherche de profils, organisation d'événements, participation aux Lives :
              tout est à portée de main, en toute discrétion. Explorez également notre{" "}
              <Link to="/fr/clubs" className="text-primary hover:underline">guide des clubs libertins par région</Link> avec géolocalisation intégrée.
            </p>
            <p>
              Avec Akoky, vous bénéficiez d'une expérience premium pensée pour les membres exigeants qui recherchent
              une <strong>application libertine sécurisée</strong>, fluide et élégante. Installation simple,
              utilisation intuitive, confidentialité absolue. Découvrez les{" "}
              <Link to="/fr/vip" className="text-primary hover:underline">avantages du compte VIP</Link> pour débloquer toutes les fonctionnalités exclusives de l'application.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Guide iPhone */}
      <section id="install-iphone" className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-5xl mb-4 block">📱</span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Comment installer sur iPhone / iPad</h2>
            <p className="text-muted-foreground text-lg">Installation rapide et simple depuis Safari. Aucun compte Apple requis.</p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { step: 1, title: "Ouvrez Akoky.com dans Safari", desc: "Rendez-vous sur akoky.com depuis le navigateur Safari sur votre iPhone ou iPad." },
              { step: 2, title: "Appuyez sur le bouton Partager", desc: "Tapez sur l'icône de partage (⎙) en bas de l'écran Safari." },
              { step: 3, title: "Sélectionnez \"Sur l'écran d'accueil\"", desc: "Dans le menu, choisissez \"Sur l'écran d'accueil\" ou \"Ajouter à l'écran d'accueil\"." },
              { step: 4, title: "Confirmez l'installation", desc: "Validez en appuyant sur \"Ajouter\". L'icône Akoky apparaît instantanément sur votre écran d'accueil." },
              { step: 5, title: "C'est fait ! 🎉", desc: "L'icône Akoky apparaît maintenant sur votre écran d'accueil. Tapez dessus pour lancer l'application instantanément." }
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">{item.step}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide Android */}
      <section id="install-android" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-5xl mb-4 block">🤖</span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Comment installer sur Android</h2>
            <p className="text-muted-foreground text-lg">Installation directe via votre navigateur Chrome ou Firefox</p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { step: 1, title: "Visitez Akoky.com depuis votre navigateur Android", desc: "Ouvrez akoky.com dans Chrome, Firefox ou votre navigateur préféré." },
              { step: 2, title: "Ouvrez le menu du navigateur", desc: "Tapez sur les trois points verticaux (⋮) en haut à droite de l'écran." },
              { step: 3, title: "Choisissez \"Installer l'application\" ou \"Ajouter à l'écran d'accueil\"", desc: "Sélectionnez cette option dans le menu déroulant." },
              { step: 4, title: "Confirmez l'installation", desc: "Validez l'installation. L'icône Akoky s'ajoute automatiquement à votre écran d'accueil Android." },
              { step: 5, title: "Installation terminée ! ✅", desc: "L'application Akoky est maintenant accessible depuis votre écran d'accueil Android, comme n'importe quelle application native." }
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">{item.step}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Application Desktop Akoky</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Akoky est également disponible sur ordinateur. Profitez d'une expérience optimisée
            sur grand écran pour une navigation encore plus confortable.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <span className="text-4xl mb-3 block">💻</span>
              <h3 className="text-lg font-bold text-foreground mb-2">Compatible Windows, macOS & Linux</h3>
              <p className="text-muted-foreground text-sm">L'application fonctionne sur tous les systèmes d'exploitation via votre navigateur préféré.</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-3 block">🖥️</span>
              <h3 className="text-lg font-bold text-foreground mb-2">Confort visuel optimal</h3>
              <p className="text-muted-foreground text-sm">Grand écran, interface spacieuse, navigation agréable. Idéal pour la messagerie et les Lives.</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-3 block">⚡</span>
              <h3 className="text-lg font-bold text-foreground mb-2">Performance maximale</h3>
              <p className="text-muted-foreground text-sm">Multitâches facilité, conversations multiples, événements en plein écran.</p>
            </div>
          </div>

          <p className="text-muted-foreground text-center text-sm mb-8">
            <strong>Installation desktop :</strong> Visitez akoky.com depuis Chrome, Edge ou Firefox,
            puis utilisez l'option "Installer l'application" dans le menu du navigateur.
          </p>

          <div className="flex justify-center">
            <img
              src="/images/ordinateur-application-akoky.webp"
              alt="Application Akoky sur ordinateur"
              className="w-full max-w-3xl h-auto rounded-xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Akoky vous suit partout */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Akoky vous suit partout… même là où vous ne l'attendiez pas 😉</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dans le canapé, au bureau (discrètement), en voyage, à l'hôtel, lors d'un événement…
            L'application Akoky s'adapte à tous vos moments de liberté.
            Restez connecté à la communauté libertine quand vous le souhaitez, où que vous soyez.
          </p>
          <div className="text-5xl mt-6">🌍✨</div>
        </div>
      </section>

      {/* Sécurité & Confidentialité */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Sécurité & Confidentialité</h2>
          <p className="text-muted-foreground text-center mb-12">Vos données sont protégées. Votre vie privée reste privée.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🔐", title: "Données protégées", desc: "Toutes vos informations personnelles sont chiffrées et sécurisées. Akoky respecte strictement le RGPD et ne revend jamais vos données." },
              { icon: "👁️", title: "Accès discret", desc: "L'application peut être masquée, les notifications sont personnalisables. Vous contrôlez totalement votre visibilité et votre discrétion." },
              { icon: "🔕", title: "Notifications contrôlables", desc: "Activez ou désactivez les notifications à tout moment. Recevez uniquement les alertes qui vous intéressent vraiment." },
              { icon: "🛡️", title: "Zéro revente d'informations", desc: "Vos données vous appartiennent. Akoky ne les partage avec aucun tiers, ne les vend pas, et respecte votre intimité absolue." }
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Télécharger */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Prêt à rejoindre la communauté ?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Téléchargez l'application Akoky maintenant et découvrez une nouvelle façon de vivre votre liberté
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="#install-iphone" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform">
              📱 Télécharger maintenant
            </a>
            <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-card border border-border text-foreground font-bold text-lg hover:bg-accent transition-all">
              Créer un compte
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            ✅ Installation rapide • Aucun compte Apple/Google requis • Gratuit
          </p>
        </div>
      </section>

      {/* Découvrez aussi */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Découvrez aussi</h2>
          <p className="text-muted-foreground text-center mb-12">Explorez nos ressources pour profiter pleinement de votre expérience AKOKY</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📖", title: "Guide du libertinage", desc: "Tout savoir sur le libertinage moderne : pratiques, codes, conseils pour débuter en toute sérénité", link: "/fr/libertinage" },
              { icon: "🎲", title: "Jeux libertins", desc: "Découvrez nos jeux et défis libertins à pratiquer en couple ou en groupe, directement accessibles depuis l'app", link: "/fr/jeux" },
              { icon: "🎥", title: "Lives exclusifs", desc: "Participez aux lives AKOKY : événements en direct, soirées clubs, échanges avec la communauté", link: "/fr/live" },
              { icon: "🏛️", title: "Clubs libertins", desc: "Trouvez les meilleurs clubs et saunas libertins grâce à la géolocalisation de l'app", link: "/fr/clubs-libertins" },
              { icon: "⚖️", title: "Comparatif sites libertins", desc: "Pourquoi AKOKY est le meilleur réseau social libertin en 2026", link: "/fr/meilleur-site-libertin" }
            ].map((item, idx) => (
              <Link key={idx} to={item.link} className="bg-card border border-border p-6 rounded-xl hover:border-primary/40 transition-all block group">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Application;
