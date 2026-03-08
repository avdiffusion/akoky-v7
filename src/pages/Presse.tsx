import ContentPageLayout from "@/components/layout/ContentPageLayout";

const Presse = () => (
  <ContentPageLayout
    lang="fr"
    title="Presse & Partenariats – Médias, Clubs & Affiliation | AKOKY"
    description="Médias, clubs libertins et partenaires : rejoignez l'écosystème Akoky. Espace presse, programme d'affiliation et partenariats."
    canonical="https://akoky.com/fr/presse"
    heroTitle="Presse & Partenariats"
    heroSubtitle="Médias, clubs libertins et partenaires : rejoignez l'écosystème Akoky"
    heroImage="/images/presse-libertine.webp"
    breadcrumb={[{ label: "Presse" }]}
    faq={[
      { question: "Qu'est-ce qu'Akoky ?", answer: "Akoky est une plateforme libertine premium européenne dédiée aux rencontres adultes, aux clubs libertins, aux événements privés et aux contenus éditoriaux spécialisés." },
      { question: "À qui s'adresse l'espace presse Akoky ?", answer: "L'espace presse Akoky est destiné aux journalistes, médias spécialisés, blogueurs, influenceurs, clubs libertins et partenaires professionnels." },
      { question: "Akoky propose-t-elle des partenariats ou un programme d'affiliation ?", answer: "Oui. Akoky propose un programme d'affiliation et des partenariats dédiés aux clubs libertins, organisateurs d'événements, médias et professionnels du secteur adulte." },
      { question: "Comment contacter l'équipe presse Akoky ?", answer: "Pour toute demande presse, interview ou partenariat média, l'équipe Akoky est joignable par email à l'adresse presse@akoky.com." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Presse & Partenariats AKOKY", url: "https://akoky.com/fr/presse" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Akoky, la plateforme libertine premium européenne</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Akoky est bien plus qu'un simple site libertin : c'est une plateforme libertine premium pensée pour structurer et moderniser l'écosystème libertin européen. Akoky fédère une communauté de couples, femmes et hommes libertins exigeants, avec un annuaire complet des clubs libertins d'Europe, un agenda d'événements privés, des lives exclusifs, et un système de profils certifiés.</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">📰 Espace Presse & Médias</h2>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li>✓ Communiqués de presse officiels en 6 langues</li>
            <li>✓ Dossiers de presse complets (PDF téléchargeables)</li>
            <li>✓ Visuels haute résolution et logos officiels</li>
            <li>✓ Données statistiques et chiffres clés</li>
            <li>✓ Contact presse et demandes d'interviews</li>
          </ul>
          <a href="https://legal.akoky.com/UPLOAD-AKOKY/PRESSE-AKOKY/press-en.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Voir la presse en ligne →</a>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">🤝 Affiliation & Partenariats by Akoky</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">Rejoignez le programme d'affiliation libertine le plus performant d'Europe</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🏛️", title: "Clubs libertins", desc: "Visibilité maximale auprès de milliers de membres VIP actifs. Trafic qualifié et commissions attractives." },
              { icon: "🎭", title: "Organisateurs d'événements", desc: "Plateforme dédiée pour promouvoir vos événements auprès d'une audience ciblée et engagée." },
              { icon: "📢", title: "Médias & Influenceurs", desc: "Revenus passifs en recommandant Akoky à votre audience. Commissions récurrentes." },
              { icon: "🏢", title: "Partenaires professionnels", desc: "Partenariats stratégiques avec des entreprises partageant nos valeurs de qualité." },
            ].map((p, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Contact presse & Relations médias</h3>
          <p className="text-muted-foreground mb-2">📧 Email : <a href="mailto:presse@akoky.com" className="text-primary hover:underline">presse@akoky.com</a></p>
          <p className="text-muted-foreground">🌐 Web : <a href="https://legal.akoky.com/UPLOAD-AKOKY/PRESSE-AKOKY/press-en.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Espace presse en ligne</a></p>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://affiliate.akoky.com/" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all">Devenir partenaire Akoky</a>
            <a href="https://legal.akoky.com/UPLOAD-AKOKY/PRESSE-AKOKY/press-en.html" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all">Consulter l'espace presse</a>
          </div>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Presse;
