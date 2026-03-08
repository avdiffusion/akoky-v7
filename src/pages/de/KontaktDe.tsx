import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Wie kontaktiert man den AKOKY-Support?", answer: "Über unser Online-Formular, per E-Mail an support@akoky.com oder aus Ihrem Mitgliederbereich. Unser Team antwortet innerhalb von 24 Arbeitsstunden." },
  { question: "Bietet AKOKY Support auf Deutsch an?", answer: "Ja. Unser Support ist auf Deutsch, Französisch, Spanisch, Italienisch und Portugiesisch verfügbar." },
  { question: "Wie meldet man ein problematisches Profil?", answer: "Nutzen Sie die 'Melden'-Schaltfläche auf jedem Profil. Unser Moderationsteam bearbeitet jede Meldung innerhalb von 2 Stunden." },
  { question: "Wie lange dauert eine Antwort?", answer: "Wir antworten in der Regel innerhalb von 24 Arbeitsstunden. Dringende Anfragen werden priorisiert behandelt." },
  { question: "Ist meine Nachricht vertraulich?", answer: "Absolut. Alle Ihre Kommunikationen mit AKOKY sind streng vertraulich und durch unser Verschlüsselungssystem AKOKY Safe geschützt." },
];

const KontaktDe = () => (
  <>
    <MetaTags
      title="AKOKY Deutschland | Kontakt — Support & Premium-Assistance"
      description="Kontaktieren Sie AKOKY: Mitglieder-Support, Partner-Anfragen, Presse und Affiliate. Team 24h verfügbar für die Premium libertine Plattform."
      canonical="https://akoky.com/de/kontakt"
      lang="de"
    />
    <HreflangTags slug="kontakt" />
    <ContentPageLayout
      lang="de"
      title="AKOKY Deutschland | Kontakt — Support & Premium-Assistance"
      description="Kontaktieren Sie AKOKY: Mitglieder-Support, Partner-Anfragen, Presse und Affiliate."
      canonical="https://akoky.com/de/kontakt"
      heroTitle="AKOKY Kontaktieren"
      heroSubtitle="Eine Frage? Unser Team steht Ihnen 24h zur Verfügung."
      heroImage="/images/es-contacto-cover.webp"
      breadcrumb={[{ label: "Kontakt" }]}
      faq={FAQ}
      schema={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Kontakt AKOKY Deutschland", url: "https://akoky.com/de/kontakt" }}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">

          {/* Intro */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">AKOKY kontaktieren: Support & Assistance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Das AKOKY-Team steht Ihnen für alle Fragen zur Verfügung. Ob Sie als Mitglied technischen Support suchen, als Journalist unsere Plattform abdecken möchten, als libertiner Club an einer Partnerschaft interessiert sind oder als Profi unserem Affiliate-Programm beitreten möchten — wir begleiten Sie.</p>
            <p className="text-muted-foreground leading-relaxed">Unser Engagement: Ihnen eine Premium- und sichere Erfahrung zu bieten. Jede Nachricht wird mit Sorgfalt, Vertraulichkeit und Professionalität behandelt.</p>
          </div>

          {/* Kontaktinfos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📧", title: "E-Mail", info: "contact@akoky.com", sub: "Antwort in 24-72h" },
              { icon: "📞", title: "Telefon", info: "00 00 00 00 00", sub: "Mo-Fr 9-18 Uhr" },
              { icon: "📍", title: "Adresse", info: "Paris, Frankreich", sub: "Hauptsitz" },
              { icon: "🕐", title: "Öffnungszeiten", info: "9:00 - 18:00 Uhr", sub: "Montag bis Freitag" },
            ].map((c, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border text-center">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-1">{c.title}</h3>
                <p className="text-foreground font-medium">{c.info}</p>
                <p className="text-muted-foreground text-sm">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Formular Placeholder */}
          <div className="p-8 bg-card/50 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Senden Sie uns eine Nachricht</h3>
            <p className="text-muted-foreground leading-relaxed">Füllen Sie das untenstehende Formular aus und wir antworten Ihnen schnellstmöglich. Für dringende Anfragen schreiben Sie bitte "DRINGEND" in den Betreff.</p>
          </div>

          {/* FAQ inline */}
          <div className="p-8 bg-card/50 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Häufig gestellte Fragen</h3>
            <div className="space-y-6">
              {[
                { q: "Wie lange dauert eine Antwort?", a: "Wir antworten in der Regel innerhalb von 24 Arbeitsstunden. Dringende Anfragen werden priorisiert behandelt. Für einfache Fragen konsultieren Sie zuerst unsere vollständige FAQ." },
                { q: "Telefonischer Support verfügbar?", a: "Ja, Montag bis Freitag von 9 bis 18 Uhr. Für VIP-Mitglieder ist ein Prioritäts-Support mit erweiterten Zeiten bis 20 Uhr verfügbar." },
                { q: "Notfall?", a: "Für Notfälle (Sicherheitsproblem, kompromittiertes Konto) kontaktieren Sie uns sofort telefonisch oder über das Formular mit 'DRINGEND' im Betreff." },
                { q: "Ist meine Nachricht vertraulich?", a: "Absolut. Alle Ihre Kommunikationen mit AKOKY sind streng vertraulich und durch unser Verschlüsselungssystem AKOKY Safe geschützt. Keine Daten werden jemals geteilt." },
              ].map((f, i) => (
                <div key={i}>
                  <h4 className="text-foreground font-semibold mb-1">{f.q}</h4>
                  <p className="text-muted-foreground text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Spezifische Kontakte */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Weitere Kontaktmöglichkeiten</h3>
            <p className="text-muted-foreground mb-6">Je nach Art Ihrer Anfrage können Sie uns auch über unsere spezialisierten Kanäle für eine schnellere und persönlichere Antwort erreichen.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: "🎙️", title: "Presse-Kontakt", desc: "Journalisten, Medien und Blogger: Zugang zu Pressemitteilungen, Mediendossiers und Interview-Anfragen mit unserem Team.", link: "/de/werbung" },
                { icon: "🤝", title: "Club-Partnerschaften", desc: "Sie betreiben einen libertinen Club und möchten dem AKOKY-Netzwerk beitreten? Kontaktieren Sie unser Partnerschaftsteam für dedizierte Angebote.", link: "/de/werbung" },
                { icon: "💼", title: "Affiliate-Programm", desc: "Content-Ersteller, Influencer und Profis: Treten Sie unserem Affiliate-Programm bei und profitieren Sie von attraktiven Provisionen.", link: "/de/werbung" },
              ].map((c, i) => (
                <Link key={i} to={c.link} className="p-6 bg-card/50 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                  <span className="text-3xl mb-3 block">{c.icon}</span>
                  <h4 className="text-lg font-bold text-foreground mb-2">{c.title}</h4>
                  <p className="text-muted-foreground text-sm">{c.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Support-Details */}
          <section className="py-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Mitglieder-Support im Detail</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: "🔒", title: "Konto & Sicherheit", desc: "Passwort vergessen, kompromittiertes Konto, Zwei-Faktor-Authentifizierung, Kontoeinstellungen und Datenschutz." },
                { icon: "💎", title: "VIP & Premium", desc: "Fragen zu VIP-Abonnements, Premium-Funktionen, Rechnungen und exklusiven Vorteilen für Mitglieder." },
                { icon: "🛡️", title: "Moderation", desc: "Profil melden, unangemessene Inhalte, Belästigung oder Verstoß gegen die Community-Richtlinien." },
                { icon: "📱", title: "App & Technik", desc: "Technische Probleme mit der App, Benachrichtigungen, Kompatibilität und Software-Updates." },
              ].map((c, i) => (
                <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                  <span className="text-2xl mb-2 block">{c.icon}</span>
                  <h4 className="font-bold text-foreground mb-1">{c.title}</h4>
                  <p className="text-muted-foreground text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Maillage interne */}
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            {[
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/vip", label: "VIP" },
              { to: "/de/app", label: "AKOKY App" },
              { to: "/de/vision", label: "Vision" },
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

export default KontaktDe;
