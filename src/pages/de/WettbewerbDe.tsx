import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Wie kann ich an AKOKY-Gewinnspielen teilnehmen?", answer: "Um teilzunehmen, musst du registriertes Mitglied bei AKOKY sein. Jedes Gewinnspiel hat eigene Teilnahmeregeln, die auf der jeweiligen Seite beschrieben sind. Die meisten sind kostenlos und für alle aktiven Mitglieder offen." },
  { question: "Sind die AKOKY-Gewinnspiele wirklich kostenlos?", answer: "Ja, alle von AKOKY organisierten Gewinnspiele sind zu 100% kostenlos. Kein Kauf oder keine Zahlung ist für die Teilnahme erforderlich." },
  { question: "Kann ich mein Empfehlungsprogramm für die Gewinnspiele nutzen?", answer: "Einige Gewinnspiele beinhalten Boni im Zusammenhang mit dem AKOKY-Empfehlungsprogramm: Mehrfachteilnahmen, Bonuspunkte, Prioritätszugang. Lies das Regelwerk jedes Gewinnspiels." },
  { question: "Was gibt es zu gewinnen?", answer: "Die Preise variieren: Aufenthalte in Premium libertinen Clubs, VIP-Abonnements, Einladungen zu privaten Events, Geschenksets und einzigartige Erlebnisse in Deutschland und Europa." },
  { question: "Wie werden die Gewinner bestimmt?", answer: "Je nach Modalitäten des jeweiligen Gewinnspiels: Losziehung, Leistung (erster, der eine Aufgabe erfüllt), Community-Abstimmung oder AKOKY-Jury." },
  { question: "Kann ich an mehreren Gewinnspielen gleichzeitig teilnehmen?", answer: "Ja, du kannst an so vielen AKOKY-Gewinnspielen teilnehmen, wie du möchtest." },
  { question: "Sind meine persönlichen Daten geschützt?", answer: "Ja. AKOKY hält sich strikt an die DSGVO und teilt deine Daten niemals mit Dritten." },
];

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://akoky.com/de" },
    { "@type": "ListItem", "position": 2, "name": "Gewinnspiele", "item": "https://akoky.com/de/wettbewerb" },
  ],
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AKOKY Gewinnspiele – Gewinne exklusive libertine Erlebnisse",
  "description": "Nimm kostenlos an AKOKY-Gewinnspielen teil und gewinne Aufenthalte in den besten libertinen Clubs Europas, VIP-Abonnements und einzigartige Erlebnisse.",
  "url": "https://akoky.com/de/wettbewerb",
  "inLanguage": "de",
  "isPartOf": { "@type": "WebSite", "name": "AKOKY", "url": "https://akoky.com" },
};

