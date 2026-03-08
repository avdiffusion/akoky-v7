import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Ist das Empfehlungsprogramm kostenlos?", answer: "Ja. Die Teilnahme am Empfehlungsprogramm ist für alle AKOKY-Mitglieder völlig kostenlos." },
  { question: "Wann werden die Vorteile vergeben?", answer: "Vorteile werden automatisch vergeben, wenn das neue Mitglied sein Konto mit deinem Empfehlungslink aktiviert." },
  { question: "Gibt es ein Limit bei Empfehlungen?", answer: "Nein. Du kannst so viele Personen einladen wie du möchtest. Je mehr du einlädst, desto mehr Vorteile sammelst du." },
];

const WerbungDe = () => (
  <>
    <MetaTags
      title="AKOKY Empfehlungsprogramm | Freunde Einladen und Vorteile Gewinnen"
      description="Lade deine Freunde zu AKOKY ein und gewinne exklusive Vorteile: VIP-Zugang, kostenlose Events und mehr. Das Empfehlungsprogramm der libertinen Community."
      canonical="https://akoky.com/de/empfehlung"
      lang="de"
    />
    <HreflangTags slug="empfehlung" />
    <ContentPageLayout
      lang="de"
      title="AKOKY Empfehlungsprogramm | Freunde Einladen und Vorteile Gewinnen"
      description="Lade deine Freunde zu AKOKY ein und gewinne exklusive Vorteile: VIP-Zugang, kostenlose Events und mehr. Das Empfehlungsprogramm der libertinen Community."
      canonical="https://akoky.com/de/empfehlung"
      heroTitle="AKOKY Empfehlungsprogramm"
      heroSubtitle="Freunde einladen, exklusive Vorteile gewinnen und deine Community wachsen lassen."
      breadcrumb={[{ label: "AKOKY Empfehlungsprogramm" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Wie Funktioniert Das Empfehlungsprogramm?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Das AKOKY-Empfehlungsprogramm belohnt dich dafür, die Community wachsen zu lassen. Jedes neue Mitglied, das sich mit deinem Empfehlungslink registriert, gibt dir Anspruch auf exklusive Vorteile: kostenlose VIP-Tage, bevorzugten Zugang zu Events und vieles mehr.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Deine Vorteile</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Kostenlose VIP-Tage</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Für jeden Freund, der sich mit deinem Link registriert und sein Konto aktiviert, erhältst du kostenlose VIP-Abonnementtage. Je mehr Freunde du einlädst, desto länger genießt du VIP-Vorteile.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Bevorzugter Zugang zu Events</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Die besten Empfehlenden erhalten bevorzugten Zugang zu AKOKYs exklusivsten Events: private Villen-Abende, Themen-Wochenenden und VIP-Erlebnisse.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Empfehlungs-Badge</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Mitglieder, die neue Mitglieder zur Community gebracht haben, erhalten ein spezielles Badge, das auf ihrem Profil sichtbar ist. Eine Anerkennung deines Beitrags zur Community.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Wie Anfangen?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Greife auf deinen AKOKY-Mitgliederbereich zu, gehe zum Abschnitt &#39;Empfehlung&#39; und kopiere deinen persönlichen Link. Teile ihn mit deinen Freunden, in sozialen Netzwerken oder wo auch immer. Jede Registrierung mit deinem Link wird automatisch gezählt.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Bedingungen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Das Empfehlungsprogramm ist kostenlos und für alle AKOKY-Mitglieder offen. Vorteile werden automatisch vergeben, wenn das neue Mitglied sein Konto mit deinem Link aktiviert. Es werden keine Barprovisionen gezahlt: Alle Belohnungen sind als Plattformvorteile.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default WerbungDe;
