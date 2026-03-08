import { useState } from "react";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "💡 Qu'est-ce que le libertinage aujourd'hui ?", answer: "Le libertinage moderne est une pratique sexuelle basée sur la liberté, le consentement mutuel et le respect. Il s'agit pour des adultes consentants d'explorer leur sexualité au-delà des normes monogames traditionnelles, que ce soit en couple ou en célibataire. Contrairement aux idées reçues, le libertinage n'est pas synonyme de débauche mais repose sur des codes stricts de respect, discrétion et communication. Aujourd'hui, le libertinage s'est démocratisé grâce aux sites libertins comme Akoky, aux clubs dédiés et à une meilleure compréhension des sexualités alternatives." },
  { question: "🖤 Le libertinage est-il réservé aux couples ?", answer: "Non, le libertinage est accessible à tous : couples, femmes seules et hommes seuls. Si les couples sont majoritaires dans le milieu, les femmes célibataires sont très recherchées et bénéficient d'un accès privilégié dans les clubs. Les hommes seuls peuvent également participer, bien que certains établissements imposent des quotas pour préserver l'équilibre. Sur les sites libertins comme Akoky, chacun peut créer son profil et trouver des partenaires correspondant à ses critères, qu'il soit en couple ou célibataire." },
  { question: "🔄 Quelle est la différence entre échangisme et candaulisme ?", answer: "L'échangisme implique que deux couples (ou plus) échangent leurs partenaires de manière réciproque et équilibrée. Tous les participants sont actifs. Le candaulisme, en revanche, est une pratique où un homme éprouve du plaisir à voir sa partenaire avec d'autres hommes, en restant spectateur ou participant secondaire. Le candauliste tire sa satisfaction de l'observation, tandis que l'échangisme repose sur la participation active de tous. Les deux pratiques sont courantes dans le libertinage et parfaitement légitimes." },
  { question: "🚀 Comment débuter dans le libertinage ?", answer: "Pour débuter dans le libertinage, il est essentiel de communiquer clairement avec son partenaire si vous êtes en couple, et de définir vos limites et envies. Ensuite, inscrivez-vous sur un site libertin de confiance comme Akoky pour découvrir la communauté et échanger avec d'autres membres. Assistez à une soirée dans un club libertin pour observer l'ambiance sans obligation de participer. Allez-y à votre rythme, respectez vos limites et n'hésitez pas à poser des questions aux membres expérimentés. Le libertinage est un apprentissage progressif basé sur le plaisir et la découverte." },
  { question: "💞 Le libertinage est-il compatible avec l'amour ?", answer: "Absolument. De nombreux couples libertins témoignent que le libertinage a renforcé leur complicité et leur relation amoureuse. La clé réside dans la communication, la confiance mutuelle et la capacité à distinguer sexualité et sentiments. Pour beaucoup, le libertinage permet d'explorer des fantasmes ensemble tout en maintenant une relation amoureuse exclusive sur le plan émotionnel. Chaque couple définit ses propres règles et limites. Le libertinage n'est pas une menace pour l'amour, mais une dimension supplémentaire de la sexualité partagée." },
  { question: "🛡️ Comment garantir le consentement et la sécurité ?", answer: "Le consentement est la base absolue du libertinage. Il doit être libre, éclairé, explicite et révocable à tout moment. Dans les clubs, le 'non c'est non' est une règle intangible. Sur les sites libertins comme Akoky, la certification des profils et la modération humaine garantissent l'authenticité des membres. Pour la sécurité physique, l'utilisation de préservatifs est obligatoire dans les clubs sérieux. La sécurité passe aussi par la discrétion : ne jamais partager d'informations personnelles, choisir des lieux de rencontre sécurisés et écouter son intuition." },
  { question: "📖 Quelle est la différence entre échangisme et mélangisme ?", answer: "L'échangisme (ou 'swap') désigne l'échange de partenaires entre deux couples : couple A + couple B se séparent et reforment couple AB + couple BA. Le mélangisme implique que tous les participants interagissent ensemble sans forcément former de paires fixes (groupe de 4, 5, 6+ personnes). Nuance : en échangisme, les couples peuvent pratiquer le 'soft swap' (caresses/préliminaires uniquement) ou 'full swap' (pénétration avec le partenaire échangé). Le mélangisme est souvent plus fluide et spontané." },
  { question: "🔞 C'est quoi un gang bang et comment ça se passe ?", answer: "Le gang bang est une pratique où une personne (généralement une femme, mais pas exclusivement) a des rapports sexuels successifs ou simultanés avec plusieurs partenaires. Dans le libertinage éthique, le gang bang est TOUJOURS organisé avec le consentement explicite de tous, des limites claires (nombre de participants, pratiques autorisées, durée), un safe word respecté, et des pauses régulières. Certains clubs spécialisés organisent des soirées gang bang avec encadrement professionnel, respect des règles d'hygiène (préservatifs obligatoires) et modération." },
  { question: "🦄 C'est quoi une 'licorne' (unicorn) dans le libertinage ?", answer: "Une licorne (ou 'unicorn' en anglais) désigne une femme bisexuelle célibataire qui rejoint temporairement un couple (hétéro ou lesbien) pour des expériences à trois sans complications émotionnelles. Le terme 'licorne' vient du fait que ce profil est très recherché mais rare dans la communauté libertine. Les licornes apprécient généralement l'absence d'engagement et la liberté de participer ou non aux rencontres. Sur AKOKY, les femmes seules peuvent afficher un badge 'Licorne' sur leur profil pour faciliter les rencontres avec des couples." },
  { question: "🎭 Quelle différence entre exhibitionnisme et voyeurisme ?", answer: "L'exhibitionnisme est le plaisir de montrer son corps ou ses actes sexuels à d'autres personnes (avec leur consentement). Le voyeurisme est le plaisir de regarder d'autres personnes dans un contexte sexuel (toujours avec consentement mutuel). Dans les clubs libertins, ces pratiques sont très courantes : espaces 'câlins' vitrés pour les exhibitionnistes, salons d'observation pour les voyeurs. Nuance importante : l'exhibitionnisme libertin est consensuel (contrairement à l'exhibitionnisme illégal dans l'espace public)." },
  { question: "💑 Quelle différence entre libertinage et polyamour ?", answer: "Le libertinage sépare clairement sexualité et sentiments : les couples libertins partagent des expériences sexuelles avec d'autres tout en restant émotionnellement exclusifs l'un envers l'autre. Le polyamour implique des relations amoureuses multiples (avec engagement émotionnel) menées de manière éthique et transparente avec toutes les personnes concernées. Certaines personnes combinent les deux : 'polyfidélité libertine' (throuple ou groupe fermé avec liberté sexuelle à l'extérieur)." },
  { question: "🌐 Où puis-je trouver un lexique libertin en PDF téléchargeable ?", answer: "Le lexique libertin AKOKY en version PDF sera bientôt disponible en téléchargement gratuit pour tous les membres inscrits. En attendant, vous pouvez : (1) Consulter cette page en ligne (bookmark dans votre navigateur), (2) Télécharger notre application mobile qui intègre le lexique complet accessible hors ligne, (3) Utiliser la fonction 'Imprimer en PDF' de votre navigateur (Ctrl+P ou Cmd+P) pour sauvegarder cette page. Les membres VIP recevront en priorité la version enrichie avec études de cas et témoignages." },
  { question: "✅ Ce lexique est-il adapté aux débutants ?", answer: "Absolument ! Ce lexique est conçu pour être accessible aux débutants tout en restant exhaustif pour les libertins confirmés. Chaque terme est expliqué simplement, sans jargon médical complexe, avec des exemples concrets issus de situations réelles en club ou lors d'événements. Si vous débutez dans le libertinage, nous recommandons de lire d'abord les catégories : (1) Pratiques de base (échangisme, mélangisme), (2) Consentement & Sécurité (safe word, limites), (3) Profils & Rôles (couple, célibataire)." },
];

