import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubsLibertinsCapDagde = () => {
  return (
    <ContentPageLayout
      title="Clubs Libertins Cap d'Agde 2026 | Village Naturiste & Soirées Échangistes"
      description="Guide complet des clubs libertins du Cap d'Agde et du village naturiste : meilleurs établissements, soirées échangistes, plages naturistes, conseils logement. Tout pour vos vacances libertines au Cap d'Agde."
      canonical="https://akoky.com/clubs-libertins-cap-dagde.html"
      heroTitle="Clubs Libertins du Cap d'Agde"
      heroSubtitle="Le guide ultime du village naturiste et de la scène libertine méditerranéenne"
      heroImage="/images/club-echangiste-cover.webp"
      breadcrumb={[{ label: "Clubbing", href: "/clubbing" }, { label: "Cap d'Agde" }]}
      faq={[
        {
          question: "Faut-il être naturiste pour aller au Cap d'Agde ?",
          answer: "Oui, la nudité est obligatoire sur la plage et fortement recommandée dans le village naturiste en journée. Le soir, les tenues deviennent plus libertines et sophistiquées."
        },
        {
          question: "L'accès au village naturiste est-il payant ?",
          answer: "L'accès piéton au village est gratuit. En revanche, l'accès en voiture est payant et nécessite un pass délivré à l'entrée."
        },
        {
          question: "Quels sont les meilleurs clubs pour les couples débutants ?",
          answer: "Le Melrose est souvent recommandé pour les débutants grâce à son ambiance conviviale et mixte. Le Glamour est également accessible mais plus sélectif."
        },
        {
          question: "Peut-on venir seul(e) au Cap d'Agde ?",
          answer: "Oui, les célibataires (hommes et femmes) sont acceptés dans le village. Cependant, l'accès à certains clubs peut être restreint ou payant pour les hommes seuls."
        },
        {
          question: "Quelle est la meilleure période pour y aller ?",
          answer: "La haute saison (juillet-août) est très animée mais bondée. Juin et septembre offrent un excellent compromis avec une météo agréable et une ambiance festive mais plus respirable."
        }
      ]}
    >
      {/* Intro */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Le Cap d'Agde est bien plus qu'une station balnéaire méditerranéenne. C'est la destination libertine par excellence en Europe, abritant le plus grand village naturiste du continent. Chaque année, des milliers de visiteurs du monde entier viennent découvrir cette enclave unique où naturisme, libertinage et vacances se conjuguent dans un cadre exceptionnel.
          </p>
          <p className="text-lg text-gray-400">
            Que vous soyez débutants curieux ou habitués de la scène libertine, le Cap d'Agde offre une expérience incomparable : 2 kilomètres de plage naturiste, une dizaine de clubs libertins réputés, des bars et restaurants dédiés, et une ambiance festive unique de juin à septembre.
          </p>
        </div>
      </section>

      {/* Village Naturiste */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Le Village Naturiste du Cap d'Agde</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Un quartier à part entière</h3>
              <p className="text-gray-300">Le village naturiste du Cap d'Agde, également connu sous le nom de Port Nature, est une véritable ville dans la ville. S'étendant sur plus de 180 hectares, ce quartier unique en son genre accueille jusqu'à 40 000 personnes en haute saison.</p>
              <p className="text-gray-300">Vous y trouverez des centaines de commerces, une trentaine de restaurants et bars, des supermarchés, une poste, des cabinets médicaux... Tout est pensé pour que les visiteurs puissent vivre entièrement nus durant leur séjour.</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src="/images/cap-agde-port-nature.webp" alt="Village naturiste" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img src="/images/cap-agde-plage-naturiste.webp" alt="Plage naturiste" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-primary">Fonctionnement et accès</h3>
              <p className="text-gray-300">L'accès au village naturiste est contrôlé par plusieurs entrées gardées. Si vous êtes en voiture, vous devrez vous garer dans l'un des parkings situés à l'entrée du village. Le village est ensuite entièrement piétonnier.</p>
              <p className="text-gray-300">L'entrée est gratuite pour les piétons. La nudité est obligatoire sur la plage naturiste et fortement recommandée dans l'ensemble du village, particulièrement en journée. Le village dispose de son propre système de sécurité 24h/24.</p>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-8">
            <h4 className="text-xl font-bold text-white mb-4">🌟 Points clés du village naturiste</h4>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Superficie : 180 hectares dédiés</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Capacité : 40 000 personnes</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Plage : 2 km de plage naturiste</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Sécurité : Surveillance 24h/24</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Les Clubs Libertins du Cap d'Agde</h2>
          
          <div className="space-y-8">
            {/* Le Glamour */}
            <div className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Le Glamour</h3>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">Incontournable</span>
                  </div>
                  <p className="text-gray-300 mb-4">Le Glamour est sans doute le club le plus emblématique du Cap d'Agde. Situé en plein cœur du village, cet établissement séduit par son élégance. L'ambiance est résolument festive et glamour, avec des soirées thématiques célèbres (soirée blanche, mousse, lingerie).</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mt-6">
                    <div>📍 Village naturiste - Centre</div>
                    <div>💰 45-60€ couple</div>
                    <div>🗓️ Avril - Septembre</div>
                    <div>👥 Festive, élégante, 30-50 ans</div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 rounded-xl overflow-hidden h-48 md:h-auto">
                  <img src="/images/club-glamour-cap-agde.webp" alt="Le Glamour" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Le Tantra */}
            <div className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Le Tantra</h3>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">Ambiance Zen</span>
                  </div>
                  <p className="text-gray-300 mb-4">Le Tantra propose une approche différente, inspirée de la philosophie tantrique. Ambiance zen et sensuelle, spa, massages, hammam. Idéal pour les couples recherchant une expérience plus contemplative et sensuelle que purement festive.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mt-6">
                    <div>📍 Village naturiste - Ouest</div>
                    <div>💰 40-50€ couple</div>
                    <div>🗓️ Mai - Septembre</div>
                    <div>👥 Zen, sensuelle, 40-60 ans</div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 rounded-xl overflow-hidden h-48 md:h-auto">
                  <img src="/images/club-tantra-cap-agde.webp" alt="Le Tantra" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Le Melrose */}
            <div className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Le Melrose</h3>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">Référence</span>
                  </div>
                  <p className="text-gray-300 mb-4">Véritable institution ouverte depuis plus de 20 ans. Ambiance conviviale et décontractée, clientèle mixte. Réputé pour ses animations, jeux coquins et sa piscine intérieure. Parfait pour les débutants.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mt-6">
                    <div>📍 Village naturiste - Est</div>
                    <div>💰 35-55€ couple</div>
                    <div>🗓️ Avril - Octobre</div>
                    <div>👥 Conviviale, mixte, tout âge</div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 rounded-xl overflow-hidden h-48 md:h-auto">
                  <img src="/images/club-melrose-cap-agde.webp" alt="Le Melrose" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bars */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">Bars et espaces libertins</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card p-6 rounded-xl border border-white/5">
              <h4 className="font-bold text-white mb-2">🍸 Le Bar des Flots Bleus</h4>
              <p className="text-sm text-gray-400">Point de rencontre incontournable en soirée. Grande terrasse, ambiance festive.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-white/5">
              <h4 className="font-bold text-white mb-2">🎵 La Luna Rossa</h4>
              <p className="text-sm text-gray-400">Bar lounge raffiné le soir, idéal pour un apéritif avec vue sur le port.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-white/5">
              <h4 className="font-bold text-white mb-2">🌴 Le Jardin d'Éden</h4>
              <p className="text-sm text-gray-400">Espace piscine avec animations quotidiennes (aquagym coquine, jeux).</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-white/5">
              <h4 className="font-bold text-white mb-2">Le Waiki Beach</h4>
              <p className="text-sm text-gray-400">Plage privée et restaurant, ambiance chill la journée et festive le soir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary/10 border-y border-primary/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt pour l'expérience Cap d'Agde ?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Rejoignez la communauté AKOKY pour organiser vos vacances, rencontrer des couples qui y seront en même temps que vous, et découvrir les événements exclusifs.
          </p>
          <a href="https://app.akoky.com/register" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-black text-lg hover:scale-105 transition-transform">
            Créer mon compte gratuit
          </a>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubsLibertinsCapDagde;