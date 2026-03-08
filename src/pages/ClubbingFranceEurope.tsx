import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const franceRegions = [
  { label: "Île-de-France", href: "/fr/clubs-libertins-ile-de-france" },
  { label: "Provence-Alpes-Côte d'Azur", href: "/fr/clubs-libertins-paca" },
  { label: "Auvergne-Rhône-Alpes", href: "/fr/clubs-libertins-auvergne-rhone-alpes" },
  { label: "Occitanie", href: "/fr/clubs-libertins-occitanie" },
  { label: "Nouvelle-Aquitaine", href: "/fr/clubs-libertins-nouvelle-aquitaine" },
  { label: "Aquitaine", href: "/fr/clubs-libertins-nouvelle-aquitaine" },
  { label: "Hauts-de-France", href: "/fr/clubs-libertins-hauts-de-france" },
  { label: "Grand Est", href: "/fr/clubs-libertins-grand-est" },
  { label: "Bretagne", href: "/fr/clubs-libertins-bretagne" },
  { label: "Normandie", href: "/fr/clubs-libertins-normandie" },
  { label: "Pays de la Loire", href: "/fr/clubs-libertins-pays-de-la-loire" },
];

const franceCities = [
  { label: "Paris", href: "/fr/clubs-libertins-paris" },
  { label: "Lyon", href: "/fr/clubs-libertins-lyon" },
  { label: "Marseille", href: "/fr/clubs-libertins-marseille" },
  { label: "Toulouse", href: "/fr/clubs-libertins-toulouse" },
  { label: "Bordeaux", href: "/fr/clubs-libertins-bordeaux" },
  { label: "Lille", href: "/fr/clubs-libertins-lille" },
  { label: "Nantes", href: "/fr/clubs-libertins-nantes" },
  { label: "Nice", href: "/fr/clubs-libertins-nice" },
  { label: "Montpellier", href: "/fr/clubs-libertins-montpellier" },
  { label: "Strasbourg", href: "/fr/clubs-libertins-strasbourg" },
  { label: "Rennes", href: "/fr/clubs-libertins-rennes" },
  { label: "Grenoble", href: "/fr/clubs-libertins-grenoble" },
];

const countries = [
  {
    name: "Belgique",
    subtitle: "Une scène libertine dynamique au cœur de l'Europe",
    intro:
      "La Belgique offre une scène libertine dynamique avec des clubs et événements adaptés à tous les goûts. Des villes comme Bruxelles, Anvers et Liège sont particulièrement réputées pour leur vie nocturne libertine élégante et discrète.",
    image: "/images/carte-belgique.webp",
    links: [
      { label: "Guide Belgique", href: "/fr/clubbing-belgique" },
      { label: "Bruxelles", href: "/fr/clubs-libertins-bruxelles" },
      { label: "Anvers", href: "/fr/clubs-libertins-anvers" },
      { label: "Liège", href: "/fr/clubs-libertins-liege" },
      { label: "Charleroi", href: "/fr/clubs-libertins-charleroi" },
      { label: "Gand", href: "/fr/clubs-libertins-gand" },
    ],
  },
  {
    name: "Suisse",
    subtitle: "Excellence et discrétion helvétique",
    intro:
      "La Suisse propose des expériences libertines uniques, avec des clubs et saunas de haut niveau. Genève, Lausanne et Zurich sont particulièrement prisées des amateurs de rencontres libertines raffinées dans un cadre premium.",
    image: "/images/carte-suisse.webp",
    links: [
      { label: "Guide Suisse", href: "/fr/clubbing-suisse" },
      { label: "Genève", href: "/fr/clubs-libertins-geneve" },
      { label: "Lausanne", href: "/fr/clubs-libertins-lausanne" },
      { label: "Zurich", href: "/fr/clubs-libertins-zurich" },
      { label: "Bâle", href: "/fr/clubs-libertins-bale" },
    ],
  },
  {
    name: "Luxembourg",
    subtitle: "Petit pays, grande scène",
    intro:
      "Le Luxembourg, bien que petit, offre des opportunités intéressantes pour les amateurs de rencontres libertines. La capitale Luxembourg est le cœur de cette scène dynamique et cosmopolite.",
    image: "/images/carte-luxembourg.webp",
    links: [
      { label: "Guide Luxembourg", href: "/fr/clubbing-luxembourg" },
      { label: "Clubs au Luxembourg", href: "/fr/clubs-libertins-luxembourg" },
    ],
  },
];

