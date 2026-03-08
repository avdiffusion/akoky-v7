import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import LatestBlogSection from "@/components/blog/LatestBlogSection";

const EXPLORE_CARDS = [
  { href: "/de/libertine-clubs", icon: "🏛️", title: "Partner-Clubs", desc: "Entdecke ausgewählte Einrichtungen in Deutschland und Europa mit detaillierten Profilen, verifizierten Bewertungen und praktischen Informationen.", cta: "Clubs entdecken →" },
  { href: "/de/events", icon: "📅", title: "Events & Abende", desc: "Zugang zu privaten Events, Themenabenden, Wochenenden und organisierten Treffen vertrauenswürdiger Partner in ganz Deutschland.", cta: "Events entdecken →" },
  { href: "/de/libertinismus-anfangen", icon: "🧭", title: "Richtig anfangen", desc: "Leitfäden, Tipps und Orientierung, um die Codes, Praktiken und Umgangsformen moderner Erwachsenenbegegnungen zu verstehen.", cta: "Zu den Guides →" },
];

const UNIVERS_CARDS = [
  { href: "https://legal.akoky.com/confidentialite", icon: "🎭", title: "Vertraulichkeit & Daten", desc: "Deine persönlichen Daten werden durch fortschrittliche Sicherheitsprotokolle geschützt, in Europa gehostet und niemals an Dritte verkauft.", external: true },
  { href: "https://legal.akoky.com/securite", icon: "🛡️", title: "Sicherheit & Diskretion", desc: "Erweiterter Datenschutz und verifizierte Profile für ein sicheres und vertrauliches Erlebnis.", external: true },
  { href: "https://legal.akoky.com/charte", icon: "🤝", title: "Respekt & Wohlwollen", desc: "Eine Community, die auf Einverständnis, gegenseitigem Respekt und einer klaren Ethik basiert.", external: true },
];

const PRESSE_ITEMS = [
  { icon: "📰", title: "Offizielle Mitteilungen", desc: "Pressemitteilungen, Projektpräsentationen und die redaktionelle Vision von AKOKY." },
  { icon: "🎙️", title: "Medien & Partner", desc: "Webpresse, spezialisierte Blogs, Lifestyle-Medien und Community-Medien für Erwachsene." },
  { icon: "📊", title: "Analysen & Vergleiche", desc: "Studien, Rankings und Vergleiche von Community-Plattformen und Dating-Diensten für Erwachsene." },
  { icon: "📚", title: "Professionelle Ressourcen", desc: "Logos, offizielles Bildmaterial und Kommunikationsmaterialien für Medien und Partner." },
  { icon: "🤝", title: "Partnerschaften & Affiliationen", desc: "Partner-Clubs, Organisatoren privater Events und europäische Akteure der Branche." },
  { icon: "🌍", title: "Europäische Reichweite", desc: "Aktive Präsenz in Deutschland, Frankreich, Belgien, Spanien und progressive internationale Entwicklung." },
];

const CONFIANCE_CARDS = [
  { href: "/de/faq", icon: "❓", title: "AKOKY FAQ", desc: "Alle Antworten auf häufige Fragen zur Funktionsweise, den Profilen, Events und der Nutzung von AKOKY." },
  { href: "/de/lexikon", icon: "📘", title: "Lexikon & Codes", desc: "Entdecke die Begriffe, Praktiken und Codes der Erwachsenenbegegnungen — einfach und ohne Urteil erklärt." },
  { href: "/de/libertinismus", icon: "🔥", title: "Begegnungen Heute", desc: "Entdecke, was moderne Praktiken umfassen, ihre Codes und die verschiedenen Möglichkeiten, sie frei zu erkunden." },
  { href: "/de/libertinismus-anfangen", icon: "🧭", title: "Richtig Anfangen", desc: "Leitfäden und Tipps, um dieses Universum in deinem Tempo zu entdecken — allein oder als Paar, in einem respektvollen Rahmen." },
];

const EVENT_CARDS = [
  { title: "Exklusive Abende", desc: "Private Events an den prestigeträchtigsten Orten Deutschlands.", location: "Berlin", count: "80+", img: "/images/event/event1.webp", alt: "Exklusive libertine Abende AKOKY Berlin" },
  { title: "Themen-Wochenenden", desc: "Unvergessliche Ausflüge mit der Community durch ganz Deutschland.", location: "München", count: "60+", img: "/images/event/event2.webp", alt: "Libertine Wochenenden AKOKY München" },
  { title: "Intime Treffen", desc: "Intimere Abende zum besseren Kennenlernen in entspannter Atmosphäre.", location: "Hamburg", count: "40+", img: "/images/event/event3.webp", alt: "Intime Treffen und private Abende AKOKY Hamburg" },
];

