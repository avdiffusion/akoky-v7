import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <ContentPageLayout
      title="App AKOKY iOS/Android | Messagerie & Géolocalisation Clubs"
      description="Téléchargez l'app AKOKY : messagerie sécurisée, géolocalisation des 120 clubs libertins, notifications événements. Disponible iOS & Android. Gratuit."
      canonical="https://akoky.com/application.html"
      heroTitle="Téléchargez l'application Akoky"
      heroSubtitle="La version mobile officielle d'Akoky : fluide, élégante et confidentielle"
      heroImage="/images/app-cover.webp"
      heroType="cover"
    >
      {/* Intro & Download */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Installez l'application Akoky</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Accédez rapidement à Akoky et profitez d'une expérience immersive. Installation rapide, aucun compte Apple ou Google requis. Découvrez nos 120+ clubs partenaires géolocalisés.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="flex items-center gap-4 px-6 py-4 bg-card border border-white/10 rounded-xl hover:border-primary/50 transition-all text-left">
              <span className="text-4xl">📱</span>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Télécharger sur</div>
                <div className="text-lg font-bold text-white">iPhone / iPad</div>
              </div>
            </button>
            
            <button className="flex items-center gap-4 px-6 py-4 bg-card border border-white/10 rounded-xl hover:border-primary/50 transition-all text-left">
              <span className="text-4xl">🤖</span>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Télécharger sur</div>
                <div className="text-lg font-bold text-white">Android</div>
              </div>
            </button>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg py-3 px-4 inline-block text-sm text-primary">
            ✅ Utilisateurs iPhone : <strong>Installation directe depuis Safari</strong> (Ajouter à l'écran d'accueil)
          </div>
        </div>
      </section>

      {/* Mockup */}
      <section className="py-8 px-4 flex justify-center">
        <div className="max-w-xs w-full">
          <img src="/images/application-akoky.webp" alt="App Mockup" className="w-full h-auto drop-shadow-2xl" />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Pourquoi installer l'application ?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Expérience fluide", desc: "Navigation ultra-rapide, interface native, chargement instantané. Une fluidité incomparable." },
              { icon: "🔒", title: "Confidentialité", desc: "Icône discrète, aucune trace dans l'historique du navigateur, connexion sécurisée." },
              { icon: "🚀", title: "Accès instantané", desc: "Un simple tap sur l'icône et vous êtes connecté. Fini les recherches dans vos favoris." },
              { icon: "🔔", title: "Notifications", desc: "Recevez des alertes personnalisées pour les messages et événements. Vous contrôlez tout." },
              { icon: "🌍", title: "Partout avec vous", desc: "À la maison, en déplacement, en voyage : gardez le contact avec la communauté." },
              { icon: "💎", title: "Performance", desc: "Messagerie instantanée, Lives fluides, chargement des profils optimisé." }
            ].map((feat, idx) => (
              <div key={idx} className="bg-card border border-white/10 p-6 rounded-xl hover:border-primary/30 transition-all text-center">
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Comment installer (PWA)</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">📱 iPhone / iPad</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0">1</span>
                  <p className="text-gray-300">Ouvrez <strong>akoky.com</strong> dans Safari.</p>
                </li>
                <li className="flex gap-4">
                  <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0">2</span>
                  <p className="text-gray-300">Appuyez sur le bouton <strong>Partager</strong> (carré avec flèche).</p>
                </li>
                <li className="flex gap-4">
                  <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0">3</span>
                  <p className="text-gray-300">Cherchez et sélectionnez <strong>"Sur l'écran d'accueil"</strong>.</p>
                </li>
                <li className="flex gap-4">
                  <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0">4</span>
                  <p className="text-gray-300">Validez par <strong>Ajouter</strong>.</p>
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">🤖 Android</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0">1</span>
                  <p className="text-gray-300">Ouvrez <strong>akoky.com</strong> dans Chrome.</p>
                </li>
                <li className="flex gap-4">
                  <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0">2</span>
                  <p className="text-gray-300">Ouvrez le menu (3 petits points).</p>
                </li>
                <li className="flex gap-4">
                  <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0">3</span>
                  <p className="text-gray-300">Sélectionnez <strong>"Installer l'application"</strong> ou "Ajouter à l'écran d'accueil".</p>
                </li>
                <li className="flex gap-4">
                  <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0">4</span>
                  <p className="text-gray-300">Confirmez l'installation.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-t from-black to-card/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Rejoignez 1,5 million de membres</h2>
          <p className="text-gray-300 mb-8">
            L'application Akoky vous connecte à la plus grande communauté libertine.
          </p>
          <a href="https://app.akoky.com/register" className="inline-block px-8 py-4 rounded-full bg-primary text-black font-bold text-lg hover:scale-105 transition-transform">
            Créer mon compte maintenant
          </a>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Application;