type TermEntry = { term: string; def: string };
type LetterGroup = { letter: string; terms: TermEntry[] };

const DICTIONARY: LetterGroup[] = [
  { letter: "A", terms: [
    { term: "Abstinence", def: "Pratique consistant à s'abstenir temporairement de relations sexuelles, souvent par choix personnel, religieux ou dans le cadre d'une dynamique BDSM où l'abstinence peut être imposée." },
    { term: "Aftercare", def: "Moment de soin et d'attention après une pratique sexuelle intense, particulièrement important dans le BDSM. L'aftercare permet de rassurer, réconforter et accompagner le partenaire après l'intensité émotionnelle et physique d'une session." },
    { term: "Akoky", def: "Plateforme libertine premium européenne proposant un annuaire de clubs libertins, des événements exclusifs, un système de profils certifiés et une communauté sécurisée via AKOKY Safe. Site libertin de référence pour les couples et célibataires exigeants." },
    { term: "Ambigu", def: "Terme utilisé pour désigner une personne dont l'orientation sexuelle ou les pratiques ne sont pas clairement définies, ou qui explore différentes facettes de sa sexualité sans s'enfermer dans une catégorie." },
    { term: "Annuaire libertin", def: "Répertoire en ligne listant les clubs libertins, saunas, soirées et événements libertins d'une région ou d'un pays. Akoky propose l'annuaire libertin le plus complet d'Europe avec des fiches détaillées, avis et photos." },
  ]},
  { letter: "B", terms: [
    { term: "BDSM", def: "Acronyme pour Bondage, Discipline, Domination, Soumission, Sadisme et Masochisme. Ensemble de pratiques érotiques consensuelles basées sur des jeux de pouvoir, de contrôle et de sensations intenses." },
    { term: "Bi-curieux", def: "Personne hétérosexuelle qui ressent une curiosité ou une attirance occasionnelle pour des expériences homosexuelles, sans pour autant se définir comme bisexuelle." },
    { term: "Bisexuel / Bisexuelle", def: "Personne attirée émotionnellement et sexuellement par les hommes et les femmes. Dans le milieu libertin, la bisexualité féminine est fréquente et assumée." },
    { term: "Bondage", def: "Pratique consistant à attacher, ligoter ou entraver le partenaire à l'aide de cordes, menottes, chaînes ou autres accessoires. Le bondage peut être esthétique (Shibari japonais) ou orienté vers la domination." },
    { term: "Bukkake", def: "Pratique sexuelle d'origine japonaise où plusieurs hommes éjaculent sur une même personne, généralement une femme. Pratique fantasmée mais peu courante dans le libertinage français classique." },
    { term: "Bunny", def: "Terme affectueux désignant une femme dans le milieu libertin, souvent utilisé pour une femme jeune, séduisante et active dans les soirées." },
  ]},
  { letter: "C", terms: [
    { term: "Candaulisme", def: "Pratique où un homme (le candauliste) éprouve du plaisir à voir sa partenaire avoir des relations sexuelles avec d'autres hommes, tout en restant spectateur ou participant secondaire. Le candaulisme diffère du trio classique par l'asymétrie des rôles." },
    { term: "Certifié", def: "Statut accordé sur un site libertin à un profil dont l'authenticité a été vérifiée par la plateforme ou par d'autres membres. Sur Akoky, la certification est obligatoire pour garantir la sécurité de la communauté." },
    { term: "Club libertin", def: "Établissement privé dédié aux rencontres et pratiques libertines. Les clubs libertins proposent généralement des espaces de socialisation, des salons privés, des jacuzzis et des salles de jeux. L'accès est souvent réservé aux couples et femmes seules." },
    { term: "Coquin / Coquine", def: "Terme générique et pudique pour désigner une personne ayant une sexualité libre et ouverte, pratiquant le libertinage. Souvent utilisé comme euphémisme." },
    { term: "Couple échangiste", def: "Couple pratiquant l'échangisme, c'est-à-dire partageant des moments intimes avec d'autres couples ou célibataires dans un cadre consenti et respectueux." },
    { term: "Cunnilingus", def: "Pratique sexuelle orale consistant à stimuler le sexe féminin avec la bouche, la langue et les lèvres. Très appréciée dans le libertinage pour le plaisir féminin." },
    { term: "Cuckold", def: "Homme qui éprouve du plaisir à voir sa partenaire avoir des relations sexuelles avec d'autres hommes, souvent dans un contexte de soumission ou d'humiliation consentie. Variante du candaulisme avec une dimension psychologique plus marquée." },
    { term: "Curious", def: "Personne ou couple débutant dans le libertinage, encore en phase de découverte et d'exploration, sans pratique confirmée." },
  ]},
  { letter: "D", terms: [
    { term: "Discrétion", def: "Valeur fondamentale du milieu libertin. La discrétion implique de respecter l'anonymat et la vie privée des autres membres, de ne jamais divulguer d'informations personnelles et de préserver la confidentialité des échanges." },
    { term: "Domination", def: "Pratique BDSM où un partenaire (le dominant) exerce un contrôle physique, psychologique ou émotionnel sur l'autre (le soumis) dans un cadre consensuel et sécurisé. La domination peut être douce ou stricte selon les limites établies." },
    { term: "Double pénétration (DP)", def: "Pratique sexuelle où une femme est pénétrée simultanément par deux hommes, généralement vaginalement et analement. Fantasme courant dans le libertinage, nécessitant communication et préparation." },
    { term: "Dogging", def: "Pratique consistant à avoir des relations sexuelles en extérieur, dans des lieux publics ou semi-publics (parkings, forêts), parfois avec des voyeurs. Le dogging comporte des risques légaux et n'est pas encouragé par les plateformes libertines." },
    { term: "Dress code", def: "Code vestimentaire exigé lors de certaines soirées libertines. Exemples : tenue sexy, lingerie, costume, thème spécifique. Le respect du dress code est souvent obligatoire pour accéder à l'événement." },
  ]},
  { letter: "E", terms: [
    { term: "Échangisme", def: "Pratique libertine où des couples échangent leurs partenaires pour des relations sexuelles, dans un cadre consenti et souvent en présence les uns des autres. L'échangisme peut être soft (caresses, préliminaires) ou hard (pénétrations complètes)." },
    { term: "Exhibitionnisme", def: "Plaisir pris à se montrer nu ou dans des situations sexuelles, à être regardé par d'autres. L'exhibitionnisme dans le libertinage est toujours consensuel et se pratique dans des espaces dédiés." },
    { term: "Érotisme", def: "Dimension sensuelle, esthétique et raffinée de la sexualité. L'érotisme privilégie la suggestion, le désir et la séduction plutôt que l'acte sexuel brut." },
    { term: "Événement libertin", def: "Soirée, week-end ou rassemblement organisé pour la communauté libertine. Les événements peuvent être privés (réservés aux membres d'un site libertin) ou publics (ouverts à tous moyennant inscription)." },
  ]},
  { letter: "F", terms: [
    { term: "Fellation", def: "Pratique sexuelle orale consistant à stimuler le sexe masculin avec la bouche, la langue et les lèvres. Pratique courante dans le libertinage." },
    { term: "Femme seule", def: "Femme célibataire fréquentant le milieu libertin. Les femmes seules sont particulièrement recherchées dans les clubs libertins et bénéficient souvent d'un accès privilégié (tarifs réduits, soirées dédiées)." },
    { term: "Fetish", def: "Attirance sexuelle particulière pour un objet, une partie du corps, un vêtement ou une situation spécifique (pieds, latex, cuir, talons, etc.). Le fétichisme est courant et accepté dans le libertinage." },
    { term: "Fist-fucking", def: "Pratique sexuelle extrême consistant à introduire la main (parfois le poing) dans le vagin ou l'anus du partenaire. Nécessite une préparation minutieuse, beaucoup de lubrifiant et un consentement éclairé." },
    { term: "Furry", def: "Personne attirée par les représentations anthropomorphes d'animaux (personnages à caractéristiques animales). Communauté spécifique présente dans certains espaces libertins et fétichistes." },
  ]},
  { letter: "G", terms: [
    { term: "Gang bang", def: "Pratique sexuelle où plusieurs hommes (généralement 4 ou plus) ont des relations simultanées ou successives avec une seule femme. Le gang bang nécessite organisation, respect et consentement absolu de la femme." },
    { term: "Gleeden", def: "Site de rencontres extra-conjugales permettant aux personnes en couple de trouver des aventures discrètes. Bien que non strictement libertin, Gleeden est utilisé par certains membres de la communauté." },
    { term: "Glory hole", def: "Ouverture pratiquée dans une cloison (souvent dans des cabines de clubs) permettant des rapports sexuels anonymes. Le glory hole ajoute une dimension de mystère et d'anonymat." },
    { term: "Groupe", def: "Rencontre sexuelle impliquant plus de trois personnes. Les pratiques en groupe sont courantes dans les clubs libertins et lors de soirées privées organisées." },
  ]},
  { letter: "H", terms: [
    { term: "Hard", def: "Qualifie des pratiques sexuelles complètes incluant pénétrations. Par opposition au soft (caresses et préliminaires sans pénétration). Un couple peut être soft ou hard selon ses limites." },
    { term: "Hetero-flexible", def: "Personne principalement hétérosexuelle mais ouverte à des expériences homosexuelles occasionnelles dans certains contextes. Terme courant dans le libertinage." },
    { term: "Hotwife", def: "Femme mariée ou en couple qui a la liberté et l'encouragement de son partenaire pour avoir des relations sexuelles avec d'autres hommes. Proche du candaulisme mais avec plus d'autonomie pour la femme." },
  ]},
  { letter: "I", terms: [
    { term: "Initiation", def: "Première expérience libertine d'une personne ou d'un couple. L'initiation se fait généralement en douceur, dans un cadre rassurant, avec des personnes expérimentées et bienveillantes." },
    { term: "Intime", def: "Qualifie un moment, un espace ou une relation de nature privée et personnelle. Dans le libertinage, l'intimité reste importante même dans les pratiques collectives." },
  ]},
  { letter: "J", terms: [
    { term: "Jacuzzi", def: "Équipement courant dans les clubs libertins. Le jacuzzi est un lieu de socialisation, de détente et parfois de préliminaires. Moment clé pour briser la glace et faire connaissance." },
    { term: "Jeu de rôle", def: "Mise en scène érotique où les participants adoptent des rôles ou personnages (infirmière/patient, professeur/élève, etc.). Les jeux de rôle stimulent l'imagination et ajoutent du piment à la sexualité." },
  ]},
  { letter: "K", terms: [
    { term: "Kinky", def: "Terme anglais désignant des pratiques sexuelles non conventionnelles, originales ou considérées comme 'perverses' de manière positive. Une personne kinky aime explorer des pratiques hors normes." },
  ]},
  { letter: "L", terms: [
    { term: "Libertinage", def: "Pratique de la sexualité libre, ouverte et sans tabou, basée sur le consentement mutuel, le respect et la communication. Le libertinage moderne s'est démocratisé grâce aux sites libertins et aux clubs dédiés." },
    { term: "Limites", def: "Frontières personnelles que chacun établit pour sa pratique libertine. Les limites doivent être clairement communiquées, respectées et peuvent évoluer avec le temps et l'expérience." },
    { term: "Live", def: "Diffusion en direct sur une plateforme libertine où des membres partagent des moments intimes en temps réel avec leur communauté. Akoky propose des lives exclusifs réservés aux membres VIP." },
    { term: "Lune de miel", def: "Séjour romantique et libertin organisé par des couples dans des destinations exotiques ou des resorts libertins. Mélange de romantisme et de découvertes sensuelles." },
  ]},
  { letter: "M", terms: [
    { term: "Mélangisme", def: "Terme québécois pour désigner l'échangisme et le libertinage en général. Moins utilisé en France mais courant au Canada." },
    { term: "MFM (Male-Female-Male)", def: "Configuration sexuelle impliquant deux hommes et une femme. Le MFM est l'une des pratiques les plus courantes dans le libertinage, particulièrement apprécié par les couples candaulistes." },
    { term: "Milieu libertin", def: "Ensemble de la communauté libertine, incluant les clubs, sites internet, événements et membres pratiquant le libertinage. Le milieu libertin français est l'un des plus développés d'Europe." },
    { term: "Monogamie", def: "Relation exclusive entre deux personnes. Bien que le libertinage implique une ouverture sexuelle, de nombreux couples libertins restent émotionnellement monogames." },
    { term: "Multipartenaire", def: "Relation ou pratique impliquant plusieurs partenaires sexuels, simultanément ou successivement. Le multipartenariat est au cœur du libertinage." },
  ]},
  { letter: "N", terms: [
    { term: "Naturisme", def: "Pratique de la nudité collective dans un cadre respectueux et non-sexuel. Bien que distinct du libertinage, certains clubs libertins organisent des événements naturistes." },
    { term: "Non-monogamie éthique", def: "Philosophie relationnelle où toutes les parties acceptent et pratiquent l'ouverture sexuelle ou amoureuse de manière transparente, honnête et consensuelle. Le libertinage s'inscrit dans cette approche." },
    { term: "NousLibertins", def: "Site communautaire français de rencontres libertines proposant profils, événements et messagerie. Plateforme populaire auprès des couples et célibataires libertins francophones." },
  ]},
  { letter: "O", terms: [
    { term: "Orgie", def: "Rencontre sexuelle collective impliquant de nombreuses personnes sans configuration prédéfinie. Les orgies se déroulent généralement dans des clubs ou lors de soirées privées organisées." },
    { term: "Outing", def: "Révélation publique et non consentie de la vie libertine d'une personne. L'outing est strictement interdit et constitue une violation grave de la discrétion." },
  ]},
  { letter: "P", terms: [
    { term: "Partie carrée", def: "Rencontre entre deux couples pratiquant l'échangisme. Configuration classique du libertinage français, la partie carrée se déroule généralement dans un cadre privé." },
    { term: "Pelotage", def: "Caresses et attouchements érotiques sans pénétration. Le pelotage est courant dans les espaces communs des clubs libertins." },
    { term: "Polyamour", def: "Pratique relationnelle consistant à avoir plusieurs relations amoureuses simultanées, avec le consentement de toutes les parties. Le polyamour diffère du libertinage par sa dimension émotionnelle." },
    { term: "Profil", def: "Page personnelle sur un site libertin présentant photos, description, critères de recherche et préférences. Un bon profil est essentiel pour faire des rencontres de qualité." },
    { term: "Protection", def: "Utilisation de préservatifs et autres moyens de contraception lors des rapports sexuels. La protection est obligatoire dans les clubs libertins sérieux et fortement recommandée dans toutes les pratiques." },
    { term: "Pulsion", def: "Désir sexuel intense et soudain. Le libertinage permet d'explorer ses pulsions dans un cadre sécurisé et consenti." },
  ]},
  { letter: "Q", terms: [
    { term: "Quartier rose", def: "Zone géographique ou espace d'un club libertin dédiée aux femmes bisexuelles et aux couples. Le quartier rose est un lieu de liberté et d'exploration pour la sexualité féminine." },
  ]},
  { letter: "R", terms: [
    { term: "Relation libre", def: "Type de relation de couple où les partenaires s'autorisent mutuellement à avoir des aventures sexuelles ou sentimentales avec d'autres personnes. La relation libre nécessite confiance et communication." },
    { term: "Rencontre", def: "Moment où des membres de la communauté libertine se retrouvent pour faire connaissance ou partager des moments intimes. Les rencontres peuvent être virtuelles (chat, visio) ou réelles (club, domicile)." },
    { term: "Respect", def: "Valeur fondamentale du libertinage. Le respect implique d'écouter les limites, de demander le consentement, de préserver la discrétion et de traiter chacun avec dignité." },
    { term: "Rimming", def: "Stimulation orale de l'anus du partenaire. Pratique intime nécessitant une hygiène irréprochable et un consentement mutuel." },
  ]},
  { letter: "S", terms: [
    { term: "Safe word", def: "Mot de sécurité convenu à l'avance permettant d'arrêter immédiatement une pratique BDSM ou libertine si l'un des partenaires se sent mal à l'aise. Exemple : 'Rouge' pour stop, 'Jaune' pour ralentir." },
    { term: "Salon privé", def: "Espace fermé dans un club libertin où les couples ou groupes peuvent s'isoler pour des moments intimes. Les salons privés offrent plus de discrétion que les espaces collectifs." },
    { term: "Sexting", def: "Échange de messages, photos ou vidéos à caractère sexuel via internet ou smartphone. Le sexting est courant dans la phase de séduction sur les sites libertins." },
    { term: "Shibari", def: "Art japonais du bondage utilisant des cordes pour créer des motifs esthétiques sur le corps. Le shibari allie beauté visuelle et sensations intenses." },
    { term: "Site libertin", def: "Plateforme en ligne dédiée aux rencontres et échanges libertins. Les sites libertins proposent profils, messagerie, événements et annuaires de clubs. Akoky est un site libertin premium européen." },
    { term: "Soft", def: "Pratique libertine limitée aux caresses, baisers et préliminaires, sans pénétration. Le soft est idéal pour les débutants ou les personnes ayant des limites strictes." },
    { term: "Soumission", def: "Rôle BDSM où une personne accepte de se placer sous le contrôle d'une autre (le dominant) dans un cadre consensuel. La soumission peut être physique, psychologique ou émotionnelle." },
    { term: "Switch", def: "Personne qui alterne entre les rôles de dominant et soumis selon les contextes et les partenaires. Les switchs apprécient la flexibilité et la diversité des rôles." },
  ]},
  { letter: "T", terms: [
    { term: "Tabou", def: "Sujet, pratique ou désir considéré comme interdit ou honteux par la société. Le libertinage permet d'explorer certains tabous dans un cadre sécurisé et sans jugement." },
    { term: "Threesome / Trio", def: "Rencontre sexuelle à trois personnes. Les trios peuvent être MFM (deux hommes, une femme), FMF (deux femmes, un homme) ou homosexuels. Configuration très populaire dans le libertinage." },
    { term: "Triolisme", def: "Pratique sexuelle impliquant trois personnes simultanément. Le triolisme est l'une des formes les plus courantes du libertinage et constitue souvent une première étape vers l'échangisme." },
    { term: "Trouple", def: "Relation amoureuse et sexuelle stable entre trois personnes. Le trouple s'inscrit dans le polyamour et diffère des trios occasionnels." },
  ]},
  { letter: "U", terms: [
    { term: "Unicorn (Licorne)", def: "Femme bisexuelle célibataire recherchée par les couples pour des trios. Appelée 'licorne' car rare et très demandée dans le milieu libertin." },
    { term: "Urophilie", def: "Attirance sexuelle pour l'urine. Pratique fétichiste spécifique, généralement pratiquée dans le cadre du BDSM. Nécessite consentement éclairé et hygiène stricte." },
  ]},
  { letter: "V", terms: [
    { term: "Vanille", def: "Terme désignant la sexualité conventionnelle, sans pratiques alternatives ou libertines. Par opposition au libertinage, au BDSM ou aux fétichismes." },
    { term: "Verification", def: "Processus de validation de l'authenticité d'un profil sur un site libertin. La vérification peut se faire par photo, vidéo, rencontre ou certification par d'autres membres." },
    { term: "VIP", def: "Statut premium sur une plateforme libertine offrant des fonctionnalités exclusives : événements privés, profils multiples, visibilité prioritaire, support dédié. Akoky propose un abonnement VIP haut de gamme." },
    { term: "Voyeurisme", def: "Plaisir pris à observer d'autres personnes dans des situations intimes ou sexuelles. Le voyeurisme consensuel est courant dans les clubs libertins, où des espaces sont dédiés aux spectateurs." },
  ]},
  { letter: "W", terms: [
    { term: "Wyylde", def: "Plateforme libertine française de rencontres en ligne, anciennement connue sous le nom de Netechangisme. Wyylde propose profils, messagerie, événements et annuaire de clubs libertins." },
    { term: "Wax play", def: "Pratique BDSM consistant à faire couler de la cire de bougie chaude sur le corps du partenaire. Le wax play mélange sensations de chaleur, douleur légère et esthétique visuelle." },
  ]},
  { letter: "X", terms: [
    { term: "X (Contenu)", def: "Désigne du contenu à caractère sexuel explicite, pornographique. Dans le milieu libertin, certains profils ou événements sont classés 'contenu X' pour indiquer leur nature explicite." },
  ]},
  { letter: "Y", terms: [
    { term: "Yoni", def: "Terme sanskrit désignant les organes génitaux féminins dans les pratiques tantriques. Le massage yoni est une pratique sensuelle et spirituelle visant à honorer la féminité sacrée." },
  ]},
  { letter: "Z", terms: [
    { term: "Zone érogène", def: "Partie du corps particulièrement sensible aux stimulations sexuelles. Les zones érogènes varient selon les personnes et peuvent inclure le cou, les oreilles, les seins, l'intérieur des cuisses, etc." },
  ]},
];

