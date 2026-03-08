import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Wie nehme ich an meinem ersten AKOKY-Event teil?", answer: "Erstelle dein kostenloses Profil auf Akoky.com, durchsuche die kommenden Events in deiner Region, lies die Beschreibungen und Voraussetzungen aufmerksam und buche online. Anfänger sind immer willkommen! Wir empfehlen, mit einem libertinen Afterwork zu beginnen, um die Community in entspannter Atmosphäre kennenzulernen. Besuche unseren vollständigen Leitfaden zum Einstieg in den Libertinismus." },
  { question: "Sind die Events nur für Paare?", answer: "Nein, AKOKY organisiert Events für alle Profile: Paare (hetero, homo, bi), Single-Frauen, Single-Männer (nach Quoten für ein ausgewogenes Verhältnis) und Freundesgruppen. Jede Event-Beschreibung gibt klar an, welche Profile zugelassen sind. Einzelne Frauen sind generell ohne Einschränkung willkommen, während einzelne Männer eine Vorauswahl durchlaufen, um die Qualität des Erlebnisses für alle zu garantieren." },
  { question: "Was kostet ein Event durchschnittlich?", answer: "Die Preise variieren je nach Event-Typ: 20-40€ für Club-Abende, 15-25€ für libertine Afterworks, 80-150€ für private Themenabende und 200-500€ für exklusive Wochenenden in Villen oder Resorts. VIP-Mitglieder profitieren von bis zu 30% Rabatt auf alle Events. Informiere dich in der jeweiligen Event-Beschreibung über Details und aktuelle Aktionen." },
  { question: "Wie storniere ich eine Reservierung?", answer: "Die Stornierung ist bis 48 Stunden vor Eventbeginn kostenlos. Du kannst direkt über deinen Mitgliederbereich auf der Website oder über die AKOKY-App stornieren. Nach der 48-Stunden-Frist können Stornogebühren anfallen (in der Regel 50% des Betrags). Bei höherer Gewalt (Krankheit, Notfall) kontaktiere unseren Kundenservice, der deine Situation prüfen wird." },
  { question: "Respektieren AKOKY-Events das Einverständnis?", answer: "Absolut. Einverständnis ist die Grundlage unserer ethischen Charta. Alle unsere Events folgen strengen Protokollen: speziell geschultes Personal für die Einhaltung von Grenzen, anerkanntes Safe-Word-System, verfügbare Rückzugsräume, Präsenz eines aufmerksamen Moderationsteams. Jedes unangemessene Verhalten führt zu einem sofortigen und endgültigen Ausschluss von der Plattform." },
  { question: "Wo finden die AKOKY-Events statt?", answer: "Unsere Events finden in den renommiertesten libertinen Clubs und sorgfältig ausgewählten Einrichtungen in Deutschland und Europa statt. Um die Diskretion aller zu gewährleisten, werden genaue Adressen nur an eingeschriebene und validierte Teilnehmer mitgeteilt, in der Regel 48 Stunden vor dem Event. Alle unsere Partnerlocations erfüllen hohe Standards in Bezug auf Hygiene, Sicherheit und Vertraulichkeit." },
  { question: "Wie oft werden AKOKY-Events organisiert?", answer: "AKOKY organisiert über 300 Events pro Monat in ganz Europa. Das umfasst: Club-Abende mehrmals pro Woche in Großstädten, regelmäßige libertine Afterworks (2-3 Mal pro Woche in Metropolen), monatliche Themenevents und exklusive Wochenenden. Unser Kalender wird ständig aktualisiert, um dir maximale Auswahl und Flexibilität zu bieten." },
  { question: "Gibt es einen Dresscode für die Events?", answer: "Ja, jedes Event hat spezifische Kleidungsvorschriften, die in der Beschreibung angegeben sind. Im Allgemeinen: elegante Kleidung für Club-Abende (Anzug/Cocktailkleid), sexy-chic für Afterworks (Business Casual mit sinnlichem Touch), spezifischer Code für Themenabende (Dessous, Latex, Maskenball, etc.). Die Einhaltung des Dresscodes ist obligatorisch und wird am Eingang überprüft." },
  { question: "Kann man allein zu einem AKOKY-Event gehen?", answer: "Ja, Singles sind je nach den festgelegten Quoten für jedes Event willkommen. Einzelne Frauen werden generell ohne Einschränkung akzeptiert und profitieren oft von Vorzugspreisen. Einzelne Männer können an bestimmten Events mit Vorauswahl teilnehmen, basierend auf ihrem Profil, validierten Fotos und Community-Referenzen, um ein harmonisches Gleichgewicht und ein angenehmes Erlebnis für alle zu gewährleisten." },
  { question: "Wie garantiert ihr die Diskretion der Teilnehmer?", answer: "Diskretion ist unsere absolute Priorität. Unsere Maßnahmen umfassen: strenge Identitätsprüfung bei der Anmeldung, manuelle Validierung aller Profilfotos, striktes Verbot von Foto- und Videoaufnahmen während der Events (Smartphones werden am Eingang eingesammelt oder versiegelt), geschultes Personal zur Wahrung der Anonymität, empfohlene Nutzung von Pseudonymen und eine verstärkte Datenschutzrichtlinie mit strengen Sanktionen bei Verstößen." },
];

