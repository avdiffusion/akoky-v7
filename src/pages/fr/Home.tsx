import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const EXPLORE_CARDS = [
  { href: "/fr/clubbing", icon: "🏛️", title: "Clubs partenaires", desc: "Découvrez des établissements sélectionnés en France et en Europe, avec fiches détaillées, avis vérifiés et informations pratiques.", cta: "Voir les clubs →" },
  { href: "/fr/evenements", icon: "📅", title: "Événements & soirées", desc: "Accédez à des événements privés, soirées thématiques, week-ends et rencontres organisées par des partenaires de confiance.", cta: "Découvrir les événements →" },
  { href: "/fr/debuter-libertinage", icon: "🧭", title: "Bien débuter", desc: "Guides, conseils et repères pour comprendre les codes, les pratiques et les usages des rencontres adultes modernes.", cta: "Accéder aux guides →" },
];

const UNIVERS_CARDS = [
  { href: "https://legal.akoky.com/confidentialite", icon: "🎭", title: "Confidentialité & Données", desc: "Vos données personnelles sont protégées par des protocoles de sécurité avancés, hébergées en Europe et jamais revendues à des tiers.", external: true },
  { href: "https://legal.akoky.com/securite", icon: "🛡️", title: "Sécurité & Discrétion", desc: "Protection avancée des données et profils vérifiés pour une expérience sereine et confidentielle.", external: true },
  { href: "https://legal.akoky.com/charte", icon: "🤝", title: "Respect & Bienveillance", desc: "Une communauté fondée sur le consentement, le respect mutuel et une éthique claire.", external: true },
];

const PRESSE_ITEMS = [
  { icon: "📰", title: "Dossiers & communiqués", desc: "Communiqués officiels, présentations du projet et vision éditoriale Akoky." },
  { icon: "🎙️", title: "Médias & plateformes partenaires", desc: "Presse web, blogs spécialisés, médias lifestyle et communautaires pour adultes." },
  { icon: "📊", title: "Analyses & comparatifs", desc: "Études, classements et comparaisons de plateformes communautaires et de services de rencontres entre adultes." },
  { icon: "📚", title: "Ressources professionnelles", desc: "Logos, visuels officiels et supports de communication destinés aux médias et partenaires." },
  { icon: "🤝", title: "Partenariats & affiliations", desc: "Clubs partenaires, organisateurs d'événements privés et acteurs européens du secteur." },
  { icon: "🌍", title: "Rayonnement européen", desc: "Présence active en France, Belgique, Espagne et développement progressif à l'international." },
];

const CONFIANCE_CARDS = [
  { href: "/fr/faq", icon: "❓", title: "FAQ Akoky", desc: "Toutes les réponses aux questions fréquentes sur le fonctionnement, les profils, les événements et l'utilisation d'Akoky." },
  { href: "/fr/lexique", icon: "📘", title: "Lexique & Codes", desc: "Découvrez les termes, pratiques et codes des rencontres entre adultes, expliqués simplement et sans jugement." },
  { href: "/fr/libertinage", icon: "🔥", title: "Les Rencontres Aujourd'hui", desc: "Découvrez ce que recouvrent les pratiques modernes, leurs codes et les différentes façons de les explorer librement et sereinement." },
  { href: "/fr/debuter-libertinage", icon: "🧭", title: "Bien Débuter", desc: "Guides et conseils pour découvrir cet univers à votre rythme, seul(e) ou en couple, dans un cadre respectueux et bienveillant." },
];

const EVENT_CARDS = [
  { title: "Soirées Exclusives", desc: "Des événements privés dans les lieux les plus prestigieux.", location: "Paris", count: "120+", img: "/images/event/event1.webp", alt: "Soirées libertines exclusives Akoky" },
  { title: "Weekends Thématiques", desc: "Des escapades inoubliables avec la communauté.", location: "Côte d'Azur", count: "80+", img: "/images/event/event2.webp", alt: "Week-ends libertins et escapades Akoky" },
  { title: "Rencontres Intimes", desc: "Des soirées plus intimistes pour mieux se connaître.", location: "Lyon", count: "40+", img: "/images/event/event3.webp", alt: "Rencontres intimistes et soirées privées Akoky" },
];

