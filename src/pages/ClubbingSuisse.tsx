import ContentPageLayout from "@/components/layout/ContentPageLayout";

const ClubbingSuisse = () => {
  const cities = [
    { name: "Genève", desc: "Scène libertine discrète mais dynamique, clientèle cosmopolite." },
    { name: "Lausanne", desc: "Ambiance jeune et vibrante, soirées privées et clubs intimistes." },
    { name: "Zurich", desc: "Scène libertine haut de gamme, clientèle internationale." },
    { name: "Bâle", desc: "Offre libertine variée, saunas et soirées privées." },
  ];

  return (
    <ContentPageLayout
      title="Clubs libertins en Suisse | Annuaire des établissements et soirées – AKOKY"
      description="Découvrez les clubs libertins en Suisse : établissements, ambiances, saunas et soirées libertines sélectionnés par AKOKY. Guide complet pour couples et libertins en Suisse."
      canonical="https://akoky.com/clubbing-suisse"
      heroTitle="Clubbing libertin en Suisse"
      heroSubtitle="Découvrez les clubs, villes et rencontres haut de gamme en Suisse"
      heroImage="/images/clubbing-suisse.webp"
      breadcrumb={[{ label: "Clubbing", href: "/clubbing" }, { label: "Suisse" }]}
      faq={[
        { question: "Quelles sont les meilleures villes libertines en Suisse ?", answer: "Genève, Lausanne, Zurich et Bâle sont les principales destinations libertines en Suisse." },
        { question: "Les clubs suisses sont-ils accessibles aux frontaliers français ?", answer: "Oui, les flux France → Suisse sont importants. Les régions françaises limitrophes entretiennent des liens étroits avec la scène libertine suisse." },
        { question: "Quel est le niveau des clubs suisses ?", answer: "Les clubs suisses se distinguent par leur excellence, discrétion et sophistication, avec des établissements haut de gamme." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Clubs libertins en Suisse",
        "description": "Guide des clubs libertins en Suisse par AKOKY.",
      }}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Le libertinage en Suisse aujourd'hui</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p>La Suisse se distingue comme une destination libertine haut de gamme, alliant discrétion et sophistication. Avec une forte culture de la confidentialité, le pays attire une clientèle internationale en quête d'expériences raffinées.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center font-display">Grandes villes libertines en Suisse</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city, idx) => (
              <div key={idx} className="bg-card border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{city.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubbingSuisse;