const chipClass =
  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 transition-colors";

const ClubbingFranceEurope = () => {
  return (
    <ContentPageLayout
      title="Clubbing libertin en France et en Europe | AKOKY"
      description="Le guide géographique AKOKY des clubs libertins en France et en Europe : régions, grandes villes, événements et conseils pour organiser vos sorties."
      canonical="https://akoky.com/fr/clubbing-france-europe"
      heroTitle="Clubbing libertin en France et en Europe"
      heroSubtitle="Le guide géographique officiel des clubs libertins, régions et grandes villes par AKOKY"
      heroImage="/images/europe-france-clubs-libertins.webp"
      breadcrumb={[{ label: "Clubbing", href: "/fr/clubbing" }, { label: "France & Europe" }]}
      faq={[
        {
          question: "Quelles sont les meilleures villes pour le clubbing libertin en France ?",
          answer:
            "Paris, Lyon, Marseille, Toulouse et Bordeaux sont parmi les meilleures villes pour le clubbing libertin en France. Paris offre la plus grande variété d'établissements, tandis que Lyon et Bordeaux sont reconnues pour leurs clubs haut de gamme.",
        },
        {
          question: "Comment se déroule une soirée libertine typique en France ?",
          answer:
            "Une soirée libertine typique en France commence généralement par un dîner ou un apéritif pour briser la glace et créer une ambiance détendue, suivi d'une visite dans un club ou sauna libertin. L'atmosphère est toujours basée sur le respect et le consentement mutuel.",
        },
        {
          question: "Quelles sont les règles à respecter dans un club libertin en France ?",
          answer:
            "Les règles fondamentales incluent le respect absolu des autres membres, la discrétion totale sur l'identité des participants, le consentement mutuel obligatoire pour toute interaction, et le respect strict des règles spécifiques de chaque établissement.",
        },
        {
          question: "Quelles sont les différences entre le libertinage en France et en Europe ?",
          answer:
            "Les différences incluent les cultures locales, les codes vestimentaires et les attentes des membres. La France est reconnue pour une approche plus ouverte, tandis que d'autres pays peuvent avoir des codes plus stricts.",
        },
        {
          question: "Comment organiser une sortie libertine en Europe avec son partenaire ?",
          answer:
            "Utilisez AKOKY pour découvrir les meilleurs clubs et événements, lire les avis vérifiés, échanger avec d'autres couples expérimentés et planifier vos rencontres en toute sécurité.",
        },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Clubbing libertin en France et en Europe",
        description: "Hub géographique AKOKY des clubs libertins en France, Belgique, Suisse et Luxembourg.",
        url: "https://akoky.com/fr/clubbing-france-europe",
      }}
    >
      <section className="py-12 px-4 border-b border-border/50">
        <div className="container max-w-5xl mx-auto space-y-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-card/40">
            <img
              src="/images/carte-france.webp"
              alt="Carte de France des régions libertines"
              className="w-full h-56 md:h-72 object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground font-display">France</h2>
            <p className="text-muted-foreground mt-2">Le berceau du libertinage européen</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Régions libertines</h3>
            <ul className="flex flex-wrap gap-3">
              {franceRegions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className={chipClass}>
                    {link.label} <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Grandes villes</h3>
            <ul className="flex flex-wrap gap-3">
              {franceCities.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className={chipClass}>
                    {link.label} <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {countries.map((country) => (
        <section key={country.name} className="py-12 px-4 border-b border-border/50">
          <div className="container max-w-5xl mx-auto space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card/40">
              <img src={country.image} alt={`Carte ${country.name}`} className="w-full h-56 md:h-72 object-cover" loading="lazy" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground font-display">{country.name}</h2>
              <p className="text-muted-foreground mt-2">{country.subtitle}</p>
              <p className="text-foreground/90 mt-4">{country.intro}</p>
            </div>

            <ul className="flex flex-wrap gap-3">
              {country.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className={chipClass}>
                    {link.label} <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="py-16 px-4 bg-card/30 border-b border-border/50">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-foreground font-display">Comment organiser vos sorties libertines en Europe</h2>
          <p>Organiser une sortie libertine en Europe peut être une expérience excitante et enrichissante. Voici nos recommandations pour une expérience réussie :</p>
          <ul>
            <li>Choisissez une destination adaptée à vos préférences et votre niveau de confort.</li>
            <li>Consultez les guides et avis vérifiés sur AKOKY pour faire le meilleur choix.</li>
            <li>Planifiez votre voyage à l'avance : réservations, transports, hébergement.</li>
            <li>Préparez-vous mentalement et physiquement pour vivre pleinement l'expérience.</li>
            <li>Respectez toujours les règles des établissements et le consentement de chacun.</li>
          </ul>
          <p>Rejoignez la communauté AKOKY pour accéder aux guides complets, avis membres et fonctionnalités exclusives.</p>
          <Link to="/fr/akoky" className="text-primary hover:underline">Rejoindre AKOKY →</Link>
        </div>
      </section>

      <section className="py-16 px-4 border-b border-border/50">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-foreground font-display">Événements libertins en France et en Europe</h2>
          <p>Découvrez les événements libertins à venir en France et en Europe. Ne manquez aucune opportunité de rencontres exceptionnelles :</p>
          <ul>
            <li>Fêtes privées exclusives dans des lieux d'exception.</li>
            <li>Soirées à thème : Masquerade, White Party, Fetish Night.</li>
            <li>Événements spéciaux : week-ends libertins, croisières, voyages organisés.</li>
            <li>Rencontres entre membres de la communauté AKOKY.</li>
          </ul>
          <p>Consultez notre calendrier complet et réservez votre place aux prochains événements.</p>
          <Link to="/fr/evenements" className="text-primary hover:underline">Voir les événements →</Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-foreground font-display">Organisation du clubbing libertin en France et en Europe</h2>
          <p>
            AKOKY structure l'ensemble du clubbing libertin européen selon une architecture géographique claire et cohérente :
            <strong> pays → régions → villes</strong>. Cette page constitue le hub central de navigation pour l'Europe.
          </p>
          <p>
            Chaque pays dispose de sa propre page dédiée, qui renvoie ensuite vers les régions et grandes villes. Cette organisation
            hiérarchisée garantit une navigation intuitive pour découvrir rapidement les meilleurs clubs libertins, saunas et lieux de rencontre.
          </p>

          <h3>Pays couverts par AKOKY</h3>
          <ul>
            <li><Link to="/fr/clubs-libertins" className="text-primary hover:underline">France</Link></li>
            <li><Link to="/fr/clubbing-belgique" className="text-primary hover:underline">Belgique</Link></li>
            <li><Link to="/fr/clubbing-suisse" className="text-primary hover:underline">Suisse</Link></li>
            <li><Link to="/fr/clubbing-luxembourg" className="text-primary hover:underline">Luxembourg</Link></li>
          </ul>

          <h3>Régions libertines majeures</h3>
          <ul>
            <li><Link to="/fr/clubs-libertins-ile-de-france" className="text-primary hover:underline">Île-de-France</Link></li>
            <li><Link to="/fr/clubs-libertins-paca" className="text-primary hover:underline">Provence-Alpes-Côte d'Azur</Link></li>
            <li><Link to="/fr/clubs-libertins-auvergne-rhone-alpes" className="text-primary hover:underline">Auvergne-Rhône-Alpes</Link></li>
            <li><Link to="/fr/clubs-libertins-wallonie" className="text-primary hover:underline">Wallonie</Link></li>
            <li><Link to="/fr/clubs-libertins-flandre" className="text-primary hover:underline">Flandre</Link></li>
          </ul>

          <h3>Grandes villes du clubbing libertin en Europe</h3>
          <ul>
            <li><Link to="/fr/clubs-libertins-paris" className="text-primary hover:underline">Paris</Link></li>
            <li><Link to="/fr/clubs-libertins-lyon" className="text-primary hover:underline">Lyon</Link></li>
            <li><Link to="/fr/clubs-libertins-marseille" className="text-primary hover:underline">Marseille</Link></li>
            <li><Link to="/fr/clubs-libertins-bruxelles" className="text-primary hover:underline">Bruxelles</Link></li>
            <li><Link to="/fr/clubs-libertins-geneve" className="text-primary hover:underline">Genève</Link></li>
            <li><Link to="/fr/clubs-libertins-zurich" className="text-primary hover:underline">Zurich</Link></li>
            <li><Link to="/fr/clubs-libertins-luxembourg" className="text-primary hover:underline">Luxembourg</Link></li>
          </ul>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubbingFranceEurope;