const CATEGORIES = [
  { icon: "🔄", title: "Pratiques Libertines", desc: "Échangisme, mélangisme, candaulisme, triolisme, gang bang, bukkake, soft swap, full swap. Comprenez les nuances entre chaque pratique pour mieux exprimer vos envies en club ou lors d'événements." },
  { icon: "👥", title: "Profils & Rôles", desc: "Couple libertin, femme seule, homme seul, unicorn (licorne), bull, cuckold, hotwife, switch, voyeur, exhibitionniste. Découvrez les codes implicites de chaque profil dans la communauté AKOKY." },
  { icon: "📍", title: "Lieux & Événements", desc: "Club libertin, sauna libertin, soirée privée, gang bang party, apéro coquin, weekend libertin, boat party. Vocabulaire spécifique des établissements et événements libertins en Europe." },
  { icon: "🌈", title: "Orientations & Identités", desc: "Bi-curieux, pansexuel, sapiosexuel, hétéroflexible, homoflexible. Termes inclusifs du libertinage moderne qui respecte toutes les identités." },
  { icon: "💞", title: "Relations & Structures", desc: "Polyamour, couple libre, relation ouverte, throuple (trouple), ethical non-monogamy, relationship anarchy. Comprendre les différences entre libertinage et polyamour." },
  { icon: "🛡️", title: "Consentement & Sécurité", desc: "Safe word, soft limit, hard limit, consentement explicite, aftercare, négociation, scène. Termes essentiels pour garantir des expériences respectueuses." },
];

