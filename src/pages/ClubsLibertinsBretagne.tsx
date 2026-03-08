import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubsLibertinsBretagne = () => {
  const faq = [
    { question: "Où trouver des clubs libertins en Bretagne ?", answer: "En Bretagne, il existe plusieurs options : clubs échangistes, saunas libertins, soirées privées. Les plateformes comme AKOKY sont un excellent moyen de découvrir les événements." },
    { question: "Rennes est-elle la ville libertine principale ?", answer: "Oui, Rennes est le pôle central de la scène libertine en Bretagne." },
    { question: "Y a-t-il des soirées toute l'année ?", answer: "Oui, les clubs et saunas organisent des événements réguliers toute l'année." },
    { question: "Est-ce discret en Bretagne ?", answer: "Oui, la discrétion est une valeur fondamentale dans les clubs libertins bretons." },
    { question: "Faut-il réserver à l'avance ?", answer: "Les réservations sont souvent conseillées, voire obligatoires." },
  ];

  return (
    <ContentPageLayout
      title="Meilleurs clubs libertins en Bretagne – Guide complet | AKOKY"
      description="Découvrez les meilleurs clubs libertins en Bretagne. Guide complet avec avis, événements et conseils pratiques."
      canonical="https://akoky.com/clubs-libertins-bretagne"
      heroTitle="Meilleurs clubs libertins en Bretagne"
      heroSubtitle="La Bretagne, avec son ambiance chaleureuse et discrète, est une région libertine dynamique."
      faq={faq}
      breadcrumb={[{ label: "Clubbing France", href: "/fr/clubbing-france-europe" }, { label: "Bretagne" }]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-foreground font-display">Le libertinage en Bretagne aujourd'hui</h2>
          <p>La Bretagne se distingue par sa scène libertine dynamique et discrète. La région attire une clientèle variée.</p>
          <p>Les profils dominants en Bretagne sont les couples établis et actifs. La région est particulièrement active pendant les week-ends.</p>

          <h2 className="text-3xl font-bold text-foreground font-display">Les grandes villes libertines</h2>
          <h3>Rennes</h3>
          <p>Rennes, avec son ambiance chaleureuse et sa vie nocturne animée, est le cœur de la scène libertine bretonne.</p>
          <Link to="/fr/clubs-libertins-rennes" className="text-primary hover:underline">Clubs libertins à Rennes →</Link>
          <h3>Brest</h3><p>Brest offre une ambiance maritime avec des soirées intimistes.</p>
          <h3>Quimper</h3><p>Quimper propose une ambiance conviviale.</p>
          <h3>Vannes</h3><p>Vannes offre une ambiance festive.</p>
          <h3>Lorient</h3><p>Lorient propose un cadre agréable pour des rencontres libertines.</p>

          <div className="flex flex-wrap gap-3 not-prose my-6">
            <Link to="/clubs-libertins-rennes" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Rennes</Link>
            <Link to="/clubs-libertins-nantes" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Nantes</Link>
            <Link to="/clubs-libertins-normandie" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Normandie</Link>
            <Link to="/clubbing-france-europe" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Clubbing France</Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubsLibertinsBretagne;
