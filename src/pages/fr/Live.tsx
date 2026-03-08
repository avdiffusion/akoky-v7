import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Qui peut accéder à AKOKY Live ?", answer: "AKOKY Live est ouvert à tous les membres de la communauté. Les membres standards profitent des lives publics, les VIP accèdent aux lives privés et contenus exclusifs." },
  { question: "Les lives sont-ils enregistrés ?", answer: "Non. Les lives ne sont ni enregistrés ni sauvegardés, pour garantir votre confidentialité." },
  { question: "Peut-on interagir en direct ?", answer: "Oui. Un chat en direct permet de discuter pendant le live. Les VIP bénéficient d'interactions privilégiées." },
];

const Live = () => (
  <>
    <HreflangTags slug="live" />
    <ContentPageLayout
      lang="fr"
      title="Lives AKOKY – Vidéos & Échanges en Direct Sécurisés | AKOKY"
      description="Rejoignez les lives libertins AKOKY : streams en direct, échanges authentiques et contenu exclusif dans un espace privé et sécurisé."
      canonical="https://akoky.com/fr/live"
      heroTitle="Lives Akoky – Vidéos & échanges en direct sécurisés"
      heroSubtitle="Un espace privé pour des lives libertins authentiques, modérés et exclusifs."
      heroImage="/images/live-akoky.webp"
      breadcrumb={[{ label: "Lives AKOKY" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Bienvenue dans l'Expérience AKOKY Live</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">AKOKY Live n'est pas une énième plateforme de streaming adulte. C'est un club privé digital où l'expérience libertine en direct rencontre l'élégance, la sécurité et le respect mutuel. Ici, chaque live est pensé comme un moment de partage authentique, loin des codes vulgaires et opportunistes des plateformes grand public.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Contrairement aux sites de streaming non modérés où tout est permis sans cadre, AKOKY Live instaure un environnement contrôlé et bienveillant. Chaque diffuseur est vérifié, chaque live est supervisé par une modération humaine, et chaque spectateur est invité à respecter une charte de bonne conduite stricte. Le consentement n'est pas une option, c'est le fondement de chaque interaction sur notre plateforme.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Le Cadre AKOKY Live</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Quatre piliers fondamentaux pour une expérience libertine premium et sécurisée</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Vidéo haute définition, son cristallin, interface élégante. Chaque live est conçu pour vous plonger dans une atmosphère sensuelle et raffinée, digne d'un club privé parisien.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Une équipe dédiée surveille chaque live en temps réel. Tout comportement déplacé, irrespect ou harcèlement est immédiatement sanctionné. Votre sécurité est notre priorité absolue.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Expérience Immersive</h3>
              <p className="text-muted-foreground text-sm">Vidéo haute définition, son cristallin, interface élégante. Chaque live est conçu pour vous plonger dans une atmosphère sensuelle et raffinée, digne d'un club privé parisien.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Modération Humaine</h3>
              <p className="text-muted-foreground text-sm">Une équipe dédiée surveille chaque live en temps réel. Tout comportement déplacé, irrespect ou harcèlement est immédiatement sanctionné. Votre sécurité est notre priorité absolue.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Respect & Consentement</h3>
              <p className="text-muted-foreground text-sm">Aucun diffuseur n'est contraint, aucun spectateur n'est autorisé à exiger. Le consentement éclairé et enthousiaste est la règle d'or qui guide chaque interaction sur AKOKY Live.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Accès Contrôlé</h3>
              <p className="text-muted-foreground text-sm">AKOKY Live est réservé aux membres vérifiés de la communauté. Chaque inscription est validée manuellement pour garantir un espace sain, sûr et respectueux pour tous.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Les Différents Types de Lives</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Chaque expérience est unique, chaque format répond à des envies différentes</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Des couples libertins partagent leur intimité dans un cadre consenti et élégant. Voyeurisme raffiné et moments complices.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Des performances individuelles sensuelles et artistiques. L'expression personnelle au service de l'érotisme.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Lives Couples</h3>
              <p className="text-muted-foreground text-sm">Des couples libertins partagent leur intimité dans un cadre consenti et élégant. Voyeurisme raffiné et moments complices.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Lives Solo</h3>
              <p className="text-muted-foreground text-sm">Des performances individuelles sensuelles et artistiques. L'expression personnelle au service de l'érotisme.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Lives Communautaires</h3>
              <p className="text-muted-foreground text-sm">Plusieurs participants pour des expériences collectives immersives. L'énergie du groupe dans un respect absolu.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Lives Événementiels</h3>
              <p className="text-muted-foreground text-sm">Soirées thématiques, événements spéciaux, célébrations exclusives. Des moments uniques retransmis en direct.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Lives Privés</h3>
              <p className="text-muted-foreground text-sm">Accès ultra-restreint pour les membres VIP. L'intimité totale avec vos diffuseurs préférés.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Qui peut accéder à AKOKY Live ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">AKOKY Live est ouvert à tous les membres de la communauté AKOKY , mais l'accès aux contenus varie selon votre niveau d'engagement et de vérification. Les membres standards peuvent profiter des lives publics, tandis que les membres VIP accèdent à des contenus exclusifs, des lives privés et des avantages premium.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">L'esprit AKOKY : Aucune obligation, aucune pression. Vous êtes libre de regarder, d'interagir ou simplement d'observer. Chaque expérience est conçue pour respecter vos limites et vos envies. AKOKY Live n'est pas une plateforme de performances sous contrainte, c'est un espace de liberté et de consentement mutuel.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Prêt à Vivre l'Expérience ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Rejoignez des milliers de libertins qui ont choisi AKOKY Live pour vivre leur sensualité en toute sécurité et élégance.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Live;
