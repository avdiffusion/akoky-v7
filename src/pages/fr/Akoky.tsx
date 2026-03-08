import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [];

const Akoky = () => (
  <>
    <MetaTags
      title="AKOKY – La Plateforme Libertine Premium Européenne | AKOKY"
      description="Découvrez AKOKY : la plateforme libertine premium qui révolutionne les rencontres libertines. +1,5M membres, clubs, événements, lives. Rejoignez-nous."
      canonical="https://akoky.com/fr/akoky"
      lang="fr"
      ogImage="https://akoky.com/images/akoky.webp"
    />
    <HreflangTags slug="akoky" />
    <ContentPageLayout
      lang="fr"
      title="Notre mission AKOKY"
      description="La plateforme libertine premium européenne"
      canonical="https://akoky.com/fr/akoky"
      heroTitle="Notre mission AKOKY"
      heroSubtitle="Révolutionner le libertinage numérique avec éthique, innovation et bienveillance."
      heroImage="https://akoky.com/images/akoky.webp"
      breadcrumb={[{ label: "À propos d'AKOKY" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">L'Application AKOKY : l'expérience communautaire adulte dans votre poche</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Issu d'un projet communautaire initié en 2014 et structuré sous sa forme actuelle depuis 2020, AKOKY développe une application mobile premium disponible sur iOS et Android. Elle permet à plus de 1,5 million de membres de découvrir des clubs partenaires vérifiés , de suivre des événements privés chaque mois et d'accéder à un écosystème pensé pour le</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img src="https://akoky.com/images/icon-akoky.webp" alt="L'Application AKOKY : l'expérience communautaire adulte dans votre poche" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img src="https://akoky.com/images/3tel.webp" alt="L'Application AKOKY : l'expérience communautaire adulte dans votre poche" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Lexique Libertin Complet : Maîtrisez le Vocabulaire du Libertinage Moderne</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Notre lexique libertin référence plus de 200 termes essentiels pour comprendre le libertinage moderne . De l' échangisme au mélangisme , du candaulisme au triolisme , découvrez les définitions précises de toutes les pratiques libertines. Que vous soyez débutant ou membre confirmé, ce dictionnaire libertin vous permettra de naviguer en toute confian</p>
            <p className="text-muted-foreground leading-relaxed mb-3">AKOKY se distingue de Wyylde , NousLibertins , Libertic et SexyLib par son approche pédagogique unique. Notre charte éthique place le consentement explicite , la discrétion absolue et le respect des limites au cœur de chaque interaction. Plus qu'un simple site de rencontre libertin, AKOKY est une communauté éducative où chaque membre peut s'épanoui</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Explorez notre lexique pour comprendre les codes des soirées libertines , les pratiques du soft swap et du full swap , les nuances entre exhibitionnisme et voyeurisme , ou encore les règles du gang bang respectueux. Que ce soit en sauna libertin ou en club, chaque terme est expliqué simplement, sans jugement, avec des exemples concrets issus des té</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Les valeurs fondatrices d'AKOKY</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">AKOKY repose sur une vision claire des rencontres adultes modernes : un cadre structuré, une éthique assumée et des règles conçues pour garantir des expériences respectueuses, sûres et de qualité.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">AKOKY valorise des profils réels, transparents et cohérents. La sincérité prime sur la mise en scène, afin de favoriser des rencontres adultes basées sur la confiance et des attentes clairement exprimées.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">La plateforme intègre des outils de sécurité avancés, une modération humaine active et une gestion rigoureuse des données personnelles pour garantir la discrétion et le bien-être de chaque membre.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Jouez sur votre téléphone… ou sur votre TV</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Dé animé, gages coquins, immersion totale. Les jeux Akoky sont conçus pour pimenter vos soirées à deux ou à plusieurs, sur mobile comme sur grand écran.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Espace Presse AKOKY – Dossier média & ressources officielles</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Bienvenue dans l'espace presse d'AKOKY (akoky.com), la plateforme libertine de référence en Europe. Retrouvez ici tous nos communiqués de presse, dossiers médias, visuels officiels et coordonnées pour toute demande journalistique.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Notre mission ? Offrir un espace sûr, moderne et authentique pour les couples et célibataires souhaitant explorer le lifestyle libertin avec élégance et respect.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Vous souhaitez parler d'AKOKY dans vos médias ? Contactez notre équipe presse pour des interviews, visuels HD, ou toute information complémentaire.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Sécurité Maximale & Discrétion Garantie : La Différence AKOKY</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Face aux problèmes de faux profils et de fuites de données rencontrés sur d'autres plateformes libertines, AKOKY a développé AKOKY Safe , notre système de sécurité propriétaire triple couche. Chaque profil est vérifié manuellement par notre équipe (photo + pièce d'identité optionnelle pour le badge certifié), toutes les données personnelles sont ch</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Contrairement à autres sites libertins, AKOKY offre un mode incognito dans l' application , la possibilité de flouter vos photos (visibles uniquement après acceptation mutuelle), et un système de géolocalisation approximative (rayon de 5-10km) pour protéger votre adresse exacte. Vos réservations d'événements et visites en club restent strictement c</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Notre équipe de modération 24/7 (humains, pas des bots) supprime immédiatement tout contenu inapproprié, harcèlement ou non-respect du consentement . Résultat : AKOKY affiche un taux de satisfaction de 4.7/5 sur la sécurité selon nos 60+ témoignages vérifiés . La discrétion fait partie de notre ADN depuis 2020.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Akoky;
