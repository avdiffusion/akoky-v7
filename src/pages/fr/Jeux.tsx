import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Les jeux AKOKY sont-ils gratuits ?", answer: "Oui, 100% gratuits ! AKOKY Space est entièrement accessible sans abonnement, sans achat intégré et sans limitation. Profitez de tous nos jeux libertins sans débourser un centime." },
  { question: "Peut-on jouer en couple ?", answer: "Absolument ! La plupart de nos jeux sont conçus pour être joués en couple, mais vous pouvez également jouer seul(e) ou en groupe. Chaque jeu s'adapte à vos envies et à votre situation." },
  { question: "Les jeux sont-ils anonymes ?", answer: "Oui, votre anonymat est garanti. Aucune inscription obligatoire, aucune donnée personnelle collectée sans votre consentement. Jouez en toute discrétion." },
  { question: "Faut-il installer l'application ?", answer: "Non, vous pouvez jouer directement depuis votre navigateur sur akoky.space . L'installation de l'application est optionnelle mais recommandée pour une expérience optimale." },
  { question: "Les jeux sont-ils accessibles sur mobile ?", answer: "Oui ! AKOKY Space est entièrement responsive et fonctionne parfaitement sur mobile, tablette et desktop. Emportez vos jeux partout avec vous, ou téléchargez l' application AKOKY pour une expérience optimale." },
  { question: "Les résultats sont-ils partagés ?", answer: "Non, jamais. Tout ce qui se passe dans vos parties reste privé. AKOKY ne partage aucune donnée de jeu, aucun résultat ni aucune information avec des tiers." },
];

