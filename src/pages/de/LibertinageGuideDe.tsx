import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Was ist Libertinismus?", answer: "Libertinismus ist eine einvernehmliche Lebensweise zwischen Erwachsenen, die sexuelle und sinnliche Erfahrungen außerhalb der traditionellen Paarbeziehung erkunden — immer basierend auf Einverständnis, Respekt und Kommunikation." },
  { question: "Ist Libertinismus legal?", answer: "Ja. Einvernehmliche Praktiken zwischen Erwachsenen sind in Deutschland und Europa legal. Libertine Clubs operieren im Rahmen der geltenden Gesetze." },
  { question: "Welche Praktiken gibt es?", answer: "Soft Swap (ohne Penetration), Full Swap (Partnertausch), Mélangisme (gemeinsame Erlebnisse im selben Raum), Candaulismus (voyeuristische Dimension), Triolismus und viele weitere Varianten." },
  { question: "Wie unterscheidet sich Libertinismus von offener Beziehung?", answer: "Libertinismus wird typischerweise gemeinsam als Paar praktiziert, während offene Beziehungen separate Verbindungen erlauben. Im Libertinismus ist das Paar die zentrale Einheit." },
];

const LibertinageGuideDe = () => (
  <>
    <MetaTags title="Libertinismus in 2026 | Vollständiger Leitfaden — AKOKY" description="Alles über Libertinismus: Definition, Praktiken, Einwilligung, Geschichte und Werte. Der vollständige Leitfaden für Einsteiger und Erfahrene." canonical="https://akoky.com/de/libertinismus-guide" lang="de" ogImage="/images/es-libertinaje-cover.webp" />
    <HreflangTags slug="libertinismus-guide" />
    <ContentPageLayout lang="de" title="Libertinismus in 2026 | Vollständiger Leitfaden — AKOKY" description="Alles über Libertinismus: Definition, Praktiken, Einwilligung." canonical="https://akoky.com/de/libertinismus-guide" heroTitle="Moderner Libertinismus" heroSubtitle="Definition, Praktiken und Werte — alles über Libertinismus in 2026" heroImage="/images/es-libertinaje-cover.webp" breadcrumb={[{ label: "Moderner Libertinismus" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Was ist Libertinismus?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Libertinismus bezeichnet eine Lebensweise, bei der Erwachsene einvernehmlich sexuelle und sinnliche Erfahrungen jenseits der traditionellen Paarbeziehung erkunden. Im Gegensatz zu verbreiteten Vorurteilen basiert moderner Libertinismus auf klaren Werten: Einverständnis, Kommunikation, Respekt und Diskretion.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">In Deutschland und Europa hat sich der Libertinismus in den letzten Jahren stark weiterentwickelt — weg von einem Tabu hin zu einer anerkannten Lebensweise mit einer vielfältigen und wachsenden Community.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Hauptpraktiken</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Soft Swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Sinnliche Begegnungen ohne Penetration mit anderen Partnern. Umfasst Streicheleinheiten, Küsse und gemeinsame erotische Erlebnisse, während eine Form sexueller Exklusivität innerhalb des Paares erhalten bleibt.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Full Swap (Partnertausch)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Vollständiger Austausch von Partnern zwischen Paaren. Die klassischste Form des Libertinismus, praktiziert in Clubs, bei privaten Treffen oder organisierten Events.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Mélangisme</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Gemeinsame intime Momente im selben Raum ohne notwendigerweise Partner zu tauschen. Alle Beteiligten interagieren in einer offenen Gruppenatmosphäre.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Candaulismus & Voyeurismus</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Candaulismus ist die Erregung, den eigenen Partner bei intimen Handlungen mit einer anderen Person zu beobachten. Voyeurismus und Exhibitionismus sind weitere Facetten, die in libertinen Clubs einen geschützten Rahmen finden.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Grundwerte</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🤝 Einverständnis</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Die absolute Grundregel: Jede Interaktion erfordert das freie, informierte und enthusiastische Einverständnis aller Beteiligten. Das Recht Nein zu sagen ist jederzeit gültig und wird ohne Frage akzeptiert.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Kommunikation</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Offene Kommunikation vor, während und nach jeder Erfahrung ist essenziell. Grenzen, Wünsche und Bedenken werden klar besprochen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Diskretion</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Was in der libertinen Welt geschieht, bleibt dort. Absolute Diskretion gegenüber der Außenwelt ist ein ungeschriebenes Gesetz.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Entdecke Mehr</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bereit für den ersten Schritt? Entdecke unseren <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">Leitfaden für Anfänger</Link>, finde <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertine Clubs in Deutschland</Link> oder erkunde die <Link to="/de/events" className="text-primary hover:underline">aktuellen Events</Link>.
          </p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default LibertinageGuideDe;
