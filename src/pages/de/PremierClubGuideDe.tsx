import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Muss man vorab reservieren?", answer: "Ja, besonders für den ersten Besuch. Online-Reservierung über AKOKY ist der einfachste Weg." },
  { question: "Welcher Dresscode gilt?", answer: "Jeder Club hat seinen eigenen Dresscode. Generell: elegant für Männer, sexy oder elegant für Frauen. Prüfe das Club-Profil auf AKOKY." },
  { question: "Muss man teilnehmen?", answer: "Absolut nicht. Beim ersten Besuch schauen viele nur zu. Das Recht Nein zu sagen ist absolut." },
  { question: "Kann man allein kommen?", answer: "Ja. Alleinreisende Frauen sind sehr willkommen. Alleinreisende Männer unter bestimmten Bedingungen je nach Club." },
];

const PremierClubGuideDe = () => (
  <>
    <MetaTags title="Dein Erster Libertiner Club | Vollständiger Leitfaden — AKOKY" description="Alles für deinen ersten libertinen Club-Besuch: Dresscode, Regeln, Vorbereitung, Atmosphäre. Der vollständige Anfänger-Leitfaden." canonical="https://akoky.com/de/erster-libertiner-club" lang="de" ogImage="/images/es-primer-club-cover.webp" />
    <HreflangTags slug="erster-libertiner-club" />
    <ContentPageLayout lang="de" title="Dein Erster Libertiner Club" description="Vollständiger Leitfaden für deinen ersten Club-Besuch." canonical="https://akoky.com/de/erster-libertiner-club" heroTitle="Dein Erster Libertiner Club" heroSubtitle="Vollständiger Leitfaden für einen gelungenen ersten Besuch — ohne Stress, ohne Druck." heroImage="/images/es-primer-club-cover.webp" breadcrumb={[{ label: "Dein Erster Libertiner Club" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Vor dem Besuch</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📋 Den Richtigen Club Wählen</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Nicht alle Clubs sind gleich. Manche sind intimer, andere festlicher. Prüfe die Community-Bewertungen auf AKOKY, um den Club zu finden, der zu deiner Stimmung passt. Für den ersten Besuch empfehlen wir einen Club mit guten Anfänger-Bewertungen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">👗 Dresscode Verstehen</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Elegant, sexy oder thematisch — jeder Club hat seine eigene Kleiderordnung. Männer: dunkle Hose, Hemd. Frauen: Cocktailkleid, Dessous oder Latex. Sportschuhe und Jeans sind in den meisten Clubs nicht erlaubt.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Mit dem Partner Sprechen</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Besprecht eure Grenzen, Erwartungen und Stopp-Signale. Was wollt ihr erkunden? Was nicht? Ein klares gemeinsames Verständnis ist die Basis für eine gute Erfahrung.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Beim Ankommen</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🚪 Der Empfang</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Am Eingang werden Reservierung und Identität geprüft. Ihr bekommt eine Einführung in die Räumlichkeiten und Regeln. Handys werden in vielen Clubs abgegeben oder müssen ausgeschaltet werden.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🍸 Die Bekleidete Zone</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Beginnt in der Bar oder Lounge. Lernt die Atmosphäre kennen, trinkt etwas und beobachtet. Kein Zeitdruck — viele Paare verbringen den gesamten Abend nur in der bekleideten Zone.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Goldenen Regeln</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Niemals ohne Einverständnis anfassen. Ablehnung ohne Diskussion akzeptieren. Keine Fotos. Diskretion wahren. Auf Hygiene achten. Alkohol in Maßen.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Nach dem Abend</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Sprecht offen über eure Erfahrung. Was hat gefallen? Was nicht? Diese Kommunikation stärkt das Paar und hilft bei zukünftigen Entscheidungen.</p>

          <p className="text-muted-foreground leading-relaxed mb-4 mt-8">
            Entdecke <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertine Clubs in Deutschland</Link> oder lies unseren <Link to="/de/clubbing" className="text-primary hover:underline">Clubbing-Leitfaden</Link>.
          </p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierClubGuideDe;
