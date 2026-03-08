import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Was bedeutet Soft Swap?", answer: "Soft Swap bezeichnet Praktiken ohne Penetration mit anderen Partnern. Umfasst Streicheleinheiten und sinnliche Spiele, wobei eine Form sexueller Exklusivität innerhalb des Paares erhalten bleibt." },
  { question: "Was ist der Unterschied zwischen Swingen und offener Beziehung?", answer: "Swingen findet typischerweise in einem Club- oder gemeinsamen Kontext statt und konzentriert sich auf körperliche Begegnungen. Offene Beziehungen können separate emotionale oder sexuelle Verbindungen beinhalten." },
  { question: "Was bedeutet Mélangisme?", answer: "Mélangisme beschreibt das Teilen intimer Momente im selben Raum ohne notwendigerweise Partner zu tauschen. Alle Beteiligten interagieren miteinander in einer offenen Gruppenatmosphäre." },
];

const LexikonDe = () => (
  <>
    <MetaTags
      title="Libertines Lexikon 2026 | 200+ Begriffe von A-Z definiert — AKOKY"
      description="Vollständiges libertines Wörterbuch: Swingen, Voyeurismus, Candaulismus, Triolismus und mehr. 200+ Definitionen für das Libertine-Vokabular."
      canonical="https://akoky.com/de/lexikon"
      lang="de"
    />
    <HreflangTags slug="lexikon" />
    <ContentPageLayout
      lang="de"
      title="Libertines Lexikon 2026 | 200+ Begriffe von A-Z definiert — AKOKY"
      description="Vollständiges libertines Wörterbuch: Swingen, Voyeurismus, Candaulismus, Triolismus und mehr. 200+ Definitionen für das Libertine-Vokabular."
      canonical="https://akoky.com/de/lexikon"
      heroTitle="Libertines Lexikon"
      heroSubtitle="Das vollständige Wörterbuch der libertinen Community: 200+ Begriffe verständlich erklärt."
      heroImage="/images/es-lexico-cover.webp"
      breadcrumb={[{ label: "Libertines Lexikon" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Das Libertine Referenzwörterbuch</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">In der libertinen Welt gibt es ein spezifisches Vokabular, das für Neuankömmlinge oft undurchdringlich erscheinen kann. Dieses Lexikon wurde entwickelt, um jedem – Anfänger oder Erfahrenen – dabei zu helfen, die verwendeten Begriffe zu verstehen und zu benutzen.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Schlüsselbegriffe</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Swingen / Partnertausch</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Der Partnertausch ist die bekannteste Form des libertinen Auslebens. Zwei Paare tauschen ihre Partner für intime Momente aus, auf Grundlage gegenseitigen Einverständnisses aller vier beteiligten Personen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Soft Swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Praktiken ohne Penetration mit anderen Partnern. Umfasst Streicheleinheiten, sinnliche Spiele und Momente der Komplizenschaft in Anwesenheit anderer Personen, wobei eine Form sexueller Exklusivität innerhalb des Paares erhalten bleibt.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Full Swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Vollständiger Tausch mit Penetration zwischen den Partnern mindestens zweier Paare. Erfordert klares Einverständnis und vorherige Diskussion über Grenzen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Candaulismus</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Eine Praktik, bei der eines der Paarmitglieder Vergnügen daran findet zu sehen oder zu wissen, dass sein Partner Geschlechtsverkehr mit einer anderen Person hat. Im Gegensatz zum Partnertausch, wo Gegenseitigkeit Standard ist, basiert Candaulismus auf asymmetrischem Vergnügen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Triolismus</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Geschlechtsverkehr zwischen drei Personen. Kann ein Paar sein, das eine dritte Person einlädt, oder drei Personen, die ohne besondere Hierarchie interagieren.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Voyeurismus / Exhibitionismus</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Voyeurismus ist die Lust, andere bei intimen Momenten zu beobachten. Exhibitionismus ist das Gegenteil: die Lust, bei intimen Momenten beobachtet zu werden. Diese beiden Praktiken sind oft komplementär.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Private Party</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ein libertiner Abend in einem privaten Ort (Wohnung, Villa) im Gegensatz zu Abenden in Clubs. Der Zugang ist auf Einladung und die Anzahl der Teilnehmer ist begrenzter.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Mélangisme</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Eine Praktik, bei der mehrere Personen oder Paare intime Momente im selben Raum teilen, ohne notwendigerweise Partner zu tauschen. Der Fokus liegt auf dem gemeinsamen Erlebnis.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Grundlegende Regeln</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Unabhängig vom verwendeten Vokabular gelten dieselben Grundprinzipien in der libertinen Community: freies und informiertes Einverständnis, Respekt für Grenzen, Diskretion und Würde aller Beteiligten.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LexikonDe;