const DE_CARDS = [
  {
    img: "/images/event/event1.webp",
    alt: "Libertiner Abend im AKOKY-Club in Berlin",
    title: "Libertine Abende in Berliner Clubs",
    text: "Berlin beherbergt die kreativsten und avantgardistischsten AKOKY-Events. Die Hauptstadt, bekannt für ihre Offenheit und ihre legendäre Clubszene, bietet einen außergewöhnlichen Rahmen für unsere libertinen Abende, bei denen Kunst, Kultur und Sinnlichkeit verschmelzen."
  },
  {
    img: "/images/apero-libertin.webp",
    alt: "Libertiner Afterwork AKOKY in München",
    title: "Afterworks in München",
    text: "Die libertinen Afterworks von AKOKY in München sind die perfekte Gelegenheit, die Community in entspannter Atmosphäre kennenzulernen. Diese Events in den besten Locations der bayerischen Hauptstadt ermöglichen es, sich vor den intimeren Abenden zu vernetzen."
  },
  {
    img: "/images/evenement-libertin-europe.webp",
    alt: "Exklusives libertines Wochenende AKOKY in Deutschland",
    title: "Exklusive Libertine Wochenenden",
    text: "Die libertinen Wochenenden von AKOKY in privaten Villen an der Ostsee, am Bodensee oder in den Alpen bieten ein vollständiges Eintauchen in die libertine Lebensart. Diese Ausnahme-Events vereinen Mitglieder in luxuriösen Rahmen für unvergessliche Momente."
  },
];

const BERLIN_CARDS = [
  {
    img: "/images/apero-bruxelle.webp",
    alt: "Libertiner Abend AKOKY im Club in Berlin",
    title: "Club-Abende in Berlin",
    text: "Berlin, die europäische Hauptstadt des Nachtlebens, beherbergt unsere kosmopolitischsten libertinen Abende. Die AKOKY-Partnerclubs in Berlin bieten elegante Räume, in denen sich die Berliner Clubkultur-Tradition mit der AKOKY-Innovation verbindet."
  },
  {
    img: "/images/apero-libertin-akoky.webp",
    alt: "Libertiner Afterwork AKOKY in Berlin-Mitte",
    title: "Internationale Libertine Afterworks",
    text: "Die libertinen Afterworks von AKOKY in Berlin vereinen eine multikulturelle und offene Community. Diese Events sind die Gelegenheit, Mitglieder aus ganz Europa zu treffen, im Geist der Offenheit, der die Berliner libertine Szene charakterisiert."
  },
];

const HAMBURG_CARDS = [
  {
    img: "/images/soiree-libertine-plage.webp",
    alt: "Libertiner Abend AKOKY an der Elbe in Hamburg",
    title: "Events an der Elbe",
    text: "Die libertinen Abende von AKOKY in Hamburg feiern die maritime Eleganz der Hansestadt. Von den Treffen am Hafen bis zu den Abenden in exklusiven Locations an der Alster bieten diese Events ein einzigartiges Erlebnis, bei dem hanseatischer Stil und Libertinismus aufeinandertreffen."
  },
  {
    img: "/images/evenement-libertin-espagne.webp",
    alt: "Exklusives libertines Event AKOKY in Hamburg",
    title: "Hamburg – Die Perle des Nordens",
    text: "Hamburg, mit seinem weltoffenen Charakter und seinem legendären Nachtleben, beherbergt AKOKY-Events von einzigartiger Qualität. Private Partys in Elbvillen, exklusive Clubnächte in der Schanze – die Hamburger Events zählen zu den begehrtesten im AKOKY-Kalender."
  },
];

