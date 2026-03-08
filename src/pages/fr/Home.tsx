import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const EXPLORE_CARDS = [
  { href: "/clubbing", icon: "🏛️", title: "Clubs partenaires", desc: "Découvrez des établissements sélectionnés en France et en Europe, avec fiches détaillées et avis vérifiés de la communauté." },
  { href: "/evenements", icon: "📅", title: "Événements exclusifs", desc: "Plus de 300 événements organisés chaque mois dans toute l'Europe. Soirées privées, weekends thématiques et rencontres." },
  { href: "/application", icon: "📱", title: "Application mobile", desc: "Géolocalisation, messagerie instantanée, alertes événements et gestion de profil depuis votre smartphone." },
  { href: "/blog", icon: "📖", title: "Blog & Guides", desc: "Contenus exclusifs, analyses, conseils et actualités pour enrichir votre expérience communautaire." },
  { href: "/libertinage", icon: "🔥", title: "Les Rencontres Aujourd'hui", desc: "Découvrez ce que recouvrent les pratiques modernes, leurs codes et les différentes façons de les explorer librement et sereinement." },
  { href: "/debuter-libertinage", icon: "🧭", title: "Bien Débuter", desc: "Guides et conseils pour découvrir cet univers à votre rythme, seul(e) ou en couple, dans un cadre respectueux et bienveillant." },
];

const EVENT_CARDS = [
  { title: "Soirées Exclusives", desc: "Des événements privés dans les lieux les plus prestigieux.", location: "Paris", count: "120+" },
  { title: "Weekends Thématiques", desc: "Des escapades inoubliables avec la communauté.", location: "Côte d'Azur", count: "80+" },
  { title: "Rencontres Intimes", desc: "Des soirées plus intimistes pour mieux se connaître.", location: "Lyon", count: "40+" },
];

const QUICK_ACCESS = [
  { href: "/clubs", icon: "👥", title: "Clubs partenaires", desc: "Découvrez des établissements sélectionnés et des lieux de rencontres.", gradient: "from-purple-600 to-pink-600" },
  { href: "/evenements", icon: "📅", title: "Événements & soirées", desc: "Accédez à des événements privés et rencontres organisées près de chez vous.", gradient: "from-blue-600 to-cyan-600" },
  { href: "/vip", icon: "💎", title: "Devenir VIP", desc: "Accédez à des privilèges exclusifs et à une expérience premium.", gradient: "from-amber-600 to-orange-600" },
  { href: "/blog", icon: "📖", title: "Blog & conseils", desc: "Guides, analyses et actualités autour des rencontres entre adultes.", gradient: "from-emerald-600 to-teal-600" },
];

const STATS = [
  { icon: "👥", value: "1,5M Membres Actifs", desc: "Profils vérifiés, couples et célibataires partageant une vision respectueuse et assumée des rencontres entre adultes.", gradient: "from-purple-600 to-pink-600" },
  { icon: "🏛️", value: "120 Clubs Partenaires", desc: "Établissements sélectionnés à travers l'Europe, avec avis et retours vérifiés par la communauté.", gradient: "from-blue-600 to-cyan-600" },
  { icon: "📅", value: "300 Événements / Mois", desc: "Soirées et rencontres exclusives organisées par des clubs et des membres de la communauté.", gradient: "from-amber-600 to-orange-600" },
];

const WHY_CARDS = [
  { icon: "🔒", title: "Sécurité & Discrétion", desc: "Vérification d'identité, modération continue et respect absolu de votre vie privée." },
  { icon: "💎", title: "Qualité Premium", desc: "Application mobile iOS et Android, fonctionnalités avancées et accès à des événements exclusifs." },
  { icon: "🤝", title: "Communauté Bienveillante", desc: "Charte éthique claire, consentement au centre des échanges et accompagnement des nouveaux membres." },
  { icon: "🌍", title: "Réseau Européen", desc: "Présence active en France, Belgique et Espagne, pour des rencontres et événements à l'échelle européenne." },
];

