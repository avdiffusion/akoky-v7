import ContentPageLayout from "@/components/layout/ContentPageLayout";

const Parrainage = () => {
  return (
    <ContentPageLayout
      title="Programme de Parrainage AKOKY | Gagnez 6 Mois VIP+ Gratuits"
      description="Parrainez 10 amis et gagnez 6 mois d'abonnement VIP+ offerts sur AKOKY. Programme de parrainage simple, automatique et sans engagement."
      canonical="https://akoky.com/parrainage"
      heroTitle="Invitez. Gagnez. Profitez."
      heroSubtitle="Invitez 10 membres sur Akoky et recevez 6 mois d'abonnement VIP+ offerts."
      heroType="gradient"
      breadcrumb={[{ label: "Parrainage" }]}
      faq={[
        { question: "Comment fonctionne le parrainage AKOKY ?", answer: "Partagez votre pseudo à vos contacts. Ils s'inscrivent en indiquant votre pseudo comme code de parrainage. Dès 10 inscriptions, 6 mois de VIP+ vous sont ajoutés automatiquement." },
        { question: "Faut-il être abonné pour parrainer ?", answer: "Non, pas besoin d'abonnement pour parrainer. Le programme est ouvert à tous les membres AKOKY." },
        { question: "Comment sont ajoutés les mois VIP+ ?", answer: "La récompense est automatique. Dès que 10 personnes se sont inscrites avec votre pseudo, 6 mois de VIP+ sont ajoutés à votre compte sans aucune démarche." },
        { question: "Y a-t-il des conditions cachées ?", answer: "Non. 10 parrainages = 6 mois VIP+. Point. Notre système est transparent et vous savez toujours exactement où vous en êtes grâce au tableau de bord." },
        { question: "Qu'est-ce que le VIP+ offre ?", answer: "Accès complet au live streaming, interactions en direct, accès illimité aux profils vérifiés, messagerie prioritaire, badge VIP+ visible, et accès prioritaire aux événements exclusifs." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Programme de Parrainage AKOKY",
        "description": "Parrainez 10 amis et gagnez 6 mois VIP+ offerts.",
      }}
    >
      {/* Steps */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-display">Comment ça marche ?</h2>
            <p className="text-gray-400 mt-2">✓ Sans engagement • ✓ Sans abonnement requis • ✓ Récompense automatique</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", icon: "📢", title: "Vous en parlez naturellement", desc: "En club, en soirée ou lors d'une discussion entre libertins, vous recommandez Akoky. Vous partagez simplement votre pseudo.", detail: "Pas besoin d'abonnement pour parrainer" },
              { num: "2", icon: "📝", title: "Ils s'inscrivent avec votre pseudo", desc: "Lors de leur inscription, ils indiquent votre pseudo dans le champ prévu comme code de parrainage. Une simple inscription suffit.", detail: "Inscription rapide, sans engagement" },
              { num: "3", icon: "🎁", title: "Vous êtes récompensé", desc: "Dès que 10 personnes se sont inscrites avec votre pseudo, 6 mois d'abonnement VIP+ vous sont ajoutés automatiquement.", detail: "Récompense automatique, sans démarche" },
            ].map((step, idx) => (
              <div key={idx} className="bg-card border border-white/10 p-8 rounded-2xl relative pt-12 hover:border-primary/50 transition-all">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-black font-black text-lg">
                  {step.num}
                </div>
                <div className="text-4xl mb-4 text-center">{step.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center mb-4">{step.desc}</p>
                <div className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-lg text-center">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-3 bg-card border border-primary/30 rounded-full px-8 py-4">
              <span className="text-2xl font-black text-primary">10 Parrainages = 6 MOIS VIP+</span>
            </div>
            <p className="text-gray-500 text-sm mt-4">* Offre valable jusqu'au 31 Décembre 2026</p>
          </div>
        </div>
      </section>

      {/* VIP+ */}
      <section className="py-16 px-4 bg-card/30 border-y border-white/5">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-5xl">👑</span>
            <h2 className="text-3xl font-bold text-white mt-4 font-display">VIP+ — 6 mois offerts</h2>
            <p className="text-gray-400 mt-2">Le VIP+ Akoky : l'accès au Live, sans limites</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Accès complet au live streaming : shows, lives privés et contenus réservés",
              "Interactions en direct : participation aux lives, réactions, échanges privilégiés",
              "Accès illimité aux profils vérifiés et complets",
              "Messagerie prioritaire avec filtres intelligents",
              "Badge VIP+ visible sur votre profil",
              "Accès prioritaire aux événements exclusifs",
              "Support prioritaire et accompagnement personnalisé",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-gray-300">
                <span className="text-primary mt-0.5">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8 text-sm">
            Votre récompense : 6 mois de VIP+ offerts, soit un accès privilégié au live streaming et à l'ensemble des fonctionnalités premium, pour une valeur de plus de <strong className="text-primary">80 €</strong>.
          </p>
        </div>
      </section>

      {/* Pourquoi différent */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10 font-display">Pourquoi Notre Parrainage Est Différent</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "✅", title: "Simple et Clair", desc: "Pas de conditions cachées. 10 parrainages = 6 mois VIP+. Point." },
              { icon: "🔓", title: "Sans Engagement", desc: "Pas besoin d'être abonné. Ouvert à tous les membres AKOKY." },
              { icon: "🤝", title: "Communauté Réelle", desc: "Basé sur les rencontres réelles et les recommandations entre libertins." },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-white/10 p-8 rounded-2xl text-center hover:border-primary/50 transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Parrainage;
