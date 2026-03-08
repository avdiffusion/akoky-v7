import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Ist das Empfehlungsprogramm kostenlos?", answer: "Ja. Die Teilnahme am Empfehlungsprogramm ist für alle AKOKY-Mitglieder völlig kostenlos." },
  { question: "Wann werden die Vorteile vergeben?", answer: "Vorteile werden automatisch vergeben, wenn das neue Mitglied sein Konto mit deinem Empfehlungslink aktiviert." },
  { question: "Gibt es ein Limit bei Empfehlungen?", answer: "Nein. Du kannst so viele Personen einladen wie du möchtest." },
];

const WerbungDe = () => (
  <>
    <MetaTags
      title="AKOKY Empfehlungsprogramm | Freunde Einladen und Vorteile Gewinnen"
      description="Lade deine Freunde zu AKOKY ein und gewinne exklusive Vorteile: VIP-Zugang, kostenlose Events und mehr."
      canonical="https://akoky.com/de/empfehlung"
      lang="de"
    />
    <HreflangTags slug="empfehlung" />
    <ContentPageLayout
      lang="de"
      title="AKOKY Empfehlungsprogramm | Freunde Einladen und Vorteile Gewinnen"
      description="Lade deine Freunde zu AKOKY ein und gewinne exklusive Vorteile."
      canonical="https://akoky.com/de/empfehlung"
      heroTitle="AKOKY Empfehlungsprogramm"
      heroSubtitle="Freunde einladen, exklusive Vorteile gewinnen und deine Community wachsen lassen."
      heroImage="/images/es-parrainage-cover.webp"
      breadcrumb={[{ label: "Empfehlungsprogramm" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Wie Funktioniert Das Empfehlungsprogramm?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Das AKOKY-Empfehlungsprogramm belohnt dich dafür, die Community wachsen zu lassen. Jedes neue Mitglied, das sich mit deinem Link registriert, gibt dir Anspruch auf exklusive Vorteile: kostenlose <Link to="/de/vip" className="text-primary hover:underline">VIP-Tage</Link>, bevorzugten Zugang zu <Link to="/de/events" className="text-primary hover:underline">Events</Link> und vieles mehr.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Deine Vorteile</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: "💎", title: "Kostenlose VIP-Tage", desc: "Für jeden Freund, der sich registriert, erhältst du kostenlose VIP-Abonnementtage." },
              { icon: "🎉", title: "Bevorzugter Event-Zugang", desc: "Die besten Empfehlenden erhalten Zugang zu AKOKYs exklusivsten Events." },
              { icon: "🏅", title: "Empfehlungs-Badge", desc: "Ein spezielles Badge auf deinem Profil als Anerkennung deines Beitrags zur Community." },
            ].map((v, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border text-center">
                <span className="text-2xl mb-2 block">{v.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Wie Anfangen?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Greife auf deinen AKOKY-Mitgliederbereich zu, gehe zum Abschnitt 'Empfehlung' und kopiere deinen persönlichen Link. Teile ihn mit deinen Freunden. Nutze die <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> für schnellen Zugang.</p>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Jetzt empfehlen</h3>
            <p className="text-muted-foreground mb-4">Registriere dich kostenlos und beginne, deine Freunde zu den besten <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertinen Clubs</Link> und <Link to="/de/saunas" className="text-primary hover:underline">Saunas</Link> Deutschlands einzuladen.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/vip", label: "VIP" },
              { to: "/de/app", label: "AKOKY App" },
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/events", label: "Events" },
              { to: "/de/bewertungen", label: "Bewertungen" },
              { to: "/de/kontakt", label: "Kontakt" },
              { to: "/de/vision", label: "Vision" },
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

export default WerbungDe;
