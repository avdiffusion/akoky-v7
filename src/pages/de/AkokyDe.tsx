import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const faqAkoky = [
  {
    question: "Was ist AKOKY und wofür steht die Plattform?",
    answer: "AKOKY ist eine europäische Premium-Community-Plattform für Erwachsene, die sich auf Begegnungen, verifizierte Partner-Clubs und private Events spezialisiert hat. Sie richtet sich an Paare, Singles und neugierige Profile, die sich in einem strukturierten, respektvollen und sicheren Rahmen bewegen möchten."
  },
  {
    question: "Was unterscheidet AKOKY von anderen ähnlichen Plattformen?",
    answer: "Im Gegensatz zu anderen Plattformen kombiniert AKOKY ein Community-Netzwerk, ein Verzeichnis verifizierter Partner-Clubs, betreute private Events, exklusive Livestreams und einen ethischen Ansatz, der Einverständnis und Qualität der Begegnungen in den Mittelpunkt stellt."
  },
  {
    question: "Wie gewährleistet AKOKY Sicherheit und Diskretion?",
    answer: "Jedes Profil wird manuell moderiert, die Daten sind nach DSGVO-Standards geschützt und erweiterte Tools ermöglichen die Verwaltung der Sichtbarkeit von Profilen und Fotos. Der AKOKY Safe-Service verstärkt den Schutz der Mitglieder im Alltag."
  },
  {
    question: "Ist die Registrierung bei AKOKY kostenlos?",
    answer: "Ja. Die Registrierung ist kostenlos und ermöglicht die Erkundung der Plattform, der Partner-Clubs und der Events. Ein optionales VIP-Abonnement schaltet erweiterte Funktionen wie unbegrenzte Nachrichten und Zugang zu exklusiven Events frei."
  },
  {
    question: "Wer kann AKOKY nutzen?",
    answer: "AKOKY steht Paaren, alleinreisenden Frauen, alleinreisenden Männern (unter bestimmten Bedingungen), Singles und polyamourösen Profilen offen. Jedes Event gibt klar an, welche Profile zugelassen sind."
  },
  {
    question: "Bietet AKOKY Events für Anfänger an?",
    answer: "Ja. AKOKY organisiert einsteigerfreundliche Events wie Kennenlern-Aperitifs, geführte Club-Besichtigungen und pädagogische Abende. Ein spezieller Leitfaden ist ebenfalls verfügbar, um die Codes zu verstehen."
  }
];

const jsonSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AKOKY",
  "url": "https://akoky.com",
  "logo": "https://akoky.com/images/logo-akoky.webp",
  "description": "Premium libertine Community-Plattform in Europa",
  "foundingDate": "2014",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contact@akoky.com",
    "availableLanguage": ["fr", "es", "de", "it", "pt"]
  },
  "sameAs": [
    "https://www.facebook.com/akokyofficial",
    "https://www.instagram.com/akoky_official",
    "https://twitter.com/akoky_official"
  ]
};

