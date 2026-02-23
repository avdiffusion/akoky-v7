import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Akoky = () => {
  // Structure FAQ personnalisée pour Akoky
  const faqAkoky = [
    {
      question: "Qu'est-ce qu'AKOKY et à quoi sert la plateforme ?",
      answer: "AKOKY est une plateforme communautaire adulte premium qui permet aux couples et célibataires de découvrir des clubs, des événements et de faire des rencontres authentiques dans un cadre sécurisé et bienveillant."
    },
    {
      question: "En quoi AKOKY se différencie-t-il des autres plateformes similaires ?",
      answer: "AKOKY se distingue par son approche éthique, sa sécurité renforcée (AKOKY Safe), sa modération humaine 24/7 et son absence de faux profils. Nous privilégions la qualité des rencontres à la quantité."
    },
    {
      question: "Comment AKOKY garantit-il la sécurité et la discrétion des membres ?",
      answer: "Nous utilisons un chiffrement de niveau bancaire, une vérification manuelle des profils, et offrons des options de confidentialité avancées (floutage photo, mode incognito, géolocalisation approximative)."
    },
    {
      question: "L'inscription sur AKOKY est-elle gratuite ?",
      answer: "Oui, l'inscription est gratuite et permet d'accéder aux fonctionnalités de base pour découvrir la communauté."
    },
    {
      question: "Qui peut utiliser AKOKY ?",
      answer: "AKOKY est ouvert à tous les adultes majeurs (18+) respectueux, qu'ils soient en couple ou célibataires, débutants ou expérimentés dans le lifestyle libertin."
    },
    {
      question: "AKOKY propose-t-il des événements adaptés aux débutants ?",
      answer: "Oui, nous proposons de nombreux événements spécialement conçus pour accueillir les nouveaux membres avec bienveillance et pédagogie."
    }
  ];

  const jsonSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AKOKY",
    "url": "https://akoky.com",
    "logo": "https://akoky.com/images/logo-akoky.webp",
    "description": "Plateforme communautaire libertine premium en Europe",
    "foundingDate": "2014",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@akoky.com",
      "availableLanguage": ["fr", "en", "es", "de", "it", "pt"]
    },
    "sameAs": [
      "https://www.facebook.com/akokyofficial",
      "https://www.instagram.com/akoky_official",
      "https://twitter.com/akoky_official"
    ]
  };

  return (
    <ContentPageLayout
      title="À propos d'AKOKY – Communauté adulte premium & événements"
      description="Découvrez l'histoire d'AKOKY : une communauté adulte premium née d'un projet initié en 2014, aujourd'hui structurée autour de clubs partenaires et d'une approche éthique du lifestyle adulte en Europe."
      canonical="https://akoky.com/akoky.html"
      heroTitle="NOTRE MISSION"
      heroSubtitle="L'Application AKOKY : l'expérience communautaire adulte dans votre poche. Issu d'un projet communautaire initié en 2014, AKOKY réinvente les rencontres adultes avec éthique et respect."
      heroImage="/images/hero-home/home2-desktop.webp"
      faq={faqAkoky}
      schema={jsonSchema}
    >
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider text-sm mb-2 block">APPLICATION MOBILE</span>
              <h2 className="text-3xl font-black text-white mb-6 font-display">
                L'expérience communautaire adulte dans votre poche
              </h2>
              <div className="prose prose-invert mb-8">
                <p>
                  Issu d'un projet communautaire initié en 2014 et structuré sous sa forme actuelle depuis 2020, AKOKY développe une application mobile premium disponible sur iOS et Android.
                </p>
                <p>
                  Elle permet à plus de 1,5 million de membres de découvrir des clubs partenaires vérifiés, de suivre des événements privés chaque mois et d'accéder à un écosystème pensé pour les rencontres adultes modernes, fondé sur la discrétion, le respect et une approche éthique du lifestyle.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                  <span>📱</span> Télécharger pour iOS
                </a>
                <a href="#" className="px-6 py-3 border border-white/20 text-white rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                  <span>🤖</span> Télécharger pour Android
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-4">Compatible iOS 13+ | ChromeOS | Android TV</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
              <img src="/images/app-screenshot.webp" alt="AKOKY App Screenshot" className="relative z-10 rounded-2xl shadow-2xl border border-white/10 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-primary tracking-widest mb-12 uppercase">Nos Chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-card/50 rounded-xl border border-white/5">
              <div className="text-4xl font-black text-primary mb-2">1.5M</div>
              <div className="text-sm text-gray-400">Membres actifs</div>
            </div>
            <div className="p-6 bg-card/50 rounded-xl border border-white/5">
              <div className="text-4xl font-black text-primary mb-2">120+</div>
              <div className="text-sm text-gray-400">Clubs partenaires</div>
            </div>
            <div className="p-6 bg-card/50 rounded-xl border border-white/5">
              <div className="text-4xl font-black text-primary mb-2">300+</div>
              <div className="text-sm text-gray-400">Événements / mois</div>
            </div>
            <div className="p-6 bg-card/50 rounded-xl border border-white/5">
              <div className="text-4xl font-black text-primary mb-2">4.7/5</div>
              <div className="text-sm text-gray-400">Note moyenne</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white mb-6">Lexique Libertin Complet</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Maîtrisez le Vocabulaire du Libertinage Moderne. Plus de 200 termes essentiels expliqués simplement.
            </p>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Notre lexique libertin référence plus de 200 termes essentiels pour comprendre le libertinage moderne. De l'échangisme au mélangisme, du candaulisme au triolisme, découvrez les définitions précises de toutes les pratiques libertines. Que vous soyez débutant ou membre confirmé, ce dictionnaire libertin vous permettra de naviguer en toute confiance dans les clubs libertins, lors des événements et sur notre plateforme.</p>
            <p>AKOKY se distingue de Wyylde, NousLibertins, Libertic et SexyLib par son approche pédagogique unique. Notre charte éthique place le consentement explicite, la discrétion absolue et le respect des limites au cœur de chaque interaction.</p>
            <p>Pourquoi ce lexique est unique : Contrairement aux autres plateformes, AKOKY enrichit continuellement son lexique grâce aux retours de la communauté. Nos définitions intègrent les évolutions du libertinage moderne.</p>
          </div>

          <div className="text-center pt-4">
            <Link to="/lexique" className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg">
              Explorer le Lexique Libertin Complet (200+ Termes) <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-12 text-center">Les valeurs fondatrices d'AKOKY</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-white/10">
              <span className="text-4xl font-black text-white/10 mb-4 block">01</span>
              <h3 className="text-xl font-bold text-white mb-4">Authenticité des profils</h3>
              <p className="text-gray-400">AKOKY valorise des profils réels, transparents et cohérents. La sincérité prime sur la mise en scène, afin de favoriser des rencontres authentiques.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-white/10">
              <span className="text-4xl font-black text-white/10 mb-4 block">02</span>
              <h3 className="text-xl font-bold text-white mb-4">Sécurité & Confidentialité</h3>
              <p className="text-gray-400">La plateforme intègre des outils de sécurité avancés, une modération humaine active et une gestion rigoureuse des données personnelles.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-white/10">
              <span className="text-4xl font-black text-white/10 mb-4 block">03</span>
              <h3 className="text-xl font-bold text-white mb-4">Respect & Consentement</h3>
              <p className="text-gray-400">Le consentement explicite, le respect des limites et la tolérance zéro face aux comportements intrusifs constituent le socle de toutes les interactions.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-white/10">
              <span className="text-4xl font-black text-white/10 mb-4 block">04</span>
              <h3 className="text-xl font-bold text-white mb-4">Élégance & Responsabilité</h3>
              <p className="text-gray-400">AKOKY défend une vision raffinée et responsable du lifestyle adulte, en privilégiant la qualité des expériences plutôt que la quantité.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-card to-background">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-6">Sécurité Maximale & Discrétion Garantie</h2>
          <p className="text-primary font-bold uppercase tracking-wider mb-8">La Différence AKOKY</p>
          
          <div className="prose prose-invert prose-lg max-w-none mx-auto text-left bg-black/20 p-8 rounded-2xl">
            <p>Face aux problèmes de faux profils et de fuites de données rencontrés sur d'autres plateformes libertines, AKOKY a développé <strong>AKOKY Safe</strong>, notre système de sécurité propriétaire triple couche.</p>
            <ul className="space-y-4 my-6">
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <span>Chaque profil est vérifié manuellement par notre équipe (humains, pas des bots).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <span>Toutes les données personnelles sont chiffrées end-to-end (norme bancaire AES-256).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <span>Infrastructure conforme RGPD avec hébergement en Europe.</span>
              </li>
            </ul>
            <p>Contrairement à autres sites libertins, AKOKY offre un mode incognito, le floutage photo, et une géolocalisation approximative pour protéger votre vie privée.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center bg-card p-10 rounded-3xl border border-primary/20 shadow-2xl shadow-primary/5">
          <h2 className="text-2xl font-black text-white mb-6">Espace Presse AKOKY</h2>
          <p className="text-gray-300 mb-8">
            Retrouvez ici tous nos communiqués de presse, dossiers médias, visuels officiels et coordonnées pour toute demande journalistique.
          </p>
          <a href="#" className="text-primary font-bold hover:underline">Accéder au dossier de presse →</a>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Akoky;