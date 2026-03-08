import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [];

const Application = () => (
  <>
    <MetaTags
      title="Application AKOKY – Télécharger l'App Libertine iOS & Android | AKOKY"
      description="Téléchargez l'application AKOKY : clubs, événements, lives et rencontres libertines dans votre poche. iOS et Android. +1,5M membres."
      canonical="https://akoky.com/fr/application"
      lang="fr"
      ogImage="https://akoky.com/images/app-cover.webp"
    />
    <HreflangTags slug="application" />
    <ContentPageLayout
      lang="fr"
      title="Téléchargez l'application Akoky"
      description="L'application libertine premium sur iOS et Android"
      canonical="https://akoky.com/fr/application"
      heroTitle="Téléchargez l'application Akoky"
      heroSubtitle="L'expérience libertine premium dans votre poche : clubs, événements, lives et rencontres authentiques."
      heroImage="https://akoky.com/images/app-cover.webp"
      breadcrumb={[{ label: "Application AKOKY" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Installez l'application Akoky</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Accédez rapidement à Akoky et profitez d'une expérience immersive comme une vraie application. Installation rapide, aucun compte Apple ou Google requis. Découvrez nos 120+ clubs partenaires géolocalisés et leurs événements en temps réel .</p>
            <p className="text-muted-foreground leading-relaxed mb-3">✅ Utilisateurs iPhone / iPad : Installation directe depuis Safari</p>
          <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://akoky.com/images/application-akoky.webp" alt="Installez l'application Akoky" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Pourquoi installer l'application Akoky ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Découvrez tous les avantages d'avoir Akoky directement sur votre appareil</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Navigation ultra-rapide, interface native, chargement instantané. L'application Akoky offre une fluidité incomparable par rapport au navigateur web.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Icône discrète, aucune trace dans l'historique du navigateur, connexion sécurisée. Votre vie privée reste totalement protégée.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Akoky partout avec vous</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">L' application libertine Akoky vous accompagne dans tous vos moments de vie. Que vous soyez à la maison, en déplacement professionnel, en vacances ou lors d'un événement libertin, restez connecté à la communauté grâce à notre plateforme libertine mobile optimisée. Nouveau dans le libertinage ? Consultez notre guide pour débutants directement depuis</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Compatible sur mobile, tablette et ordinateur , l'application site libertin Akoky s'adapte à votre style de vie. Conversations privées, recherche de profils, organisation d'événements, participation aux Lives : tout est à portée de main, en toute discrétion. Explorez également notre guide des clubs libertins par région avec géolocalisation intégrée</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Avec Akoky, vous bénéficiez d'une expérience premium pensée pour les membres exigeants qui recherchent une application libertine sécurisée , fluide et élégante. Installation simple, utilisation intuitive, confidentialité absolue. Découvrez les avantages du compte VIP pour débloquer toutes les fonctionnalités exclusives de l'application.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Comment installer sur iPhone / iPad</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Installation rapide et simple depuis Safari. Aucun compte Apple requis.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Rendez-vous sur akoky.com depuis le navigateur Safari sur votre iPhone ou iPad.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Tapez sur l'icône de partage (⎙) en bas de l'écran Safari.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Comment installer sur Android</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Installation directe via votre navigateur Chrome ou Firefox</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Ouvrez akoky.com dans Chrome, Firefox ou votre navigateur préféré.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Tapez sur les trois points verticaux (⋮) en haut à droite de l'écran.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Application Desktop Akoky</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Akoky est également disponible sur ordinateur. Profitez d'une expérience optimisée sur grand écran pour une navigation encore plus confortable.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">L'application fonctionne sur tous les systèmes d'exploitation via votre navigateur préféré.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Grand écran, interface spacieuse, navigation agréable. Idéal pour la messagerie et les Lives.</p>
          <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://akoky.com/images/ordinateur-application-akoky.webp" alt="Application Desktop Akoky" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Akoky vous suit partout… même là où vous ne l'attendiez pas 😉</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Dans le canapé, au bureau (discrètement), en voyage, à l'hôtel, lors d'un événement… L'application Akoky s'adapte à tous vos moments de liberté. Restez connecté à la communauté libertine quand vous le souhaitez, où que vous soyez.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Sécurité & Confidentialité</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Vos données sont protégées. Votre vie privée reste privée.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Toutes vos informations personnelles sont chiffrées et sécurisées. Akoky respecte strictement le RGPD et ne revend jamais vos données.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">L'application peut être masquée, les notifications sont personnalisables. Vous contrôlez totalement votre visibilité et votre discrétion.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Découvrez aussi</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Explorez nos ressources pour profiter pleinement de votre expérience AKOKY</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Tout savoir sur le libertinage moderne : pratiques, codes, conseils pour débuter en toute sérénité</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Découvrez nos jeux et défis libertins à pratiquer en couple ou en groupe, directement accessibles depuis l'app</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Application;
