import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const chipClass =
  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 transition-colors";

const cardClass =
  "bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group";

const cities = [
  { label: "Berlin", href: "/de/libertine-clubs", emoji: "🐻" },
  { label: "Hamburg", href: "/de/libertine-clubs", emoji: "⚓" },
  { label: "München", href: "/de/libertine-clubs", emoji: "🏔️" },
  { label: "Köln", href: "/de/libertine-clubs", emoji: "⛪" },
  { label: "Frankfurt", href: "/de/libertine-clubs", emoji: "🏦" },
  { label: "Düsseldorf", href: "/de/libertine-clubs", emoji: "🌉" },
  { label: "Stuttgart", href: "/de/libertine-clubs", emoji: "🚗" },
  { label: "Leipzig", href: "/de/libertine-clubs", emoji: "🎵" },
  { label: "Dresden", href: "/de/libertine-clubs", emoji: "🏛️" },
  { label: "Hannover", href: "/de/libertine-clubs", emoji: "🌿" },
  { label: "Nürnberg", href: "/de/libertine-clubs", emoji: "🏰" },
  { label: "Dortmund", href: "/de/libertine-clubs", emoji: "⚽" },
];

const europe = [
  { label: "🇦🇹 Österreich", href: "/de/libertine-clubs", sub: "Wien · Graz · Salzburg" },
  { label: "🇨🇭 Schweiz", href: "/de/libertine-clubs", sub: "Zürich · Basel · Bern" },
  { label: "🇳🇱 Niederlande", href: "/de/libertine-clubs", sub: "Amsterdam · Rotterdam" },
];

const guides = [
  { title: "Erster libertiner Club", desc: "Alles, was du vor deinem ersten Besuch wissen musst.", href: "/de/libertinismus-anfangen", emoji: "🚪" },
  { title: "Libertinismus Anfangen", desc: "Der ultimative Leitfaden für Paare, die starten wollen.", href: "/de/libertinismus-anfangen", emoji: "🌱" },
  { title: "Häufig gestellte Fragen", desc: "Antworten auf die häufigsten Fragen von Anfängern.", href: "/de/faq", emoji: "❓" },
  { title: "Libertines Lexikon", desc: "Alle Begriffe und Codes der Szene erklärt.", href: "/de/lexikon", emoji: "🔤" },
  { title: "Libertinismus verstehen", desc: "Geschichte, Philosophie und moderne Kultur.", href: "/de/libertinismus", emoji: "📖" },
  { title: "Libertine Spiele", desc: "Spiele für aufregende Abende zu zweit oder in Gruppen.", href: "/de/spiele", emoji: "🎮" },
];

const comparatifs = [
  { label: "Beste libertine Seite", href: "/de/beste-libertine-seite" },
  { label: "AKOKY vs Wyylde", href: "/de/akoky-vs-wyylde" },
];

