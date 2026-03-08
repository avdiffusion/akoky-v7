import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Muss man in einer Beziehung sein, um anzufangen?", answer: "Nein. Singles und Paare sind gleichermaßen willkommen. Alleinreisende Frauen haben in vielen Clubs und Events bevorzugten Zugang." },
  { question: "Wie geht man mit Eifersucht um?", answer: "Kommunikation ist der Schlüssel. Sprich vor, während und nach jeder Erfahrung über deine Grenzen. Eifersucht ist normal und sollte offen besprochen werden." },
  { question: "Ist die Teilnahme in einem Club Pflicht?", answer: "Absolut nicht. Die Grundregel ist, dass niemand zu irgendetwas gezwungen ist. Das Recht Nein zu sagen ist absolut." },
  { question: "Wie findet man libertine Clubs in der Nähe?", answer: "AKOKY bietet ein Verzeichnis von 120+ verifizierten Clubs in Deutschland und Europa mit detaillierten Profilen, Fotos und Community-Bewertungen." },
];

const LibertinismusAnfangenDe = () => (
  <>
    <MetaTags
      title="Libertinismus Anfangen 2026 | Vollständiger Leitfaden für Paare und Singles"
      description="Vollständiger Leitfaden für den Einstieg in den Libertinismus: erste Schritte, Einverständnis, Club-Auswahl, Eifersucht bewältigen."
      canonical="https://akoky.com/de/libertinismus-anfangen"
      lang="de"
    />
    <HreflangTags slug="libertinismus-anfangen" />
    <ContentPageLayout
      lang="de"
      title="Libertinismus Anfangen 2026 | Vollständiger Leitfaden"
      description="Vollständiger Leitfaden für den Einstieg in den Libertinismus."
      canonical="https://akoky.com/de/libertinismus-anfangen"
      heroTitle="Mit dem Libertinismus anfangen"
      heroSubtitle="Ein praktischer und respektvoller Leitfaden, um dieses Universum Schritt für Schritt zu entdecken."
      heroImage="/images/es-debuter-cover.webp"
      breadcrumb={[{ label: "Libertinismus Anfangen" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Bevor du anfängst: Die wesentlichen Fragen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Den <Link to="/de/libertinismus" className="text-primary hover:underline">Libertinismus</Link> zu erkunden erfordert Reflexion und Kommunikation. Bevor du den ersten Schritt machst, stell dir einige Schlüsselfragen: Warum möchtest du das erkunden? Was sind deine Grenzen? Was erhoffst du dir?</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Deine Wünsche</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Zu identifizieren, was dich am Libertinismus wirklich anzieht, ist der erste Schritt. Ehrlich zu dir selbst zu sein ist unerlässlich. Unser <Link to="/de/lexikon" className="text-primary hover:underline">Libertines Lexikon</Link> hilft dir, die verschiedenen Praktiken zu verstehen.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Deine Grenzen</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Deine Grenzen vor jeder Erfahrung zu definieren ist entscheidend. Welche Praktiken bist du bereit zu erkunden und welche nicht? Diese Grenzen offen zu besprechen verhindert Missverständnisse.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Ersten Praktischen Schritte</h2>

          <div className="space-y-4 mt-6">
            {[
              { step: "1", icon: "📱", title: "Zuerst Online Entdecken", desc: <>Plattformen wie AKOKY ermöglichen es, Erfahrungsberichte zu lesen und anonym Fragen zu stellen. Lade die <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> herunter.</> },
              { step: "2", icon: "🏛️", title: "Der Erste Club-Besuch", desc: <>Für deinen ersten Besuch in einem <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertinen Club</Link> buche im Voraus. Komm früh, erkunde zuerst die bekleideten Bereiche.</> },
              { step: "3", icon: "🤝", title: "Die Grundlegenden Verhaltensregeln", desc: "Niemals auf eine Ablehnung bestehen, ohne Erlaubnis nicht anfassen, Privatsphäre respektieren und außerhalb der Räume diskret bleiben." },
              { step: "4", icon: "🧖", title: "Alternativ: Sauna statt Club", desc: <>Für eine ruhigere Atmosphäre empfehlen wir einen <Link to="/de/saunas" className="text-primary hover:underline">libertinen Sauna</Link> — ideal für Anfänger.</> },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 p-4 bg-card/50 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">{s.step}</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{s.icon} {s.title}</h4>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eifersucht Bewältigen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Eifersucht ist eine völlig normale Reaktion. Sie mit dem Partner zu teilen und darüber zu sprechen ermöglicht es, sie auf gesunde Weise zu bewältigen. Unterdrücke diese Gefühle nicht.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Deine Community mit AKOKY Finden</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY bietet einen sicheren Raum für Anfänger: spezielle Leitfäden, <Link to="/de/events" className="text-primary hover:underline">Events</Link> speziell für Neuankömmlinge, <Link to="/de/spiele" className="text-primary hover:underline">Spiele</Link> zum Eisbrechen und eine einladende Community. Lies die <Link to="/de/bewertungen" className="text-primary hover:underline">Bewertungen</Link> unserer Mitglieder.</p>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Bereit anzufangen?</h3>
            <p className="text-muted-foreground mb-4">Tritt der AKOKY-Community bei — kostenlos und sicher.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Weiter entdecken</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/libertinismus", label: "Libertinismus" },
              { to: "/de/lexikon", label: "Lexikon" },
              { to: "/de/spiele", label: "Spiele" },
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/clubbing", label: "Clubbing" },
              { to: "/de/events", label: "Events" },
              { to: "/de/app", label: "AKOKY App" },
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

export default LibertinismusAnfangenDe;
