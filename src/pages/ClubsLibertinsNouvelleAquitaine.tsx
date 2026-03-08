import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubsLibertinsNouvelleAquitaine = () => {
  const faq = [
    { question: "Où trouver des clubs libertins en Nouvelle-Aquitaine ?", answer: "En Nouvelle-Aquitaine, il existe de nombreuses options : clubs échangistes, saunas libertins, soirées privées. Les plateformes comme AKOKY sont un excellent moyen de découvrir les événements." },
    { question: "Bordeaux est-elle la ville libertine principale ?", answer: "Oui, Bordeaux est le pôle majeur de la scène libertine en Nouvelle-Aquitaine, avec une forte concentration de clubs et événements." },
    { question: "Y a-t-il des soirées toute l'année ?", answer: "Oui, les clubs et saunas organisent des événements réguliers toute l'année." },
    { question: "Est-ce discret en Nouvelle-Aquitaine ?", answer: "Oui, la discrétion est une valeur fondamentale dans les clubs libertins de la région." },
    { question: "Faut-il réserver à l'avance ?", answer: "Les réservations sont souvent conseillées, voire obligatoires." },
  ];

  return (
    <ContentPageLayout
      title="Meilleurs clubs libertins en Nouvelle-Aquitaine | AKOKY"
      description="Découvrez les meilleurs clubs libertins en Nouvelle-Aquitaine. Guide complet avec avis, événements et conseils."
      canonical="https://akoky.com/clubs-libertins-nouvelle-aquitaine"
      heroTitle="Meilleurs clubs libertins en Nouvelle-Aquitaine"
      heroSubtitle="La Nouvelle-Aquitaine est l'une des régions libertines les plus vastes et les plus actives de France."
      faq={faq}
      breadcrumb={[{ label: "Clubbing France", href: "/fr/clubbing-france-europe" }, { label: "Nouvelle-Aquitaine" }]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-foreground font-display">Le libertinage en Nouvelle-Aquitaine aujourd'hui</h2>
          <p>La Nouvelle-Aquitaine se distingue par sa scène libertine dynamique et variée. La région attire une clientèle internationale.</p>
          <p>Les profils dominants sont les couples actifs et les quarantenaires. L'influence du cadre de vie et des résidences secondaires est notable.</p>

          <h2 className="text-3xl font-bold text-foreground font-display">Les grandes villes libertines</h2>
          <h3>Bordeaux</h3>
          <p>Bordeaux, avec son ambiance élégante et sa vie nocturne animée, attire une clientèle variée.</p>
          <Link to="/fr/clubs-libertins-bordeaux" className="text-primary hover:underline">Clubs libertins à Bordeaux →</Link>
          <h3>Poitiers</h3><p>Poitiers offre des soirées intimistes.</p>
          <h3>Limoges</h3><p>Limoges attire une clientèle sophistiquée.</p>
          <h3>Pau</h3><p>Pau offre un cadre de vie agréable pour des rencontres libertines.</p>
          <h3>Bayonne</h3><p>Bayonne, avec son ambiance basque, attire une clientèle internationale.</p>

          <div className="flex flex-wrap gap-3 not-prose my-6">
            <Link to="/clubs-libertins-bordeaux" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Bordeaux</Link>
            <Link to="/clubs-libertins-occitanie" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Occitanie</Link>
            <Link to="/clubbing-france-europe" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Clubbing France</Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubsLibertinsNouvelleAquitaine;
