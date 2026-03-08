import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Was genau ist ein libertiner Sauna?", answer: "Ein libertiner Sauna ist eine Einrichtung, die Spa-Entspannung (Hamam, Jacuzzi, Sauna) mit sinnlichen Begegnungen zwischen einvernehmlichen Erwachsenen verbindet. Die Atmosphäre ist gedämpft und entspannend, weit entfernt von der Hektik traditioneller Clubs." },
  { question: "Akzeptieren libertine Saunas Singles?", answer: "Das hängt von der Einrichtung ab. Einzelne Frauen sind generell ohne Einschränkung willkommen. Für einzelne Männer hat jeder Sauna seine eigene Regelung: manche akzeptieren sie täglich, andere nur zu bestimmten Zeiten oder mit Quoten." },
  { question: "Welche Kleidung trägt man im libertinen Sauna?", answer: "Die meisten libertinen Saunas stellen einen Bademantel und ein Handtuch bereit. Sie können im Bademantel, Handtuch, Badeanzug oder nackt je nach Bereich und Komfortniveau herumgehen." },
  { question: "Was kostet der Eintritt in einen libertinen Sauna?", answer: "Die Preise variieren je nach Stadt und Niveau. Durchschnittlich: 40-70 € für Paare, 25-50 € für einzelne Frauen, 70-100 € für einzelne Männer (wenn akzeptiert)." },
  { question: "Kann man nur den Spa genießen ohne an libertinen Aktivitäten teilzunehmen?", answer: "Ja, absolut. Das Prinzip der Einvernehmlichkeit ist fundamental. Sie sind völlig frei, nur die Spa-Einrichtungen zu nutzen, ohne an sinnlichen Spielen teilzunehmen." },
  { question: "Sind libertine Saunas sauber und sicher?", answer: "Seriöse Einrichtungen wenden strenge Hygienestandards an: tägliche Reinigung, regelmäßige Desinfektion, saubere Handtücher, Kondome und Gels. Die auf AKOKY referenzierten Saunas werden von Mitgliedern bewertet." },
  { question: "Wann ist die beste Zeit für einen libertinen Sauna?", answer: "Nachmittags unter der Woche ist ruhiger und ideal für einen ersten Besuch. Freitag- und Samstagabende ziehen mehr Besucher an. Manche Einrichtungen organisieren Themenabende." },
  { question: "Wie verläuft der erste Besuch?", answer: "Am Empfang werden Ihnen Ablauf, Bademantel, Handtuch und eventuell ein Farbarmband erklärt. Nach dem Umkleiden bewegen Sie sich frei zwischen den Bereichen: Entspannung, Spa, Privatkabinen. Alles in Ihrem Tempo." },
  { question: "Darf man im libertinen Sauna fotografieren?", answer: "Nein, das ist streng verboten. Diskretion und Privatsphäre sind Grundwerte. Handys werden am Eingang versiegelt oder verboten. Jeder Fotografierversuch führt zu sofortigem und dauerhaftem Ausschluss." },
  { question: "Wo findet man die vollständige Liste der libertinen Saunas in Deutschland?", answer: "Das vollständigste Verzeichnis ist auf AKOKY verfügbar. Sie finden alle Saunas und libertinen Clubs in Deutschland mit detaillierten Profilen, Fotos, verifizierten Bewertungen, Preisen und Veranstaltungskalender." },
];

const EQUIPEMENTS = [
  {
    img: "/images/sauna-jacuzzi.webp",
    alt: "Jacuzzi in einem libertinen Sauna",
    title: "Pool & Jacuzzi",
    text: "Beheizte Becken und Wasserbereiche für totale Entspannung"
  },
  {
    img: "/images/sauna-vestiaires.webp",
    alt: "Elegante Umkleiden eines libertinen Saunas",
    title: "Umkleiden & Duschen",
    text: "Private Bereiche und moderne Ausstattung für Ihren Komfort"
  },
  {
    img: "/images/sauna-lounge.webp",
    alt: "Lounge-Bereich in einem libertinen Sauna",
    title: "Lounge-Salons",
    text: "Gedämpfte Entspannungszonen, ideal zum Kennenlernen"
  },
  {
    img: "/images/sauna-cabines.webp",
    alt: "Privatkabinen eines libertinen Saunas",
    title: "Privatkabinen",
    text: "Intime Räume für diskrete Momente"
  },
  {
    img: "/images/sauna-hammam.webp",
    alt: "Hamam in einem libertinen Sauna",
    title: "Hamam & Sauna",
    text: "Dampf- und Trockenwärmebereiche für tiefe Entspannung"
  },
];

