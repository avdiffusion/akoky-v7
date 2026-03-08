import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubsLibertinsPaysDelaLoire = () => {
  const faq = [
    { question: "Où trouver des clubs libertins dans les Pays de la Loire ?", answer: "Dans les Pays de la Loire, il existe plusieurs options : clubs échangistes, saunas libertins et soirées privées." },
    { question: "Nantes est-elle la ville libertine principale des Pays de la Loire ?", answer: "Oui, Nantes est le pôle central de la scène libertine dans les Pays de la Loire." },
    { question: "Y a-t-il des soirées toute l'année ?", answer: "Oui, les clubs et saunas organisent des événements réguliers toute l'année." },
    { question: "Est-ce discret dans les Pays de la Loire ?", answer: "Oui, la discrétion est une valeur fondamentale dans les clubs libertins de la région." },
    { question: "Faut-il réserver à l'avance ?", answer: "Les réservations sont souvent conseillées, voire obligatoires." },
  ];

  return (
    <ContentPageLayout
      title="Meilleurs clubs libertins Pays de la Loire | AKOKY"
      description="Découvrez les meilleurs clubs libertins dans les Pays de la Loire. Guide complet avec avis, événements et conseils."
      canonical="https://akoky.com/clubs-libertins-pays-de-la-loire"
      heroTitle="Meilleurs clubs libertins dans les Pays de la Loire"
      heroSubtitle="Les Pays de la Loire, avec leur ambiance chaleureuse et leur dynamisme, sont une région libertine incontournable."
      faq={faq}
      breadcrumb={[{ label: "Clubbing France", href: "/fr/clubbing-france-europe" }, { label: "Pays de la Loire" }]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-foreground font-display">Le libertinage dans les Pays de la Loire aujourd'hui</h2>
          <p>Les Pays de la Loire se distinguent par leur scène libertine dynamique et variée. La région attire une clientèle variée.</p>
          <p>Les profils dominants sont les couples actifs, souvent âgés de 30 à 50 ans.</p>

          <h2 className="text-3xl font-bold text-foreground font-display">Les grandes villes libertines</h2>
          <h3>Nantes</h3>
          <p>Nantes est le cœur de la vie nocturne libertine dans les Pays de la Loire.</p>
          <Link to="/fr/clubs-libertins-nantes" className="text-primary hover:underline">Clubs libertins à Nantes →</Link>
          <h3>Angers</h3><p>Angers offre une expérience libertine intimiste avec son charme historique.</p>
          <h3>Le Mans</h3><p>Le Mans propose des soirées dynamiques.</p>
          <h3>La Rochelle</h3><p>La Rochelle offre une ambiance chaleureuse et week-end.</p>

          <div className="flex flex-wrap gap-3 not-prose my-6">
            <Link to="/fr/clubs-libertins-nantes" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Nantes</Link>
            <Link to="/fr/clubs-libertins-bretagne" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Bretagne</Link>
            <Link to="/fr/clubs-libertins-nouvelle-aquitaine" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Nouvelle-Aquitaine</Link>
            <Link to="/fr/clubbing-france-europe" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Clubbing France</Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubsLibertinsPaysDelaLoire;
