import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Vision = () => (
  <ContentPageLayout
    title="Notre Vision – L'évolution du libertinage moderne | AKOKY"
    description="Découvrez la vision d'Akoky : liberté assumée, consentement clair, sécurité renforcée, technologie au service de l'humain et élégance."
    canonical="https://akoky.com/vision"
    heroTitle="Notre Vision"
    heroSubtitle="L'évolution du libertinage moderne"
    heroImage="https://legal.akoky.com/UPLOAD-AKOKY/AKOKY.COM/images/images-cover-pages/vision-cover.webp"
    breadcrumb={[{ label: "Vision" }]}
    schema={{ "@context": "https://schema.org", "@type": "AboutPage", name: "Vision AKOKY", url: "https://akoky.com/vision" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">La naissance d'une vision</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Le libertinage a toujours été une expression de liberté, un espace où les conventions s'effacent pour laisser place à l'authenticité et au consentement mutuel. Pourtant, avec l'arrivée du numérique, cet univers s'est transformé sans toujours évoluer. Les plateformes se sont multipliées, mais beaucoup ont reproduit les mêmes schémas : interfaces vieillissantes, approches superficielles, absence de véritable protection pour les membres.</p>
            <p>C'est de ce constat qu'est née Akoky. Non pas comme une énième plateforme libertine, mais comme une réponse pensée, structurée et respectueuse aux besoins d'une communauté qui mérite des outils à la hauteur de ses exigences.</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">D'AcoquinementVotre à Akoky : une évolution assumée</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Avant Akoky, il y a eu AcoquinementVotre. Une aventure humaine, une communauté soudée, des rencontres authentiques et des événements mémorables. Akoky n'est pas une rupture avec AcoquinementVotre. C'est son prolongement naturel, sa montée en gamme, son évolution vers une plateforme libertine professionnelle et pérenne.</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">La vision Akoky</h2>
          <p className="text-muted-foreground mb-8">Cinq piliers fondamentaux pour repenser le libertinage en ligne</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🕊️", title: "Liberté assumée", desc: "La liberté sexuelle et relationnelle est un droit fondamental. Akoky offre un espace où chacun peut exprimer ses désirs sans jugement ni pression." },
              { icon: "🤝", title: "Consentement clair", desc: "Le consentement est au cœur de toute interaction saine. Sur Akoky, nous avons conçu des outils permettant à chaque membre d'exprimer clairement ses attentes." },
              { icon: "🛡️", title: "Sécurité renforcée", desc: "Protection des données personnelles, vérification des profils, modération active, signalements traités rapidement." },
              { icon: "⚡", title: "Technologie au service de l'humain", desc: "Live streaming sécurisé, messagerie instantanée fluide, gestion avancée des identités, événements encadrés." },
              { icon: "✨", title: "Élégance et discrétion", desc: "Le libertinage ne rime pas avec vulgarité. Akoky propose une interface élégante où chaque détail a été pensé." },
            ].map((p, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Une plateforme pensée pour tous les profils</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {[
              { icon: "💑", label: "Couples" },
              { icon: "👤", label: "Femmes seules" },
              { icon: "👔", label: "Hommes seuls" },
              { icon: "🌱", label: "Débutants" },
              { icon: "⭐", label: "Confirmés" },
            ].map((p, i) => (
              <div key={i} className="p-4 bg-card/50 rounded-xl border border-border text-center">
                <span className="text-2xl block mb-2">{p.icon}</span>
                <p className="text-foreground text-sm font-medium">{p.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/akoky" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Découvrir Akoky</Link>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Vision;