const STAEDTE = [
  { to: "/de/clubs", label: "Berlin" },
  { to: "/de/clubs", label: "München" },
  { to: "/de/clubs", label: "Hamburg" },
  { to: "/de/clubs", label: "Köln" },
  { to: "/de/clubs", label: "Frankfurt" },
  { to: "/de/clubs", label: "Düsseldorf" },
];

const RELATED = [
  { to: "/de/libertine-clubs", label: "Libertine Clubs" },
  { to: "/de/clubs", label: "Verzeichnis" },
  { to: "/de/libertinismus", label: "Libertinismus" },
  { to: "/de/libertinismus-anfangen", label: "Anfangen" },
  { to: "/de/events", label: "Events" },
  { to: "/de/lexikon", label: "Lexikon" },
  { to: "/de/app", label: "AKOKY App" },
  { to: "/de/spiele", label: "Spiele" },
];

const SaunasDe = () => (
  <>
    <MetaTags
      title="Libertine Saunas Deutschland 2026 – Vollständiger Leitfaden & Verzeichnis | AKOKY"
      description="Entdecke die besten libertinen Saunas in Deutschland. Vollständiger Leitfaden, Räume, Ausstattung und Tipps. AKOKY, Referenz für Premium-Libertinage."
      canonical="https://akoky.com/de/saunas"
      lang="de"
      ogImage="/images/sauna-cover.webp"
    />
    <HreflangTags slug="saunas" />
    <ContentPageLayout
      lang="de"
      title="Libertine Saunas in Deutschland"
      description="Leitfaden und Verzeichnis der libertinen Saunas in Deutschland"
      canonical="https://akoky.com/de/saunas"
      heroTitle="Libertine Saunas in Deutschland"
      heroSubtitle="Entdecken Sie die intime Welt der libertinen Saunas: Vollständiger Leitfaden, typische Räume und Verzeichnis nach Region, um die ideale Einrichtung zu finden."
      heroImage="/images/sauna-cover.webp"
      breadcrumb={[{ label: "Libertine Saunas" }]}
      faq={FAQ}
    >

      {/* Intro mit Bild */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-3">In Deutschland ziehen libertine Saunas sowohl Anfängerpaare als auch erfahrene Besucher an, die eine ruhigere Erfahrung suchen. Sie bieten in der Regel Spa-Bereiche (Hamam, Jacuzzi, beheizter Pool), Privatkabinen, Entspannungsräume und manchmal Massagebereiche. Das Ziel: eine Atmosphäre schaffen, in der Sinnlichkeit natürlich entsteht, ohne Druck oder Hektik.</p>
              <p className="text-muted-foreground leading-relaxed">Die deutsche Sauna-Kultur verleiht libertinen Saunas hier eine besondere Qualität — Wellness-Standards sind hoch, die Ausstattung erstklassig und die Atmosphäre entspannt und respektvoll.</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/ambiance-sauna-libertin.webp" alt="Ambiance libertiner Sauna Deutschland" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Was ist ein libertiner Sauna? */}
      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Was ist ein libertiner Sauna?</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Ein libertiner Sauna ist eine Einrichtung, die die Codes des traditionellen Spas mit der Freiheit libertiner Begegnungen verbindet. Sie finden Wellness-Ausstattung (Trockensauna, Hamam, Jacuzzi, Erlebnisduschen) zusammen mit privaten Räumen für Intimität und sinnliche Spiele.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Der Empfang erfolgt in völliger Diskretion. Sie erhalten ein Handtuch, einen Bademantel und ein Armband (manchmal farblich verschieden je nach Status: Paar, alleinstehende Frau, alleinstehender Mann). Sie bewegen sich frei zwischen den verschiedenen Bereichen: einige sind gemeinschaftlich und kontaktfördernd, andere privat für mehr Intimität.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Libertine Saunas ziehen hauptsächlich Paare zwischen 30 und 50 Jahren an, die eine elegante und respektvolle Erfahrung suchen. Alleinstehende Frauen sind generell willkommen. Alleinstehende Männer werden je nach Einrichtung und Zeitfenster akzeptiert, manchmal mit Quoten für ein ausgewogenes Verhältnis.</p>
        </div>
      </section>

      {/* Ausstattung */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Räume und typische Ausstattung</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Jeder libertine Sauna ist einzigartig, aber die meisten bieten ähnliche Bereiche, die Komfort, Hygiene und Sinnlichkeit vereinen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPEMENTS.map((e, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={e.img} alt={e.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-foreground mb-1">{e.title}</h4>
                  <p className="text-muted-foreground text-sm">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sauna vs. Club */}
      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Libertiner Sauna oder libertiner Club: Was ist der Unterschied?</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Beide Einrichtungstypen teilen eine libertine Philosophie, bieten aber radikal unterschiedliche Erfahrungen.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-3">🧖 Libertiner Sauna</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Intime und entspannte Atmosphäre</li>
                <li>• Sauna, Jacuzzi, Hamam im Zentrum</li>
                <li>• Ruhiger, ideal für Anfänger</li>
                <li>• Oft tagsüber geöffnet</li>
                <li>• Bademantel und Handtuch als Dresscode</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-3">💃 Libertiner Club</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Festliche und musikalische Atmosphäre</li>
                <li>• Tanzfläche, Bar, Themenabende</li>
                <li>• Lebhafter, strenger Dresscode</li>
                <li>• Hauptsächlich abends und nachts</li>
                <li>• Elegante oder sexy Kleidung verlangt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wie wählen */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Wie wählt man seinen libertinen Sauna?</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Nicht alle Saunas sind gleich. Hier sind die wesentlichen Kriterien, die Sie vor Ihrem ersten Besuch prüfen sollten.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: "✨", title: "Makellose Hygiene", desc: "Perfekte Sauberkeit, saubere Handtücher, Desinfektionsmittel verfügbar. Prüfen Sie die Mitgliederbewertungen." },
              { icon: "⭐", title: "Online-Reputation", desc: "Bevorzugen Sie auf AKOKY referenzierte Einrichtungen mit verifizierten Bewertungen und hoher Notation." },
              { icon: "🏊", title: "Moderne Ausstattung", desc: "Prüfen Sie Jacuzzi, Hamam, Finnische Sauna, Pool, VIP-Kabinen und Ruheräume." },
              { icon: "🚪", title: "Einlasspolitik", desc: "Stellen Sie sicher, dass Ihr Profil akzeptiert wird (Paar, alleinstehende Frau, alleinstehender Mann)." },
            ].map((c, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Städte-Karte */}
      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">Libertine Saunas in Deutschland entdecken</h2>
            <p className="text-muted-foreground">Finden Sie die besten libertinen Saunas in den großen deutschen Städten über das AKOKY-Verzeichnis.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {STAEDTE.map((l, i) => (
              <Link key={i} to={l.to} className="text-sm p-3 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition-colors text-center">
                → {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Erster Besuch */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Ihr erster Besuch im libertinen Sauna</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Empfang & Anmeldung", desc: "Am Eingang werden Sie diskret empfangen. Man erklärt Ihnen die Regeln, gibt Ihnen Bademantel, Handtuch und Armband." },
              { step: "2", title: "Umkleiden", desc: "Private Umkleidekabinen stehen zur Verfügung. Wertgegenstände werden in Schließfächern aufbewahrt." },
              { step: "3", title: "Wellness-Bereiche", desc: "Beginnen Sie mit Sauna, Hamam oder Jacuzzi. Diese Entspannungsphase erleichtert den natürlichen Kontakt." },
              { step: "4", title: "Erkunden", desc: "Bewegen Sie sich frei zwischen Lounge, Privatkabinen und Gemeinschaftsbereichen. Alles in Ihrem Tempo, ohne Druck." },
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Bereit, die besten libertinen Saunas in Deutschland zu entdecken?</h2>
          <p className="text-muted-foreground mb-6">Durchsuchen Sie das vollständige AKOKY-Verzeichnis mit verifizierten Bewertungen, Fotos und Veranstaltungskalender.</p>
          <Link to="/de/clubs" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">
            Zum vollständigen Verzeichnis →
          </Link>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {RELATED.map((l, i) => (
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

export default SaunasDe;
