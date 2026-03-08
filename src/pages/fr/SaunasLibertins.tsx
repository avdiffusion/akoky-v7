import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "C'est quoi exactement un sauna libertin ?", answer: "Un sauna libertin est un établissement qui combine détente spa (hammam, jacuzzi, sauna) et rencontres sensuelles entre adultes consentants. L'ambiance y est feutrée et apaisante, loin de l'agitation des clubs traditionnels. Ces lieux privilégient le bien-être et le respect mutuel." },
  { question: "Est-ce que les saunas libertins acceptent les célibataires ?", answer: "Cela dépend des établissements. Les femmes seules sont généralement bienvenues sans restriction. Pour les hommes seuls, chaque sauna a sa politique : certains les acceptent tous les jours, d'autres uniquement certains créneaux horaires ou avec quotas. Vérifiez toujours la politique d'accueil sur la fiche AKOKY avant de vous déplacer." },
  { question: "Quelle tenue porter dans un sauna libertin ?", answer: "La plupart des saunas libertins fonctionnent avec un système simple : on vous fournit un peignoir et une serviette à l'entrée. Vous pouvez circuler en peignoir, en serviette, en maillot de bain ou complètement nu selon les espaces et votre niveau de confort. Certains établissements imposent la nudité dans les zones hammam/sauna pour des raisons d'h" },
  { question: "Combien coûte l'entrée dans un sauna libertin ?", answer: "Les tarifs varient selon la ville et le standing de l'établissement. En moyenne, comptez entre 40 et 70 € pour un couple, entre 25 et 50 € pour une femme seule, et entre 70 et 100 € pour un homme seul (quand accepté). Certains proposent des formules journée ou soirée. Les prix exacts sont indiqués sur chaque fiche de l'annuaire AKOKY." },
  { question: "Peut-on juste profiter du spa sans participer aux activités libertines ?", answer: "Oui, absolument. Le principe du consentement est fondamental dans tout établissement libertin. Vous êtes totalement libre de simplement profiter des équipements spa (hammam, jacuzzi, sauna) sans participer aux jeux sensuels. Personne ne peut vous forcer à quoi que ce soit. Beaucoup de visiteurs viennent d'abord pour observer et se détendre." },
  { question: "Les saunas libertins sont-ils propres et sûrs ?", answer: "Les établissements sérieux appliquent des normes strictes d'hygiène : nettoyage quotidien, désinfection régulière des espaces, mise à disposition de serviettes propres, préservatifs et gels. Les saunas référencés sur AKOKY sont notés par les membres, ce qui permet d'identifier rapidement ceux qui maintiennent des standards élevés. En cas de doute, " },
  { question: "Quelle est la meilleure période pour aller dans un sauna libertin ?", answer: "Les saunas libertins sont généralement ouverts en journée et en soirée. Les après-midis en semaine sont plus calmes et idéaux pour une première visite. Les vendredis et samedis soirs attirent plus de monde. Certains établissements organisent des soirées thématiques (couples uniquement, masques, etc.) — consultez le calendrier sur la fiche AKOKY de " },
  { question: "Comment se passe la première visite dans un sauna libertin ?", answer: "À l'accueil, on vous explique le fonctionnement, on vous remet un peignoir, une serviette et parfois un bracelet de couleur. Vous passez ensuite aux vestiaires pour vous changer. Ensuite, vous êtes libre de circuler entre les différents espaces : détente, spa, cabines privées. Prenez votre temps, observez, discutez. Tout se fait à votre rythme, san" },
  { question: "Peut-on photographier dans un sauna libertin ?", answer: "Non, c'est strictement interdit. La discrétion et le respect de la vie privée sont des valeurs fondamentales. Les téléphones sont généralement interdits ou mis sous scellés à l'entrée. Toute tentative de photographier ou filmer entraîne une expulsion immédiate et définitive." },
  { question: "Où trouver la liste complète des saunas libertins en France ?", answer: "L'annuaire le plus complet est disponible sur AKOKY . Vous y trouverez tous les saunas et clubs libertins de France, avec fiches détaillées, photos, avis vérifiés, tarifs et calendrier des événements. L'annuaire est accessible gratuitement sur le site et sur l'application mobile." },
];

const EQUIPEMENTS = [
  {
    img: "/images/sauna-jacuzzi.webp",
    alt: "Jacuzzi dans un sauna libertin",
    title: "Piscine & Jacuzzi",
    text: "Bassins chauffés et espaces aquatiques pour une détente totale"
  },
  {
    img: "/images/sauna-vestiaires.webp",
    alt: "Vestiaires élégants d'un sauna libertin",
    title: "Vestiaires & Douches",
    text: "Espaces privatifs et équipements modernes pour votre confort"
  },
  {
    img: "/images/sauna-lounge.webp",
    alt: "Espace détente lounge dans un sauna libertin",
    title: "Salons Lounge",
    text: "Zones de relaxation feutrées, idéales pour faire connaissance"
  },
  {
    img: "/images/sauna-cabines.webp",
    alt: "Cabines privées d'un sauna libertin",
    title: "Cabines Privées",
    text: "Espaces intimes pour des moments en toute discrétion"
  },
  {
    img: "/images/sauna-hammam.webp",
    alt: "Hammam dans un établissement libertin",
    title: "Hammam & Sauna",
    text: "Espaces vapeur et chaleur sèche pour une détente profonde"
  },
];