const Lexique = () => {
  const [openLetters, setOpenLetters] = useState<string[]>([]);

  const toggleLetter = (letter: string) => {
    setOpenLetters(prev => prev.includes(letter) ? prev.filter(l => l !== letter) : [...prev, letter]);
  };

  return (
    <>
      <MetaTags
        title="Lexique Libertin Complet 2026 – 200+ Termes de A à Z | AKOKY"
        description="Le lexique libertin le plus complet : 200+ définitions du vocabulaire libertin de A à Z. Guide AKOKY pour comprendre échangisme, candaulisme, mélangisme et toutes les pratiques."
        canonical="https://akoky.com/fr/lexique"
        lang="fr"
        ogImage="/images/lexique-libertine-cover.webp"
      />
      <HreflangTags slug="lexique" />
      <ContentPageLayout
        lang="fr"
        title="Lexique Libertin Complet 2026"
        description="200+ termes du libertinage définis de A à Z"
        canonical="https://akoky.com/fr/lexique"
        heroTitle="Lexique Libertin"
        heroSubtitle="Le vocabulaire du libertinage de A à Z"
        heroImage="/images/lexique-libertine-cover.webp"
        breadcrumb={[{ label: "Lexique Libertin" }]}
        faq={FAQ}
      >
        {/* Intro */}
        <section className="py-12 px-4 bg-background">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-5">Lexique libertin : comprendre le vocabulaire du libertinage</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Le <strong className="text-foreground">lexique libertin AKOKY</strong> est le <strong className="text-foreground">dictionnaire le plus complet du libertinage en français</strong> avec plus de <strong className="text-foreground">200 termes définis de A à Z</strong>. Destiné aux <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">débutants curieux</Link>, couples en exploration, célibataires et libertins confirmés, ce guide pédagogique vous permettra de maîtriser le vocabulaire libertin, comprendre les pratiques sexuelles (échangisme, mélangisme, candaulisme, triolisme, gang bang, bukkake) et naviguer sereinement dans les <Link to="/fr/clubs-libertins" className="text-primary hover:underline">120 clubs libertins</Link> référencés sur AKOKY.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Ce dictionnaire libertin 2026 couvre l'ensemble des pratiques sexuelles (soft swap, full swap, exhibitionnisme, voyeurisme, BDSM léger, fétichisme), les rôles (dominant, soumis, switch, cuckold, hotwife), les orientations (bi-curieux, pansexuel, sapiosexuel), les termes relationnels (polyamour, couple libre, relation ouverte, throuple), et les expressions courantes des clubs et soirées privées.
            </p>
          </div>
        </section>

        {/* Catégories */}
        <section className="py-12 px-4 bg-card/50">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Explorer le Lexique par Catégorie</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATEGORIES.map((cat, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 hover:border-primary/40 transition-all">
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dictionnaire A-Z */}
        <section className="py-12 px-4 bg-background">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">Dictionnaire Libertin de A à Z</h2>
            <p className="text-muted-foreground mb-8">Cliquez sur une lettre pour découvrir les définitions</p>

            {/* Quick nav */}
            <div className="flex flex-wrap gap-2 mb-8">
              {DICTIONARY.map(g => (
                <button
                  key={g.letter}
                  onClick={() => toggleLetter(g.letter)}
                  className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                    openLetters.includes(g.letter)
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {g.letter}
                </button>
              ))}
              <button
                onClick={() => setOpenLetters(openLetters.length === DICTIONARY.length ? [] : DICTIONARY.map(g => g.letter))}
                className="px-4 h-10 rounded-lg font-bold text-xs bg-card border border-border hover:border-primary hover:text-primary transition-all"
              >
                {openLetters.length === DICTIONARY.length ? "Fermer tout" : "Tout ouvrir"}
              </button>
            </div>

            {/* Letters */}
            <div className="space-y-4">
              {DICTIONARY.map(group => (
                <div key={group.letter} className="bg-card border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleLetter(group.letter)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-black text-primary">{group.letter}</span>
                      <span className="text-sm text-muted-foreground font-medium">Lettre {group.letter} — {group.terms.length} terme{group.terms.length > 1 ? "s" : ""}</span>
                    </div>
                    <span className={`text-primary transition-transform ${openLetters.includes(group.letter) ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  {openLetters.includes(group.letter) && (
                    <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
                      {group.terms.map((t, i) => (
                        <div key={i}>
                          <dt className="font-bold text-foreground mb-1">{t.term}</dt>
                          <dd className="text-muted-foreground text-sm leading-relaxed">{t.def}</dd>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ressources */}
        <section className="py-10 px-4 bg-card/50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-5">Ressources complémentaires</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { to: "/fr/debuter-libertinage", label: "Débuter" },
                { to: "/fr/libertinage", label: "Le Libertinage" },
                { to: "/fr/clubs-libertins", label: "Clubs Libertins" },
                { to: "/fr/evenements", label: "Événements" },
                { to: "/fr/guide-libertin-france", label: "Guide France" },
                { to: "/fr/saunas-libertins", label: "Saunas Libertins" },
                { to: "/fr/avis", label: "Avis & Témoignages" },
                { to: "/fr/application", label: "Application Mobile" },
              ].map((l, i) => (
                <Link key={i} to={l.to} className="p-3 bg-background border border-border rounded-lg text-center text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ContentPageLayout>
    </>
  );
};

export default Lexique;
