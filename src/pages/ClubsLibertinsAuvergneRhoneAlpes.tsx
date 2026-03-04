import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubsLibertinsAuvergneRhoneAlpes = () => {
  const faq = [
    { question: "Où trouver des clubs libertins en Auvergne-Rhône-Alpes ?", answer: "La région compte de nombreux clubs, saunas et soirées privées. Lyon est le hub majeur. Les plateformes comme AKOKY sont un excellent moyen de découvrir les événements." },
    { question: "Lyon est-elle la ville libertine principale ?", answer: "Oui, Lyon est le cœur de la vie nocturne libertine en Auvergne-Rhône-Alpes." },
    { question: "Y a-t-il des soirées toute l'année ?", answer: "Oui, les clubs et saunas organisent des événements réguliers toute l'année." },
    { question: "Est-ce discret en Auvergne-Rhône-Alpes ?", answer: "Oui, la discrétion est une valeur fondamentale dans les clubs libertins de la région." },
    { question: "Faut-il réserver à l'avance ?", answer: "Les réservations sont souvent conseillées, voire obligatoires." },
  ];

  return (
    <ContentPageLayout
      title="Meilleurs clubs libertins en Auvergne-Rhône-Alpes | AKOKY"
      description="Découvrez les meilleurs clubs libertins en Auvergne-Rhône-Alpes. Guide complet avec avis, événements et conseils."
      canonical="https://akoky.com/clubs-libertins-auvergne-rhone-alpes"
      heroTitle="Meilleurs clubs libertins en Auvergne-Rhône-Alpes"
      heroSubtitle="L'Auvergne-Rhône-Alpes est l'une des régions libertines les plus dynamiques de France."
      faq={faq}
      breadcrumb={[{ label: "Clubbing France", href: "/clubbing-france-europe" }, { label: "Auvergne-Rhône-Alpes" }]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-foreground font-display">Le libertinage en Auvergne-Rhône-Alpes aujourd'hui</h2>
          <p>L'Auvergne-Rhône-Alpes se distingue par sa scène libertine dynamique et structurée. La région attire une clientèle variée, des couples locaux aux visiteurs internationaux.</p>
          <p>La mentalité régionale est à la fois discrète et ouverte, avec une préférence pour les rencontres organisées. La région bénéficie aussi d'une attractivité transfrontalière avec la Suisse et l'Italie.</p>

          <h2 className="text-3xl font-bold text-foreground font-display">Les grandes villes libertines</h2>
          <h3>Lyon</h3>
          <p>Lyon est le cœur de la vie nocturne libertine en Auvergne-Rhône-Alpes. Les quartiers de la Presqu'île et de la Croix-Rousse sont particulièrement prisés.</p>
          <Link to="/clubs-libertins-lyon" className="text-primary hover:underline">Clubs libertins à Lyon →</Link>
          <h3>Grenoble</h3>
          <p>Grenoble, avec son ambiance étudiante et ses montagnes, attire une clientèle variée.</p>
          <Link to="/clubs-libertins-grenoble" className="text-primary hover:underline">Clubs libertins à Grenoble →</Link>
          <h3>Saint-Étienne</h3><p>Saint-Étienne propose des lieux intimistes.</p>
          <h3>Clermont-Ferrand</h3><p>Clermont-Ferrand attire une clientèle sophistiquée.</p>
          <h3>Annecy</h3><p>Annecy, avec son lac et ses montagnes, attire une clientèle internationale.</p>

          <div className="flex flex-wrap gap-3 not-prose my-6">
            <Link to="/clubs-libertins-lyon" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Lyon</Link>
            <Link to="/clubs-libertins-grenoble" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Grenoble</Link>
            <Link to="/clubbing-suisse" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Clubbing Suisse</Link>
            <Link to="/clubbing-france-europe" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Clubbing France</Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubsLibertinsAuvergneRhoneAlpes;