const LibertineClubsDe = () => {
  return (
    <>
      <MetaTags
        title="Libertine Clubs & Saunas in Deutschland 2026 – Kompletter Guide | AKOKY"
        description="Der Referenz-Guide für libertine Clubs, Saunas und Einrichtungen in Deutschland und Europa. Entdecke die Szene, finde deinen idealen Club mit AKOKY."
        canonical="https://akoky.com/de/libertine-clubs"
        lang="de"
        ogImage="/images/club.webp"
      />
      <HreflangTags slug="libertine-clubs" />
      <ContentPageLayout
        lang="de"
        title="Libertine Clubs & Saunas in Deutschland 2026"
        description="Kompletter Guide für libertine Clubs in Deutschland und Europa"
        canonical="https://akoky.com/de/libertine-clubs"
        heroTitle="Libertine Clubs & Saunas in Deutschland"
        heroSubtitle="Der Referenz-Guide, um deine ideale libertine Einrichtung zu entdecken, zu verstehen und auszuwählen"
        heroImage="/images/club.webp"
        breadcrumb={[{ label: "Libertine Clubs" }]}
        faq={[
          { question: "Wie wählt man seinen ersten libertinen Club?", answer: "Lies unseren Anfänger-Guide und die verifizierten Bewertungen auf AKOKY. Bevorzuge einen Club mit gutem Ruf, respektvollem Publikum und Abenden für Neulinge." },
          { question: "Was ist der Unterschied zwischen einem libertinen Club und einer Sauna?", answer: "Libertine Clubs setzen auf festliche Atmosphäre (Bar, Tanz, private Räume), während Saunas auf Wellness fokussieren (Hammam, Spa) in entspannter Atmosphäre." },
          { question: "Sind einzelne Frauen willkommen?", answer: "Ja, einzelne Frauen sind in den meisten libertinen Einrichtungen ohne besondere Einschränkung willkommen." },
          { question: "Wie verifiziert AKOKY die Clubs?", answer: "Unser Team besucht und bewertet jede Einrichtung. Wir berücksichtigen Hygiene, Einhaltung der Regeln, Empfangsqualität und Mitglieder-Feedback." },
          { question: "Welche Arten von libertinen Einrichtungen gibt es?", answer: "Es gibt hauptsächlich drei Typen: libertine Clubs (festliche Atmosphäre, Bar, Tanz), libertine Saunas (Wellness, Hammam, Spa) und private Locations (Events auf Einladung in Villen oder Schlössern)." },
          { question: "Muss man im Voraus reservieren?", answer: "Reservierungen sind oft empfohlen und bei besonderen Abenden obligatorisch. Prüfe die Club-Profile auf AKOKY für die jeweiligen Modalitäten." },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Kompletter Guide der Libertinen Clubs & Saunas in Deutschland",
          description: "Referenz-Guide für libertine Clubs in Deutschland und Europa.",
          url: "https://akoky.com/de/libertine-clubs",
        }}
      >

        {/* ── Geographischer Hub ── */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="text-4xl mb-4">🗺️</div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Kompletter Geographischer Guide</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Diese Seite ist dein zentraler Einstiegspunkt in die libertine Clubbing-Welt in Deutschland und Europa. Sie strukturiert alle Städte und Regionen, um dich schnell zu den von AKOKY verifizierten Clubs, Saunas und Einrichtungen zu führen.
              </p>
              <a
                href="https://app.akoky.com/register"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold hover:scale-105 transition-all"
              >
                Clubs auf AKOKY entdecken →
              </a>
              <div className="flex gap-4 mt-8">
                <div className="bg-muted/30 rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl">🇩🇪</div>
                  <div className="text-sm text-muted-foreground mt-1">Deutschland</div>
                </div>
                <div className="bg-muted/30 rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl">🇪🇺</div>
                  <div className="text-sm text-muted-foreground mt-1">Europa</div>
                </div>
                <div className="bg-muted/30 rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl">📍</div>
                  <div className="text-sm text-muted-foreground mt-1">Alle Städte</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Große Städte ── */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-5xl mx-auto space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground font-display">Libertine Clubs nach Stadt</h2>
              <p className="text-muted-foreground mt-2">Die besten Adressen in den großen deutschen Städten</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cities.map((c) => (
                <Link key={c.label} to={c.href} className={cardClass}>
                  <span className="text-2xl">{c.emoji}</span>
                  <span className="block text-foreground font-semibold mt-1 group-hover:text-primary transition-colors">{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Saunas ── */}
        <section className="py-16 px-4 border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src="/images/sauna-cover.webp"
                  alt="Libertine Sauna in Deutschland"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground font-display">Libertine Saunas in Deutschland</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Libertine Saunas bieten ein einzigartiges Erlebnis, das Wellness und Sinnlichkeit verbindet. Hammam, Jacuzzi, private Kabinen und Entspannungsbereiche in einer gedämpften und respektvollen Atmosphäre.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Entdecke unseren kompletten Guide mit den besten Saunas Deutschlands, Preisen, Dresscodes und Tipps für den ersten Besuch.
                </p>
                <Link
                  to="/de/saunas"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-primary/50 text-primary font-medium hover:bg-primary/10 transition-colors"
                >
                  Guide der libertinen Saunas →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Europa ── */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground font-display">Libertines Clubbing in Europa</h2>
              <p className="text-muted-foreground mt-2">Entdecke die libertine Szene jenseits der Grenzen</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {europe.map((e) => (
                <Link key={e.label} to={e.href} className={cardClass + " text-center"}>
                  <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{e.label}</span>
                  <span className="block text-muted-foreground text-sm mt-2">{e.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Universum verstehen ── */}
        <section className="py-16 px-4 border-t border-border/50">
          <div className="container max-w-4xl mx-auto prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground font-display">Das libertine Universum in Deutschland verstehen</h2>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Was ist moderner Libertinismus?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Der zeitgenössische Libertinismus in Deutschland bezeichnet eine frei konsentierte sexuelle Praxis zwischen Erwachsenen, die auf Austausch, Entdeckung und geteiltem Vergnügen basiert. Er beruht auf starken Werten: gegenseitiger Respekt, explizites Einverständnis, Diskretion und Höflichkeit.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Die verschiedenen Arten von Einrichtungen</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Libertine Clubs</strong> bieten Bar, Tanzfläche, private Salons und Kabinen. <strong>Libertine Saunas</strong> setzen auf Wellness mit Hammam, Spa und Entspannungsbereichen. Einige Einrichtungen organisieren regelmäßig <Link to="/de/events" className="text-primary hover:underline">Themenabende</Link>.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Die Regeln, die es zu beachten gilt</h3>
            <p className="text-muted-foreground leading-relaxed">
              Die erste Regel ist das <strong>absolute Einverständnis</strong>: Ein Nein ist immer ein Nein. Der Respekt der Intimität und Diskretion ist fundamental. Höflichkeit und tadellose Hygiene werden vorausgesetzt. Erfahre mehr in unserem <Link to="/de/libertinismus" className="text-primary hover:underline">Guide zum Libertinismus</Link>.
            </p>
          </div>
        </section>

        {/* ── Arten von Einrichtungen ── */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center font-display">Clubs, Saunas, Einrichtungen: Was sind die Unterschiede?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={cardClass}>
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Libertine Clubs</h3>
                <p className="text-muted-foreground">Festliche Atmosphäre mit Bar, Tanz und privaten Räumen. Häufige Themenabende.</p>
              </div>
              <div className={cardClass}>
                <div className="text-4xl mb-4">♨️</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Libertine Saunas</h3>
                <p className="text-muted-foreground">Wellness und Entspannung mit Hammam, Spa und sinnlichen Ruhebereichen.</p>
                <Link to="/de/saunas" className="text-primary text-sm hover:underline mt-3 inline-block">Saunas entdecken →</Link>
              </div>
              <div className={cardClass}>
                <div className="text-4xl mb-4">🏰</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Private Locations</h3>
                <p className="text-muted-foreground">Villen und Schlösser, die Events auf Einladung für ausgewählte Teilnehmer beherbergen.</p>
                <Link to="/de/events" className="text-primary text-sm hover:underline mt-3 inline-block">Events entdecken →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Guides für Anfänger ── */}
        <section className="py-16 px-4 border-t border-border/50">
          <div className="container max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground font-display">Guides für den perfekten Einstieg</h2>
              <p className="text-muted-foreground mt-2">Alles, was du wissen musst, bevor du startest</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {guides.map((g) => (
                <Link key={g.title} to={g.href} className={cardClass}>
                  <span className="text-3xl">{g.emoji}</span>
                  <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">{g.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{g.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Events ── */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground font-display">Events & Libertine Abende</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Von Themenabenden über libertine Wochenenden bis hin zu organisierten Reisen: finde den kompletten Kalender der libertinen Events in Deutschland und Europa auf AKOKY.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🎭 Maskenball- und White-Party-Abende</li>
                  <li>🌙 Themenabende in den besten Clubs</li>
                  <li>🏖️ Libertine Wochenenden an der Ostsee und am Bodensee</li>
                  <li>✈️ Organisierte Reisen und libertine Kreuzfahrten</li>
                </ul>
                <Link
                  to="/de/events"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-primary/50 text-primary font-medium hover:bg-primary/10 transition-colors"
                >
                  Kalender ansehen →
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src="/images/soiree-club-libertin.webp"
                  alt="Abend in einem libertinen Club"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Vergleiche ── */}
        <section className="py-16 px-4 border-t border-border/50">
          <div className="container max-w-5xl mx-auto space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground font-display">Vergleich der libertinen Seiten</h2>
              <p className="text-muted-foreground mt-2">Finde die Plattform, die zu dir passt</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-3">
              {comparatifs.map((c) => (
                <li key={c.label}>
                  <Link to={c.href} className={chipClass}>
                    {c.label} <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── AKOKY Community ── */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src="/images/application-akoky.webp"
                  alt="AKOKY Anwendung"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground font-display">Werde Teil der AKOKY-Community</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AKOKY ist weit mehr als ein Verzeichnis. Es ist eine Community libertiner Paare und Singles, die ihre Erfahrungen, verifizierten Bewertungen und Empfehlungen teilen.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>⭐ <Link to="/de/bewertungen" className="text-primary hover:underline">Verifizierte Bewertungen</Link> der Community</li>
                  <li>🎮 <Link to="/de/spiele" className="text-primary hover:underline">Libertine Spiele</Link> für aufregende Abende</li>
                  <li>👑 <Link to="/de/vip" className="text-primary hover:underline">VIP-Bereich</Link> mit exklusiven Vorteilen</li>
                  <li>📱 <Link to="/de/app" className="text-primary hover:underline">Mobile App</Link> verfügbar</li>
                  <li>📺 <Link to="/de/live" className="text-primary hover:underline">Live-Streaming</Link> für direkte Begegnungen</li>
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/de/akoky"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold hover:scale-105 transition-all"
                  >
                    AKOKY entdecken →
                  </Link>
                  <Link
                    to="/de/vision"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
                  >
                    Unsere Vision →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Libertinismus & Aktuelles ── */}
        <section className="py-16 px-4 border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Link to="/de/libertinismus" className={cardClass + " text-center"}>
                <span className="text-3xl">💋</span>
                <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">Libertinismus</h3>
                <p className="text-muted-foreground text-sm mt-1">Geschichte, Philosophie und Kultur</p>
              </Link>
              <Link to="/de/aktuelles" className={cardClass + " text-center"}>
                <span className="text-3xl">📰</span>
                <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">Libertine Nachrichten</h3>
                <p className="text-muted-foreground text-sm mt-1">Die neuesten News der Szene</p>
              </Link>
              <Link to="/de/presse" className={cardClass + " text-center"}>
                <span className="text-3xl">🗞️</span>
                <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">Presse & Medien</h3>
                <p className="text-muted-foreground text-sm mt-1">AKOKY in den Medien</p>
              </Link>
              <Link to="/de/kontakt" className={cardClass + " text-center"}>
                <span className="text-3xl">💬</span>
                <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">Kontakt</h3>
                <p className="text-muted-foreground text-sm mt-1">Eine Frage? Sprich uns an</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Empfehlungsprogramm ── */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-4xl mx-auto text-center space-y-4">
            <div className="text-4xl">🎁</div>
            <h2 className="text-3xl font-bold text-foreground font-display">Empfehlungsprogramm</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lade deine Freunde ein, AKOKY beizutreten, und profitiert gemeinsam von exklusiven Vorteilen. Je mehr du empfiehlst, desto mehr gewinnst du.
            </p>
            <a
              href="https://app.akoky.com/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold hover:scale-105 transition-all"
            >
              Programm entdecken →
            </a>
          </div>
        </section>

      </ContentPageLayout>
    </>
  );
};

export default LibertineClubsDe;
