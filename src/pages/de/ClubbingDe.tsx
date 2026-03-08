import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Wie bereite ich mich auf meinen ersten Club-Abend vor?", answer: "Vorab reservieren, Dresscode prüfen, früh ankommen, zuerst bekleidete Bereiche erkunden und daran denken, dass du das absolute Recht hast, jederzeit Nein zu sagen." },
  { question: "Was passiert, wenn mir die Atmosphäre nicht gefällt?", answer: "Du kannst gehen, wann immer du möchtest. Es gibt keine Verpflichtung zu bleiben oder an irgendetwas teilzunehmen." },
  { question: "Sind libertine Clubs sicher?", answer: "Clubs im AKOKY-Verzeichnis wurden in Bezug auf Sicherheit und Einhaltung der Normen verifiziert. Wähle immer verifizierte Einrichtungen." },
];

const ClubbingDe = () => (
  <>
    <MetaTags
      title="Libertines Clubbing in Deutschland 2026 | Leitfaden für Abende — AKOKY"
      description="Vollständiger Leitfaden für libertines Clubbing in Deutschland: Was erwartet dich, Vorbereitung, die besten Clubs in Berlin, Hamburg und ganz Deutschland."
      canonical="https://akoky.com/de/clubbing"
      lang="de"
    />
    <HreflangTags slug="clubbing" />
    <ContentPageLayout
      lang="de"
      title="Libertines Clubbing in Deutschland 2026 | Leitfaden für Abende — AKOKY"
      description="Vollständiger Leitfaden für libertines Clubbing in Deutschland."
      canonical="https://akoky.com/de/clubbing"
      heroTitle="Libertines Clubbing in Deutschland"
      heroSubtitle="Entdecke die libertine Clubbing-Szene: Vorbereitung, Verhaltensregeln, die besten Clubs."
      heroImage="/images/es-eventos-cover.webp"
      breadcrumb={[{ label: "Libertines Clubbing" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Was Ist Libertines Clubbing?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Libertines Clubbing ist das Frequentieren <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertiner Clubs</Link> für gesellige und sinnliche Abende in einem organisierten und sicheren Rahmen. Anders als private Treffen bietet der Club einen neutralen Raum mit klaren Regeln.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Libertine Szene in Deutschland</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Deutschland hat eine der aktivsten libertinen Szenen Europas. Berlin und Hamburg sind die zwei Epizentren, mit Dutzenden von Clubs aller Größen. Durchsuche unser <Link to="/de/clubs" className="text-primary hover:underline">vollständiges Verzeichnis</Link> für alle Städte.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Vorbereitung Für Einen Club-Abend</h2>
          <div className="space-y-4 mt-6">
            {[
              { step: "1", title: "Vorab Reservieren", desc: "Die meisten Qualitäts-Clubs erfordern Vorabreservierung, besonders für Wochenendabende." },
              { step: "2", title: "Dresscode Prüfen", desc: "Jeder Club hat seinen eigenen Dresscode: elegant, sexy oder thematisch. Prüfe das AKOKY-Profil." },
              { step: "3", title: "Erste Schritte Bei Ankunft", desc: "Empfang, Garderobe, Tour der Räumlichkeiten. Beginne mit der Bar und Lounge." },
              { step: "4", title: "Die Goldenen Regeln", desc: "Niemals ohne Erlaubnis anfassen. Ablehnung akzeptieren. Privatsphäre respektieren. Diskret bleiben." },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 p-4 bg-card/50 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">{s.step}</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{s.title}</h4>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Club oder Sauna?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Wenn du eine ruhigere Atmosphäre bevorzugst, könnten <Link to="/de/saunas" className="text-primary hover:underline">libertine Saunas</Link> die bessere Wahl sein. Für <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">Anfänger</Link> empfehlen wir, beide Formate auszuprobieren.</p>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Die Besten Clubs Mit AKOKY Finden</h3>
            <p className="text-muted-foreground mb-4">Durchsuche das <Link to="/de/clubs" className="text-primary hover:underline">vollständige Verzeichnis</Link> mit <Link to="/de/bewertungen" className="text-primary hover:underline">verifizierten Bewertungen</Link>. Lade die <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> für Echtzeit-Benachrichtigungen.</p>
            <Link to="/de/clubs" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Zum Verzeichnis →</Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Weiter entdecken</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/events", label: "Events" },
              { to: "/de/libertinismus-anfangen", label: "Anfangen" },
              { to: "/de/lexikon", label: "Lexikon" },
              { to: "/de/spiele", label: "Spiele" },
              { to: "/de/live", label: "Lives" },
              { to: "/de/vip", label: "VIP" },
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

export default ClubbingDe;