const FAQ_ITEMS = [
  {
    q: "Qu'est-ce qui différencie AKOKY des autres plateformes de rencontres entre adultes ?",
    a: "AKOKY réunit une communauté de plus de 1,5 million de membres, un annuaire de clubs partenaires vérifiés, plus de 300 événements organisés chaque mois, un espace d'échange réservé aux membres et une application mobile complète. La plateforme place l'éthique et le consentement au cœur de son fonctionnement.",
  },
  {
    q: "L'inscription sur AKOKY est-elle gratuite ?",
    a: "Oui, l'inscription sur AKOKY est entièrement gratuite. Vous pouvez créer votre profil, explorer la plateforme, consulter les clubs partenaires, lire les avis des membres et accéder à une sélection d'événements sans frais. L'abonnement VIP permet d'accéder à des fonctionnalités avancées et à des avantages exclusifs.",
  },
  {
    q: "AKOKY est-il adapté aux personnes qui débutent ?",
    a: "Absolument. AKOKY accompagne les nouveaux membres avec un guide pour débuter, un lexique explicatif, une FAQ détaillée et de nombreuses ressources pédagogiques. La communauté est bienveillante et attentive au respect des limites de chacun.",
  },
  {
    q: "Comment trouver des clubs partenaires près de chez moi ?",
    a: "AKOKY met à disposition un annuaire de clubs partenaires référençant plus de 120 établissements en France, Belgique et Espagne. Vous pouvez filtrer par ville, type de lieu (club, sauna, établissement privé) et consulter des avis vérifiés. L'application mobile permet également la géolocalisation des établissements.",
  },
  {
    q: "Les événements proposés sur AKOKY sont-ils sécurisés ?",
    a: "Tous les événements référencés sur AKOKY respectent une charte éthique stricte. Le consentement explicite, la discrétion, le respect des limites et une modération active font partie des engagements fondamentaux de la plateforme et de ses partenaires.",
  },
];

