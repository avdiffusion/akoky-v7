import ContentPageLayout from "@/components/layout/ContentPageLayout";

const Vip = () => (
  <ContentPageLayout
    title="Statut VIP Akoky – Accès Premium Communauté Libertine | AKOKY"
    description="L'accès premium à la communauté libertine privée la plus sélective d'Europe. Événements exclusifs, albums privés, lives, profils multiples certifiés."
    canonical="https://akoky.com/vip"
    heroTitle="Statut VIP Akoky"
    heroSubtitle="L'accès premium à la communauté libertine privée la plus sélective d'Europe"
    heroImage="https://legal.akoky.com/UPLOAD-AKOKY/AKOKY.COM/images/images-cover-pages/vip-cover.webp"
    breadcrumb={[{ label: "VIP" }]}
    faq={[
      { question: "Qu'est-ce que le statut VIP Akoky ?", answer: "Le statut VIP Akoky est un abonnement site libertin premium qui vous donne accès à l'ensemble des fonctionnalités exclusives de la plateforme : événements privés, lives en direct, albums photos sécurisés, profils multiples certifiés, visibilité renforcée, support prioritaire et réductions partenaires." },
      { question: "Comment activer mon abonnement VIP ?", answer: "Connectez-vous à votre compte Akoky, rendez-vous dans la section \"Abonnement\" et choisissez la formule VIP qui vous convient (mensuel, trimestriel ou annuel). Le paiement est sécurisé et votre statut VIP est activé immédiatement après validation." },
      { question: "Puis-je gérer plusieurs profils avec mon compte VIP ?", answer: "Oui, c'est l'une des fonctionnalités phares du statut VIP. Vous pouvez créer et gérer un profil couple, un profil femme seule et un profil homme seul sous un seul et même abonnement." },
      { question: "Comment Akoky protège-t-il ma vie privée et mes données ?", answer: "Akoky utilise le système AKOKY Safe, un protocole de chiffrement et d'anonymisation des données personnelles. Les paiements sont discrets et aucune mention explicite n'apparaît sur votre relevé bancaire." },
      { question: "Puis-je annuler mon abonnement à tout moment ?", answer: "Oui, vous êtes libre d'annuler votre abonnement VIP à tout moment depuis votre espace personnel. Aucun frais de résiliation n'est appliqué." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Statut VIP Akoky", url: "https://akoky.com/vip" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Pourquoi choisir l'abonnement VIP Akoky ?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Dans l'univers des sites libertins, la qualité de l'expérience dépend directement de la sélectivité de la communauté et du niveau de service proposé. Un <strong>abonnement site libertin</strong> premium comme celui d'Akoky n'est pas simplement un accès payant : c'est une garantie de sécurité, d'authenticité et d'exclusivité.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">Le <strong>statut VIP Akoky</strong> vous distingue en vous offrant un accès privilégié à un cercle privé de membres vérifiés, triés et engagés. Contrairement aux plateformes libertines ouvertes, Akoky a fait le choix d'un <strong>club libertin privé en ligne</strong>, où chaque membre VIP bénéficie d'un environnement premium, discret et respectueux.</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Profils multiples : un seul compte, plusieurs identités</h2>
          <p className="text-primary font-medium mb-6">Fonctionnalité exclusive réservée aux membres VIP+</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "👥", title: "Un seul compte", desc: "Vous n'avez besoin que d'un seul abonnement VIP pour gérer toutes vos identités : couple, femme seule, homme seul." },
              { icon: "🔄", title: "Bascule en un clic", desc: "Changez de profil instantanément selon vos envies et votre contexte, sans déconnexion ni manipulation complexe." },
              { icon: "✅", title: "Certification obligatoire", desc: "Chaque profil créé doit être vérifié par notre équipe. Garantie d'authenticité et de confiance pour tous." },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border text-center">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Pourquoi devenir VIP ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎭", title: "Événements exclusifs", desc: "Accédez aux soirées privées, lives en direct et événements réservés aux membres VIP." },
              { icon: "🔒", title: "Albums privés", desc: "Partagez vos photos intimes en toute discrétion avec des albums privés sécurisés." },
              { icon: "📹", title: "Lives exclusifs", desc: "Participez aux diffusions en direct réservées aux VIP." },
              { icon: "👁️", title: "Visibilité renforcée", desc: "Votre profil apparaît en priorité dans les résultats de recherche." },
              { icon: "🔍", title: "Priorité absolue", desc: "Bénéficiez d'un support client dédié et de fonctionnalités avancées." },
              { icon: "🤝", title: "Réductions partenaires", desc: "Profitez de tarifs préférentiels dans les clubs libertins partenaires d'Akoky." },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Ils ont choisi le statut VIP</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Un vrai changement par rapport aux autres plateformes libertines. Les profils sont vérifiés, les événements sont de qualité, et on se sent enfin dans un environnement sécurisé.", author: "Sophie & Marc, couple VIP" },
              { text: "Les membres sont sérieux et respectueux. J'ai participé à plusieurs événements Akoky et je n'ai jamais été déçue.", author: "Chloé, membre VIP" },
              { text: "J'ai testé plusieurs sites libertins et Akoky sort clairement du lot. Le rapport qualité-prix est excellent.", author: "Thomas, membre VIP" },
            ].map((t, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <p className="text-primary text-sm mb-3">⭐⭐⭐⭐⭐</p>
                <p className="text-muted-foreground text-sm italic mb-4">"{t.text}"</p>
                <p className="text-foreground font-medium text-sm">{t.author}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Prêt à rejoindre l'élite libertine ?</h2>
          <p className="text-muted-foreground text-lg mb-8">Découvrez un club libertin privé en ligne où qualité, sécurité et discrétion sont garanties.</p>
          <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Devenir membre VIP</a>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Vip;
