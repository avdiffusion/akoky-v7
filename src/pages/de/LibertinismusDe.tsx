import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const LibertinismusDe = () => (
  <>
    <MetaTags
      title="Moderner Libertinismus: Definition, Praktiken & Einverständnis | AKOKY"
      description="Entdecke den modernen Libertinismus 2026: respektvolle Praktiken, kulturelle Entwicklung und Schlüssel für eine aufgeklärte Erkundung."
      canonical="https://akoky.com/de/libertinismus"
      lang="de"
      ogImage="/images/libertinage-cover.webp"
    />
    <HreflangTags slug="libertinismus" />
    <ContentPageLayout
      lang="de"
      title="Moderner Libertinismus: Definition, Praktiken & Einverständnis"
      description="Der Libertinismus 2026: respektvolle Praktiken und Schlüssel für eine aufgeklärte Erkundung."
      canonical="https://akoky.com/de/libertinismus"
      heroTitle="Moderner Libertinismus: Definition, Praktiken & Einverständnis"
      heroSubtitle="Entdecke dieses Universum 2026: respektvolle Praktiken, kulturelle Entwicklung und Schlüssel für eine aufgeklärte Erkundung."
      heroImage="/images/libertinage-cover.webp"
      breadcrumb={[{ label: "Libertinismus" }]}
      faq={[
        { question: "Ist Libertinismus gleich Partnertausch?", answer: "Partnertausch ist eine spezifische Praxis, bei der Paare ihre Partner tauschen. Aber dieses Universum umfasst viel mehr: Dreier, Mélangisme, Candaulismus, Voyeurismus, Exhibitionismus." },
        { question: "Kann man als Single praktizieren?", answer: "Ja. Einzelne Frauen sind sehr willkommen. Einzelne Männer werden je nach Einrichtung unter bestimmten Bedingungen akzeptiert." },
        { question: "Wird das Einverständnis wirklich respektiert?", answer: "In seriösen Clubs und bei Events ist Einverständnis die absolute Regel. Ein 'Nein' wird immer sofort respektiert." },
        { question: "Was ist der Unterschied zwischen Soft Swap und Full Swap?", answer: "Soft Swap umfasst sinnliche Berührungen und Küsse mit anderen Partnern ohne Geschlechtsverkehr. Full Swap beinhaltet den vollständigen Partnertausch inklusive Geschlechtsverkehr." },
        { question: "Wie schützt man seine Privatsphäre?", answer: "Diskretion ist oberstes Gebot. Die meisten Clubs verbieten Fotos und Videos. AKOKY bietet verifizierte Profile und sichere Kommunikation. Pseudonyme werden empfohlen." },
        { question: "Ist Libertinismus legal in Deutschland?", answer: "Ja. Einvernehmliche sexuelle Aktivitäten zwischen Erwachsenen sind in Deutschland legal. Swingerclubs operieren als private Clubs und unterliegen den geltenden Gesetzen." },
      ]}
      schema={{ "@context": "https://schema.org", "@type": "Article", name: "Moderner Libertinismus", url: "https://akoky.com/de/libertinismus" }}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-16">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div><p className="text-3xl font-black text-primary">1,5M</p><p className="text-muted-foreground text-sm">Aktive Mitglieder</p></div>
            <div><p className="text-3xl font-black text-primary">120+</p><p className="text-muted-foreground text-sm">Verifizierte Clubs</p></div>
            <div><p className="text-3xl font-black text-primary">300</p><p className="text-muted-foreground text-sm">Events/Monat</p></div>
          </div>

          {/* Was ist Libertinismus? */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Was ist Libertinismus heute?</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>Dieser Lebensstil ist oft von Fantasien, Vorurteilen und Darstellungen umgeben, die die Realität nur teilweise widerspiegeln. Weit entfernt von Klischees ist der moderne Libertinismus vor allem ein freier, einvernehmlicher und bewusster Ansatz, der auf Dialog, Respekt und gegenseitigem Vertrauen basiert.</p>
              <p>Historisch bezeichnete der Begriff „Libertin" eine Person, die sich von moralischen oder religiösen Regeln befreit hatte. Heute beschreibt diese Philosophie eine sexuelle und relationale Praxis, die darin besteht, die eigene Sexualität jenseits des exklusiven Rahmens der traditionellen monogamen Beziehung zu erkunden.</p>
              <p>In Deutschland hat der Libertinismus eine lange Tradition der Offenheit. Von der <Link to="/de/libertine-clubs" className="text-primary hover:underline">lebendigen Clubszene in Berlin</Link> bis zu den <Link to="/de/saunas" className="text-primary hover:underline">libertinen Saunas in München</Link> – das Land bietet ein vielfältiges Angebot für alle, die diesen Lebensstil erkunden möchten.</p>
            </div>
          </div>

          {/* Praktiken */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Die verschiedenen Formen des Libertinismus</h2>
            <div className="space-y-6">
              {[
                { title: "Soft-Praktiken", desc: "Erfahrungen ohne Penetration mit anderen Partnern. Austausch von Zärtlichkeiten, sinnliche Spiele. Oft ein erster Schritt für Anfängerpaare." },
                { title: "Partnertausch (Swinging)", desc: "Zwei Paare tauschen ihre Partner für intime Momente. Basiert auf gegenseitigem Einverständnis aller vier beteiligten Personen." },
                { title: "Candaulismus", desc: "Einer der Partner empfindet Freude daran, den anderen bei intimen Handlungen mit einer dritten Person zu sehen oder davon zu wissen." },
                { title: "Dreier (Triolismus)", desc: "Sexuelle Beziehung zu dritt. Ein Paar lädt eine dritte Person ein. Eine der beliebtesten Fantasien und libertinen Praktiken." },
                { title: "Offene Beziehungen", desc: "Die Partner erlauben sich gegenseitig, Beziehungen mit anderen Personen zu haben, oft getrennt voneinander." },
                { title: "Mélangisme", desc: "Sinnliche Berührungen und Küsse mit anderen Paaren, aber ohne vollständigen Geschlechtsverkehr. Ideal für den sanften Einstieg." },
              ].map((p, i) => (
                <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Einverständnis */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Das Paar und das Einverständnis</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">Das Einverständnis ist der Grundpfeiler jeder Erkundung. Ohne freies, aufgeklärtes und enthusiastisches Einverständnis kann es keine gesunde Praxis geben.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "✅", text: "Das Einverständnis kann jederzeit zurückgezogen werden" },
                { icon: "❌", text: "Schweigen ist KEIN Einverständnis" },
                { icon: "❌", text: "Zögern ist KEIN Einverständnis" },
                { icon: "✅", text: "Nur ein klares und enthusiastisches 'Ja' ist Einverständnis" },
              ].map((r, i) => (
                <div key={i} className="p-4 bg-card/50 rounded-xl border border-border flex items-center gap-3">
                  <span className="text-xl">{r.icon}</span>
                  <p className="text-muted-foreground font-medium">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Für wen? */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 font-display">An wen richtet sich dieses Universum?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "💑", title: "Etablierte Paare", desc: "Die Mehrheit der Praktizierenden, auf der Suche nach neuen Erfahrungen und gestärkter Komplizenschaft." },
                { icon: "👥", title: "Singles", desc: "Männer und Frauen haben ihren Platz in diesem Milieu, mit unterschiedlichen Zugängen je nach Einrichtung." },
                { icon: "🌈", title: "Alle Orientierungen", desc: "Heterosexuell, bisexuell, homosexuell oder pansexuell: Vielfalt ist ein Reichtum in der libertinen Welt." },
              ].map((p, i) => (
                <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border text-center">
                  <span className="text-3xl mb-3 block">{p.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Libertinismus in Deutschland */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Der Libertinismus in Deutschland</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>Deutschland hat eine der lebendigsten libertinen Szenen Europas. <strong className="text-foreground">Berlin</strong> ist weltberühmt für seine offene Clubkultur und beherbergt einige der progressivsten <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertinen Clubs</Link> des Kontinents. Die FKK-Tradition hat dazu beigetragen, eine Kultur der Körperpositivität und Offenheit zu fördern.</p>
              <p><strong className="text-foreground">München</strong>, <strong className="text-foreground">Hamburg</strong> und <strong className="text-foreground">Köln</strong> bieten ebenfalls eine reiche Auswahl an <Link to="/de/clubs" className="text-primary hover:underline">Swingerclubs und Saunas</Link>. Jede Stadt hat ihren eigenen Charakter: hanseatische Eleganz in Hamburg, bayerische Gemütlichkeit in München, rheinische Lebensfreude in Köln.</p>
              <p>AKOKY organisiert monatlich über 300 <Link to="/de/events" className="text-primary hover:underline">Events in ganz Europa</Link>, darunter zahlreiche in deutschen Großstädten. Von Afterworks über Themenabende bis hin zu exklusiven Wochenenden — die Möglichkeiten sind vielfältig.</p>
            </div>
          </div>

          {/* Die Orte */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Die Orte des Libertinismus</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🏛️", title: "Swingerclubs", desc: "Festliche Atmosphäre mit Bar, Tanzfläche und privaten Räumen. Themenabende und internationale Events.", link: "/de/libertine-clubs" },
                { icon: "♨️", title: "Libertine Saunas", desc: "Wellness und Sinnlichkeit: Hammam, Jacuzzi, Dampfbad und Entspannungsbereiche in respektvoller Atmosphäre.", link: "/de/saunas" },
                { icon: "🏰", title: "Private Locations", desc: "Villen und exklusive Orte für Events auf Einladung. Die intimste Form des libertinen Erlebnisses.", link: "/de/events" },
              ].map((p, i) => (
                <Link key={i} to={p.link} className="p-6 bg-card/50 rounded-2xl border border-border hover:border-primary/30 transition-colors text-center group">
                  <span className="text-4xl mb-3 block">{p.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Ressourcen */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Ressourcen zum Weiterlesen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Libertinismus anfangen", link: "/de/libertinismus-anfangen" },
                { title: "Libertines Lexikon", link: "/de/lexikon" },
                { title: "Events & Abende", link: "/de/events" },
                { title: "Unsere Vision", link: "/de/vision" },
                { title: "Clubs & Saunas Verzeichnis", link: "/de/clubs" },
                { title: "AKOKY vs Wyylde", link: "/de/akoky-vs-wyylde" },
                { title: "Libertine Spiele", link: "/de/spiele" },
                { title: "VIP-Status", link: "/de/vip" },
              ].map((r, i) => (
                <Link key={i} to={r.link} className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors text-foreground font-medium">{r.title} →</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LibertinismusDe;
