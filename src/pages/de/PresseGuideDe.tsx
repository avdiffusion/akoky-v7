import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const BRANDING = [
  { img: "/images/branding/tshirts-akoky-premium.webp", alt: "AKOKY Premium T-Shirts und Kleidung mit AK-Logo" },
  { img: "/images/branding/casquette-akoky-premium.webp", alt: "AKOKY Premium Caps und Accessoires mit AK-Logo" },
  { img: "/images/branding/goodies-akoky-premium.webp", alt: "AKOKY Premium Goodies mit AK-Logo" },
  { img: "/images/branding/affiche-akoky-premium.webp", alt: "AKOKY Kommunikationsmaterialien mit AK-Logo" },
];

const FAQ = [
  { question: "Wie kontaktiere ich die AKOKY-Presseabteilung?", answer: "Sende eine E-Mail an presse@akoky.com mit deinem Medium, dem geplanten Thema und der Deadline. Unser Presseteam antwortet innerhalb von 48 Stunden." },
  { question: "Gibt es ein Presse-Kit zum Download?", answer: "Ja. Logos, Screenshots, hochauflösende Bilder und Markenmaterialien stehen auf Anfrage zur Verfügung. Kontaktiere presse@akoky.com." },
  { question: "Kann man die AKOKY-Gründer interviewen?", answer: "Ja. Unsere Gründer und unser Team stehen für Interviews zu Branchenthemen, Lifestyle und der Zukunft des Libertinismus in Europa zur Verfügung." },
  { question: "Wie wird man AKOKY-Affiliate-Partner?", answer: "Kontaktiere partenariats@akoky.com mit einer Beschreibung deines Clubs, Mediums oder deiner Plattform. Unser Team prüft jede Bewerbung individuell und antwortet innerhalb einer Woche." },
];

