import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [];

const BRANDING = [
  { img: "/images/branding/tshirts-akoky-premium.webp", alt: "T-shirts et vêtements Akoky premium avec logo AK" },
  { img: "/images/branding/casquette-akoky-premium.webp", alt: "Casquettes et accessoires Akoky premium avec logo AK" },
  { img: "/images/branding/goodies-akoky-premium.webp", alt: "Goodies Akoky premium avec logo AK" },
  { img: "/images/branding/affiche-akoky-premium.webp", alt: "Supports de communication Akoky avec logo AK" },
];

const Presse = () => (
  <>
    <MetaTags
      title="Presse & Partenariats AKOKY – Kit Média & Contact | AKOKY"
      description="Espace presse AKOKY : dossier média, ressources graphiques, statistiques et contact partenariats. Rejoignez l'écosystème libertin premium européen."
      canonical="https://akoky.com/fr/presse"
      lang="fr"
      ogImage="/images/presse-libertine.webp"
    />
    <HreflangTags slug="presse" />
    <ContentPageLayout
      lang="fr"
      title="Presse & Partenariats AKOKY"
      description="Kit presse, ressources médias et partenariats AKOKY"
      canonical="https://akoky.com/fr/presse"
      heroTitle="Presse & Partenariats"
      heroSubtitle="Espace presse AKOKY : dossier média, statistiques et contact relations médias."
      heroImage="https://akoky.com/images/presse-libertine.webp"
      breadcrumb={[{ label: "Presse & Partenariats" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Akoky, la plateforme libertine premium européenne</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Akoky est bien plus qu'un simple site libertin : c'est une plateforme libertine premium pensée pour structurer et moderniser l'écosystème libertin européen. Née de la volonté de ses fondateurs de proposer une alternative chic, sécurisée et respectueuse aux plateformes libertines traditionnelles, Akoky s'impose aujourd'hui comme un acteur incontourn</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Akoky fédère une communauté de couples, femmes et hommes libertins exigeants, qui recherchent des rencontres authentiques dans un cadre premium. La plateforme propose un annuaire complet des clubs libertins d'Europe, un agenda d'événements privés, des lives exclusifs, ainsi qu'un système de profils certifiés et de messagerie sécurisée via AKOKY Saf</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Au-delà de la plateforme, Akoky développe un véritable écosystème : merchandising, partenariats avec les clubs européens, programme d'affiliation pour les professionnels du milieu, et contenus éditoriaux destinés à valoriser une sexualité libre, décomplexée et respectueuse. C'est cette vision globale qui fait d'Akoky un projet sérieux, structuré et</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Espace Presse & Médias</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">L' espace presse Akoky est dédié aux journalistes, médias, blogueurs et professionnels de la communication souhaitant couvrir l'actualité de la plateforme libertine la plus moderne d'Europe. Vous y trouverez l'ensemble des ressources nécessaires à la rédaction de vos articles et reportages.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Que vous rédigiez un article pour un magazine lifestyle, un dossier pour un média spécialisé, ou que vous souhaitiez interviewer les fondateurs d'Akoky, notre dossier de presse site libertin vous offre toutes les clés pour comprendre notre projet et notre vision.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Disponible en FR, EN, ES, DE, IT, PT</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Affiliation & Partenariats by Akoky</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Rejoignez le programme d'affiliation libertine le plus performant d'Europe</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Le programme d'affiliation Akoky s'adresse aux clubs libertins, organisateurs d'événements privés, médias spécialisés, influenceurs et professionnels du secteur adulte qui souhaitent monétiser leur audience tout en offrant un service de qualité à leur communauté. En devenant partenaire affilié Akoky, vous intégrez un écosystème premium où qualité, </p>
            <p className="text-muted-foreground leading-relaxed mb-3">Vous gérez un club libertin en Europe ? Akoky vous offre une visibilité maximale auprès de milliers de membres VIP actifs. En intégrant notre annuaire premium et notre programme d'affiliation, vous bénéficiez d'un trafic qualifié, de réservations en ligne et de commissions attractives sur chaque abonnement généré.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Écosystème & Données Akoky</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Une plateforme construite sur des fondations solides et structurées</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Akoky ne s'est pas construit en quelques semaines. Derrière la plateforme se cache un travail de fond colossal réalisé par les fondateurs et l'équipe technique : collecte, structuration et mise à jour permanente d'une base de données exhaustive sur l'univers libertin européen. Ce socle de données fiables et vérifiées constitue la colonne vertébrale</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Base de données structurée recensant les clubs libertins d'Europe avec coordonnées vérifiées, horaires d'ouverture, tarifs, photos, avis certifiés et géolocalisation précise. Mise à jour hebdomadaire par notre équipe.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Identité visuelle & Merchandising</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">L'univers visuel Akoky au service de la presse, des partenaires et des événements</p>
            <p className="text-muted-foreground leading-relaxed mb-3">L'identité visuelle d'Akoky a été pensée pour incarner les valeurs de la marque : élégance, modernité, sécurité et excellence. Du logo minimaliste aux codes couleurs soigneusement choisis, chaque élément graphique reflète l'ADN premium de la plateforme.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Au-delà de la plateforme digitale, Akoky développe une gamme complète de produits dérivés destinés aux membres, partenaires et événements : t-shirts, casquettes, goodies exclusifs et supports de communication.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {BRANDING.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={b.img} alt={b.alt} className="w-full h-full object-cover hover:scale-105 transition-transform" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Devenir partenaire Akoky</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Vous êtes un club libertin, un organisateur d'événements, un média spécialisé, une marque lifestyle ou un professionnel du secteur adulte ? Rejoignez l'écosystème Akoky et bénéficiez de la visibilité d'une plateforme libertine premium en pleine croissance.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Contact Presse & Relations Médias</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a href="mailto:presse@akoky.com" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">📩 presse@akoky.com</a>
            <a href="mailto:partenariats@akoky.com" className="border border-border px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors">🤝 partenariats@akoky.com</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Presse;