const QUICK_ACCESS = [
  { href: "/de/libertine-clubs", icon: "👥", title: "Partner-Clubs", desc: "Entdecke ausgewählte Einrichtungen und Treffpunkte in Deutschland." },
  { href: "/de/events", icon: "📅", title: "Events & Abende", desc: "Zugang zu privaten Events und organisierten Treffen in deiner Nähe." },
  { href: "/de/vip", icon: "💎", title: "VIP werden", desc: "Zugang zu exklusiven Vorteilen und einer Premium-Erfahrung." },
  { href: "/de/blog", icon: "📖", title: "Blog & Tipps", desc: "Leitfäden, Analysen und Neuigkeiten rund um Erwachsenenbegegnungen in Deutschland." },
];

const STATS = [
  { icon: "👥", value: "1,5M Aktive Mitglieder", desc: "Verifizierte Profile, Paare und Singles, die eine respektvolle und bewusste Vision der Erwachsenenbegegnungen teilen." },
  { icon: "🏛️", value: "120 Partner-Clubs", desc: "Ausgewählte Einrichtungen in ganz Europa mit verifizierten Bewertungen und Rückmeldungen der Community." },
  { icon: "📅", value: "300 Events / Monat", desc: "Exklusive Abende und Treffen, organisiert von Clubs und Mitgliedern der Community." },
];

const WHY_CARDS = [
  { icon: "🔒", title: "Sicherheit & Diskretion", desc: "Identitätsverifizierung, kontinuierliche Moderation und absoluter Respekt für deine Privatsphäre. Deine Daten werden niemals geteilt." },
  { icon: "💎", title: "Premium-Qualität", desc: "Mobile App für iOS und Android, erweiterte Funktionen und Zugang zu exklusiven Events in ganz Deutschland." },
  { icon: "🤝", title: "Respektvolle Community", desc: "Klarer Verhaltenskodex, Einverständnis im Mittelpunkt des Austauschs und Begleitung neuer Mitglieder." },
  { icon: "🌍", title: "Europäisches Netzwerk", desc: "Aktive Präsenz in Deutschland, Frankreich, Belgien, Spanien, Italien und Portugal für Begegnungen auf europäischer Ebene." },
];

const FAQ_ITEMS = [
  { q: "Was unterscheidet AKOKY von anderen Plattformen für Erwachsenenbegegnungen?", a: "AKOKY vereint eine Community von über 1,5 Millionen Mitgliedern, ein Verzeichnis verifizierter Partner-Clubs, über 300 organisierte Events pro Monat, einen Mitglieder-exklusiven Austauschbereich und eine vollständige Mobile-App. Die Plattform stellt Ethik und Einverständnis in den Mittelpunkt ihres Funktionierens." },
  { q: "Ist die Registrierung bei AKOKY kostenlos?", a: "Ja, die Registrierung ist vollständig kostenlos. Du kannst dein Profil erstellen, die Plattform erkunden, Partner-Clubs einsehen, Mitgliederbewertungen lesen und auf eine Auswahl von Events zugreifen — ohne Kosten. Das VIP-Abonnement bietet erweiterte Funktionen und exklusive Vorteile." },
  { q: "Ist AKOKY für Anfänger geeignet?", a: "Absolut. AKOKY begleitet neue Mitglieder mit einem Einstiegsleitfaden, einem erklärenden Lexikon, einer ausführlichen FAQ und zahlreichen pädagogischen Ressourcen. Die Community ist wohlwollend und achtet auf den Respekt der Grenzen jeder Person." },
  { q: "Wie finde ich Partner-Clubs in meiner Nähe in Deutschland?", a: "AKOKY stellt ein Verzeichnis von Partner-Clubs mit über 120 Einrichtungen in Deutschland, Frankreich und Europa bereit. Du kannst nach Stadt, Art der Einrichtung (Club, Sauna, privates Etablissement) filtern und verifizierte Bewertungen einsehen. Die Mobile-App ermöglicht Geolokalisierung." },
  { q: "Sind die auf AKOKY angebotenen Events sicher?", a: "Alle auf AKOKY referenzierten Events respektieren einen strengen Verhaltenskodex. Ausdrückliches Einverständnis, Diskretion, Respektierung der Grenzen und aktive Moderation gehören zu den grundlegenden Verpflichtungen der Plattform und ihrer Partner." },
];