const BENEFITS = [
  { icon: "✨", title: "Premium-Ambiente", text: "Jedes libertine AKOKY-Event findet in außergewöhnlichen Locations statt. Unsere Abende werden in den renommiertesten Clubs und elegantesten Räumen Deutschlands veranstaltet. Das raffinierte Ambiente garantiert ein unvergessliches Erlebnis bei jeder Teilnahme." },
  { icon: "🛡️", title: "Sicherheit & Respekt", text: "Die Sicherheit unserer Mitglieder hat absolute Priorität. Unsere Events wenden strenge Protokolle für Respekt und Einverständnis an. Jeder AKOKY-Abend wird von einem aufmerksamen Team überwacht, das für das Wohlbefinden aller Teilnehmer sorgt." },
  { icon: "🎭", title: "Gelebte Freiheit", text: "Die libertinen AKOKY-Abende feiern die Freiheit, man selbst zu sein. Unsere Events bieten einen Raum, in dem jede Person ihre Wünsche in völliger Gelassenheit erkunden kann. Die AKOKY-Philosophie fördert Authentizität und Respekt in einer wohlwollenden Atmosphäre." },
  { icon: "🌍", title: "Internationale Community", text: "An AKOKY-Events teilzunehmen bedeutet, Teil der größten libertinen Community Europas zu werden. Unsere Abende vereinen Mitglieder aus Deutschland, Österreich, der Schweiz und darüber hinaus. Der Community-Geist schafft authentische und dauerhafte Verbindungen." },
];

const GALLERY = [
  { img: "/images/apero-libertin.webp", label: "Libertines Treffen AKOKY in Berlin" },
  { img: "/images/soiree-libertine-plage.webp", label: "Libertiner Abend AKOKY am See" },
  { img: "/images/cap-agde-libertin.webp", label: "Exklusives Event AKOKY Ostsee" },
  { img: "/images/soiree-couple-libertin.webp", label: "Libertiner Paarabend Deutschland" },
  { img: "/images/apero-libertin-akoky.webp", label: "AKOKY-Treffen in München" },
  { img: "/images/jeux-libertin.webp", label: "Exklusive libertine Spiele AKOKY" },
  { img: "/images/soiree-club-libertin.webp", label: "AKOKY-Abend im libertinen Club" },
  { img: "/images/evenement-libertin-espagne.webp", label: "Libertines Event AKOKY Europa" },
  { img: "/images/evenement-libertin-europe.webp", label: "Internationales AKOKY-Event" },
  { img: "/images/barcelone.webp", label: "AKOKY-Wochenende Mittelmeer" },
];

const CTA_LINKS = [
  { to: "/de/libertinismus", label: "Libertinismus" },
  { to: "/de/clubs", label: "Libertine Clubs" },
  { to: "/de/clubbing", label: "Clubbing-Guide" },
  { to: "/de/saunas", label: "Libertine Saunas" },
  { to: "/de/vip", label: "VIP-Status" },
  { to: "/de/live", label: "AKOKY Lives" },
  { to: "/de/anfangen", label: "Libertinismus Anfangen" },
  { to: "/de/app", label: "Mobile App" },
];

