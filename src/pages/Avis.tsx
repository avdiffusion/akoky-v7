import ContentPageLayout from "@/components/layout/ContentPageLayout";
import ReviewsList from "@/components/reviews/ReviewsList";
import { Link } from "react-router-dom";

const Avis = () => {
  return (
    <ContentPageLayout
      title="Avis AKOKY – Témoignages vérifiés et retours d'expérience des membres"
      description="Découvrez des avis authentiques et vérifiés de membres AKOKY. Témoignages réels sur l'expérience, les événements, les clubs partenaires et l'abonnement premium."
      canonical="https://akoky.com/fr/avis"
      heroTitle="Avis Membres AKOKY – Témoignages vérifiés"
      heroSubtitle="Découvrez plus de 60 témoignages authentiques de la communauté libertine AKOKY, plateforme communautaire de rencontres libertines en Europe"
      heroImage="/images/jeux-cover.webp"
      breadcrumb={[{ label: "Avis" }]}
      faq={[
        { question: "Les avis AKOKY sont-ils authentiques et vérifiés ?", answer: "Oui, 100% de nos avis sont authentiques et vérifiés. Chaque témoignage provient d'un membre actif de notre communauté et est contrôlé par notre équipe de modération avant publication. Contrairement à certaines plateformes concurrentes, nous ne publions jamais de faux avis ou de témoignages sponsorisés. Notre engagement : une transparence totale pour construire une communauté libertine de confiance." },
        { question: "Quelle est la note moyenne d'AKOKY ?", answer: "AKOKY obtient une note moyenne de 4.7/5 basée sur plus de 60 avis vérifiés de membres. Cette évaluation reflète la satisfaction globale de notre communauté concernant la qualité de la plateforme, la sécurité lors des événements, l'ambiance dans les clubs partenaires et le respect du consentement. Cette note nous place parmi les meilleures plateformes libertines d'Europe, devant des acteurs comme Libertic et SexyLib." },
        { question: "Comment puis-je laisser un avis sur AKOKY ?", answer: "Si vous êtes membre actif d'AKOKY, vous pouvez partager votre témoignage en contactant notre équipe via la page contact. Nous privilégions les avis détaillés qui abordent votre expérience réelle : ambiance lors des soirées, qualité des rencontres, facilité d'utilisation de l'application mobile, et respect des règles de consentement. Les meilleurs avis peuvent vous faire gagner jusqu'à 12 mois d'abonnement premium gratuit." },
        { question: "Puis-je gagner un abonnement en laissant un avis ?", answer: "Oui ! Les témoignages authentiques et détaillés peuvent vous faire gagner jusqu'à 12 mois d'abonnement premium AKOKY. Nous récompensons les membres qui prennent le temps de partager leur expérience de manière constructive et honnête. Que vous soyez débutant dans le libertinage ou membre confirmé, votre avis compte et aide à améliorer continuellement notre plateforme et nos services." },
        { question: "AKOKY est-il mieux noté que Wyylde ou NousLibertins ?", answer: "Avec une note de 4.7/5, AKOKY se positionne comme l'une des plateformes libertines les mieux notées d'Europe. Notre approche premium, axée sur la qualité plutôt que la quantité, nous distingue de concurrents comme Wyylde, NousLibertins, Libertic ou SexyLib. Nos membres apprécient particulièrement la modération stricte, la vérification des profils, l'organisation d'événements exclusifs et notre vision éthique du libertinage moderne." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Avis AKOKY – Témoignages vérifiés",
        "description": "Découvrez des avis authentiques et vérifiés de membres AKOKY.",
      }}
    >
      {/* Intro SEO */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Pourquoi les avis AKOKY sont-ils importants ?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Dans l'univers des <Link to="/fr/libertinage" className="text-primary hover:underline">plateformes libertines</Link>, la transparence et l'authenticité sont essentielles. Contrairement aux sites de rencontres classiques ou aux concurrents comme Wyylde et NousLibertins, AKOKY mise sur une communauté de qualité plutôt que sur la quantité. Notre <Link to="/fr/guide-libertin" className="text-primary hover:underline">guide libertin</Link> accompagne chaque membre dans sa découverte. Chaque avis publié sur cette page provient d'un membre vérifié ayant réellement participé à nos <Link to="/fr/evenements" className="text-primary hover:underline">événements libertins</Link> ou utilisé nos services premium.</p>
            <p>Nos témoignages couvrent tous les aspects de l'expérience AKOKY : l'ambiance dans les <Link to="/fr/clubbing" className="text-primary hover:underline">clubs libertins partenaires</Link>, la qualité de notre <Link to="/fr/application" className="text-primary hover:underline">application mobile</Link>, le respect du consentement lors des soirées, la modération de la communauté et les avantages de l'<Link to="/fr/vip" className="text-primary hover:underline">adhésion VIP</Link>. Ces retours d'expérience permettent aux nouveaux membres de mieux comprendre notre philosophie et de rejoindre une <Link to="/fr/clubs-echangistes-france" className="text-primary hover:underline">communauté libertine</Link> éthique et bienveillante.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <span className="text-4xl mb-4 block">⭐</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">★★★★★</span>
              <span className="text-5xl font-black text-primary block">4.7</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Note moyenne</span>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">🧾</span>
              <span className="text-5xl font-black text-primary block">60+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">avis vérifiés</span>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">✅</span>
              <span className="text-5xl font-black text-primary block">100%</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Avis authentiques</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews from CSV */}
      <ReviewsList lang="fr" />

      {/* CTA Témoignage */}
      <section className="py-16 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Partagez votre expérience AKOKY et gagnez jusqu'à 12 mois VIP</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Vous êtes membre de notre communauté libertine ? Votre témoignage est précieux et peut vous faire gagner jusqu'à <strong className="text-foreground">12 mois d'abonnement premium</strong>. Partagez votre expérience authentique sur nos <Link to="/fr/evenements" className="text-primary hover:underline">soirées libertines</Link>, notre <Link to="/fr/application" className="text-primary hover:underline">application</Link> ou les <Link to="/fr/clubs" className="text-primary hover:underline">établissements partenaires</Link>, et aidez la communauté AKOKY à grandir dans la bienveillance et le respect.
          </p>
          <a href="https://akoky.com/fr/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
            👉 Je souhaite poster un témoignage
          </a>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Avis;
