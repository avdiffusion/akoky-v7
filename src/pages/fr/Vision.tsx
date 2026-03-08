import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Quelle est la vision d'AKOKY ?", answer: "AKOKY souhaite révolutionner le libertinage numérique avec une approche éthique, sécurisée et bienveillante, en plaçant le consentement et la confiance au cœur de chaque interaction." },
  { question: "D'où vient AKOKY ?", answer: "AKOKY est né de l'expérience AcoquinementVotre, un projet communautaire initié en 2014, qui a évolué vers une plateforme professionnelle et pérenne en conservant ses valeurs d'authenticité." },
  { question: "Quels sont les piliers de la vision AKOKY ?", answer: "Les cinq piliers sont : liberté assumée, consentement clair, sécurité renforcée, technologie au service de l'humain, et élégance et discrétion." },
];

const Vision = () => (
  <>
    <HreflangTags slug="vision" />
    <ContentPageLayout
      lang="fr"
      title="Notre Vision AKOKY – La Plateforme Libertine Premium | AKOKY"
      description="Découvrez la vision d'AKOKY : révolutionner le libertinage numérique avec éthique, innovation et bienveillance."
      canonical="https://akoky.com/fr/vision"
      heroTitle="Notre Vision"
      heroSubtitle="La vision fondatrice d'AKOKY pour révolutionner le libertinage."
      heroImage="/images/vision-cover.webp"
      breadcrumb={[{ label: "Notre Vision" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">La naissance d'une vision</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Le libertinage a toujours été une expression de liberté, un espace où les conventions s'effacent pour laisser place à l'authenticité et au consentement mutuel. Pourtant, avec l'arrivée du numérique, cet univers s'est transformé sans toujours évoluer. Les plateformes se sont multipliées, mais beaucoup ont reproduit les mêmes schémas : interfaces vieillissantes, approches superficielles, absence de véritable protection pour les membres.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Nous avons observé ce décalage pendant des années. D'un côté, une communauté libertine qui aspire à plus de respect, de transparence et de modernité. De l'autre, des outils qui n'ont pas suivi cette évolution des mentalités et des attentes. Le libertinage moderne mérite mieux qu'une simple galerie de profils ou un système de messagerie basique. Il mérite une plateforme à la hauteur de ses valeurs.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">C'est de ce constat qu'est née Akoky. Non pas comme une énième plateforme libertine, mais comme une réponse pensée, structurée et respectueuse aux besoins d'une communauté qui mérite des outils à la hauteur de ses exigences. Une vision portée par une conviction simple : le libertinage responsable passe par des espaces où la confiance n'est pas un luxe, mais une évidence.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">D'AcoquinementVotre à Akoky : une évolution assumée</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Avant Akoky, il y a eu AcoquinementVotre. Une aventure humaine, une communauté soudée, des rencontres authentiques et des événements mémorables. Ce projet a été un laboratoire précieux, un espace où nous avons appris à écouter, à comprendre les attentes réelles des libertins, à identifier ce qui fonctionne et ce qui peut être amélioré.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">AcoquinementVotre nous a permis de bâtir une expérience solide, de tisser des liens durables avec une communauté exigeante et bienveillante. Mais nous avons également constaté les limites d'une approche artisanale face à des besoins croissants : sécurité renforcée, vérification des profils, outils technologiques modernes, structuration des événements et des partenariats.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Akoky n'est pas une rupture avec AcoquinementVotre. C'est son prolongement naturel, sa montée en gamme, son évolution vers une plateforme libertine professionnelle et pérenne. Nous avons conservé ce qui faisait la force du projet initial — l'authenticité, la proximité, le respect — tout en y ajoutant une infrastructure moderne, une sécurité accrue et une ambition européenne.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">La vision Akoky</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Cinq piliers fondamentaux pour repenser le libertinage en ligne</p>
            <p className="text-muted-foreground leading-relaxed mb-3">La liberté sexuelle et relationnelle est un droit fondamental. Akoky offre un espace où chacun peut exprimer ses désirs, ses limites et ses préférences sans jugement ni pression. Cette liberté ne se limite pas aux pratiques : elle englobe également la liberté d'explorer, de changer d'avis, de refuser, et de définir ses propres règles. Une plateforme libertine moderne ne dicte pas les comportements, elle les accompagne.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Le consentement est au cœur de toute interaction saine. Sur Akoky, nous avons conçu des outils permettant à chaque membre d'exprimer clairement ses attentes, ses envies et ses limites. Les profils détaillés, les filtres de recherche avancés et les options de confidentialité permettent à chacun de naviguer en toute transparence. Le consentement n'est pas une formalité, c'est la condition sine qua non de toute relation libertine respectueuse.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Liberté assumée</h3>
              <p className="text-muted-foreground text-sm">La liberté sexuelle et relationnelle est un droit fondamental. Akoky offre un espace où chacun peut exprimer ses désirs, ses limites et ses préférences sans jugement ni pression. Cette liberté ne se limite pas aux pratiques : elle englobe également la liberté d'explorer, de changer d'avis, de refuser, et de définir ses propres règles. Une plateforme libertine moderne ne dicte pas les comportements, elle les accompagne.</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Consentement clair</h3>
              <p className="text-muted-foreground text-sm">Le consentement est au cœur de toute interaction saine. Sur Akoky, nous avons conçu des outils permettant à chaque membre d'exprimer clairement ses attentes, ses envies et ses limites. Les profils détaillés, les filtres de recherche avancés et les options de confidentialité permettent à chacun de naviguer en toute transparence. Le consentement n'est pas une formalité, c'est la condition sine qua non de toute relation libertine respectueuse.</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Sécurité renforcée</h3>
              <p className="text-muted-foreground text-sm">La sécurité ne se négocie pas. Protection des données personnelles, vérification des profils, modération active, signalements traités rapidement : chaque fonctionnalité d'Akoky intègre une réflexion sur la sécurité des membres. Nous avons mis en place des protocoles stricts pour limiter les faux profils, protéger les conversations privées et garantir un environnement sain. La sécurité n'est pas une option, c'est une responsabilité que nous prenons au sérieux.</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Technologie au service de l'humain</h3>
              <p className="text-muted-foreground text-sm">L'innovation technologique ne doit jamais éclipser l'humain. Chez Akoky, nous utilisons la technologie pour faciliter les rencontres, améliorer l'expérience utilisateur et renforcer la confiance. Live streaming sécurisé, messagerie instantanée fluide, gestion avancée des identités, événements encadrés : chaque outil est pensé pour servir la communauté, pas l'inverse. La technologie doit rester un moyen, jamais une fin.</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Élégance et discrétion</h3>
              <p className="text-muted-foreground text-sm">Le libertinage ne rime pas avec vulgarité. Akoky propose une interface élégante, épurée, où chaque détail a été pensé pour offrir une expérience visuelle agréable et discrète. Nous respectons le besoin de confidentialité de nos membres : gestion fine de la visibilité, options d'anonymat, contrôle total sur les informations partagées. L'élégance n'est pas qu'une question d'esthétique, c'est une marque de respect envers ceux qui nous font confiance.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Repenser le libertinage en ligne</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Les plateformes libertines historiques ont joué un rôle important dans la démocratisation de cet univers. Elles ont permis à des milliers de personnes de se rencontrer, d'échanger, de vivre des expériences nouvelles. Mais force est de constater que beaucoup n'ont pas évolué au rythme des attentes de leurs utilisateurs.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Aujourd'hui, les membres d'une plateforme libertine sont confrontés à plusieurs défis : multiplication des faux profils, absence de vérification fiable, interfaces datées, manque de transparence sur l'utilisation des données personnelles, difficultés à filtrer les propositions non désirées. Ces problématiques ne sont pas anecdotiques. Elles affectent la confiance et la qualité de l'expérience pour tous.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">À cela s'ajoute une superficialité croissante dans les interactions. Le libertinage, réduit parfois à un simple système de matching basé sur des critères physiques, perd une partie de sa richesse. Les rencontres libertines ne se limitent pas à une apparence : elles reposent sur des affinités, des valeurs partagées, une chimie qui dépasse le cadre visuel.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Une plateforme pensée pour tous les profils</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Le libertinage est pluriel. Akoky aussi.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Il n'existe pas un seul libertinage, mais des libertinages. Chaque parcours est unique, chaque couple ou individu a ses propres motivations, ses propres limites, ses propres envies. Akoky a été conçue pour accueillir cette diversité sans hiérarchie ni jugement.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Que vous soyez un couple cherchant à explorer de nouvelles expériences, une femme seule souhaitant évoluer dans un cadre respectueux, un homme célibataire désireux de rencontres authentiques, ou encore des débutants curieux d'un univers qu'ils découvrent, Akoky propose un espace adapté. Nous avons pensé chaque fonctionnalité pour que personne ne se sente exclu ni jugé.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Couples</h3>
              <p className="text-muted-foreground text-sm">Explorer ensemble en toute confiance</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Femmes seules</h3>
              <p className="text-muted-foreground text-sm">Un espace respectueux et protégé</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Hommes seuls</h3>
              <p className="text-muted-foreground text-sm">Authenticité et respect mutuel</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Débutants</h3>
              <p className="text-muted-foreground text-sm">Découvrir à votre rythme</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Confirmés</h3>
              <p className="text-muted-foreground text-sm">Fonctionnalités avancées</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">L'innovation au service de la confiance</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">L'innovation technologique n'a de sens que si elle renforce la confiance entre les membres. Chez Akoky, chaque fonctionnalité a été pensée avec cette exigence en tête. Nous ne développons pas des outils pour impressionner, mais pour résoudre des problématiques réelles.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">La vérification des profils, par exemple, repose sur un système hybride combinant validation humaine et outils techniques. L'objectif : garantir que chaque profil correspond à une personne réelle, tout en respectant la vie privée de nos membres. Cette démarche demande du temps et des ressources, mais elle est essentielle pour limiter les faux comptes et renforcer la confiance au sein de la communauté.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Le live streaming sécurisé permet aux membres de se montrer en temps réel, créant ainsi un lien de confiance immédiat. Contrairement à des photos statiques qui peuvent être trompeuses, le live offre une authenticité difficilement falsifiable. C'est un outil puissant pour briser les barrières et instaurer une relation de transparence dès les premiers échanges.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Akoky aujourd'hui, Akoky demain</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Une ambition européenne, une vision à long terme</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Akoky est aujourd'hui une plateforme en pleine croissance, portée par une communauté qui partage ses valeurs. Mais notre vision ne s'arrête pas là. Nous travaillons à structurer un écosystème complet autour du libertinage moderne, en Europe et au-delà.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Cette ambition passe par plusieurs axes. D'abord, le renforcement de nos partenariats avec les clubs libertins, les organisateurs d'événements et les acteurs du milieu. Akoky n'est pas une plateforme isolée : nous croyons en la collaboration, en la co-construction d'un espace libertin plus sain et plus attractif. Les clubs partenaires bénéficient d'une visibilité accrue et d'outils pour gérer leur communauté de manière professionnelle.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Une invitation, pas une promesse</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Akoky n'est pas une plateforme parfaite. Nous ne prétendons pas avoir toutes les réponses, ni détenir la vérité absolue sur ce que devrait être le libertinage moderne. Nous sommes un projet en construction, porté par des convictions fortes mais conscient de ses limites et de ses marges de progression.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Ce que nous vous proposons, c'est une philosophie. Une manière d'envisager le libertinage qui place le respect, la confiance et la liberté au centre de tout. Une approche où la technologie sert l'humain, où la sécurité n'est pas négociable, où chacun peut évoluer à son rythme sans pression ni jugement.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Si ces valeurs résonnent en vous, si vous aspirez à un espace libertin plus sain, plus moderne, plus respectueux, alors Akoky est fait pour vous. Nous ne vous promettons pas l'impossible. Nous vous invitons simplement à découvrir une communauté qui partage votre vision de la liberté et du consentement.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Vision;