const COMPARATIF_LINKS = [
  { href: "/akoky-vs-wyylde", label: "vs Wyylde" },
  { href: "/akoky-vs-nouslib", label: "vs NousLib" },
  { href: "/akoky-vs-gleese", label: "vs Gleese" },
  { href: "/akoky-vs-jmlibertins", label: "vs JM Libertins" },
  { href: "/akoky-vs-entrecoquins", label: "vs EntreCoquins" },
  { href: "/akoky-vs-sexylib", label: "vs SexyLib" },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AKOKY",
    url: "https://akoky.com",
    logo: "https://akoky.com/images/logo-akoky.webp",
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
        canonical="https://akoky.com/"
      />
      <HreflangTags />
      <SchemaOrg schema={schemas} />

      <Header />

      <main>
        {/* HERO */}
        <section
          className="relative min-h-[90vh] md:min-h-[75vh] flex items-center justify-center text-center overflow-hidden pt-[70px]"
          style={{
            backgroundImage: "url('https://legal.akoky.com/UPLOAD-AKOKY/AKOKY.COM/images/hero-home/home2-desktop.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-black/35 to-black/15 z-[1]" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%)" }} />
          {/* Bottom gradient */}
          <div className="absolute left-0 right-0 bottom-0 h-[180px] z-[2] pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(240 20% 4% / 0.4) 45%, hsl(240 20% 4% / 0.8) 75%, hsl(240 20% 4%) 100%)" }} />

          <div className="relative z-[3] max-w-[900px] px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span>✨</span>
              <span>Premium Community</span>
            </div>

            <h1 className="text-gradient-gold text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider leading-tight mb-4">
              Rencontres adultes & expériences exclusives en France
            </h1>

            <h2 className="text-lg md:text-xl font-normal text-white/95 mb-8 max-w-[800px] mx-auto">
              Une communauté premium pour rencontrer des personnes ouvertes d'esprit,
              découvrir des clubs et participer à des événements adultes partout en France.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.akoky.com/register"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                REJOINDRE LA COMMUNAUTÉ
              </a>
              <Link
                to="/fr/clubs-libertins"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all"
              >
                EXPLORER LES CLUBS
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Introduction */}
        <section className="py-20 bg-mid">
          <div className="container max-w-[900px]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">La Plateforme Libertine de Référence en France</h2>
              <p className="text-base md:text-lg leading-8 text-muted-foreground">
                AKOKY s'impose comme <strong className="text-foreground">le réseau social libertin premium</strong> avec plus de 1.5 million de membres actifs.
                Contrairement aux plateformes généralistes, AKOKY offre une expérience complète dédiée au{" "}
                <Link to="/fr/libertinage" className="text-primary hover:underline">libertinage moderne</Link> :
                annuaire des <Link to="/fr/clubs-libertins" className="text-primary hover:underline">meilleurs clubs libertins</Link> d'Europe,{" "}
                <Link to="/fr/evenements" className="text-primary hover:underline">événements exclusifs</Link> mensuels,{" "}
                <Link to="/fr/live" className="text-primary hover:underline">lives libertins</Link> en direct et{" "}
                <Link to="/fr/application" className="text-primary hover:underline">application mobile</Link> avec géolocalisation.
              </p>
              <p className="text-base md:text-lg leading-8 text-muted-foreground mt-4">
                Que vous soyez <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">débutant dans le libertinage</Link>{" "}
                ou membre confirmé, AKOKY vous accompagne avec <a href="https://ask.akoky.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">des ressources complètes</a>,
                un <Link to="/fr/lexique" className="text-primary hover:underline">lexique libertin</Link> détaillé et une{" "}
                <Link to="/fr/vision" className="text-primary hover:underline">charte éthique</Link> qui place le consentement au cœur de chaque interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Explorer l'univers AKOKY */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Explorer l'univers AKOKY</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Une plateforme communautaire adulte complète pour découvrir,
                rencontrer et vivre des expériences exclusives, à votre rythme.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {EXPLORE_CARDS.map((card) => (
                <Link key={card.href} to={card.href} className="group bg-card border border-border rounded-2xl p-8 card-hover-glow relative">
                  <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl mb-5">{card.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
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
                  <div className="h-[200px] bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
                    <span className="text-6xl opacity-50">{["🎭", "🌊", "🕯️"][i]}</span>
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

        {/* How it works */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">COMMENT ÇA MARCHE</h2>
              <p className="text-muted-foreground">Rejoindre AKOKY est simple et rapide.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Inscription", desc: <>Créez votre profil gratuitement en 2 minutes. Ajoutez vos préférences, photos et découvrez <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">les premiers pas</Link> dans cet univers.</> },
                { step: "2", title: "Exploration", desc: <>Parcourez les profils vérifiés, consultez notre <Link to="/fr/clubs-libertins" className="text-primary hover:underline">annuaire des clubs</Link> et explorez les <Link to="/fr/evenements" className="text-primary hover:underline">300 événements mensuels</Link>.</> },
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

        {/* Quick Access */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">ACCÈS RAPIDE</h2>
              <p className="text-muted-foreground">Explorez l'univers Akoky en un seul geste</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {QUICK_ACCESS.map((item) => (
                <Link key={item.href} to={item.href} className="bg-card border border-border rounded-2xl p-8 card-hover-glow">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-xl mb-4`}>{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats / Rejoignez */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">REJOIGNEZ 1,5M DE MEMBRES</h2>
              <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                Une plateforme communautaire adulte premium en Europe.
                Créez votre profil, explorez des clubs partenaires vérifiés
                et participez à des événements exclusifs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {STATS.map((stat) => (
                <div key={stat.value} className="bg-card border border-border rounded-2xl p-8 text-center card-hover-glow">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-xl mx-auto mb-6`}>{stat.icon}</div>
                  <h3 className="font-bold text-lg mb-4">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
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

        {/* FAQ */}
        <section className="py-20">
          <div className="container max-w-[900px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Questions Fréquentes</h2>
              <p className="text-muted-foreground">Tout ce que vous devez savoir sur AKOKY</p>
            </div>
            <div className="flex flex-col gap-6">
              {FAQ_ITEMS.map((faq, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl p-6 cursor-pointer card-hover-glow"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-base md:text-lg">{faq.q}</h3>
                    <span className={`text-primary transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
                  </div>
                  {openFaq === i && (
                    <p className="text-muted-foreground mt-4 leading-7">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparatif */}
        <section className="py-12 text-center">
          <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
            Vous comparez AKOKY à d'autres plateformes ?{" "}
            <Link to="/fr/comparatifs/akoky-vs-wyylde" className="text-primary font-semibold hover:underline">
              Découvrez notre comparatif AKOKY vs Wyylde
            </Link>.
          </p>

          <div className="max-w-[720px] mx-auto bg-primary/5 border border-primary/20 rounded-2xl px-8 py-8">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Guide comparatif 2026</p>
            <h2 className="text-xl font-extrabold mb-3">Quel est le meilleur site libertin en France ?</h2>
            <p className="text-sm text-muted-foreground leading-7 mb-6">
              Wyylde, NousLib, Gleese, JM&nbsp;Libertins, EntreCoquins, SexyLib — tous les sites libertins analysés et comparés dans un seul guide : fonctionnalités, tarifs, avis réels et faux profils.
            </p>
            <Link
              to="/fr/comparatifs/meilleur-site-libertin"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-gradient-primary text-primary-foreground font-extrabold text-sm hover:opacity-85 transition-opacity"
            >
              🏆 Voir le classement complet 2026
            </Link>
            <div className="flex flex-wrap gap-2 justify-center mt-5">
              {COMPARATIF_LINKS.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  className="text-xs text-muted-foreground px-3 py-1.5 border border-border rounded-full hover:border-primary hover:text-primary transition-all"
                >
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