const COMPARATIF_LINKS = [
  { href: "/de/akoky-vs-wyylde", label: "vs Wyylde" },
  { href: "/de/beste-libertine-seite", label: "Beste libertine Seite" },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AKOKY",
    url: "https://akoky.com",
    logo: "/images/logo-akoky.webp",
    description: "Premium libertine Community-Plattform in Europa",
    foundingDate: "2014",
    contactPoint: { "@type": "ContactPoint", contactType: "Customer Service", email: "contact@akoky.com", availableLanguage: ["fr", "en", "es", "de", "it", "pt"] },
    sameAs: ["https://www.facebook.com/akokyofficial", "https://www.instagram.com/akoky_official", "https://twitter.com/akoky_official"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AKOKY Deutschland",
    url: "https://akoky.com/de",
    inLanguage: "de",
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

const HomeDe = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <MetaTags
        title="AKOKY Deutschland – Premium Libertine Plattform | Deutschland & Europa"
        description="AKOKY: 1,5M Mitglieder, Premium libertine Clubs, exklusive Events. Die libertine Referenzplattform in Deutschland und Europa. Kostenlose Registrierung."
        canonical="https://akoky.com/de"
        lang="de"
        ogImage="https://akoky.com/images/home2-desktop.webp"
      />
      <HreflangTags />
      <SchemaOrg schema={schemas} />

      <Header lang="de" />

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
              <span>🇩🇪</span><span>Premium Community Deutschland</span>
            </div>
            <h1 className="text-gradient-gold text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider leading-tight mb-4">
              Erwachsenenbegegnungen &amp; exklusive Erlebnisse in Deutschland
            </h1>
            <h2 className="text-lg md:text-xl font-normal text-white/95 mb-8 max-w-[800px] mx-auto">
              Die Premium-Community für aufgeschlossene Menschen — Clubs entdecken und an exklusiven Events teilnehmen, von Berlin bis München, von Hamburg bis Köln.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.akoky.com/register" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                DER COMMUNITY BEITRETEN
              </a>
              <Link to="/de/libertine-clubs" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                CLUBS ENTDECKEN
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SEO INTRO ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container max-w-[900px]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Die Libertine Referenzplattform in Deutschland</h2>
              <p className="text-base md:text-lg leading-8 text-muted-foreground">
                AKOKY etabliert sich als <strong className="text-foreground">das Premium libertine soziale Netzwerk</strong> mit über 1,5 Millionen aktiven Mitgliedern.
                Im Gegensatz zu generalistischen Plattformen bietet AKOKY ein vollständiges Erlebnis, gewidmet dem{" "}
                <Link to="/de/libertinismus" className="text-primary hover:underline">modernen Libertinismus</Link>:
                Verzeichnis der <Link to="/de/libertine-clubs" className="text-primary hover:underline">besten libertinen Clubs</Link> Europas,{" "}
                <Link to="/de/events" className="text-primary hover:underline">exklusive Events</Link> monatlich,{" "}
                <Link to="/de/live" className="text-primary hover:underline">libertine Livestreams</Link> in Echtzeit und{" "}
                <Link to="/de/app" className="text-primary hover:underline">Mobile-App</Link> mit Geolokalisierung.
              </p>
              <p className="text-base md:text-lg leading-8 text-muted-foreground mt-4">
                Ob du <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">Anfänger im Libertinismus</Link>{" "}
                oder erfahrenes Mitglied bist — AKOKY begleitet dich mit <Link to="/de/faq" className="text-primary hover:underline">umfassenden Ressourcen</Link>,
                einem <Link to="/de/lexikon" className="text-primary hover:underline">detaillierten libertinen Lexikon</Link> und einer{" "}
                <Link to="/de/vision" className="text-primary hover:underline">ethischen Charta</Link>, die Einverständnis in den Mittelpunkt jeder Interaktion stellt.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ DAS UNIVERSUM ENTDECKEN ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Entdecke das AKOKY-Universum</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Eine vollständige Community-Plattform für Erwachsene — entdecken, kennenlernen und exklusive Erlebnisse genießen, in deinem Tempo.
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

        {/* ═══════════ DIE AKOKY APP ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">DIE AKOKY APP</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Lade <Link to="/de/app" className="text-primary">die AKOKY-App</Link> herunter, verfügbar auf iOS und Android.
                  Genieße sichere Nachrichten, Geolokalisierung der{" "}
                  <Link to="/de/libertine-clubs" className="text-primary">Partner-Clubs</Link>, Benachrichtigungen für{" "}
                  <Link to="/de/events" className="text-primary">private Events</Link> und einen Mitglieder-exklusiven Austauschbereich.
                </p>
                <ul className="flex flex-col gap-6 mb-8">
                  {[
                    { icon: "💬", label: "Sichere Sofortnachrichten" },
                    { icon: "📍", label: "Geolokalisierung der Clubs" },
                    { icon: "🔔", label: "Echtzeit-Benachrichtigungen" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                      <span className="font-semibold">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/de/app" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  APP HERUNTERLADEN
                </Link>
              </div>
              <div className="text-center">
                <img loading="lazy" src="/images/tel.webp" alt="AKOKY Mobile-App" width="380" height="760" className="w-[380px] mx-auto rounded-3xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ LIVE / KONTINUIERLICHER AUSTAUSCH ═══════════ */}
        <section className="py-20" style={{ background: "linear-gradient(rgb(15, 23, 42), rgb(0, 0, 0))", color: "white" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">LIVE</div>
                    <img loading="lazy" src="/images/live-akoky.webp" alt="AKOKY Live Deutschland" width="600" height="400" className="w-full aspect-video object-cover" />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Exklusiver Abend Berlin</h4>
                      <p className="text-xs text-muted-foreground">Live aus dem Premium Club</p>
                    </div>
                    <div className="text-green-400 font-bold">+420 👀</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full mb-4 font-semibold text-xs">KONTINUIERLICHER MITGLIEDER-ZUGANG</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Kontinuierlicher Austausch zwischen Mitgliedern</h2>
                <p className="text-lg opacity-80 mb-8">
                  Ein jederzeit zugänglicher Raum für freien Austausch in deinem Tempo, innerhalb einer Community, die ausschließlich AKOKY-Mitgliedern vorbehalten ist.
                </p>
                <Link to="/de/live" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  Austauschbereich entdecken
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ UNSERE VISION ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block mb-4 font-bold text-primary tracking-widest text-sm">UNSERE VISION</span>
              <h2 className="text-3xl md:text-4xl font-black">AKOKY, EINE VOLLWERTIGE ERWACHSENEN-COMMUNITY</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mt-6">
                AKOKY entstand aus einer einfachen Überzeugung: Erwachsenenbegegnungen durch eine moderne, sichere, menschliche und respektvolle Plattform neu zu denken — frei von Klischees und den Fehlentwicklungen der Vergangenheit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🌱 Eine natürliche Evolution des Libertinismus</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hervorgegangen aus der Erfahrung AcoquinementVotre, schreibt sich AKOKY in die Kontinuität jahrelanger Beobachtung der libertinen Szene in Deutschland, Frankreich, Belgien und Europa ein.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wo viele Plattformen stagniert haben, bietet AKOKY einen neuen Ansatz: fließender, moderner und auf die reale Erfahrung der Mitglieder ausgerichtet.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🔗 Eine Plattform, die für die Zukunft gebaut ist</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AKOKY ist nicht nur ein Dating-Service. Es ist eine vollständige Architektur, die Mitgliederaustausch, private Events, redaktionelle Inhalte und dedizierte Anwendungen in einem einzigen Ökosystem vereint.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Jede Funktion ist darauf ausgelegt, mit der Community zu wachsen — ohne von Modetrends oder instabilen Algorithmen abhängig zu sein.
                </p>
              </div>
            </div>
            <div className="text-center mt-16">
              <p className="text-xl font-semibold max-w-[900px] mx-auto">
                AKOKY ist eine langfristige Vision des Libertinismus:<br />
                <span className="text-primary">verantwortungsvoller, freier, menschlicher.</span>
              </p>
            </div>
            <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
              <Link to="/de/vision" className="px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                Die AKOKY-Vision entdecken
              </Link>
              <Link to="/de/libertinismus" className="px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                Modernen Libertinismus verstehen
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ DAS AKOKY-UNIVERSUM (Trust) ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black">DAS AKOKY-UNIVERSUM</h2>
              <p className="text-muted-foreground mt-4">Eine vollständige und sichere Plattform zum Kennenlernen, Austauschen und Teilen innerhalb einer Erwachsenen-Community.</p>
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

        {/* ═══════════ PRESSE & MEDIEN ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-primary font-bold tracking-widest mb-4 text-sm">PRESSE &amp; MEDIEN</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  AKOKY, EIN BEOBACHTETER AKTEUR MODERNER ERWACHSENENBEGEGNUNGEN
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AKOKY weckt das Interesse der Medien, digitaler Beobachter und Branchenanalysten durch seinen innovativen, sicheren und entschieden modernen Ansatz.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Community-Plattform, private Events, redaktionelle Inhalte und dedizierte Anwendungen: AKOKY entwickelt ein vollständiges Ökosystem, das regelmäßig in Fach- und allgemeiner Presse analysiert und verbreitet wird.
                </p>
                <Link to="/de/presse" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                  Veröffentlichungen & Pressedossiers ansehen
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

        {/* ═══════════ DAS VERTRAUEN AKOKY ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">DAS VERTRAUEN AKOKY</h2>
              <p className="text-muted-foreground">Verstehen, lernen und Erwachsenenbegegnungen in völliger Gelassenheit erkunden.</p>
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

        {/* ═══════════ KOMMENDE EVENTS ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4 font-semibold text-xs">🇩🇪 KOMMENDE EVENTS</div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">WAS BEI AKOKY DEUTSCHLAND PASSIERT</h2>
              <p className="text-muted-foreground">Nimm an exklusiven Events teil und triff außergewöhnliche Menschen in Deutschland.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EVENT_CARDS.map((event, i) => (
                <Link key={i} to="/de/events" className="group bg-card border border-border rounded-2xl overflow-hidden card-hover-glow">
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

        {/* ═══════════ SO FUNKTIONIERT'S ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">SO FUNKTIONIERT'S</h2>
              <p className="text-muted-foreground">AKOKY beitreten ist einfach und schnell.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Registrierung", desc: <>Erstelle dein Profil kostenlos in 2 Minuten. Füge deine Vorlieben und Fotos hinzu und entdecke <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">die ersten Schritte</Link> in diesem Universum.</> },
                { step: "2", title: "Erkundung", desc: <>Durchstöbere verifizierte Profile, sieh dir unser <Link to="/de/libertine-clubs" className="text-primary hover:underline">Club-Verzeichnis</Link> an und erkunde die <Link to="/de/events" className="text-primary hover:underline">300 monatlichen Events</Link>.</> },
                { step: "3", title: "Begegnung", desc: <>Reserviere deine Plätze für <Link to="/de/events" className="text-primary hover:underline">exklusive Abende</Link>, tausche dich per Nachricht aus und erlebe respektvolle Erfahrungen mit <Link to="/de/vision" className="text-primary hover:underline">Einverständnis</Link>.</> },
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

        {/* ═══════════ SCHNELLZUGANG ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">SCHNELLZUGANG</h2>
              <p className="text-muted-foreground">Erkunde das AKOKY-Universum mit einem Klick</p>
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

        {/* ═══════════ 1,5M MITGLIEDER ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">WERDE TEIL VON 1,5M MITGLIEDERN</h2>
              <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                Eine Premium-Community-Plattform für Erwachsene in Europa. Erstelle dein Profil, erkunde verifizierte Partner-Clubs und nimm an exklusiven Events teil.
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

        {/* ═══════════ WARUM AKOKY WÄHLEN ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">WARUM AKOKY WÄHLEN?</h2>
              <p className="text-muted-foreground text-lg">Die Exzellenz eines Community-Ökosystems für Erwachsene in Europa.</p>
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

        <LatestBlogSection lang="de" />

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-20">
          <div className="container max-w-[900px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Häufig gestellte Fragen</h2>
              <p className="text-muted-foreground">Alles, was du über AKOKY wissen musst</p>
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

        {/* ═══════════ VERGLEICH ═══════════ */}
        <section className="py-12 text-center">
          <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
            Vergleichst du AKOKY mit anderen Plattformen?{" "}
            <Link to="/de/akoky-vs-wyylde" className="text-primary font-semibold hover:underline">
              Entdecke unseren Vergleich AKOKY vs Wyylde
            </Link>.
          </p>
          <div className="max-w-[720px] mx-auto bg-primary/5 border border-primary/20 rounded-2xl px-8 py-8">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Vergleichsguide 2026</p>
            <h2 className="text-xl font-extrabold mb-3">Welche ist die beste libertine Seite in Deutschland?</h2>
            <p className="text-sm text-muted-foreground leading-7 mb-6">
              Wyylde, NousLib, Gleese, JM&nbsp;Libertins, EntreCoquins, SexyLib — alle libertinen Seiten analysiert und verglichen in einem einzigen Guide: Funktionen, Preise, echte Bewertungen und Fake-Profile.
            </p>
            <Link to="/de/beste-libertine-seite" className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-gradient-primary text-primary-foreground font-extrabold text-sm hover:opacity-85 transition-opacity">
              🏆 Vollständiges Ranking 2026 ansehen
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

      <Footer lang="de" />
    </>
  );
};

export default HomeDe;