const AkokyDe = () => {
  return (
    <>
      <HreflangTags slug="akoky" />
      <ContentPageLayout
        lang="de"
        title="Unsere Mission AKOKY – Premium-Community & Events für Erwachsene"
        description="Entdecke die Werte, Vision und Verpflichtungen der AKOKY-Community. Premium-Community-Plattform für Erwachsene in Europa."
        canonical="https://akoky.com/de/akoky"
        heroTitle="Unsere Mission AKOKY"
        heroSubtitle="Entdecke die Werte, Vision und Verpflichtungen der AKOKY-Community"
        heroImage="/images/akoky.webp"
        faq={faqAkoky}
        schema={jsonSchema}
      >
        {/* Mobile App */}
        <section className="py-16 px-4 bg-card">
          <div className="container max-w-5xl mx-auto">
            <span className="text-primary font-bold tracking-wider text-sm mb-2 block">Unsere Mission</span>
            <h2 className="text-3xl font-bold text-foreground mb-6">Die AKOKY App: Die Community-Erfahrung für Erwachsene in deiner Tasche</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Entstanden aus einem Community-Projekt, das 2014 initiiert und seit 2020 in seiner heutigen Form strukturiert wurde, entwickelt AKOKY eine <Link to="/de/app" className="text-primary hover:underline">Premium-Mobile-App</Link>, verfügbar auf iOS und Android.</p>
                  <p>Sie ermöglicht über <Link to="/de" className="text-primary hover:underline">1,5 Millionen Mitgliedern</Link> die Entdeckung <Link to="/de/libertine-clubs" className="text-primary hover:underline">verifizierter Partner-Clubs</Link>, die Teilnahme an <Link to="/de/events" className="text-primary hover:underline">privaten Events jeden Monat</Link> und den Zugang zu einem Ökosystem für moderne Erwachsenenbegegnungen, basierend auf Diskretion, Respekt und einem ethischen Ansatz zum Lifestyle.</p>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a href="https://akoky.com/application" className="px-6 py-3 bg-foreground text-background rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                    <span>📱</span> Für iOS herunterladen
                  </a>
                  <a href="https://akoky.com/application" className="px-6 py-3 border border-border text-foreground rounded-lg font-bold hover:bg-accent transition-colors flex items-center gap-2">
                    <span>🤖</span> Für Android herunterladen
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Kompatibel mit iOS 13+ | ChromeOS | Android TV</p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
                <img src="/images/3tel.webp" alt="AKOKY App Screenshot" className="relative z-10 rounded-2xl shadow-2xl border border-border mx-auto max-w-sm" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Unsere Zahlen */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold text-primary tracking-widest mb-12 uppercase">Unsere Zahlen</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "1.5M+", label: "Aktive Mitglieder", href: "/de" },
                { value: "120+", label: "Verifizierte Libertine Clubs", href: "/de/libertine-clubs" },
                { value: "300+", label: "Libertine Events/Monat", href: "/de/events" },
                { value: "20+", label: "Libertine Lives/Woche", href: "/de/live" },
              ].map((stat, i) => (
                <Link key={i} to={stat.href} className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary transition-colors">
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lexikon */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Vollständiges Libertines Lexikon: Das Vokabular des modernen Libertinismus</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Unser <Link to="/de/lexikon" className="text-primary hover:underline">libertines Lexikon</Link> umfasst über 200 wesentliche Begriffe zum Verständnis des <Link to="/de/libertinismus" className="text-primary hover:underline">modernen Libertinismus</Link>. Vom <strong className="text-foreground">Partnertausch</strong> zum <strong className="text-foreground">Mélangisme</strong>, vom <strong className="text-foreground">Candaulismus</strong> zum <strong className="text-foreground">Dreier</strong> – entdecke die präzisen Definitionen aller libertinen Praktiken. Ob du <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">Anfänger</Link> oder erfahrenes Mitglied bist, dieses libertine Wörterbuch hilft dir, dich in <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertinen Clubs</Link>, bei <Link to="/de/events" className="text-primary hover:underline">Events</Link> und auf unserer Plattform sicher zu bewegen.</p>
              <p>AKOKY unterscheidet sich von <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong>, <strong className="text-foreground">Libertic</strong> und <strong className="text-foreground">SexyLib</strong> durch seinen einzigartigen pädagogischen Ansatz. Unsere <Link to="/de/vision" className="text-primary hover:underline">ethische Charta</Link> stellt <strong className="text-foreground">ausdrückliches Einverständnis</strong>, <strong className="text-foreground">absolute Diskretion</strong> und <strong className="text-foreground">Respektierung der Grenzen</strong> in den Mittelpunkt jeder Interaktion.</p>
              <p>Erkunde unser Lexikon, um die Codes der <strong className="text-foreground">libertinen Abende</strong>, die Praktiken von <strong className="text-foreground">Soft Swap</strong> und <strong className="text-foreground">Full Swap</strong>, die Nuancen zwischen <strong className="text-foreground">Exhibitionismus</strong> und <strong className="text-foreground">Voyeurismus</strong> oder die Regeln des respektvollen <strong className="text-foreground">Gangbangs</strong> zu verstehen. Ob in <Link to="/de/saunas" className="text-primary hover:underline">libertinen Saunas</Link> oder in Clubs – jeder Begriff wird einfach und ohne Urteil erklärt, mit konkreten Beispielen aus den Erfahrungsberichten unserer <Link to="/de/bewertungen" className="text-primary hover:underline">Community von 1,5M Mitgliedern</Link>.</p>
              <p><strong className="text-foreground">Warum dieses Lexikon einzigartig ist:</strong> Im Gegensatz zu anderen Plattformen bereichert AKOKY sein Lexikon kontinuierlich mit dem Feedback der Community. Unsere Definitionen integrieren die Entwicklungen des <Link to="/de/libertinismus" className="text-primary hover:underline">modernen Libertinismus</Link>, neue Praktiken (wie <strong className="text-foreground">Throuple</strong> oder <strong className="text-foreground">ethische Polyamorie</strong>) und die spezifischen Codes jeder Region (Deutschland, Frankreich, Belgien, Spanien). Lade unsere <Link to="/de/app" className="text-primary hover:underline">App</Link> herunter, um offline auf das Lexikon zuzugreifen, wenn du in einem <Link to="/de/libertine-clubs" className="text-primary hover:underline">Club</Link> bist.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/de/lexikon" className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg">Das vollständige libertine Lexikon entdecken (200+ Begriffe) →</Link>
              <a href="https://www.youtube.com/@akoky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground font-medium hover:text-foreground text-lg">🎥 AKOKY YouTube-Kanal entdecken</a>
            </div>
          </div>
        </section>

        {/* Werte */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Die Grundwerte von AKOKY</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">AKOKY basiert auf einer klaren Vision moderner Erwachsenenbegegnungen: ein strukturierter Rahmen, eine bewusste Ethik und Regeln, die respektvolle, sichere und hochwertige Erfahrungen garantieren.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { num: "01", title: "Authentizität der Profile und des Austauschs", text: "AKOKY schätzt echte, transparente und kohärente Profile. Aufrichtigkeit steht über Inszenierung, um Erwachsenenbegegnungen zu fördern, die auf Vertrauen und klar formulierten Erwartungen basieren." },
                { num: "02", title: "Sicherheit, Vertraulichkeit und Datenschutz", text: "Die Plattform integriert fortschrittliche Sicherheitstools, aktive menschliche Moderation und rigorose Verwaltung persönlicher Daten, um die Diskretion und das Wohlbefinden jedes Mitglieds zu garantieren." },
                { num: "03", title: "Respekt, Einverständnis und klare Grenzen", text: "Ausdrückliches Einverständnis, Respektierung der Grenzen und Nulltoleranz gegenüber aufdringlichem oder unangemessenem Verhalten bilden die Grundlage aller Interaktionen auf AKOKY." },
                { num: "04", title: "Eleganz und verantwortungsvoller Lifestyle-Ansatz", text: "AKOKY vertritt eine raffinierte und verantwortungsvolle Vision des Erwachsenen-Lifestyles, abseits von Voyeurismus, Trash-Inhalten oder opportunistischen Plattformen, mit Fokus auf Qualität statt Quantität der Erfahrungen." },
              ].map((v, i) => (
                <div key={i} className="bg-card p-8 rounded-2xl border border-border">
                  <span className="text-4xl font-black text-muted/30 mb-4 block">{v.num}</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">{v.title}</h3>
                  <p className="text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-lg">Bei AKOKY sind Erwachsenenbegegnungen kein Vorwand. <strong className="text-foreground">Sie erfordern Verantwortung, Respekt und Reife.</strong></p>
          </div>
        </section>

        {/* Spiele */}
        <section className="py-16 px-4 bg-card/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm mb-2 block">🎲 Akoky Spiele</span>
                <h2 className="text-3xl font-bold text-foreground mb-4">Spiele auf deinem Handy… oder auf deinem Fernseher</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">Animierter Würfel, freche Aufgaben, totale Immersion. Die Akoky-Spiele sind dafür gemacht, deine Abende zu zweit oder zu mehreren aufzupeppen – auf dem Handy oder auf dem großen Bildschirm.</p>
                <Link to="/de/spiele" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">▶ Jetzt spielen – Kostenlos</Link>
                <p className="text-xs text-muted-foreground mt-4">📺 Kompatibel mit TV · Chromecast · Smart TV</p>
              </div>
              <div>
                <img src="/images/app-tv.webp" alt="Akoky Spiele auf Fernseher und großem Bildschirm" className="rounded-2xl shadow-2xl border border-border mx-auto" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Vollständige Mission */}
        <section className="py-16 px-4 bg-background">
          <div className="container max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground mb-4">Unsere Mission: Den Libertinismus mit Ethik und Transparenz revolutionieren</h2>
            <p>Gegründet <strong className="text-foreground">2014</strong> von einem Team leidenschaftlicher Anhänger des <Link to="/de/libertinismus" className="text-primary hover:underline">libertinen Lifestyles</Link>, ist AKOKY in 4 Jahren zu einer der <strong className="text-foreground">aktivsten libertinen Community-Plattformen in Europa</strong> mit 1,5 Millionen aktiven Mitgliedern geworden. Wir positionieren uns als die ethische Alternative zu <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong>, <strong className="text-foreground">Libertic</strong> und <strong className="text-foreground">SexyLib</strong>, indem wir <Link to="/de/vision" className="text-primary hover:underline">Einverständnis</Link> und <strong className="text-foreground">Transparenz</strong> in den Kern unserer DNA stellen.</p>
            <p>Unser einzigartiges Ökosystem kombiniert ein <strong className="text-foreground">sicheres libertines soziales Netzwerk</strong>, ein <Link to="/de/libertine-clubs" className="text-primary hover:underline">Verzeichnis von 120 verifizierten Clubs</Link> (Deutschland, Frankreich, Belgien, Spanien), <Link to="/de/events" className="text-primary hover:underline">300 monatliche Events</Link>, die von ausgebildeten Profis organisiert werden, <Link to="/de/live" className="text-primary hover:underline">20 wöchentliche libertine Livestreams</Link> und eine <Link to="/de/app" className="text-primary hover:underline">hochmoderne Mobile-App</Link> mit Echtzeit-Geolokalisierung. Jede Funktion ist darauf ausgelegt, <strong className="text-foreground">authentische libertine Begegnungen</strong> zu erleichtern und gleichzeitig <strong className="text-foreground">Diskretion</strong> und <strong className="text-foreground">Sicherheit</strong> zu garantieren.</p>
            <p>AKOKY ist nicht nur eine Dating-Seite: Es ist eine <strong className="text-foreground">wohlwollende Community</strong>, die <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">Anfänger</Link> mit einem <Link to="/de/lexikon" className="text-primary hover:underline">vollständigen Lexikon</Link>, einer <Link to="/de/faq" className="text-primary hover:underline">ausführlichen FAQ</Link>, einem <Link to="/de/blog" className="text-primary hover:underline">pädagogischen Blog</Link> und <Link to="/de/bewertungen" className="text-primary hover:underline">authentischen Erfahrungsberichten</Link> (Durchschnittsbewertung 4,7/5) begleitet. Unsere Mission: den modernen Libertinismus zu demokratisieren, Tabus zu brechen, ohne zu urteilen, und einen Raum zu schaffen, in dem Paare, Singles und Neugierige sich frei und im gegenseitigen Respekt entfalten können.</p>
          </div>
        </section>

        {/* Pressebereich */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">AKOKY Pressebereich – Mediendossier & offizielle Ressourcen</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Willkommen im Pressebereich von AKOKY (akoky.com), der führenden libertinen Plattform in Europa. Hier finden Sie alle unsere Pressemitteilungen, Mediendossiers, offizielle Visuals und Kontaktdaten für journalistische Anfragen.</p>
                <p className="text-muted-foreground leading-relaxed mb-4">Unsere Mission? Einen sicheren, modernen und authentischen Raum für Paare und Singles zu bieten, die den libertinen Lifestyle mit Eleganz und Respekt erkunden möchten.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">Sie möchten über AKOKY in Ihren Medien berichten? Kontaktieren Sie unser Presseteam für Interviews, HD-Visuals oder weitere Informationen.</p>
                <Link to="/de/presse" className="text-primary font-bold hover:underline">Zum Pressedossier →</Link>
              </div>
              <div>
                <img src="/images/akoky-presse.webp" alt="AKOKY Press Kit" className="rounded-2xl shadow-xl border border-border" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Sicherheit AKOKY Safe */}
        <section className="py-16 px-4 bg-background">
          <div className="container max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🛡️</span>
              <h2 className="text-3xl font-bold text-foreground">Maximale Sicherheit & Garantierte Diskretion: Der AKOKY-Unterschied</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Angesichts der Probleme mit <strong className="text-foreground">Fake-Profilen</strong> und <strong className="text-foreground">Datenlecks</strong> auf anderen libertinen Plattformen hat AKOKY <strong className="text-foreground">AKOKY Safe</strong> entwickelt, unser proprietäres dreischichtiges Sicherheitssystem. Jedes Profil wird <strong className="text-foreground">manuell verifiziert</strong> (Foto + optionaler Ausweis für das Zertifiziert-Badge), alle persönlichen Daten werden <strong className="text-foreground">Ende-zu-Ende verschlüsselt</strong> (Bankstandard AES-256), und unsere Infrastruktur ist <strong className="text-foreground">DSGVO-konform</strong> mit Hosting in Europa.</p>
              <p>Im Gegensatz zu anderen libertinen Seiten bietet AKOKY einen <strong className="text-foreground">Inkognito-Modus</strong> in der <Link to="/de/app" className="text-primary hover:underline">App</Link>, die Möglichkeit, Fotos automatisch unscharf zu machen (nur nach gegenseitiger Zustimmung sichtbar), und ein System der <strong className="text-foreground">ungefähren Geolokalisierung</strong> (Radius von 5-10km) zum Schutz deiner genauen Adresse. Deine <Link to="/de/events" className="text-primary hover:underline">Event-Buchungen</Link> und Besuche in <Link to="/de/libertine-clubs" className="text-primary hover:underline">Clubs</Link> bleiben streng vertraulich: Keine Information wird ohne deine ausdrückliche Zustimmung geteilt.</p>
              <p>Unser <strong className="text-foreground">24/7-Moderationsteam</strong> (Menschen, keine Bots) entfernt sofort unangemessene Inhalte, Belästigung oder Missachtung des <Link to="/de/vision" className="text-primary hover:underline">Einverständnisses</Link>. Ergebnis: AKOKY erreicht eine Zufriedenheitsrate von <strong className="text-foreground">4,7/5</strong> in Bezug auf Sicherheit laut unseren <Link to="/de/bewertungen" className="text-primary hover:underline">60+ verifizierten Erfahrungsberichten</Link>. Diskretion ist seit 2020 Teil unserer DNA.</p>
            </div>
            <div className="mt-6">
              <a href="https://safe.akoky.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">🛡️ AKOKY Safe entdecken →</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-card">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Bereit, der Community beizutreten?</h2>
            <p className="text-muted-foreground mb-8">Registriere dich kostenlos und entdecke eine Welt voller Möglichkeiten</p>
            <a href="https://app.akoky.com/register" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity">Mein kostenloses Konto erstellen</a>
          </div>
        </section>
      </ContentPageLayout>
    </>
  );
};

export default AkokyDe;
