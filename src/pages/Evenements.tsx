import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Evenements = () => (
  <ContentPageLayout
    title="Événements libertins Akoky – Soirées & Apéros en France, Belgique, Espagne"
    description="Vivez l'expérience libertine premium : soirées en club, apéros exclusifs et rencontres authentiques en France, Belgique et Espagne."
    canonical="https://akoky.com/evenements"
    heroTitle="Événements libertins Akoky – Soirées & Apéros Libertins en France, Belgique et Espagne"
    heroSubtitle="Vivez l'expérience libertine premium : soirées en club, apéros exclusifs et rencontres authentiques"
    heroImage="https://akoky.com/images/events-akoky-cover.webp"
    breadcrumb={[{ label: "Événements" }]}
    faq={[
      { question: "Comment participer à mon premier événement AKOKY ?", answer: "Créez votre profil gratuit sur Akoky.com, parcourez les événements à venir dans votre région, lisez attentivement les descriptions et les prérequis, puis réservez en ligne. Les débutants sont toujours bienvenus !" },
      { question: "Les événements sont-ils réservés aux couples ?", answer: "Non, AKOKY organise des événements pour tous les profils : couples, célibataires femmes, célibataires hommes (selon quotas)." },
      { question: "Quel est le tarif moyen d'un événement ?", answer: "Les tarifs varient : 20-40€ pour les soirées en club, 15-25€ pour les apéros libertins, 80-150€ pour les soirées privées thématiques, et 200-500€ pour les weekends exclusifs." },
      { question: "Les événements AKOKY respectent-ils le consentement ?", answer: "Absolument. Le consentement est au cœur de notre charte éthique. Tous nos événements suivent des protocoles stricts." },
      { question: "Y a-t-il un dress code pour les événements ?", answer: "Oui, chaque événement a des exigences vestimentaires spécifiques précisées dans sa description." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Événements AKOKY", url: "https://akoky.com/evenements" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        {/* France */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">🇫🇷 Soirées libertines Akoky en France</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Les événements libertins Akoky en France incarnent l'excellence du lifestyle libertin. De Paris à Lyon, en passant par Marseille et Bordeaux, nos soirées libertines en club offrent une expérience unique où élégance et liberté se rencontrent.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">Nos apéros libertins en France sont devenus des rendez-vous incontournables pour la communauté libertine francophone.</p>
        </div>

        {/* Belgique */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">🇧🇪 Événements libertins Akoky en Belgique</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">La Belgique est un territoire d'excellence pour les événements libertins Akoky. Bruxelles et les grandes villes belges accueillent des soirées libertines qui rayonnent dans toute l'Europe francophone.</p>
        </div>

        {/* Espagne */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">🇪🇸 Soirées libertines Akoky en Espagne</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">L'Espagne apporte une dimension solaire et festive aux événements libertins Akoky. De Barcelone à Madrid, en passant par la Costa Brava, nos soirées libertines espagnoles conjuguent la chaleur méditerranéenne avec l'élégance qui fait la signature Akoky.</p>
        </div>

        {/* Why */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">Pourquoi Participer aux Événements Libertins Akoky</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "✨", title: "Ambiance Premium", desc: "Chaque événement libertin Akoky est organisé dans des lieux d'exception." },
              { icon: "🛡️", title: "Sécurité & Respect", desc: "La sécurité de nos membres est notre priorité absolue." },
              { icon: "🎭", title: "Liberté Assumée", desc: "Les soirées libertines Akoky célèbrent la liberté d'être soi-même." },
              { icon: "🌍", title: "Communauté Internationale", desc: "Rejoindre les événements libertins Akoky, c'est intégrer la plus grande communauté libertine d'Europe." },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Clubs Participants", desc: "Découvrez tous les clubs libertins partenaires d'Akoky.", link: "/clubbing", icon: "🏛️" },
            { title: "Soirées Clubbing", desc: "Vivez l'expérience unique des soirées clubbing libertines.", link: "/clubbing", icon: "🎵" },
            { title: "Événements VIP Exclusifs", desc: "Accédez aux événements les plus prestigieux.", link: "/vip", icon: "👑" },
          ].map((l, i) => (
            <Link key={i} to={l.link} className="p-6 bg-card/50 rounded-2xl border border-border hover:border-primary/30 transition-colors">
              <span className="text-3xl mb-3 block">{l.icon}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{l.title}</h3>
              <p className="text-muted-foreground text-sm">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Découvrir les Événements</a>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Evenements;
