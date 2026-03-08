import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Was ist AKOKYs Mission?", answer: "Der europäischen libertinen Community eine Premium-, sichere und ethische Plattform zu bieten, die Einverständnis, Sicherheit und Authentizität ins Zentrum jeder Interaktion stellt." },
  { question: "Ist AKOKY DSGVO-konform?", answer: "Ja. AKOKY wird von Liberty-Interactive-Ltd betrieben und hält sich strikt an die DSGVO. Datenschutz hat absolute Priorität." },
  { question: "In welchen Ländern ist AKOKY verfügbar?", answer: "AKOKY ist in ganz Europa verfügbar: Frankreich, Spanien, Belgien, Schweiz, Luxemburg, Deutschland, Italien und Portugal." },
];

const VisionDe = () => (
  <>
    <MetaTags
      title="AKOKY | Unsere Vision — Die Evolution des Modernen Libertinismus"
      description="Entdecke AKOKYs Vision: eine moderne, sichere und verantwortungsvolle libertine Plattform. Von AcoquinementVotre zu AKOKY, die Geschichte einer Evolution."
      canonical="https://akoky.com/de/vision"
      lang="de"
    />
    <HreflangTags slug="vision" />
    <ContentPageLayout
      lang="de"
      title="AKOKY | Unsere Vision — Die Evolution des Modernen Libertinismus"
      description="Entdecke AKOKYs Vision: eine moderne, sichere und verantwortungsvolle libertine Plattform."
      canonical="https://akoky.com/de/vision"
      heroTitle="Unsere Vision"
      heroSubtitle="AKOKY wurde aus einer Überzeugung geboren: Moderner Libertinismus verdient eine Plattform auf seinem Niveau."
      heroImage="/images/es-vision-cover.webp"
      breadcrumb={[{ label: "Unsere Vision" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Entstehung einer Vision</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY ist die natürliche Evolution von AcoquinementVotre, einer Pionierplattform des Libertinismus. Im Laufe der Jahre wurde klar, dass die libertine Community mehr als eine einfache Dating-Site verdiente: ein echtes soziales Netzwerk, ein vollständiges Ökosystem, das Treffen, <Link to="/de/events" className="text-primary hover:underline">Events</Link>, <Link to="/de/libertine-clubs" className="text-primary hover:underline">Clubs</Link> und Bildungsinhalte an einem Ort kombiniert.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die AKOKY Werte</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: "🕊️", title: "Gelebte Freiheit", desc: "AKOKY glaubt, dass jeder Erwachsene das Recht hat, seine Sexualität frei zu erkunden, ohne Urteile und ohne Scham." },
              { icon: "🤝", title: "Klares Einverständnis", desc: "Einverständnis ist bei AKOKY kein Detail: Es ist das Fundament von allem. Jede Funktion ist rund um dieses Prinzip aufgebaut." },
              { icon: "🛡️", title: "Verstärkte Sicherheit", desc: "Identitätsverifizierung, menschliche Moderation 24h/7d, Datenverschlüsselung und erweiterte Datenschutzoptionen." },
              { icon: "💡", title: "Technologie im Dienst des Menschen", desc: "Mehrfachprofil, WhatsApp-ähnlicher Chat, Live-Streaming und intelligente Geolokalisierung für authentischere Begegnungen." },
            ].map((v, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{v.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eleganz und Diskretion</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY lehnt Vulgarität ab. Unsere Oberfläche, unsere Sprache und unsere redaktionellen Inhalte spiegeln eine elegante und respektvolle Sicht auf den <Link to="/de/libertinismus" className="text-primary hover:underline">Libertinismus</Link> wider. Sinnlichkeit muss nicht obszön sein. Lies mehr in unserer <Link to="/de/datenschutz" className="text-primary hover:underline">Datenschutzrichtlinie</Link>.</p>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Entdecke AKOKY</h3>
            <p className="text-muted-foreground mb-4">Lade die <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> herunter, werde <Link to="/de/vip" className="text-primary hover:underline">VIP</Link> und tritt der Community bei.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Weiter entdecken</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/app", label: "AKOKY App" },
              { to: "/de/vip", label: "VIP" },
              { to: "/de/libertinismus", label: "Libertinismus" },
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/bewertungen", label: "Bewertungen" },
              { to: "/de/kontakt", label: "Kontakt" },
              { to: "/de/wettbewerb", label: "Wettbewerb" },
            ].map((l, i) => (
              <Link key={i} to={l.to} className="text-sm px-4 py-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VisionDe;