const EventsDe = () => (
  <>
    <HreflangTags slug="events" />
    <ContentPageLayout
      lang="de"
      title="Libertine Events AKOKY Deutschland"
      description="Abende, Afterworks und libertine Wochenenden in Deutschland"
      canonical="https://akoky.com/de/events"
      heroTitle="Libertine Events AKOKY – Abende & Treffen in Deutschland"
      heroSubtitle="Erlebe das Premium-Erlebnis: Club-Abende, exklusive Afterworks und authentische Treffen in ganz Deutschland"
      heroImage="/images/es-eventos-cover.webp"
      breadcrumb={[{ label: "Libertine Events" }]}
      faq={FAQ}
    >

      {/* Libertine Abende in Deutschland */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Libertine Abende AKOKY in Deutschland</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Die libertinen Events von AKOKY in Deutschland verkörpern die Exzellenz des libertinen Lifestyles. Von Berlin bis München, über Hamburg, Köln und Frankfurt – unsere Abende in Clubs bieten ein einzigartiges Erlebnis, bei dem Eleganz und Freiheit aufeinandertreffen. Jedes Event ist darauf ausgelegt, unvergessliche Momente in einer raffinierten und wohlwollenden Atmosphäre zu schaffen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {DE_CARDS.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed mb-3">Unsere libertinen Afterworks in Deutschland sind zu unverzichtbaren Treffpunkten für die deutschsprachige libertine Community geworden. Diese AKOKY-Abende zeichnen sich durch ihre warme Atmosphäre und die sorgfältige Auswahl der Locations aus. Ob du ein Stammgast der <Link to="/de/clubbing" className="text-primary hover:underline">libertinen Abende</Link> bist oder neugierig diese Welt entdecken möchtest – die AKOKY-Events in Deutschland empfangen dich in einem sicheren und respektvollen Rahmen.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Die <Link to="/de/clubs" className="text-primary hover:underline">libertinen Clubs</Link>, die mit AKOKY in Deutschland zusammenarbeiten, bieten privatisierte Räume für unsere exklusiven Events. Von Themenabenden bis zu libertinen Afterworks – jedes Event ist eine Feier des Lifestyles in völliger Diskretion. Berlin und München, europäische Hauptstädte des libertinen Lebens, beherbergen regelmäßig unsere begehrtesten Abende und ziehen Mitglieder aus ganz Europa an.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Das Erlebnis der libertinen AKOKY-Events in Deutschland geht über den einfachen Abend hinaus. Es ist eine lebendige Community, die sich trifft, um authentische Momente zu teilen – mit dem Respekt der Werte, die den Ruf von AKOKY ausmachen: Eleganz, Wohlwollen und gelebte Freiheit.</p>
          </div>
        </div>
      </section>

      {/* Events in Berlin */}
      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-3xl mb-3">🏛️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Libertine Events AKOKY in Berlin</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Berlin ist das Exzellenz-Territorium für libertine AKOKY-Events. Die Hauptstadt und ihre legendären Clubs beherbergen Abende, die in ganz Europa ausstrahlen. Der Berliner libertine Geist, bekannt für seine Offenheit und seine Experimentierfreude, verschmilzt perfekt mit der AKOKY-Philosophie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {BERLIN_CARDS.map((c, i) => (
              <div key={i} className="bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed">Die libertinen AKOKY-Abende in Berlin ziehen eine internationale und raffinierte Community an. Die Berliner libertinen Clubs, zu den renommiertesten Europas, bieten einen idealen Rahmen für unsere exklusiven Events. Jeder libertine Afterwork in Berlin ist eine Feier der kulturellen Vielfalt und der Freiheit, man selbst zu sein.</p>
            <p className="text-muted-foreground leading-relaxed">Die AKOKY-Events in Berlin zeichnen sich durch ihre einzigartige Atmosphäre und ihre Organisationsqualität aus. Von intimen Abenden bis zu großen internationalen Events – Berlin ist zum privilegierten Ziel für Liebhaber des libertinen Lifestyles geworden, die Authentizität und Eleganz suchen.</p>
          </div>
        </div>
      </section>

      {/* Events in Hamburg */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-3xl mb-3">⚓</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Libertine Abende AKOKY in Hamburg & Norddeutschland</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Norddeutschland bringt eine maritime und elegante Dimension in die libertinen AKOKY-Events. Von Hamburg bis zur Ostseeküste, über Hannover und Bremen – unsere Abende vereinen den hanseatischen Stil mit der Eleganz, die AKOKY auszeichnet. Jedes Event im Norden ist eine Einladung zur Feier des Lebens und der Genüsse.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {HAMBURG_CARDS.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed">Die libertinen AKOKY-Events in Norddeutschland ziehen eine europäische Community an, die Stil und Freiheit sucht. Hamburg, mit seinem kosmopolitischen Geist, beherbergt Abende, die die Grenzen der Kreativität erweitern. Die libertinen Afterworks an den Hamburger Top-Locations bieten ein einzigartiges Erlebnis, das libertinen Lifestyle und hanseatische Lebensart verbindet.</p>
            <p className="text-muted-foreground leading-relaxed">Der Sommer sieht außergewöhnliche AKOKY-Events an den norddeutschen Küsten erblühen. Von den Abenden am Wasser bis zu den Wochenenden in privaten Villen – der Norden wird zum privilegierten Spielfeld der AKOKY-Community. Wenn du neu bist, besuche unseren Leitfaden zum <Link to="/de/anfangen" className="text-primary hover:underline">Einstieg in den Libertinismus</Link>.</p>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Warum an AKOKY-Events Teilnehmen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-md hover:border-primary/40 transition-all">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Das Universum der Libertinen AKOKY-Events</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {GALLERY.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl relative group">
                <img src={g.img} alt={g.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-white text-xs font-medium">{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entdecken */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">Entdecke unsere Events und Ressourcen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CTA_LINKS.map((l, i) => (
              <Link key={i} to={l.to} className="p-3 bg-background border border-border rounded-lg text-center text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default EventsDe;
