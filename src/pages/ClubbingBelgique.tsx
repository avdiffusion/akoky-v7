import ContentPageLayout from "@/components/layout/ContentPageLayout";

const ClubbingBelgique = () => {
  const cities = [
    { name: "Bruxelles", desc: "Capitale européenne, cœur battant du libertinage en Belgique avec une grande diversité de clubs." },
    { name: "Anvers", desc: "Ambiance dynamique et clubs modernes, clientèle jeune et branchée." },
    { name: "Liège", desc: "Scène libertine intimiste, clubs réputés pour leur ambiance conviviale." },
    { name: "Charleroi", desc: "Scène libertine en plein essor, clientèle variée." },
    { name: "Gand", desc: "Scène libertine sophistiquée, clubs élégants." },
    { name: "Bruges", desc: "Expérience libertine unique, ambiance intimiste." },
  ];

  return (
    <ContentPageLayout
      title="Clubs libertins en Belgique | Annuaire des établissements et soirées – AKOKY"
      description="Découvrez les clubs libertins en Belgique : établissements, ambiances, saunas et soirées libertines sélectionnés par AKOKY. Guide complet pour couples et libertins en Belgique."
      canonical="https://akoky.com/clubbing-belgique"
      heroTitle="Clubbing libertin en Belgique"
      heroSubtitle="Le guide complet des clubs, régions et villes libertines en Belgique par AKOKY"
      heroImage="/images/clubbing-belgique.webp"
      breadcrumb={[{ label: "Clubbing", href: "/clubbing" }, { label: "Belgique" }]}
      faq={[
        { question: "Quelles sont les meilleures villes libertines en Belgique ?", answer: "Bruxelles, Anvers et Liège sont les villes les plus dynamiques pour le libertinage en Belgique." },
        { question: "Les clubs belges acceptent-ils les frontaliers ?", answer: "Oui, les clubs belges accueillent une clientèle internationale, notamment les frontaliers français, néerlandais et allemands." },
        { question: "Comment organiser une sortie libertine en Belgique ?", answer: "Utilisez AKOKY pour consulter les avis vérifiés, planifier vos sorties et découvrir les clubs adaptés à vos préférences." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Clubs libertins en Belgique",
        "description": "Guide des clubs libertins en Belgique par AKOKY.",
      }}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Le libertinage en Belgique aujourd'hui</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p>La Belgique se positionne comme l'un des pays européens les plus ouverts au libertinage, avec une scène dynamique et diversifiée. La mentalité belge, à la fois ouverte et pragmatique, favorise une approche respectueuse et bienveillante des rencontres libertines.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center font-display">Grandes villes libertines en Belgique</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, idx) => (
              <div key={idx} className="bg-card border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{city.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Régions libertines en Belgique</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Wallonie", desc: "Expérience intimiste et traditionnelle du libertinage." },
              { name: "Flandre", desc: "Scène libertine moderne avec clubs innovants." },
              { name: "Bruxelles-Capitale", desc: "Diversité de clubs, ambiance cosmopolite unique." },
            ].map((region, idx) => (
              <div key={idx} className="bg-card/50 border border-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary mb-2">{region.name}</h3>
                <p className="text-gray-400 text-sm">{region.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubbingBelgique;
