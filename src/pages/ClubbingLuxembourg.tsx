import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubbingLuxembourg = () => {
  return (
    <ContentPageLayout
      title="Clubs libertins au Luxembourg | Annuaire et soirées – AKOKY"
      description="Découvrez l'annuaire AKOKY des clubs libertins au Luxembourg : établissements, ambiances, saunas et soirées pour couples et libertins. Guide complet au Luxembourg."
      canonical="https://akoky.com/clubbing-luxembourg"
      heroTitle="Clubbing libertin au Luxembourg"
      heroSubtitle="Découvrez les clubs et soirées haut de gamme dans un cadre ultra-discret"
      heroImage="/images/clubbing-luxembourg.webp"
      breadcrumb={[{ label: "Clubbing", href: "/clubbing" }, { label: "Luxembourg" }]}
      faq={[
        { question: "Le Luxembourg a-t-il une scène libertine ?", answer: "Oui, le Luxembourg offre une scène libertine ultra-discrète et haut de gamme, avec une clientèle internationale." },
        { question: "Les clubs luxembourgeois acceptent-ils les frontaliers ?", answer: "Oui, la proximité avec la France, la Belgique et l'Allemagne facilite les déplacements. Les couples viennent régulièrement des pays voisins." },
        { question: "Comment accéder aux clubs au Luxembourg ?", answer: "La plupart des clubs et soirées privées au Luxembourg fonctionnent sur réservation avec des protocoles d'accès stricts pour garantir la confidentialité." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Clubs libertins au Luxembourg",
        "description": "Guide des clubs libertins au Luxembourg par AKOKY.",
      }}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Le libertinage au Luxembourg aujourd'hui</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Le Luxembourg se distingue par sa scène libertine ultra-discrète et haut de gamme. Avec un fort pouvoir d'achat et une population internationale, le pays offre un cadre idéal pour des pratiques libertines très privées.</p>
            <p>La mentalité luxembourgeoise, réservée et respectueuse, crée un environnement propice aux rencontres discrètes et sophistiquées. AKOKY permet aux couples de découvrir les clubs, de lire les avis vérifiés et d'organiser leurs sorties en toute sérénité.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Luxembourg et pays frontaliers</h2>
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p>Le Luxembourg bénéficie d'une scène libertine transfrontalière dynamique grâce à sa position centrale en Europe.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Clubbing Belgique", link: "/clubbing-belgique" },
              { label: "Clubbing Suisse", link: "/clubbing-suisse" },
              { label: "Clubbing France & Europe", link: "/clubbing-france-europe" },
            ].map((item, idx) => (
              <Link key={idx} to={item.link} className="bg-card border border-white/10 rounded-xl px-4 py-3 text-center text-gray-300 hover:border-primary/30 hover:text-primary transition-all text-sm font-medium">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubbingLuxembourg;