const QUICK_ACCESS = [
  { href: "/fr/clubs", icon: "👥", title: "Clubs partenaires", desc: "Découvrez des établissements sélectionnés et des lieux de rencontres." },
  { href: "/fr/evenements", icon: "📅", title: "Événements & soirées", desc: "Accédez à des événements privés et rencontres organisées près de chez vous." },
  { href: "/fr/vip", icon: "💎", title: "Devenir VIP", desc: "Accédez à des privilèges exclusifs et à une expérience premium." },
  { href: "/fr/blog", icon: "📖", title: "Blog & conseils", desc: "Guides, analyses et actualités autour des rencontres entre adultes." },
];

const STATS = [
  { icon: "👥", value: "1,5M Membres Actifs", desc: "Profils vérifiés, couples et célibataires partageant une vision respectueuse et assumée des rencontres entre adultes." },
  { icon: "🏛️", value: "120 Clubs Partenaires", desc: "Établissements sélectionnés à travers l'Europe, avec avis et retours vérifiés par la communauté." },
  { icon: "📅", value: "300 Événements / Mois", desc: "Soirées et rencontres exclusives organisées par des clubs et des membres de la communauté." },
];

const WHY_CARDS = [
  { icon: "🔒", title: "Sécurité & Discrétion", desc: "Vérification d'identité, modération continue et respect absolu de votre vie privée." },
  { icon: "💎", title: "Qualité Premium", desc: "Application mobile iOS et Android, fonctionnalités avancées et accès à des événements exclusifs." },
  { icon: "🤝", title: "Communauté Bienveillante", desc: "Charte éthique claire, consentement au centre des échanges et accompagnement des nouveaux membres." },
  { icon: "🌍", title: "Réseau Européen", desc: "Présence active en France, Belgique et Espagne, pour des rencontres et événements à l'échelle européenne." },
];

const FAQ_ITEMS = [
  { q: "Qu'est-ce qui différencie AKOKY des autres plateformes de rencontres entre adultes ?", a: "AKOKY réunit une communauté de plus de 1,5 million de membres, un annuaire de clubs partenaires vérifiés, plus de 300 événements organisés chaque mois, un espace d'échange réservé aux membres et une application mobile complète. La plateforme place l'éthique et le consentement au cœur de son fonctionnement." },
  { q: "L'inscription sur AKOKY est-elle gratuite ?", a: "Oui, l'inscription sur AKOKY est entièrement gratuite. Vous pouvez créer votre profil, explorer la plateforme, consulter les clubs partenaires, lire les avis des membres et accéder à une sélection d'événements sans frais. L'abonnement VIP permet d'accéder à des fonctionnalités avancées et à des avantages exclusifs." },
  { q: "AKOKY est-il adapté aux personnes qui débutent ?", a: "Absolument. AKOKY accompagne les nouveaux membres avec un guide pour débuter, un lexique explicatif, une FAQ détaillée et de nombreuses ressources pédagogiques. La communauté est bienveillante et attentive au respect des limites de chacun." },
  { q: "Comment trouver des clubs partenaires près de chez moi ?", a: "AKOKY met à disposition un annuaire de clubs partenaires référençant plus de 120 établissements en France, Belgique et Espagne. Vous pouvez filtrer par ville, type de lieu (club, sauna, établissement privé) et consulter des avis vérifiés. L'application mobile permet également la géolocalisation des établissements." },
  { q: "Les événements proposés sur AKOKY sont-ils sécurisés ?", a: "Tous les événements référencés sur AKOKY respectent une charte éthique stricte. Le consentement explicite, la discrétion, le respect des limites et une modération active font partie des engagements fondamentaux de la plateforme et de ses partenaires." },
];

