import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubsLibertinsOccitanie = () => {
  const faq = [
    { question: "Où trouver des clubs libertins en Occitanie ?", answer: "L'Occitanie compte de nombreux clubs, saunas et soirées privées. Toulouse et Montpellier sont les deux pôles majeurs." },
    { question: "Toulouse ou Montpellier : quelle ville choisir ?", answer: "Les deux villes sont très actives. Toulouse offre une ambiance plus étudiante et festive, Montpellier une ambiance plus méditerranéenne." },
    { question: "Y a-t-il des soirées toute l'année ?", answer: "Oui, avec une forte activité printemps/été." },
    { question: "Est-ce discret en Occitanie ?", answer: "Oui, la discrétion est une valeur fondamentale dans les clubs libertins de la région." },
    { question: "Faut-il réserver à l'avance ?", answer: "Les réservations sont souvent conseillées, voire obligatoires." },
  ];

  return (
    <ContentPageLayout
      title="Meilleurs clubs libertins en Occitanie – Guide complet | AKOKY"
      description="Découvrez les meilleurs clubs libertins en Occitanie. Guide complet avec avis, événements et conseils pratiques."
      canonical="https://akoky.com/clubs-libertins-occitanie"
      heroTitle="Meilleurs clubs libertins en Occitanie"
      heroSubtitle="L'Occitanie est l'une des régions libertines les plus dynamiques de France, avec Toulouse et Montpellier comme pôles majeurs."
      faq={faq}
      breadcrumb={[{ label: "Clubbing France", href: "/clubbing-france-europe" }, { label: "Occitanie" }]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-foreground font-display">Le libertinage en Occitanie aujourd'hui</h2>
          <p>L'Occitanie se distingue par sa scène libertine dynamique et variée. La région attire une clientèle internationale.</p>
          <p>Les profils dominants sont les jeunes couples, les actifs et les nouveaux arrivants. Le rôle clé des sites de rencontre libertine est notable.</p>

          <h2 className="text-3xl font-bold text-foreground font-display">Les grandes villes libertines</h2>
          <h3>Toulouse</h3>
          <p>Toulouse, avec son ambiance étudiante et sa vie nocturne animée, est un pôle majeur.</p>
          <Link to="/clubs-libertins-toulouse" className="text-primary hover:underline">Clubs libertins à Toulouse →</Link>
          <h3>Montpellier</h3>
          <p>Montpellier offre une ambiance méditerranéenne attractive.</p>
          <Link to="/clubs-libertins-montpellier" className="text-primary hover:underline">Clubs libertins à Montpellier →</Link>
          <h3>Narbonne</h3><p>Narbonne propose des lieux intimistes.</p>
          <h3>Perpignan</h3><p>Perpignan offre une ambiance catalane.</p>
          <h3>Carcassonne</h3><p>Carcassonne attire une clientèle internationale.</p>

          <div className="flex flex-wrap gap-3 not-prose my-6">
            <Link to="/clubs-libertins-toulouse" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Toulouse</Link>
            <Link to="/clubs-libertins-montpellier" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Montpellier</Link>
            <Link to="/clubs-libertins-cap-dagde" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Cap d'Agde</Link>
            <Link to="/clubbing-france-europe" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Clubbing France</Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubsLibertinsOccitanie;
