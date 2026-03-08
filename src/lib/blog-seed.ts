import { BlogArticle } from "./blog-types";

/**
 * Seed data — all existing FR blog articles pre-populated.
 * These are injected into localStorage on first load so they appear
 * in the admin as if they were created from the admin interface.
 */

let idCounter = 1;
const mkId = () => `seed_${String(idCounter++).padStart(3, "0")}`;
const now = new Date().toISOString();

// Helper to generate slug from a URL or title
const slugFromUrl = (url: string): string => {
  const match = url.match(/\/blog\/(.+?)\/?$/);
  return match ? match[1].replace(/\/$/, "") : "";
};

export const SEED_ARTICLES: BlogArticle[] = [
  // ═══════════════════════════════════════════════════════════════════
  // FEATURED ARTICLES (from akoky.com/fr/blogs)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: mkId(), category: "clubs", image: "/images/panorama-paris-nuit.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "clubs-libertins-paris-guide-2026", metaTitle: "Clubs Libertins à Paris 2026 — Le Guide Complet AKOKY", metaDescription: "Découvrez les meilleurs clubs libertins de Paris en 2026 : ambiance, tarifs, dress code et conseils pour une première visite réussie.", title: "Clubs Libertins à Paris 2026 — Le Guide Complet AKOKY", content: "<h2>Les meilleurs clubs libertins de Paris en 2026</h2><p>Paris reste la capitale incontestée du libertinage en Europe. Découvrez notre sélection complète des clubs qui font vibrer la nuit parisienne.</p><h3>Le dress code</h3><p>Chaque club a ses propres exigences vestimentaires. En règle générale, la tenue sexy et élégante est de mise pour les femmes, tandis que les hommes doivent opter pour une tenue soignée.</p><h3>Les tarifs</h3><p>Les prix varient considérablement d'un club à l'autre. Comptez entre 30€ et 120€ par couple selon l'établissement et la soirée.</p><h3>Nos conseils pour une première visite</h3><ul><li>Arrivez tôt pour vous familiariser avec les lieux</li><li>Respectez les codes et les limites de chacun</li><li>Communiquez avec votre partenaire avant, pendant et après</li><li>N'hésitez pas à demander conseil au staff</li></ul>", published: true },
    },
  },
  {
    id: mkId(), category: "clubs", image: "/images/clubs-libertins-villes.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "scene-libertine-lyon-2026", metaTitle: "La Scène Libertine à Lyon — Clubs et Événements 2026", metaDescription: "Explorez la scène libertine lyonnaise : meilleurs clubs, soirées et communauté swinger dans la capitale des Gaules en 2026.", title: "La Scène Libertine à Lyon — Clubs et Événements 2026", content: "<h2>Lyon, capitale libertine du Sud-Est</h2><p>Lyon s'impose comme l'une des villes les plus dynamiques pour le libertinage en France. Entre clubs historiques et soirées privées, la scène libertine lyonnaise ne cesse de se renouveler.</p><h3>Les clubs incontournables</h3><p>La ville compte plusieurs établissements de renom qui proposent des soirées thématiques variées tout au long de l'année.</p><h3>La communauté lyonnaise</h3><p>Les libertins lyonnais sont réputés pour leur convivialité et leur ouverture d'esprit. AKOKY vous aide à les rencontrer.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/debuter-libertinage-cover.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "debuter-libertinage-france-conseils", metaTitle: "Débuter dans le Libertinage en France — Conseils Pratiques 2026", metaDescription: "Guide complet pour les débutants : comment préparer votre première expérience libertine, choisir un club et respecter les codes.", title: "Débuter dans le Libertinage en France — Conseils Pratiques 2026", content: "<h2>Votre première expérience libertine</h2><p>Débuter dans le libertinage est une aventure excitante qui mérite d'être bien préparée. Ce guide vous accompagne pas à pas.</p><h3>Avant de commencer</h3><ul><li>Discutez ouvertement avec votre partenaire de vos envies et limites</li><li>Définissez ensemble un « safe word »</li><li>Renseignez-vous sur les différentes pratiques</li></ul><h3>Choisir son premier club</h3><p>Optez pour un établissement accueillant pour les débutants. Certains clubs proposent des soirées spéciales « découverte ».</p><h3>Les codes à respecter</h3><p>Le consentement est la règle d'or. Un « non » est toujours respecté, sans insistance ni jugement.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "evenements", image: "/images/cap-agde-libertin.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "cap-agde-libertinage-ete-2026", metaTitle: "Cap d'Agde Libertin — Les Meilleurs Événements de l'Été 2026", metaDescription: "Guide complet du Cap d'Agde libertin : village naturiste, clubs, plages et événements incontournables de l'été 2026.", title: "Cap d'Agde Libertin — Les Meilleurs Événements de l'Été 2026", content: "<h2>Le Cap d'Agde, Mecque du libertinage estival</h2><p>Chaque été, le village naturiste du Cap d'Agde accueille des milliers de libertins venus du monde entier. Découvrez les événements à ne pas manquer.</p><h3>Le village naturiste</h3><p>Le quartier Port Nature est le cœur battant du libertinage au Cap d'Agde, avec ses clubs, bars et plages dédiés.</p><h3>Les événements phares de l'été 2026</h3><p>Soirées mousse, pool parties, événements thématiques… l'été promet d'être intense.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/libertinage.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "lifestyle-swinger-france-communaute", metaTitle: "Le Lifestyle Swinger en France — Communauté et Valeurs", metaDescription: "Tout comprendre sur le lifestyle swinger en France : valeurs, communauté, éthique et pourquoi AKOKY est la plateforme de référence.", title: "Le Lifestyle Swinger en France — Communauté et Valeurs", content: "<h2>Le lifestyle swinger, bien plus qu'une pratique</h2><p>Le swinging en France repose sur des valeurs fortes : respect, consentement, communication et plaisir partagé.</p><h3>Les valeurs de la communauté</h3><ul><li>Le respect mutuel avant tout</li><li>La communication au sein du couple</li><li>Le consentement éclairé et révocable</li><li>La discrétion et la confidentialité</li></ul><h3>AKOKY, plateforme de référence</h3><p>Avec plus de 1,5 million de membres, AKOKY est devenu le premier réseau social libertin d'Europe francophone.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "clubs", image: "/images/panorama-PACA-COTEAZUR.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "clubs-libertins-marseille-cote-azur", metaTitle: "Clubs Libertins à Marseille et sur la Côte d'Azur — Guide AKOKY", metaDescription: "Guide des clubs libertins à Marseille, Nice, Toulon et sur la Côte d'Azur : les meilleurs spots pour le libertinage en PACA.", title: "Clubs Libertins à Marseille et sur la Côte d'Azur — Guide AKOKY", content: "<h2>Le libertinage sur la Côte d'Azur</h2><p>La région PACA offre un cadre idyllique pour le libertinage, entre mer et montagne. Découvrez les meilleurs clubs de Marseille à Nice.</p><h3>Marseille</h3><p>La cité phocéenne compte plusieurs clubs libertins réputés pour leur ambiance chaleureuse et leur clientèle variée.</p><h3>Nice et la Côte d'Azur</h3><p>De Nice à Cannes, les clubs de la Côte d'Azur attirent une clientèle internationale et proposent des soirées haut de gamme.</p>", published: true },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // COMPARATIFS
  // ═══════════════════════════════════════════════════════════════════
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "jacquie-et-michel-contact-vs-akoky", metaTitle: "Jacquie et Michel Contact vs AKOKY — Comparatif 2026", metaDescription: "Comparaison honnête entre Jacquie et Michel Contact et AKOKY : fonctionnalités, prix, communauté et sécurité.", title: "Jacquie et Michel Contact vs AKOKY", content: "<h2>Comparatif complet : JM Contact vs AKOKY</h2><p>Deux plateformes majeures du libertinage francophone face à face. Découvrez leurs forces et faiblesses respectives.</p><h3>Fonctionnalités</h3><p>AKOKY se distingue par son réseau social complet intégrant messagerie, événements et géolocalisation.</p><h3>Sécurité</h3><p>La vérification des profils et la modération 24/7 font d'AKOKY la plateforme la plus sûre du marché.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "libertic-vs-akoky", metaTitle: "Libertic vs AKOKY — Comparatif Sites Libertins 2026", metaDescription: "Libertic vs AKOKY : quel site libertin choisir ? Comparaison fonctionnalités, prix et communauté.", title: "Libertic vs AKOKY", content: "<h2>Libertic face à AKOKY</h2><p>Libertic, plateforme historique du libertinage, face au nouveau géant AKOKY. Qui remporte la comparaison ?</p><h3>Interface et modernité</h3><p>AKOKY propose une interface moderne et responsive, là où Libertic accuse un certain retard technologique.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "nouslibertins-vs-akoky", metaTitle: "NousLibertins vs AKOKY — Comparatif 2026", metaDescription: "NousLibertins vs AKOKY : fonctionnalités, prix, communauté. Quel site libertin choisir ?", title: "NousLibertins vs AKOKY", content: "<h2>NousLibertins vs AKOKY</h2><p>Deux visions du libertinage en ligne. Découvrez notre comparatif détaillé.</p><h3>Communauté</h3><p>AKOKY dépasse les 1,5 million de membres quand NousLibertins reste sur un modèle plus confidentiel.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "place-libertine-vs-akoky", metaTitle: "Place Libertine vs AKOKY — Comparatif 2026", metaDescription: "Place Libertine vs AKOKY : quel site libertin choisir ? Comparaison complète.", title: "Place Libertine vs AKOKY", content: "<h2>Place Libertine vs AKOKY</h2><p>Deux plateformes, deux approches du libertinage en ligne.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "wyylde-vs-akoky", metaTitle: "Wyylde vs AKOKY — Comparatif Sites Libertins 2026", metaDescription: "Wyylde vs AKOKY : comparaison détaillée des deux leaders du libertinage en ligne.", title: "Wyylde vs AKOKY", content: "<h2>Le match : Wyylde vs AKOKY</h2><p>Wyylde (ex-Netechangisme) et AKOKY sont les deux principales plateformes libertines francophones.</p><h3>Tarifs</h3><p>AKOKY propose un modèle freemium généreux avec inscription gratuite.</p><h3>Fonctionnalités</h3><p>AKOKY intègre un véritable réseau social avec live, événements et jeux interactifs.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "comparatif-sites-libertins", metaTitle: "Comparatif Complet des Sites Libertins 2026", metaDescription: "Comparatif de tous les sites libertins : AKOKY, Wyylde, NousLibertins, Place Libertine et plus. Le guide ultime.", title: "Comparatif complet des sites libertins", content: "<h2>Quel site libertin choisir en 2026 ?</h2><p>Notre comparatif exhaustif de toutes les plateformes libertines du marché francophone.</p><h3>Le classement AKOKY</h3><ol><li>AKOKY — Le plus complet</li><li>Wyylde — Le challenger</li><li>NousLibertins — L'historique</li><li>Place Libertine — L'alternatif</li></ol>", published: true },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // CLUBS & SOIRÉES
  // ═══════════════════════════════════════════════════════════════════
  {
    id: mkId(), category: "clubs", image: "/images/blog-clubs-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "clubs-libertins-soirees-privees-evenements-partenaires-akoky", metaTitle: "Clubs libertins et soirées privées — Événements partenaires AKOKY", metaDescription: "Découvrez les clubs libertins partenaires AKOKY et les soirées privées exclusives organisées pour notre communauté.", title: "Clubs libertins, soirées privées : les événements partenaires d'AKOKY", content: "<h2>Nos partenariats avec les meilleurs clubs</h2><p>AKOKY collabore avec les clubs libertins les plus prestigieux de France et d'Europe pour vous offrir des soirées exclusives.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "evenements", image: "/images/blog-clubs-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "evenements-libertins-exclusifs-akoky", metaTitle: "Événements libertins exclusifs AKOKY 2026", metaDescription: "Les événements libertins exclusifs organisés par AKOKY : soirées privées, weekends et rencontres.", title: "Événements libertins exclusifs AKOKY", content: "<h2>Les événements AKOKY</h2><p>AKOKY organise régulièrement des événements exclusifs pour sa communauté : soirées thématiques, weekends libertins et rencontres conviviales.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "clubs", image: "/images/blog-clubs-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "club-echangiste-fougeres", metaTitle: "Club échangiste à Fougères — Guide AKOKY", metaDescription: "Découvrez le club échangiste de Fougères : ambiance, soirées et conseils pratiques.", title: "Club échangiste Fougères", content: "<h2>Le club échangiste de Fougères</h2><p>À la découverte d'un club échangiste convivial en Bretagne.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "clubs", image: "/images/blog-clubs-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "clubs-libertins", metaTitle: "Tous les clubs libertins — Annuaire AKOKY", metaDescription: "Annuaire complet des clubs libertins en France et en Europe. Trouvez le club idéal près de chez vous.", title: "Tous les clubs libertins", content: "<h2>L'annuaire des clubs libertins AKOKY</h2><p>Retrouvez tous les clubs libertins de France et d'Europe dans notre annuaire complet et mis à jour régulièrement.</p>", published: true },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // COUPLES & RENCONTRES
  // ═══════════════════════════════════════════════════════════════════
  {
    id: mkId(), category: "conseils", image: "/images/blog-couples-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "couples-libertins", metaTitle: "Couples libertins : guide complet AKOKY", metaDescription: "Guide complet pour les couples libertins : conseils, expériences et communauté.", title: "Couples libertins : guide complet", content: "<h2>Le libertinage en couple</h2><p>Le libertinage à deux est une aventure qui renforce la complicité du couple quand elle est vécue dans le respect mutuel.</p><h3>Communiquer avec son partenaire</h3><p>La communication est la clé d'une expérience réussie. Parlez de vos envies, de vos limites et de vos fantasmes en toute transparence.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-couples-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "premiere-fois-echangiste-guide-akoky", metaTitle: "Première fois échangiste — Guide AKOKY pour couples", metaDescription: "Guide complet pour votre première fois échangiste : conseils, préparation et accompagnement par AKOKY.", title: "Première fois échangiste : le guide AKOKY pour couples curieux", content: "<h2>Votre première soirée échangiste</h2><p>La première fois dans un club échangiste est toujours un moment fort. Voici nos conseils pour que tout se passe bien.</p><h3>Avant la soirée</h3><ul><li>Définissez vos limites en couple</li><li>Choisissez un club adapté aux débutants</li><li>Préparez-vous mentalement et physiquement</li></ul>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "rencontres-libertines-authentiques", metaTitle: "Rencontres libertines authentiques sur AKOKY", metaDescription: "Faites des rencontres libertines authentiques et respectueuses sur AKOKY.", title: "Rencontres libertines authentiques", content: "<h2>Des rencontres authentiques</h2><p>Sur AKOKY, chaque rencontre est authentique grâce à nos profils vérifiés et notre communauté bienveillante.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-couples-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "femme-seule-libertine", metaTitle: "Femme seule libertine — Guide AKOKY", metaDescription: "Guide pour les femmes seules dans le libertinage : sécurité, rencontres et communauté.", title: "Femme seule libertine", content: "<h2>Le libertinage au féminin</h2><p>Les femmes seules sont les bienvenues dans l'univers libertin. AKOKY offre un cadre sécurisé et respectueux pour explorer vos envies.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "annonces-libertines", metaTitle: "Annonces libertines sur AKOKY", metaDescription: "Publiez et consultez des annonces libertines sur AKOKY : rencontres, soirées et événements.", title: "Annonces libertines", content: "<h2>Les annonces libertines AKOKY</h2><p>Publiez vos annonces et trouvez des partenaires compatibles pour vos soirées et rencontres libertines.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "rencontres-libertines", metaTitle: "Rencontres libertines — Tout explorer sur AKOKY", metaDescription: "Explorez toutes les possibilités de rencontres libertines sur AKOKY.", title: "Toutes les rencontres libertines", content: "<h2>Explorer les rencontres libertines</h2><p>AKOKY vous offre une multitude de façons de faire des rencontres libertines : messagerie, événements, géolocalisation et plus encore.</p>", published: true },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // PRATIQUES & LIFESTYLE
  // ═══════════════════════════════════════════════════════════════════
  {
    id: mkId(), category: "guides", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "echangisme-en-couple", metaTitle: "Échangisme en couple — Osez l'expérience à deux avec AKOKY", metaDescription: "Tout savoir sur l'échangisme en couple : conseils, codes et retours d'expérience.", title: "Échangisme en couple : osez l'expérience à deux avec AKOKY", content: "<h2>L'échangisme, une aventure à deux</h2><p>L'échangisme est la pratique libertine la plus répandue. Elle consiste à échanger de partenaires avec un autre couple, dans un cadre consenti et respectueux.</p><h3>Les règles d'or</h3><ul><li>Le consentement mutuel est non négociable</li><li>Chacun peut dire stop à tout moment</li><li>La communication entre partenaires est essentielle</li></ul>", published: true },
    },
  },
  {
    id: mkId(), category: "guides", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "echangisme-couples", metaTitle: "Échangisme couples — Guide pratique", metaDescription: "Guide pratique de l'échangisme pour couples : tout ce qu'il faut savoir.", title: "Échangisme couples", content: "<h2>L'échangisme pour les couples</h2><p>Un guide complet sur cette pratique qui séduit de plus en plus de couples en France.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "guides", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "triolisme-libertin-sur-akoky", metaTitle: "Triolisme libertin sur AKOKY", metaDescription: "Découvrez le triolisme sur AKOKY : conseils, rencontres et expériences à trois.", title: "Triolisme libertin sur AKOKY", content: "<h2>Le triolisme, une expérience unique</h2><p>Le triolisme, ou plan à trois, est l'une des pratiques les plus recherchées dans l'univers libertin.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "guides", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "triolisme-candaulisme", metaTitle: "Triolisme & Candaulisme — Guide libertin", metaDescription: "Tout comprendre sur le triolisme et le candaulisme dans le libertinage.", title: "Triolisme & Candaulisme", content: "<h2>Triolisme et candaulisme</h2><p>Deux pratiques complémentaires qui enrichissent l'expérience libertine du couple.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "guides", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "melangisme-libertin", metaTitle: "Mélangisme libertin — Pratique douce du libertinage", metaDescription: "Le mélangisme : la pratique douce du libertinage expliquée en détail.", title: "Mélangisme libertin", content: "<h2>Le mélangisme, la douceur libertine</h2><p>Le mélangisme est une forme douce du libertinage où les couples se mélangent sans aller jusqu'à la pénétration avec un autre partenaire.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "guides", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "cote-a-cotisme", metaTitle: "Côte-à-côtisme — Découverte libertine en douceur", metaDescription: "Le côte-à-côtisme : faire l'amour à côté d'un autre couple, une découverte libertine en douceur.", title: "Côte-à-côtisme", content: "<h2>Le côte-à-côtisme</h2><p>Le côte-à-côtisme consiste à faire l'amour avec son partenaire à côté d'un autre couple, sans échange. C'est souvent la première étape vers le libertinage.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "guides", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "orgie-douce-fluide-naturelle-akoky", metaTitle: "Une orgie douce, fluide, naturelle sur AKOKY", metaDescription: "L'orgie libertine revisitée : douce, fluide et naturelle sur AKOKY.", title: "Une orgie douce, fluide, naturelle sur AKOKY", content: "<h2>L'orgie revisitée</h2><p>Loin des clichés, l'orgie libertine sur AKOKY est une expérience douce, respectueuse et consensuelle.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "guides", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "libertinage-pluralite", metaTitle: "Libertinage & pluralité — Diversité des pratiques", metaDescription: "La pluralité dans le libertinage : toutes les pratiques et orientations sont les bienvenues.", title: "Libertinage & pluralité", content: "<h2>La pluralité du libertinage</h2><p>Le libertinage embrasse une grande diversité de pratiques et d'orientations. Chacun y trouve son bonheur à son rythme.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "guides", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "sexe-sans-tabou", metaTitle: "Sexe sans tabou — Le libertinage décomplexé", metaDescription: "Le sexe sans tabou sur AKOKY : un espace de liberté pour explorer ses désirs.", title: "Sexe sans tabou", content: "<h2>Le sexe sans tabou</h2><p>AKOKY est un espace où chacun peut explorer ses désirs sans jugement, dans le respect de l'autre.</p>", published: true },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // RÉGIONS
  // ═══════════════════════════════════════════════════════════════════
  {
    id: mkId(), category: "villes", image: "/images/blog-libertinage-regions.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "libertinage-en-france", metaTitle: "Libertinage en France — Le guide complet", metaDescription: "Le libertinage en France : clubs, événements, communauté et guide par région.", title: "Libertinage en France", content: "<h2>Le libertinage en France</h2><p>La France est le berceau du libertinage moderne. Découvrez la scène libertine française région par région.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "villes", image: "/images/blog-libertinage-regions.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "libertinage-en-belgique", metaTitle: "Libertinage en Belgique — Guide AKOKY", metaDescription: "Le libertinage en Belgique : clubs, saunas et communauté libertine belge.", title: "Libertinage en Belgique", content: "<h2>La scène libertine belge</h2><p>La Belgique possède une scène libertine dynamique, avec des clubs renommés à Bruxelles, Anvers et Liège.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "villes", image: "/images/blog-libertinage-regions.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "libertinage-en-suisse", metaTitle: "Libertinage en Suisse — Guide AKOKY", metaDescription: "Le libertinage en Suisse : clubs à Genève, Lausanne, Zurich et Bâle.", title: "Libertinage en Suisse", content: "<h2>Le libertinage en Suisse</h2><p>La Suisse offre une scène libertine discrète mais de grande qualité, avec des clubs à Genève, Lausanne et Zurich.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "villes", image: "/images/blog-cap-agde.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "cap-d-agde-libertin", metaTitle: "Cap d'Agde libertin — Guide complet AKOKY", metaDescription: "Tout savoir sur le Cap d'Agde libertin : village naturiste, clubs, plages et événements.", title: "Cap d'Agde libertin", content: "<h2>Le Cap d'Agde, capitale du libertinage estival</h2><p>Le village naturiste du Cap d'Agde est la destination libertine la plus célèbre au monde.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "villes", image: "/images/blog-libertinage-regions.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "libertinage-par-region", metaTitle: "Libertinage par région — Guide AKOKY", metaDescription: "Découvrez le libertinage région par région en France : clubs, événements et communauté.", title: "Libertinage par région", content: "<h2>Le libertinage en France, région par région</h2><p>Chaque région de France a ses spécificités libertines. Découvrez notre guide complet.</p>", published: true },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // JEUX & FUN
  // ═══════════════════════════════════════════════════════════════════
  {
    id: mkId(), category: "conseils", image: "/images/blog-jeux-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "jeux-libertins-akoky", metaTitle: "Jeux libertins AKOKY — Pimentez vos soirées", metaDescription: "Découvrez les jeux libertins AKOKY pour pimenter vos soirées et vos rencontres.", title: "Jeux libertins AKOKY", content: "<h2>Les jeux libertins AKOKY</h2><p>Pimentez vos soirées avec nos jeux libertins exclusifs : défis, cartes coquines et animations pour tous les niveaux.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-jeux-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "jeux-sex-erotique", metaTitle: "Jeux sexe érotique — AKOKY", metaDescription: "Jeux sexe et érotiques pour couples et libertins sur AKOKY.", title: "Jeux sexe érotique", content: "<h2>Jeux érotiques pour couples</h2><p>Des jeux sensuels et érotiques pour pimenter votre vie de couple et vos soirées libertines.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-jeux-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "astro-sexo-akoky", metaTitle: "Astro Sexo AKOKY — Votre horoscope coquin", metaDescription: "Découvrez votre horoscope sexo et libertin sur AKOKY.", title: "Astro Sexo AKOKY", content: "<h2>Votre horoscope sexo</h2><p>Découvrez ce que les étoiles réservent à votre vie sexuelle et libertine avec l'Astro Sexo AKOKY.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-jeux-libertins.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "histoire-libertine-sur-akoky", metaTitle: "Histoire libertine sur AKOKY — Récits et témoignages", metaDescription: "Histoires libertines et témoignages authentiques de la communauté AKOKY.", title: "Histoire libertine sur AKOKY", content: "<h2>Histoires libertines</h2><p>Des témoignages authentiques de membres AKOKY qui partagent leurs expériences libertines.</p>", published: true },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // POURQUOI AKOKY
  // ═══════════════════════════════════════════════════════════════════
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "pourquoi-choisir-akoky", metaTitle: "Pourquoi choisir AKOKY ? — Le meilleur site libertin", metaDescription: "Toutes les raisons de choisir AKOKY pour vos rencontres libertines : sécurité, communauté, fonctionnalités.", title: "Pourquoi choisir AKOKY ?", content: "<h2>Les raisons de choisir AKOKY</h2><p>AKOKY se distingue par sa communauté de 1,5 million de membres, sa sécurité renforcée et ses fonctionnalités sociales uniques.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "communaute-respectueuse-libertine", metaTitle: "Communauté respectueuse libertine — AKOKY", metaDescription: "AKOKY : une communauté libertine respectueuse, bienveillante et inclusive.", title: "Communauté respectueuse libertine", content: "<h2>Le respect au cœur de la communauté</h2><p>Chez AKOKY, le respect est notre valeur fondamentale. Chaque membre s'engage à respecter les limites et les choix de chacun.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "securite-confidentialite-akoky", metaTitle: "Sécurité & confidentialité sur AKOKY", metaDescription: "La sécurité et la confidentialité sur AKOKY : ce qui fait de nous la plateforme la plus sûre.", title: "Sécurité & confidentialité sur AKOKY", content: "<h2>Votre sécurité, notre priorité</h2><p>AKOKY met en œuvre les meilleures pratiques en matière de sécurité et de protection des données personnelles.</p><h3>Vérification des profils</h3><p>Tous les profils sont vérifiés pour garantir l'authenticité de notre communauté.</p><h3>Modération 24/7</h3><p>Notre équipe de modération veille en permanence au respect des règles de la communauté.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "securite-site-libertin-akoky", metaTitle: "Sécurité du site libertin AKOKY", metaDescription: "Comment AKOKY assure la sécurité de ses membres sur la plateforme.", title: "Sécurité du site libertin AKOKY", content: "<h2>Un site sécurisé</h2><p>La sécurité est au cœur de l'expérience AKOKY avec un chiffrement de bout en bout et une authentification renforcée.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "discretion-site-libertin-akoky", metaTitle: "Discrétion sur le site libertin AKOKY", metaDescription: "La discrétion totale sur AKOKY : photos floues, navigation privée et protection des données.", title: "Discrétion sur le site libertin AKOKY", content: "<h2>La discrétion avant tout</h2><p>AKOKY garantit une discrétion totale : photos floues en option, navigation privée et protection maximale de vos données.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "libertinage-en-confiance", metaTitle: "Libertinage en confiance — AKOKY", metaDescription: "Vivre le libertinage en toute confiance grâce à AKOKY.", title: "Libertinage en confiance", content: "<h2>Le libertinage en confiance</h2><p>AKOKY crée un environnement de confiance où chacun peut explorer ses désirs en toute sérénité.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "libertinage-grandeur-nature-akoky", metaTitle: "Libertinage grandeur nature AKOKY", metaDescription: "Le libertinage grandeur nature avec AKOKY : événements, rencontres et communauté.", title: "Libertinage grandeur nature AKOKY", content: "<h2>Le libertinage grandeur nature</h2><p>AKOKY ne se limite pas au digital. Découvrez le libertinage grandeur nature avec nos événements et rencontres en personne.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "support-akoky-assistance-libertine", metaTitle: "Support AKOKY — Assistance libertine", metaDescription: "Le support AKOKY : une assistance dédiée pour la communauté libertine.", title: "Support AKOKY — Assistance libertine", content: "<h2>Notre équipe de support</h2><p>L'équipe support AKOKY est disponible 7j/7 pour répondre à toutes vos questions et vous accompagner.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-securite-discretion.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "faq-libertine-akoky", metaTitle: "FAQ libertine AKOKY — Toutes les réponses", metaDescription: "FAQ libertine AKOKY : toutes les réponses à vos questions sur le libertinage et la plateforme.", title: "FAQ libertine AKOKY", content: "<h2>Questions fréquentes</h2><p>Retrouvez les réponses à toutes vos questions sur le libertinage et l'utilisation de la plateforme AKOKY.</p>", published: true },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // INCLUSIVITÉ & DIVERS
  // ═══════════════════════════════════════════════════════════════════
  {
    id: mkId(), category: "guides", image: "/images/blog-lgbt-libertinage.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "libertinage-lgbt", metaTitle: "Libertinage LGBT — Inclusivité sur AKOKY", metaDescription: "Le libertinage LGBT sur AKOKY : un espace inclusif et bienveillant pour toutes les orientations.", title: "Libertinage LGBT", content: "<h2>Le libertinage LGBT</h2><p>AKOKY est une plateforme inclusive qui accueille toutes les orientations sexuelles et identités de genre dans le libertinage.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-lgbt-libertinage.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "conseils-libertins", metaTitle: "Conseils libertins — Guide pratique AKOKY", metaDescription: "Tous nos conseils libertins pour vivre des expériences épanouissantes.", title: "Conseils libertins", content: "<h2>Nos meilleurs conseils libertins</h2><p>Des conseils pratiques pour profiter pleinement de vos expériences libertines, que vous soyez débutant ou confirmé.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "amour-sex", metaTitle: "Amour & Sexe — Le blog AKOKY", metaDescription: "Amour et sexe : réflexions et conseils sur la sexualité épanouie.", title: "Amour & Sexe", content: "<h2>Amour & sexe</h2><p>Réflexions sur l'amour, le désir et la sexualité épanouie dans le cadre du libertinage.</p>", published: true },
    },
  },
  {
    id: mkId(), category: "conseils", image: "/images/blog-rencontres.webp",
    createdAt: now, updatedAt: now,
    translations: {
      fr: { slug: "inscription-akoky-offre-6-mois", metaTitle: "Inscription AKOKY — Offre 6 mois", metaDescription: "Profitez de l'offre spéciale 6 mois d'abonnement AKOKY à prix réduit.", title: "Inscription AKOKY — Offre 6 mois", content: "<h2>Offre spéciale AKOKY</h2><p>Profitez de notre offre exclusive : 6 mois d'abonnement premium à prix réduit pour découvrir toutes les fonctionnalités AKOKY.</p>", published: true },
    },
  },
];