const PresseGuideDe = () => (
  <>
    <MetaTags
      title="Presse & Partnerschaften AKOKY – Medien-Kit & Kontakt | AKOKY"
      description="AKOKY Pressebereich: Mediendossier, grafische Ressourcen, Statistiken und Partnerschaftskontakt. Treten Sie dem europäischen Premium-Ökosystem bei."
      canonical="https://akoky.com/de/presse"
      lang="de"
      ogImage="/images/presse-libertine.webp"
    />
    <HreflangTags slug="presse" />
    <ContentPageLayout
      lang="de"
      title="Presse & Partnerschaften AKOKY"
      description="Presse-Kit, Medienressourcen und AKOKY-Partnerschaften"
      canonical="https://akoky.com/de/presse"
      heroTitle="Presse & Partnerschaften"
      heroSubtitle="AKOKY Pressebereich: Mediendossier, Statistiken und Kontakt für Medienbeziehungen."
      heroImage="/images/presse-libertine.webp"
      breadcrumb={[{ label: "Presse & Partnerschaften" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">AKOKY – Die europäische Premium-Plattform für Libertine</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">AKOKY ist weit mehr als eine einfache libertine Website: Es ist eine Premium-Plattform, die darauf ausgelegt ist, das europäische libertine Ökosystem zu strukturieren und zu modernisieren. Aus dem Wunsch der Gründer entstanden, eine elegante, sichere und respektvolle Alternative zu traditionellen libertinen Plattformen zu bieten, hat sich AKOKY heute als unverzichtbarer Akteur des Online-Libertinismus in Deutschland, Österreich, der Schweiz und ganz Europa etabliert.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">AKOKY vereint eine Community anspruchsvoller libertiner Paare, Frauen und Männer, die authentische Begegnungen in einem Premium-Rahmen suchen. Die Plattform bietet ein umfassendes Verzeichnis der libertinen Clubs Europas, einen Kalender für private Events, exklusive Lives sowie ein System verifizierter Profile und sicherer Nachrichten über AKOKY Safe.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Über die Plattform hinaus entwickelt AKOKY ein vollständiges Ökosystem: Merchandising, Partnerschaften mit europäischen Clubs, ein Affiliate-Programm für Branchenprofis und redaktionelle Inhalte, die eine freie, ungehemmte und respektvolle Sexualität fördern. Diese ganzheitliche Vision macht AKOKY zu einem seriösen, strukturierten und nachhaltigen Projekt.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Pressebereich & Medien</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Der AKOKY-Pressebereich richtet sich an Journalisten, Medien, Blogger und Kommunikationsprofis, die über die Neuigkeiten der modernsten libertinen Plattform Europas berichten möchten. Hier finden Sie alle Ressourcen, die Sie für die Erstellung Ihrer Artikel und Reportagen benötigen.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Ob Sie einen Artikel für ein Lifestyle-Magazin schreiben, ein Dossier für ein Fachmedium erstellen oder die Gründer von AKOKY interviewen möchten – unser Pressedossier bietet Ihnen alle Schlüssel zum Verständnis unseres Projekts und unserer Vision.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Verfügbar in FR, EN, ES, DE, IT, PT</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: "1,5M+", label: "Mitglieder" },
              { value: "120+", label: "Verifizierte Clubs" },
              { value: "300+", label: "Events/Monat" },
              { value: "6", label: "Sprachen" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="text-2xl font-black text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Affiliate-Programm & Partnerschaften by AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Treten Sie dem leistungsstärksten libertinen Affiliate-Programm Europas bei</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Das AKOKY-Affiliate-Programm richtet sich an libertine Clubs, Veranstalter privater Events, Fachmedien, Influencer und Profis der Erotikbranche, die ihre Reichweite monetarisieren und gleichzeitig ihrer Community einen hochwertigen Service bieten möchten. Als AKOKY-Affiliate-Partner werden Sie Teil eines Premium-Ökosystems, in dem Qualität, Ethik und Performance Hand in Hand gehen.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Sie betreiben einen libertinen Club in Europa? AKOKY bietet Ihnen maximale Sichtbarkeit bei Tausenden aktiver VIP-Mitglieder. Durch die Integration in unser Premium-Verzeichnis und unser Affiliate-Programm profitieren Sie von qualifiziertem Traffic, Online-Reservierungen und attraktiven Provisionen für jedes generierte Abonnement.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Ökosystem & Daten von AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Eine Plattform auf soliden und strukturierten Fundamenten</p>
          <p className="text-muted-foreground leading-relaxed mb-3">AKOKY wurde nicht in wenigen Wochen aufgebaut. Hinter der Plattform steckt eine enorme Grundlagenarbeit der Gründer und des technischen Teams: Erfassung, Strukturierung und permanente Aktualisierung einer umfassenden Datenbank über das europäische libertine Universum. Dieses Fundament zuverlässiger und verifizierter Daten bildet das Rückgrat aller unserer Dienstleistungen.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Strukturierte Datenbank mit europäischen libertinen Clubs inklusive verifizierter Kontaktdaten, Öffnungszeiten, Preisen, Fotos, zertifizierten Bewertungen und präziser Geolokalisierung. Wöchentliche Aktualisierung durch unser Team.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Visuelle Identität & Merchandising</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Die visuelle Welt von AKOKY im Dienste der Presse, Partner und Events</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Die visuelle Identität von AKOKY wurde entwickelt, um die Markenwerte zu verkörpern: Eleganz, Modernität, Sicherheit und Exzellenz. Vom minimalistischen Logo bis zu den sorgfältig gewählten Farbcodes – jedes grafische Element spiegelt die Premium-DNA der Plattform wider.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Über die digitale Plattform hinaus entwickelt AKOKY eine vollständige Produktlinie für Mitglieder, Partner und Events: T-Shirts, Caps, exklusive Goodies und Kommunikationsmaterialien.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {BRANDING.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={b.img} alt={b.alt} className="w-full h-full object-cover hover:scale-105 transition-transform" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">AKOKY-Partner werden</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Sie betreiben einen libertinen Club, organisieren Events, sind ein Fachmedium, eine Lifestyle-Marke oder ein Profi der Erotikbranche? Treten Sie dem AKOKY-Ökosystem bei und profitieren Sie von der Sichtbarkeit einer Premium-Plattform in vollem Wachstum.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Pressekontakt & Medienbeziehungen</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a href="mailto:presse@akoky.com" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">📩 presse@akoky.com</a>
            <a href="mailto:partenariats@akoky.com" className="border border-border px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors">🤝 partenariats@akoky.com</a>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default PresseGuideDe;