const Jeux = () => (
  <>
    <MetaTags
      title="Jeux Libertins AKOKY Space – Quiz & Défis Sensuels | AKOKY"
      description="Découvrez AKOKY Space : jeux libertins, quiz et défis pour explorer votre sexualité avec complicité. Gratuit, privé, pour couples et célibataires."
      canonical="https://akoky.com/fr/jeux"
      lang="fr"
      ogImage="/images/cover-jeux.webp"
    />
    <HreflangTags slug="jeux" />
    <ContentPageLayout
      lang="fr"
      title="Jeux Libertins AKOKY Space – Quiz & Défis Sensuels"
      description="Découvrez AKOKY Space : jeux libertins, quiz et défis pour explorer votre sexualité avec complicité."
      canonical="https://akoky.com/fr/jeux"
      heroTitle="AKOKY Space – Jeux Libertins & Exploration"
      heroSubtitle="Quiz sensuels, défis et jeux libertins pour explorer et partager avec bienveillance."
      heroImage="https://akoky.com/images/cover-jeux.webp"
      breadcrumb={[{ label: "Jeux AKOKY Space" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Nos Jeux Libertins AKOKY</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Une collection de jeux coquins pensés pour tous les libertins, du couple novice aux explorateurs confirmés</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Faites tourner la roue et découvrez des gages sensuels, amusants ou audacieux. Idéal pour briser la glace et laisser le hasard décider.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Lancez les dés et laissez-vous guider par vos envies. Chaque face dévoile une action, un défi ou une surprise coquine.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Roulette des Gages Libertins</h3>
              <p className="text-muted-foreground text-sm">Faites tourner la roue et découvrez des gages sensuels, amusants ou audacieux. Idéal pour briser la glace et laisser le hasard décider.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Dé du Désir AKOKY</h3>
              <p className="text-muted-foreground text-sm">Lancez les dés et laissez-vous guider par vos envies. Chaque face dévoile une action, un défi ou une surprise coquine.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Vérité ou Action Libertine</h3>
              <p className="text-muted-foreground text-sm">Le grand classique revisité version libertine. Questions intimes, défis audacieux et moments de complicité garantis.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Défis Coquins de Couple</h3>
              <p className="text-muted-foreground text-sm">Relevez des défis en duo pour renforcer votre complicité. Du romantique au torride, chaque défi rapproche.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Cartes Twist Sensuelles</h3>
              <p className="text-muted-foreground text-sm">Piochez une carte et découvrez des scenarios inattendus. Chaque tirage apporte son lot de surprises et de plaisir.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Quiz Libertin Interactif</h3>
              <p className="text-muted-foreground text-sm">Testez vos connaissances sur l'univers libertin tout en découvrant de nouvelles pratiques et curiosités coquines.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Pourquoi AKOKY Space ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Pourquoi attendre et payer ailleurs alors qu'AKOKY met à votre disposition son application gratuite, conçue par des libertins pour tous les grands coquins ? Retrouvez également nos jeux lors des soirées dans nos clubs partenaires .</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Aucun abonnement caché, aucune limitation. Profitez de tous les jeux libertins sans débourser un centime.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Développé par la référence libertine européenne, avec l'expertise et la qualité que vous connaissez.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">AKOKY Space — L'Application Gratuite</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">AKOKY Space est l'application de jeux libertins 100% gratuite développée par AKOKY. Accessible à tous, sans abonnement caché, pour jouer librement et sans compromis. Disponible sur mobile, tablette et desktop.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Découvrez AKOKY en Vidéo</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Plongez dans les coulisses, découvrez nos jeux et l'univers AKOKY sur notre chaîne officielle YouTube</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Les Jeux Libertins Modernes : Plaisir, Consentement et Complicité</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Les jeux libertins ont considérablement évolué ces dernières années, passant de simples gages osés à de véritables expériences immersives pensées pour renforcer la complicité, stimuler le désir et explorer de nouvelles facettes de la sensualité. AKOKY Space s'inscrit dans cette modernité du libertinage en proposant une approche élégante, respectueu</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Que vous soyez en couple établi cherchant à raviver la flamme, ou célibataire curieux d'explorer vos fantasmes, les jeux libertins AKOKY s'adaptent à tous les profils. La Roulette des Gages permet de briser la glace avec légèreté, tandis que le Dé du Désir offre une spontanéité rafraîchissante. Pour les couples, les Défis Coquins créent des moments</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Contrairement aux applications libertines commerciales qui multiplient les paywalls et les abonnements cachés, AKOKY Space fait le pari de la gratuité totale. Pourquoi ? Parce qu'AKOKY croit que le plaisir et l'exploration sensuelle ne devraient jamais être limités par des contraintes financières. Notre design chic et épuré, notre respect de l'anon</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Jouer en Couple ou en Solo : Chacun son Rythme</h3>
              <p className="text-muted-foreground text-sm">Que vous soyez en couple établi cherchant à raviver la flamme, ou célibataire curieux d'explorer vos fantasmes, les jeux libertins AKOKY s'adaptent à tous les profils. La Roulette des Gages permet de briser la glace avec légèreté, tandis que le Dé du Désir offre une spontanéité rafraîchissante. Pour les couples, les Défis Coquins créent des moments de partage authentiques, loin de la routine. Si vous découvrez l'univers des jeux libertins pour débutants , commencez par nos activités les plus accessibles.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">AKOKY vs Autres Plateformes : La Différence Premium</h3>
              <p className="text-muted-foreground text-sm">Contrairement aux applications libertines commerciales qui multiplient les paywalls et les abonnements cachés, AKOKY Space fait le pari de la gratuité totale. Pourquoi ? Parce qu'AKOKY croit que le plaisir et l'exploration sensuelle ne devraient jamais être limités par des contraintes financières. Notre design chic et épuré, notre respect de l'anonymat et notre engagement communautaire nous distinguent des plateformes généralistes souvent vulgaires ou opportunistes.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Sécurité, Anonymat et Respect : Les Piliers d'AKOKY</h3>
              <p className="text-muted-foreground text-sm">Chez AKOKY, la discrétion n'est pas une option, c'est une garantie. Aucune inscription obligatoire pour jouer, aucune donnée personnelle collectée sans votre consentement explicite, et une politique de confidentialité transparente. Nous comprenons que l'univers libertin exige une confiance absolue, c'est pourquoi nos jeux sont conçus pour protéger votre vie privée à chaque instant.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Le Plaisir du Consentement et de la Convivialité</h3>
              <p className="text-muted-foreground text-sm">Tous nos jeux reposent sur un principe fondamental : le consentement éclairé et enthousiaste. Chaque participant doit se sentir libre d'accepter ou de refuser un défi, un gage ou une question. AKOKY Space n'est pas qu'une application de jeux coquins, c'est un espace de bienveillance où chacun peut explorer ses désirs sans pression ni jugement, dans l'esprit du libertinage éthique .</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Une Expérience Communautaire Unique</h3>
              <p className="text-muted-foreground text-sm">Rejoindre AKOKY Space, c'est aussi intégrer une communauté européenne de libertins bienveillants, curieux et respectueux. Nos jeux sont régulièrement enrichis grâce aux retours de nos utilisateurs, et nous organisons des événements exclusifs où les membres peuvent se rencontrer, échanger et partager leurs meilleures expériences ludiques.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Pourquoi Choisir AKOKY Space Aujourd'hui ?</h3>
              <p className="text-muted-foreground text-sm">Parce que vous méritez une application pensée pour vous, sans compromis. Parce que le libertinage moderne mérite une plateforme à la hauteur de ses ambitions : élégante, gratuite, sécurisée et profondément humaine. AKOKY Space n'est pas qu'un outil de divertissement, c'est une invitation à redécouvrir le plaisir sous toutes ses formes.</p>
            </div>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Jeux;
