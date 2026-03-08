import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const ClubsLibertinsGeneral = () => {
  const faq = [
    { question: "Qu'est-ce qu'un club libertin exactement ?", answer: "Un club libertin est un établissement privé dédié aux rencontres et aux pratiques sexuelles entre adultes consentants. Ces lieux offrent plusieurs espaces : bar, piste de danse, salons privés, cabines, espaces de jeux collectifs." },
    { question: "Peut-on aller dans un club libertin en tant que célibataire ?", answer: "Cela dépend des clubs. La plupart acceptent les femmes seules sans restriction. Pour les hommes seuls, les règles varient : certains clubs les refusent, d'autres les acceptent uniquement certains soirs." },
    { question: "Combien coûte l'entrée dans un club libertin ?", answer: "En moyenne, comptez entre 30 et 80 € pour un couple, entre 20 et 60 € pour une femme seule, et entre 60 et 120 € pour un homme seul. Certains clubs proposent des formules avec boissons incluses." },
    { question: "Quelle tenue porter dans un club libertin ?", answer: "La plupart des clubs imposent un dress code : tenue élégante, sexy ou thématique selon les soirées. Pour les femmes : robe, lingerie fine, talons. Pour les hommes : chemise, pantalon de ville." },
    { question: "Est-il obligatoire de participer aux activités sexuelles dans un club libertin ?", answer: "Absolument pas. La règle d'or est le consentement mutuel. Vous êtes totalement libre de simplement boire un verre, observer, danser, ou rester dans les espaces communs." },
    { question: "Quelle est la différence entre un club libertin et un club échangiste ?", answer: "Le club échangiste est spécifiquement orienté vers l'échange de partenaires entre couples. Le club libertin est plus large et accueille couples, femmes seules, parfois hommes seuls." },
    { question: "Comment trouver un club libertin de confiance ?", answer: "Privilégiez les établissements référencés sur des plateformes reconnues comme AKOKY, où vous trouverez des avis authentiques de membres vérifiés." },
    { question: "Les clubs libertins sont-ils sûrs et hygiéniques ?", answer: "Les clubs sérieux respectent des normes strictes : nettoyage quotidien, mise à disposition de préservatifs, gels, serviettes propres, et surveillance discrète." },
    { question: "Peut-on photographier ou filmer dans un club libertin ?", answer: "Non, c'est strictement interdit. Les téléphones sont généralement interdits ou mis sous scellés à l'entrée." },
  ];

  return (
    <ContentPageLayout
      title="Clubs Libertins en France – Guide de référence | AKOKY"
      description="Le guide de référence pour découvrir et choisir votre club libertin idéal. Plus de 120 établissements en France avec avis vérifiés."
      canonical="https://akoky.com/clubs-libertins"
      heroTitle="Clubs Libertins en France"
      heroSubtitle="Le guide de référence pour découvrir et choisir votre club libertin idéal"
      heroImage="/images/club.webp"
      faq={faq}
      breadcrumb={[{ label: "Clubs Libertins en France" }]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-lg">
          <p>Les <strong>clubs libertins</strong> sont des lieux dédiés à la liberté sexuelle, où couples et célibataires peuvent se rencontrer dans un cadre élégant, sécurisé et respectueux. Contrairement aux idées reçues, ces établissements proposent bien plus qu'une simple soirée : ils offrent un véritable art de vivre libertin, alliant convivialité, sensualité et discrétion.</p>
          <p>En France, on compte aujourd'hui plus de 120 établissements libertins répartis sur tout le territoire, des saunas intimistes aux grands clubs parisiens, en passant par les adresses légendaires du Cap d'Agde.</p>

          <h2 className="text-3xl font-bold text-foreground font-display">Comment bien choisir un club libertin ?</h2>
          <h3>L'ambiance générale</h3>
          <p>Certains clubs sont feutrés et intimistes, d'autres plus festifs avec DJ et piste de danse. Renseignez-vous sur le style de la soirée.</p>
          <h3>Les profils acceptés</h3>
          <p>Couples uniquement ? Femmes seules bienvenues ? Hommes seuls tolérés certains soirs ? Chaque club a sa politique.</p>
          <h3>Les règles de fonctionnement</h3>
          <p>Respect, consentement, hygiène : chaque club affiche ses règles. Certains imposent un dress code strict.</p>
          <h3>Sécurité et discrétion</h3>
          <p>Un bon club libertin garantit anonymat, propreté irréprochable, surveillance discrète et respect absolu de la vie privée.</p>

          <h2 className="text-3xl font-bold text-foreground font-display">Clubs libertins, clubs échangistes et saunas : quelles différences ?</h2>
          <h3>Club Libertin</h3>
          <p>Le plus courant. Lieu complet avec bar, piste de danse, salons privés, espaces de jeux. Idéal pour les couples qui aiment l'ambiance nocturne.</p>
          <h3>Club Échangiste</h3>
          <p>Spécifiquement dédié aux couples qui pratiquent l'échange de partenaires. Ambiance plus intime, moins festive.</p>
          <Link to="/clubs-echangistes-france" className="text-primary hover:underline">En savoir plus sur les clubs échangistes →</Link>
          <h3>Sauna Libertin</h3>
          <p>Mise sur la relaxation et le bien-être : hammam, jacuzzi, cabines privées. Parfait pour les débutants.</p>

          <h2 className="text-3xl font-bold text-foreground font-display">Trouver un club libertin près de chez vous</h2>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <Link to="/clubs-libertins-paris" className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <p className="font-bold text-foreground">🗼 Paris & Île-de-France</p>
              <p className="text-sm text-muted-foreground">25+ établissements</p>
            </Link>
            <Link to="/clubs-libertins-paca" className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <p className="font-bold text-foreground">🌴 PACA & Côte d'Azur</p>
              <p className="text-sm text-muted-foreground">18+ établissements</p>
            </Link>
            <Link to="/clubs-libertins-cap-dagde" className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <p className="font-bold text-foreground">☀️ Cap d'Agde</p>
              <p className="text-sm text-muted-foreground">12+ établissements</p>
            </Link>
            <Link to="/clubs-libertins-lyon" className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <p className="font-bold text-foreground">🦁 Lyon & Auvergne-Rhône-Alpes</p>
              <p className="text-sm text-muted-foreground">15+ établissements</p>
            </Link>
            <Link to="/clubs-libertins-marseille" className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <p className="font-bold text-foreground">⚓ Marseille</p>
              <p className="text-sm text-muted-foreground">8+ établissements</p>
            </Link>
          </div>

          <h3>Toutes les régions</h3>
          <p>Bordeaux, Toulouse, Nantes, Lille, Strasbourg... Découvrez tous les clubs de France dans l'annuaire.</p>
          <div className="flex flex-wrap gap-3 not-prose my-6">
            <Link to="/clubs-libertins-bordeaux" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Bordeaux</Link>
            <Link to="/clubs-libertins-toulouse" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Toulouse</Link>
            <Link to="/clubs-libertins-nantes" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Nantes</Link>
            <Link to="/clubs-libertins-lille" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Lille</Link>
            <Link to="/clubs-libertins-strasbourg" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Strasbourg</Link>
            <Link to="/clubs-libertins-nice" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Nice</Link>
            <Link to="/clubs-libertins-rennes" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Rennes</Link>
            <Link to="/clubs-libertins-montpellier" className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/50 transition-colors">Montpellier</Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ClubsLibertinsGeneral;
