import ContentPageLayout from "@/components/layout/ContentPageLayout";

const Avis = () => {
  return (
    <ContentPageLayout
      title="Avis AKOKY – Témoignages vérifiés et retours d'expérience des membres"
      description="Découvrez des avis authentiques et vérifiés de membres AKOKY. Témoignages réels sur l'expérience, les événements, les clubs partenaires et l'abonnement premium."
      canonical="https://akoky.com/avis"
      heroTitle="Avis Membres AKOKY – Témoignages vérifiés"
      heroSubtitle="Découvrez plus de 60 témoignages authentiques de la communauté libertine AKOKY, plateforme communautaire de rencontres libertines en Europe"
      heroImage="https://legal.akoky.com/UPLOAD-AKOKY/AKOKY.COM/images/images-cover-pages/jeux-cover.webp"
      breadcrumb={[{ label: "Avis" }]}
      faq={[
        { question: "Les avis AKOKY sont-ils authentiques et vérifiés ?", answer: "Oui, 100% de nos avis sont authentiques et vérifiés. Chaque témoignage provient d'un membre actif de notre communauté et est contrôlé par notre équipe de modération avant publication." },
        { question: "Quelle est la note moyenne d'AKOKY ?", answer: "AKOKY obtient une note moyenne de 4.7/5 basée sur plus de 60 avis vérifiés de membres. Cette note nous place parmi les meilleures plateformes libertines d'Europe." },
        { question: "Comment puis-je laisser un avis sur AKOKY ?", answer: "Si vous êtes membre actif d'AKOKY, vous pouvez partager votre témoignage en contactant notre équipe via la page contact. Les meilleurs avis peuvent vous faire gagner jusqu'à 12 mois d'abonnement premium gratuit." },
        { question: "Puis-je gagner un abonnement en laissant un avis ?", answer: "Oui ! Les témoignages authentiques et détaillés peuvent vous faire gagner jusqu'à 12 mois d'abonnement premium AKOKY." },
        { question: "AKOKY est-il mieux noté que Wyylde ou NousLibertins ?", answer: "Avec une note de 4.7/5, AKOKY se positionne comme l'une des plateformes libertines les mieux notées d'Europe, devant des acteurs comme Wyylde, NousLibertins, Libertic ou SexyLib." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Avis AKOKY – Témoignages vérifiés",
        "description": "Découvrez des avis authentiques et vérifiés de membres AKOKY.",
      }}
    >
      {/* Stats */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-display">Pourquoi les avis AKOKY sont-ils importants ?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Dans l'univers des plateformes libertines, la transparence et l'authenticité sont essentielles. Contrairement aux sites de rencontres classiques, AKOKY mise sur une communauté de qualité plutôt que sur la quantité. Chaque avis publié sur cette page provient d'un membre vérifié ayant réellement participé à nos événements libertins ou utilisé nos services premium.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <span className="text-4xl mb-4 block">⭐</span>
              <span className="text-5xl font-black text-primary block">4.7</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Note moyenne</span>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">🧾</span>
              <span className="text-5xl font-black text-primary block">60+</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Avis vérifiés</span>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">✅</span>
              <span className="text-5xl font-black text-primary block">100%</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Avis authentiques</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Témoignage */}
      <section className="py-16 px-4 bg-card/30 border-y border-white/5">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Partagez votre expérience AKOKY et gagnez jusqu'à 12 mois VIP</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Vous êtes membre de notre communauté libertine ? Votre témoignage est précieux et peut vous faire gagner jusqu'à <strong className="text-white">12 mois d'abonnement premium</strong>.
          </p>
          <a href="https://app.akoky.com/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all">
            👉 Je souhaite poster un témoignage
          </a>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Avis;