const COMPARATIF_LINKS = [
  { href: "/fr/akoky-vs-wyylde", label: "vs Wyylde" },
  { href: "/fr/akoky-vs-nouslib", label: "vs NousLib" },
  { href: "/fr/akoky-vs-gleese", label: "vs Gleese" },
  { href: "/fr/akoky-vs-jmlibertins", label: "vs JM Libertins" },
  { href: "/fr/akoky-vs-entrecoquins", label: "vs EntreCoquins" },
  { href: "/fr/akoky-vs-sexylib", label: "vs SexyLib" },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AKOKY",
    url: "https://akoky.com",
    logo: "/images/logo-akoky.webp",
    description: "Plateforme communautaire libertine premium en Europe",
    foundingDate: "2014",
    contactPoint: { "@type": "ContactPoint", contactType: "Customer Service", email: "contact@akoky.com", availableLanguage: ["fr", "en", "es", "de", "it", "pt"] },
    sameAs: ["https://www.facebook.com/akokyofficial", "https://www.instagram.com/akoky_official", "https://twitter.com/akoky_official"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AKOKY",
    url: "https://akoky.com",
    potentialAction: { "@type": "SearchAction", target: "https://akoky.com/search?q={search_term_string}", "query-input": "required name=search_term_string" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <MetaTags
        title="AKOKY – Plateforme Libertine Premium | France & Europe"
        description="AKOKY : 1,5M de membres, clubs libertins premium, événements exclusifs. La plateforme libertine de référence en France et Europe. Inscription gratuite."
        canonical="https://akoky.com/fr"
      />
      <HreflangTags />
      <SchemaOrg schema={schemas} />

      <Header />

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section
          className="relative min-h-[90vh] md:min-h-[75vh] flex items-center justify-center text-center overflow-hidden pt-[70px]"
          style={{
            backgroundImage: "url('/images/home2-desktop.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%)" }} />
          <div className="absolute left-0 right-0 bottom-0 h-[180px] z-[2] pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(240 20% 4% / 0.4) 45%, hsl(240 20% 4% / 0.8) 75%, hsl(240 20% 4%) 100%)" }} />

          <div className="relative z-[3] max-w-[900px] px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span>✨</span><span>Premium Community</span>
            </div>
            <h1 className="text-gradient-gold text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider leading-tight mb-4">
              Rencontres adultes &amp; expériences exclusives en France
            </h1>
            <h2 className="text-lg md:text-xl font-normal text-white/95 mb-8 max-w-[800px] mx-auto">
              Une communauté premium pour rencontrer des personnes ouvertes d'esprit, découvrir des clubs et participer à des événements adultes partout en France.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.akoky.com/register" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                REJOINDRE LA COMMUNAUTÉ
              </a>
              <Link to="/fr/clubs" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                EXPLORER LES CLUBS
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SEO INTRO ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container max-w-[900px]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">La Plateforme Libertine de Référence en France</h2>
              <p className="text-base md:text-lg leading-8 text-muted-foreground">
                AKOKY s'impose comme <strong className="text-foreground">le réseau social libertin premium</strong> avec plus de 1.5 million de membres actifs.
                Contrairement aux plateformes généralistes, AKOKY offre une expérience complète dédiée au{" "}
                <Link to="/fr/libertinage" className="text-primary hover:underline">libertinage moderne</Link> :
                annuaire des <Link to="/fr/clubs" className="text-primary hover:underline">meilleurs clubs libertins</Link> d'Europe,{" "}
                <Link to="/fr/evenements" className="text-primary hover:underline">événements exclusifs</Link> mensuels,{" "}
                <Link to="/fr/live" className="text-primary hover:underline">lives libertins</Link> en direct et{" "}
                <Link to="/fr/application" className="text-primary hover:underline">application mobile</Link> avec géolocalisation.
              </p>
              <p className="text-base md:text-lg leading-8 text-muted-foreground mt-4">
                Que vous soyez <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">débutant dans le libertinage</Link>{" "}
                ou membre confirmé, AKOKY vous accompagne avec <Link to="/fr/faq" className="text-primary hover:underline">des ressources complètes</Link>,
                un <Link to="/fr/lexique" className="text-primary hover:underline">lexique libertin</Link> détaillé et une{" "}
                <Link to="/fr/vision" className="text-primary hover:underline">charte éthique</Link> qui place le consentement au cœur de chaque interaction.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ EXPLORER L'UNIVERS ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Explorer l'univers AKOKY</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Une plateforme communautaire adulte complète pour découvrir, rencontrer et vivre des expériences exclusives, à votre rythme.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EXPLORE_CARDS.map((card) => (
                <Link key={card.href} to={card.href} className="group bg-card border border-border rounded-2xl p-8 card-hover-glow relative">
                  <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl mb-5">{card.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  <span className="text-primary font-bold text-sm mt-3 inline-block">{card.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ L'APPLICATION AKOKY ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">L'APPLICATION AKOKY</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Téléchargez <Link to="/fr/application" className="text-primary">l'application AKOKY</Link>, disponible sur iOS et Android.
                  Profitez d'une messagerie sécurisée, de la géolocalisation des{" "}
                  <Link to="/fr/clubs" className="text-primary">clubs partenaires</Link>, de notifications pour les{" "}
                  <Link to="/fr/evenements" className="text-primary">événements privés</Link> et d'un espace d'échange réservé aux membres.
                </p>
                <ul className="flex flex-col gap-6 mb-8">
                  {[
                    { icon: "💬", label: "Messagerie instantanée sécurisée" },
                    { icon: "📍", label: "Géolocalisation des clubs" },
                    { icon: "🔔", label: "Notifications en temps réel" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                      <span className="font-semibold">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/fr/application" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  TÉLÉCHARGER L'APP
                </Link>
              </div>
              <div className="text-center">
                <img loading="lazy" src="/images/tel.webp" alt="App Akoky" width="380" height="760" className="w-[380px] mx-auto rounded-3xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ LIVE / ÉCHANGES CONTINUS ═══════════ */}
        <section className="py-20" style={{ background: "linear-gradient(rgb(15, 23, 42), rgb(0, 0, 0))", color: "white" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">LIVE</div>
                    <img loading="lazy" src="/images/live-akoky.webp" alt="Live Preview" width="600" height="400" className="w-full aspect-video object-cover" />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Soirée Exclusive Paris</h4>
                      <p className="text-xs text-muted-foreground">En direct du Club Le Glamour</p>
                    </div>
                    <div className="text-green-400 font-bold">+420 👀</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full mb-4 font-semibold text-xs">ACCÈS MEMBRES CONTINU</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Échanges continus entre membres</h2>
                <p className="text-lg opacity-80 mb-8">
                  Un espace accessible à tout moment pour échanger librement, à votre rythme, au sein d'une communauté réservée aux membres Akoky.
                </p>
                <Link to="/fr/live" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  Découvrir l'espace d'échange
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ NOTRE VISION ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block mb-4 font-bold text-primary tracking-widest text-sm">NOTRE VISION</span>
              <h2 className="text-3xl md:text-4xl font-black">AKOKY, UNE COMMUNAUTÉ ADULTE À PART ENTIÈRE</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mt-6">
                Akoky est né d'une conviction simple : repenser les rencontres entre adultes à travers une plateforme moderne, sécurisée, humaine et respectueuse, affranchie des clichés et des dérives d'hier.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🌱 Une évolution naturelle du libertinage</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Issu de l'expérience AcoquinementVotre, Akoky s'inscrit dans la continuité d'années d'observation du milieu libertin en France, Belgique et Europe.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Là où de nombreuses plateformes se sont figées, Akoky propose une nouvelle approche : plus fluide, plus moderne, et centrée sur l'expérience réelle des membres.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🔗 Une plateforme pensée pour durer</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Akoky n'est pas un simple service de rencontres. C'est une architecture complète qui réunit échanges entre membres, événements privés, contenus éditoriaux et applications dédiées, au sein d'un même écosystème.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque fonctionnalité est conçue pour évoluer avec la communauté, sans dépendre des effets de mode ni d'algorithmes instables.
                </p>
              </div>
            </div>
            <div className="text-center mt-16">
              <p className="text-xl font-semibold max-w-[900px] mx-auto">
                Akoky, c'est une vision long terme du libertinage :<br />
                <span className="text-primary">plus responsable, plus libre, plus humaine.</span>
              </p>
            </div>
            <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
              <Link to="/fr/vision" className="px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                Découvrir la vision Akoky
              </Link>
              <Link to="/fr/libertinage" className="px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                Comprendre le libertinage moderne
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ L'UNIVERS AKOKY (Trust) ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black">L'UNIVERS AKOKY</h2>
              <p className="text-muted-foreground mt-4">Une plateforme complète et sécurisée pour rencontrer, échanger et partager au sein d'une communauté adulte.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {UNIVERS_CARDS.map((card) => (
                <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-2xl p-8 card-hover-glow relative block">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground">{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PRESSE & MÉDIAS ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-primary font-bold tracking-widest mb-4 text-sm">PRESSE &amp; MÉDIAS</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ whiteSpace: "pre-line" }}>
                  AKOKY, UN ACTEUR OBSERVÉ DES RENCONTRES ADULTES MODERNES
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Akoky suscite l'intérêt des médias, des observateurs du numérique et des analystes du secteur pour son approche innovante, sécurisée et résolument moderne.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Plateforme communautaire, événements privés, contenus éditoriaux et applications dédiées : Akoky développe un écosystème complet, régulièrement analysé et relayé dans la presse spécialisée comme généraliste.
                </p>
                <Link to="/fr/presse" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                  Voir les parutions &amp; dossiers presse
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRESSE_ITEMS.map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ LA CONFIANCE AKOKY ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">LA CONFIANCE AKOKY</h2>
              <p className="text-muted-foreground">Comprendre, apprendre et explorer les rencontres entre adultes en toute sérénité.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONFIANCE_CARDS.map((card) => (
                <Link key={card.href} to={card.href} className="bg-card border border-border rounded-2xl p-8 card-hover-glow relative">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ÉVÉNEMENTS À VENIR ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4 font-semibold text-xs">✨ ÉVÉNEMENTS À VENIR</div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">CE QUI SE PASSE SUR AKOKY</h2>
              <p className="text-muted-foreground">Rejoignez des événements exclusifs et rencontrez des personnes exceptionnelles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EVENT_CARDS.map((event, i) => (
                <Link key={i} to="/fr/evenements" className="group bg-card border border-border rounded-2xl overflow-hidden card-hover-glow">
                  <div className="h-[200px] overflow-hidden">
                    <img loading="lazy" src={event.img} alt={event.alt} width="400" height="200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{event.desc}</p>
                    <div className="flex justify-between text-xs text-primary font-bold">
                      <span>📍 {event.location}</span>
                      <span>👥 {event.count}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COMMENT ÇA MARCHE ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">COMMENT ÇA MARCHE</h2>
              <p className="text-muted-foreground">Rejoindre AKOKY est simple et rapide.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Inscription", desc: <>Créez votre profil gratuitement en 2 minutes. Ajoutez vos préférences, photos et découvrez <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">les premiers pas</Link> dans cet univers.</> },
                { step: "2", title: "Exploration", desc: <>Parcourez les profils vérifiés, consultez notre <Link to="/fr/clubs" className="text-primary hover:underline">annuaire des clubs</Link> et explorez les <Link to="/fr/evenements" className="text-primary hover:underline">300 événements mensuels</Link>.</> },
                { step: "3", title: "Rencontre", desc: <>Réservez vos places pour les <Link to="/fr/evenements" className="text-primary hover:underline">soirées exclusives</Link>, échangez via la messagerie et vivez des expériences respectueuses du <Link to="/fr/vision" className="text-primary hover:underline">consentement</Link>.</> },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full icon-box-primary flex items-center justify-center text-xl font-bold mx-auto mb-6 text-primary-foreground">{item.step}</div>
                  <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ACCÈS RAPIDE ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">ACCÈS RAPIDE</h2>
              <p className="text-muted-foreground">Explorez l'univers Akoky en un seul geste</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {QUICK_ACCESS.map((item) => (
                <Link key={item.href} to={item.href} className="bg-card border border-border rounded-2xl p-8 card-hover-glow">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ REJOIGNEZ 1,5M ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">REJOIGNEZ 1,5M DE MEMBRES</h2>
              <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                Une plateforme communautaire adulte premium en Europe. Créez votre profil, explorez des clubs partenaires vérifiés et participez à des événements exclusifs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {STATS.map((stat) => (
                <div key={stat.value} className="bg-card border border-border rounded-2xl p-8 text-center card-hover-glow">
                  <div className="text-3xl mx-auto mb-6">{stat.icon}</div>
                  <h3 className="font-bold text-lg mb-4">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ POURQUOI CHOISIR ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">POURQUOI CHOISIR AKOKY ?</h2>
              <p className="text-muted-foreground text-lg">L'excellence d'un écosystème communautaire adulte en Europe.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {WHY_CARDS.map((card) => (
                <div key={card.title} className="bg-card border border-border rounded-2xl p-8 card-hover-glow">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-3">
                    <span className="text-3xl">{card.icon}</span> {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-7">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LatestBlogSection lang="fr" />

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-20">
          <div className="container max-w-[900px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Questions Fréquentes</h2>
              <p className="text-muted-foreground">Tout ce que vous devez savoir sur AKOKY</p>
            </div>
            <div className="flex flex-col gap-6">
              {FAQ_ITEMS.map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 cursor-pointer card-hover-glow" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-base md:text-lg">{faq.q}</h3>
                    <span className={`text-primary transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
                  </div>
                  {openFaq === i && <p className="text-muted-foreground mt-4 leading-7">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COMPARATIF ═══════════ */}
        <section className="py-12 text-center">
          <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
            Vous comparez AKOKY à d'autres plateformes ?{" "}
            <Link to="/fr/akoky-vs-wyylde" className="text-primary font-semibold hover:underline">
              Découvrez notre comparatif AKOKY vs Wyylde
            </Link>.
          </p>
          <div className="max-w-[720px] mx-auto bg-primary/5 border border-primary/20 rounded-2xl px-8 py-8">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Guide comparatif 2026</p>
            <h2 className="text-xl font-extrabold mb-3">Quel est le meilleur site libertin en France ?</h2>
            <p className="text-sm text-muted-foreground leading-7 mb-6">
              Wyylde, NousLib, Gleese, JM&nbsp;Libertins, EntreCoquins, SexyLib — tous les sites libertins analysés et comparés dans un seul guide : fonctionnalités, tarifs, avis réels et faux profils.
            </p>
            <Link to="/fr/meilleur-site-libertin" className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-gradient-primary text-primary-foreground font-extrabold text-sm hover:opacity-85 transition-opacity">
              🏆 Voir le classement complet 2026
            </Link>
            <div className="flex flex-wrap gap-2 justify-center mt-5">
              {COMPARATIF_LINKS.map((c) => (
                <Link key={c.href} to={c.href} className="text-xs text-muted-foreground px-3 py-1.5 border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
