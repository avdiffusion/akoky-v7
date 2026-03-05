import ContentPageLayout from "@/components/layout/ContentPageLayout";

const Live = () => (
  <ContentPageLayout
    title="Lives AKOKY – Vidéos & Échanges en Direct Sécurisés | AKOKY"
    description="Lives Akoky : échanges en direct, contenus interactifs et animations communautaires dans un cadre respectueux, sécurisé et réservé aux adultes."
    canonical="https://akoky.com/live"
    heroTitle="Lives Akoky – Vidéos & échanges en direct sécurisés"
    heroSubtitle="Lives Akoky : échanges en direct, contenus interactifs et animations communautaires dans un cadre respectueux, sécurisé et réservé aux adultes."
    heroImage="https://akoky.com/images/live-akoky.webp"
    heroType="cover"
    breadcrumb={[{ label: "Live" }]}
    faq={[
      { question: "Qui peut accéder à AKOKY Live ?", answer: "AKOKY Live est ouvert à tous les membres de la communauté AKOKY. Les membres standards profitent des lives publics, les VIP accèdent aux lives privés et contenus exclusifs." },
      { question: "Les lives sont-ils enregistrés ?", answer: "Non. Les lives ne sont ni enregistrés ni sauvegardés, pour garantir votre confidentialité." },
      { question: "Peut-on interagir en direct ?", answer: "Oui. Un chat en direct permet de discuter pendant le live." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "AKOKY Live", url: "https://akoky.com/live" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">🎭 Bienvenue dans l'Expérience AKOKY Live</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">AKOKY Live n'est pas une énième plateforme de streaming adulte. C'est un <strong>club privé digital</strong> où l'expérience libertine en direct rencontre l'élégance, la sécurité et le respect mutuel. Ici, chaque live est pensé comme un moment de partage authentique, loin des codes vulgaires et opportunistes des plateformes grand public.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">Contrairement aux sites de streaming non modérés où tout est permis sans cadre, AKOKY Live instaure un <strong>environnement contrôlé et bienveillant</strong>. Chaque diffuseur est vérifié, chaque live est supervisé par une modération humaine, et chaque spectateur est invité à respecter une charte de bonne conduite stricte. Le consentement n'est pas une option, c'est le fondement de notre communauté.</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Le Cadre AKOKY Live</h2>
          <p className="text-muted-foreground mb-8">Quatre piliers fondamentaux pour une expérience libertine premium et sécurisée</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🎭", title: "Expérience Immersive", desc: "Vidéo haute définition, son cristallin, interface élégante. Chaque live est conçu pour vous plonger dans une atmosphère sensuelle et raffinée, digne d'un club privé parisien." },
              { icon: "👁️", title: "Modération Humaine", desc: "Une équipe dédiée surveille chaque live en temps réel. Tout comportement déplacé, irrespect ou harcèlement est immédiatement sanctionné. Votre sécurité est notre priorité absolue." },
              { icon: "🤝", title: "Respect & Consentement", desc: "Aucun diffuseur n'est contraint, aucun spectateur n'est autorisé à exiger. Le consentement éclairé et enthousiaste est la règle d'or qui guide chaque interaction sur AKOKY Live." },
              { icon: "🔒", title: "Accès Contrôlé", desc: "AKOKY Live est réservé aux membres vérifiés de la communauté. Chaque inscription est validée manuellement pour garantir un espace sain, sûr et respectueux pour tous." },
            ].map((p, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Les Différents Types de Lives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "💑", title: "Lives Couples", desc: "Des couples libertins partagent leur intimité dans un cadre consenti et élégant. Voyeurisme raffiné et moments complices." },
              { icon: "👤", title: "Lives Solo", desc: "Des performances individuelles sensuelles et artistiques. L'expression personnelle au service de l'érotisme." },
              { icon: "👥", title: "Lives Communautaires", desc: "Plusieurs participants pour des expériences collectives immersives. L'énergie du groupe dans un respect absolu." },
              { icon: "🎉", title: "Lives Événementiels", desc: "Soirées thématiques, événements spéciaux, célébrations exclusives. Des moments uniques retransmis en direct." },
              { icon: "🔐", title: "Lives Privés", desc: "Accès ultra-restreint pour les membres VIP. L'intimité totale avec vos diffuseurs préférés." },
            ].map((t, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-card/50 rounded-2xl border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">Membre Standard</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Accès aux lives publics</li>
              <li>✓ Chat modéré</li>
              <li>✓ Replays sélectionnés</li>
            </ul>
          </div>
          <div className="p-6 bg-card/50 rounded-2xl border border-primary/30">
            <h3 className="text-lg font-bold text-foreground mb-4">Membre VIP</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Tous les lives (publics + privés)</li>
              <li>✓ Replays illimités</li>
              <li>✓ Interactions privilégiées</li>
              <li>✓ Événements exclusifs</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-8"><strong>L'esprit AKOKY :</strong> Aucune obligation, aucune pression. Vous êtes libre de regarder, d'interagir ou simplement d'observer. Chaque expérience est conçue pour respecter vos limites et vos envies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://live.akoky.com/" className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg hover:scale-105 transition-all">🔴 Découvrir AKOKY Live</a>
            <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all">Rejoindre la communauté</a>
          </div>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Live;
