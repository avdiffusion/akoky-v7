import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubbingFranceEurope = () => {
  const countries = [
    { flag: "🇫🇷", name: "France", subtitle: "Le berceau du libertinage européen", link: "/clubbing", regions: ["Île-de-France", "PACA", "Auvergne-Rhône-Alpes", "Occitanie", "Nouvelle-Aquitaine", "Hauts-de-France", "Grand Est", "Bretagne", "Normandie", "Pays de la Loire"] },
    { flag: "🇧🇪", name: "Belgique", subtitle: "Une scène libertine dynamique au cœur de l'Europe", link: "/clubbing-belgique" },
    { flag: "🇨🇭", name: "Suisse", subtitle: "Excellence et discrétion helvétique", link: "/clubbing-suisse" },
    { flag: "🇱🇺", name: "Luxembourg", subtitle: "Petit pays, grande scène", link: "/clubbing-luxembourg" },
  ];

  return (
    <ContentPageLayout
      title="Clubs libertins en Europe | Annuaire vérifié France et Europe – AKOKY"
      description="Explorez l'annuaire AKOKY des clubs libertins en France et en Europe : établissements vérifiés, avis membres, saunas, clubs élégants et lieux privés pour couples et libertins."
      canonical="https://akoky.com/clubbing-france-europe"
      heroTitle="Clubbing libertin en France et en Europe"
      heroSubtitle="Le guide géographique officiel des clubs libertins, régions et grandes villes par AKOKY"
      heroImage="/images/europe-france-clubs-libertins.webp"
      breadcrumb={[{ label: "Clubbing", href: "/clubbing" }, { label: "France & Europe" }]}
      faq={[
        { question: "Quelles sont les meilleures villes pour le clubbing libertin en France ?", answer: "Paris, Lyon, Marseille, Toulouse et Bordeaux sont les villes les plus dynamiques pour le clubbing libertin en France, avec une grande diversité d'établissements." },
        { question: "Comment se déroule une soirée libertine typique ?", answer: "Arrivée et accueil, vestiaire, découverte des espaces (bar, lounge, dancefloor), puis exploration à votre rythme des espaces privés. Le consentement est la règle absolue." },
        { question: "Quelles sont les différences entre le libertinage en France et en Europe ?", answer: "La France est le berceau du libertinage européen avec la plus grande densité de clubs. La Belgique et la Suisse offrent des expériences plus intimistes et haut de gamme." },
        { question: "Quels sont les avantages d'utiliser AKOKY ?", answer: "AKOKY offre un annuaire vérifié, des avis authentiques, un agenda d'événements et une communauté de 1,5 million de membres pour organiser vos sorties en toute confiance." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Clubs libertins en Europe | Annuaire vérifié",
        "description": "Annuaire AKOKY des clubs libertins en France et en Europe.",
      }}
    >
      {countries.map((country, idx) => (
        <section key={idx} className="py-16 px-4 border-b border-white/5">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-5xl mb-4 block">{country.flag}</span>
              <h2 className="text-3xl font-bold text-primary uppercase tracking-wider font-display">{country.name}</h2>
              <p className="text-gray-400 mt-2">{country.subtitle}</p>
            </div>
            {country.regions && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {country.regions.map((region, ridx) => (
                  <div key={ridx} className="bg-card/50 border border-white/10 rounded-xl px-4 py-3 text-gray-300 text-sm hover:border-primary/30 transition-all">
                    {region}
                  </div>
                ))}
              </div>
            )}
            <div className="text-center">
              <Link to={country.link} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                Guide {country.name} →
              </Link>
            </div>
          </div>
        </section>
      ))}
    </ContentPageLayout>
  );
};

export default ClubbingFranceEurope;