const REGIONS = [
  { to: "/fr/clubs-libertins-paris", label: "Paris" },
  { to: "/fr/clubs-libertins-lyon", label: "Lyon" },
  { to: "/fr/clubs-libertins-marseille", label: "Marseille" },
  { to: "/fr/clubs-libertins-bordeaux", label: "Bordeaux" },
  { to: "/fr/clubs-libertins-toulouse", label: "Toulouse" },
  { to: "/fr/clubs-libertins-nantes", label: "Nantes" },
];

const RELATED = [
  { to: "/fr/clubs-libertins", label: "Clubs Libertins" },
  { to: "/fr/clubs-echangistes-france", label: "Clubs Échangistes" },
  { to: "/fr/clubbing", label: "Guide Clubbing" },
  { to: "/fr/guide-libertin-france", label: "Guide Libertin France" },
  { to: "/fr/evenements", label: "Événements" },
  { to: "/fr/debuter-libertinage", label: "Débuter" },
  { to: "/fr/application", label: "Application AKOKY" },
  { to: "/fr/libertinage", label: "Le Libertinage" },
];

const SaunasLibertins = () => (
  <>
    <MetaTags
      title="Saunas Libertins France 2026 – Guide Complet & Annuaire | AKOKY"
      description="Découvrez les meilleurs saunas libertins en France. Guide complet, espaces, équipements et conseils. AKOKY, référence du libertinage premium."
      canonical="https://akoky.com/fr/saunas-libertins"
      lang="fr"
      ogImage="/images/sauna-cover.webp"
    />
    <HreflangTags slug="saunas-libertins" />
    <ContentPageLayout
      lang="fr"
      title="Saunas Libertins en France"
      description="Guide et annuaire des saunas libertins en France"
      canonical="https://akoky.com/fr/saunas-libertins"
      heroTitle="Saunas Libertins en France"
      heroSubtitle="Découvrez l'univers intimiste des saunas libertins : guide complet, espaces typiques et annuaire par région pour trouver l'établissement idéal."
      heroImage="/images/sauna-cover.webp"
      breadcrumb={[{ label: "Saunas Libertins" }]}
      faq={FAQ}
    >

      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
            <p className="text-muted-foreground leading-relaxed mb-3">En France, les saunas libertins attirent aussi bien les couples débutants que les habitués en quête d'une expérience plus zen. Ils proposent généralement des espaces spa (hammam, jacuzzi, piscine chauffée), des cabines privées, des salons de relaxation et parfois des zones de massage. L'objectif : c</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://akoky.com/images/ambiance-sauna-libertin.webp" alt="Ambiance sauna libertin" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Qu'est-ce qu'un sauna libertin ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Un sauna libertin est un établissement qui combine les codes du spa traditionnel avec la liberté des rencontres libertines. Vous y trouvez des équipements de détente (sauna sec, hammam, jacuzzi, douches sensorielles) associés à des espaces privés conçus pour l'intimité et les jeux sensuels.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">L'accueil se fait généralement en toute discrétion. On vous remet une serviette, un peignoir et un bracelet (parfois de couleur différente selon votre statut : couple, femme seule, homme seul). Vous circulez librement entre les différents espaces : certains sont collectifs et propices aux échanges, </p>
            <p className="text-muted-foreground leading-relaxed mb-3">Les saunas libertins attirent principalement des couples, souvent trentenaires à quinquagénaires, à la recherche d'une expérience élégante et respectueuse. Les femmes seules y sont généralement les bienvenues. Les hommes seuls sont acceptés selon les établissements et les créneaux horaires, avec par</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Espaces et équipements typiques</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Chaque sauna libertin est unique, mais la plupart proposent des espaces similaires pensés pour allier confort, hygiène et sensualité.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPEMENTS.map((e, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={e.img} alt={e.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-foreground mb-1">{e.title}</h4>
                  <p className="text-muted-foreground text-sm">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sauna libertin ou club libertin : quelle différence ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Les deux types d'établissements partagent une même philosophie libertine, mais offrent des expériences radicalement différentes.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-3">🧖 Sauna Libertin</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Ambiance intimiste et détendue</li>
                <li>• Sauna, jacuzzi, hammam au centre</li>
                <li>• Plus calme, idéal pour débuter</li>
                <li>• Souvent ouvert en journée</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-3">💃 Club Libertin</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Ambiance festive et musicale</li>
                <li>• Dance-floor, bar, soirées thématiques</li>
                <li>• Plus animé, dress code exigé</li>
                <li>• Principalement nocturne</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Comment bien choisir son sauna libertin ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Tous les saunas ne se valent pas. Voici les critères essentiels à vérifier avant votre première visite.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Un bon sauna libertin affiche une propreté parfaite : espaces nettoyés quotidiennement, serviettes propres fournies, gel hydroalcoolique disponible. Consultez les avis des membres pour vérifier ce critère crucial.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Privilégiez les établissements référencés sur AKOKY avec des avis vérifiés et une notation élevée. Lisez les retours d'expérience pour identifier les points forts et faibles de chaque lieu.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">Découvrir les saunas libertins en France</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://akoky.com/images/carte-saunas-france.webp" alt="Carte saunas libertins France" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {REGIONS.map((l, i) => (
                <Link key={i} to={l.to} className="text-sm p-3 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
                  → {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {RELATED.map((l, i) => (
              <Link key={i} to={l.to} className="text-sm px-4 py-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default SaunasLibertins;