const WettbewerbDe = () => (
  <>
    <HreflangTags slug="wettbewerb" />

    <ContentPageLayout
      lang="de"
      title="AKOKY Gewinnspiele – Gewinne exklusive libertine Erlebnisse"
      description="Nimm kostenlos an AKOKY-Gewinnspielen teil und gewinne Aufenthalte in den besten libertinen Clubs Europas, VIP-Abonnements und einzigartige Erlebnisse."
      canonical="https://akoky.com/de/wettbewerb"
      heroTitle="AKOKY Gewinnspiele"
      heroSubtitle="Nimm kostenlos teil und gewinne Aufenthalte, VIP-Abonnements und exklusive libertine Erlebnisse in Deutschland und ganz Europa."
      heroImage="/images/concours/six-cles.webp"
      breadcrumb={[{ label: "Gewinnspiele" }]}
      faq={FAQ}
      schema={[PAGE_SCHEMA, BREADCRUMB_SCHEMA]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto space-y-20">

          {/* ─── AKTUELLE GEWINNSPIELE ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🔥</span>
              <h2 className="text-3xl font-black text-foreground font-display">Aktuelle Gewinnspiele</h2>
            </div>

            <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 text-center">
              <span className="text-6xl block mb-6">🏆</span>
              <h3 className="text-2xl font-bold text-foreground mb-4">Bald exklusive Gewinnspiele für Deutschland!</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                Das AKOKY-Team bereitet außergewöhnliche Gewinnspiele für die libertine Community in Deutschland vor. Aufenthalte in den besten Clubs von <strong className="text-foreground">Berlin</strong>, <strong className="text-foreground">München</strong>, <strong className="text-foreground">Hamburg</strong>, <strong className="text-foreground">Köln</strong> und weiteren deutschen Städten, VIP-Abonnements und einzigartige Erlebnisse — bleibt dran!
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Erstelle in der Zwischenzeit dein kostenloses Konto, um als Erster teilnehmen zu können, wenn sie starten.
              </p>
              <a href="https://app.akoky.com/register" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
                Mein kostenloses Konto erstellen
              </a>
            </div>
          </div>

          {/* ─── EMPFEHLUNGSPROGRAMM ─── */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20 p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">👑</span>
                  <span className="text-primary text-sm font-bold uppercase tracking-wide">Empfehlungsprogramm</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 font-display">
                  Einladen. Gewinnen. Genießen.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Lade <strong className="text-foreground">10 Mitglieder</strong> zu AKOKY ein und erhalte <strong className="text-primary">6 Monate VIP+-Abonnement</strong> geschenkt. Zugang zu Livestreaming, Prioritätsnachrichten, VIP+-Badge und exklusiven Events.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["✓ Ohne Verpflichtung", "✓ Ohne Abo nötig", "✓ Automatische Belohnung"].map((t, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-3 bg-card border border-primary/30 rounded-full px-6 py-3 mb-6">
                  <span className="text-lg font-black text-primary">10 Empfehlungen = 6 MONATE VIP+</span>
                </div>
                <div className="block">
                  <Link to="/de/werbung" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">
                    Programm entdecken →
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: "📢", label: "Erzähl von AKOKY" },
                  { icon: "📝", label: "Sie registrieren sich" },
                  { icon: "🎁", label: "Du gewinnst" },
                ].map((s, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4 w-24">
                    <span className="text-2xl block mb-1">{s.icon}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── KOMMENDE GEWINNSPIELE (TEASERS) ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">⏳</span>
              <h2 className="text-3xl font-black text-foreground font-display">Kommende Gewinnspiele</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "📸", title: "Paar-Foto-Wettbewerb", date: "Ende 2026 – Anfang 2027", lot: "Wochenende in einem Premium-Club", desc: "Teile dein schönstes libertines Paarfoto und gewinne ein exklusives Premium-Wochenende!" },
                { icon: "✍️", title: "Bester Libertiner Erfahrungsbericht", date: "2027", lot: "3 Premium-Abonnements 1 Jahr", desc: "Erzähle deine unvergesslichste libertine Erfahrung." },
                { icon: "🌴", title: "Sommer-Empfehlungs-Challenge", date: "Sommer 2027", lot: "5 Aufenthalte in europäischen Clubs", desc: "Die besten Botschafter gewinnen ein Traum-Wochenende!" },
              ].map((c, i) => (
                <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border opacity-60">
                  <p className="text-muted-foreground/60 text-xs mb-2">{c.date}</p>
                  <span className="text-3xl block mb-3">{c.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{c.desc}</p>
                  <p className="text-muted-foreground text-sm"><strong>Preis:</strong> {c.lot}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── VERGANGENE GEWINNSPIELE ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">✅</span>
              <h2 className="text-3xl font-black text-foreground font-display">Vergangene Gewinnspiele</h2>
            </div>
            <div className="bg-card/50 border border-border rounded-2xl p-8 text-center">
              <p className="text-muted-foreground">Noch keine abgeschlossenen Gewinnspiele für Deutschland. Die ersten AKOKY-Gewinnspiele werden vorbereitet!</p>
            </div>
          </div>

          {/* ─── SEO TEXT ─── */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">AKOKY Gewinnspiele Deutschland – Gewinne einzigartige libertine Erlebnisse</h2>
            <p>
              AKOKY organisiert regelmäßig <strong className="text-foreground">kostenlose Gewinnspiele</strong>, exklusiv für seine libertine Community in Deutschland und ganz Europa. Mit über <Link to="/de" className="text-primary hover:underline">1,5 Millionen aktiven Mitgliedern</Link> bietet die Plattform außergewöhnliche Preise: Aufenthalte in den <Link to="/de/libertine-clubs" className="text-primary hover:underline">besten libertinen Clubs</Link> von Berlin, München, Hamburg und weiteren Städten, <Link to="/de/vip" className="text-primary hover:underline">VIP-Premium-Abonnements</Link>, Einladungen zu <Link to="/de/events" className="text-primary hover:underline">exklusiven privaten Events</Link> und unvergessliche Erlebnisse.
            </p>
            <p>
              Im Gegensatz zu <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong> oder <strong className="text-foreground">Libertic</strong> setzt AKOKY auf die Qualität und Transparenz seiner Gewinnspiele. Jedes Gewinnspiel verfügt über ein offizielles Regelwerk, verifizierte Preise und einen fairen Auswahlprozess. Kein Kauf und kein Abonnement sind für die Teilnahme erforderlich — es genügt, ein <Link to="/de/akoky" className="text-primary hover:underline">kostenloses AKOKY-Konto</Link> zu erstellen.
            </p>
            <p>
              Die AKOKY-Gewinnspiele decken alle Aspekte des libertinen Erlebnisses ab: Entdeckung von <Link to="/de/saunas" className="text-primary hover:underline">libertinen Saunas</Link>, Erkundung der <Link to="/de/libertine-clubs" className="text-primary hover:underline">Partner-Clubs</Link>, Nutzung unserer <Link to="/de/app" className="text-primary hover:underline">Mobile-App</Link>, Teilnahme an <Link to="/de/live" className="text-primary hover:underline">exklusiven Livestreams</Link> und Community-Engagement. Die aktivsten Mitglieder und besten Botschafter des <Link to="/de/werbung" className="text-primary hover:underline">Empfehlungsprogramms</Link> erhalten Prioritätszugang zu kommenden Gewinnspielen.
            </p>
            <p>
              Bist du neu im <Link to="/de/libertinismus" className="text-primary hover:underline">Libertinismus</Link>? Schau dir unser <Link to="/de/lexikon" className="text-primary hover:underline">libertines Lexikon</Link> und unseren Leitfaden zum <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">richtigen Anfangen</Link> an. Lies die <Link to="/de/bewertungen" className="text-primary hover:underline">verifizierten Bewertungen unserer Mitglieder</Link> (Durchschnittsnote 4,7/5) und werde Teil der aktivsten libertinen Community Europas.
            </p>
          </div>

          <div className="text-center">
            <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Mein kostenloses Konto erstellen</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default WettbewerbDe;
