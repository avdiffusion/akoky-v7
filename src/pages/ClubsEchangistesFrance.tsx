import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubsEchangistesFrance = () => {
  return (
    <ContentPageLayout
      title="Clubs Échangistes en France 2026 | Guide Complet AKOKY"
      description="Découvrez les clubs échangistes en France : fonctionnement, ambiances, conseils. Guide complet avec photos, comparatifs et annuaire des meilleurs établissements échangistes."
      canonical="https://akoky.com/clubs-echangistes-france"
      heroTitle="Clubs Échangistes en France"
      heroSubtitle="L'univers de l'échangisme expliqué : rencontres, respect et plaisir partagé"
      heroImage="/images/club-echangiste-cover.webp"
      breadcrumb={[{ label: "Clubbing", href: "/clubbing" }, { label: "Clubs échangistes" }]}
      faq={[
        { question: "Quelle est la différence entre un club échangiste et un club libertin ?", answer: "Les clubs échangistes sont spécialisés dans l'échange de partenaires entre couples consentants. Les clubs libertins sont plus ouverts à toutes les pratiques libertines." },
        { question: "Les hommes seuls sont-ils admis ?", answer: "Les clubs échangistes sont majoritairement réservés aux couples. Les hommes seuls sont rarement admis." },
        { question: "Comment se passe la sélection à l'entrée ?", answer: "La sélection garantit un public respectueux et dans l'esprit de l'échangisme. Tenue correcte exigée, courtoisie et respect sont les maîtres mots." },
        { question: "Quels types de soirées sont proposées ?", answer: "Soirées classiques couples uniquement, soirées à thème (lingerie, masques, blanc), soirées VIP sur invitation, et parfois des après-midis détente." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Clubs Échangistes en France 2026",
        "description": "Guide des clubs échangistes en France par AKOKY.",
      }}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl border-l-4 border-primary pl-6 mb-8">
              Les <strong>clubs échangistes</strong> sont des établissements privés dédiés aux couples qui souhaitent explorer l'échangisme dans un cadre sécurisé, discret et respectueux.
            </p>
            <p>
              En France, l'échangisme se pratique dans des clubs spécialisés qui garantissent intimité, consentement mutuel et sélection rigoureuse à l'entrée. Ces établissements proposent des espaces pensés pour faciliter les rencontres à quatre : salons privés, cabines VIP, zones lounge et parfois même des espaces festifs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center font-display">Espaces et atmosphères typiques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🍸", title: "Bar & Espace Lounge", desc: "Zones conviviales pour faire connaissance autour d'un verre." },
              { icon: "💃", title: "Piste de Danse", desc: "Ambiance festive et musicale pour une atmosphère décontractée." },
              { icon: "🛋️", title: "Salons Privés", desc: "Espaces intimes et feutrés pour des rencontres à quatre en toute discrétion." },
              { icon: "👑", title: "Cabines VIP", desc: "Espaces privatifs haut de gamme avec équipements premium." },
              { icon: "🎭", title: "Soirées à Thème", desc: "Événements spéciaux : masques, lingerie, blanc, années 80..." },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-6">Découvrez l'annuaire complet des clubs libertins en France</p>
          <Link to="/clubbing" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all">
            Voir le portail Clubbing →
          </Link>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubsEchangistesFrance;
