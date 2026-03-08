import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "💡 Qu'est-ce que le libertinage aujourd'hui ?", answer: "Le libertinage moderne est une pratique sexuelle basée sur la liberté, le consentement mutuel et le respect. Il s'agit pour des adultes consentants d'explorer leur sexualité au-delà des normes monogames traditionnelles, que ce soit en couple ou en célibataire. Contrairement aux idées reçues, le libertinage n'est pas synonyme de débauche mais repose" },
  { question: "🖤 Le libertinage est-il réservé aux couples ?", answer: "Non, le libertinage est accessible à tous : couples, femmes seules et hommes seuls. Si les couples sont majoritaires dans le milieu, les femmes célibataires sont très recherchées et bénéficient d'un accès privilégié dans les clubs. Les hommes seuls peuvent également participer, bien que certains établissements imposent des quotas pour préserver l'é" },
  { question: "🔄 Quelle est la différence entre échangisme et candaulisme ?", answer: "L'échangisme implique que deux couples (ou plus) échangent leurs partenaires de manière réciproque et équilibrée. Tous les participants sont actifs. Le candaulisme, en revanche, est une pratique où un homme éprouve du plaisir à voir sa partenaire avec d'autres hommes, en restant spectateur ou participant secondaire. Le candauliste tire sa satisfact" },
  { question: "🚀 Comment débuter dans le libertinage ?", answer: "Pour débuter dans le libertinage, il est essentiel de communiquer clairement avec son partenaire si vous êtes en couple, et de définir vos limites et envies. Ensuite, inscrivez-vous sur un site libertin de confiance comme Akoky pour découvrir la communauté et échanger avec d'autres membres. Assistez à une soirée dans un club libertin pour observer " },
  { question: "💞 Le libertinage est-il compatible avec l'amour ?", answer: "Absolument. De nombreux couples libertins témoignent que le libertinage a renforcé leur complicité et leur relation amoureuse. La clé réside dans la communication, la confiance mutuelle et la capacité à distinguer sexualité et sentiments. Pour beaucoup, le libertinage permet d'explorer des fantasmes ensemble tout en maintenant une relation amoureus" },
  { question: "🛡️ Comment garantir le consentement et la sécurité ?", answer: "Le consentement est la base absolue du libertinage. Il doit être libre, éclairé, explicite et révocable à tout moment. Dans les clubs, le 'non c'est non' est une règle intangible. Sur les sites libertins comme Akoky, la certification des profils et la modération humaine garantissent l'authenticité des membres. Pour la sécurité physique, l'utilisati" },
  { question: "📖 Quelle est la différence entre échangisme et mélangisme ?", answer: "L' échangisme (ou 'swap') désigne l'échange de partenaires entre deux couples : couple A + couple B se séparent et reforment couple AB + couple BA. Le mélangisme implique que tous les participants interagissent ensemble sans forcément former de paires fixes (groupe de 4, 5, 6+ personnes). Nuance : en échangisme, les couples peuvent pratiquer le 'so" },
  { question: "🔞 C'est quoi un gang bang et comment ça se passe ?", answer: "Le gang bang est une pratique où une personne (généralement une femme, mais pas exclusivement) a des rapports sexuels successifs ou simultanés avec plusieurs partenaires. Dans le libertinage éthique , le gang bang est TOUJOURS organisé avec le consentement explicite de tous, des limites claires (nombre de participants, pratiques autorisées, durée)," },
  { question: "🦄 C'est quoi une 'licorne' (unicorn) dans le libertinage ?", answer: "Une licorne (ou 'unicorn' en anglais) désigne une femme bisexuelle célibataire qui rejoint temporairement un couple (hétéro ou lesbien) pour des expériences à trois sans complications émotionnelles. Le terme 'licorne' vient du fait que ce profil est très recherché mais rare dans la communauté libertine. Les licornes apprécient généralement l'absenc" },
  { question: "🎭 Quelle différence entre exhibitionnisme et voyeurisme ?", answer: "L' exhibitionnisme est le plaisir de montrer son corps ou ses actes sexuels à d'autres personnes (avec leur consentement). Le voyeurisme est le plaisir de regarder d'autres personnes dans un contexte sexuel (toujours avec consentement mutuel). Dans les clubs libertins , ces pratiques sont très courantes : espaces 'câlins' vitrés pour les exhibition" },
  { question: "💑 Quelle différence entre libertinage et polyamour ?", answer: "Le libertinage sépare clairement sexualité et sentiments : les couples libertins partagent des expériences sexuelles avec d'autres tout en restant émotionnellement exclusifs l'un envers l'autre. Le polyamour implique des relations amoureuses multiples (avec engagement émotionnel) menées de manière éthique et transparente avec toutes les personnes c" },
  { question: "🌐 Où puis-je trouver un lexique libertin en PDF téléchargeable ?", answer: "Le lexique libertin AKOKY en version PDF sera bientôt disponible en téléchargement gratuit pour tous les membres inscrits. En attendant, vous pouvez : (1) Consulter cette page en ligne (bookmark dans votre navigateur), (2) Télécharger notre application mobile qui intègre le lexique complet accessible hors ligne, (3) Utiliser la fonction 'Imprimer e" },
  { question: "✅ Ce lexique est-il adapté aux débutants ?", answer: "Absolument ! Ce lexique est conçu pour être accessible aux débutants tout en restant exhaustif pour les libertins confirmés. Chaque terme est expliqué simplement , sans jargon médical complexe, avec des exemples concrets issus de situations réelles en club ou lors d' événements . Si vous débutez dans le libertinage , nous recommandons de lire d'abo" },
];

const TERMS = [
  { term: "🔄 Pratiques Libertines", def: "" },
  { term: "👥 Profils & Rôles", def: "Couple libertin, femme seule, homme seul, unicorn (licorne), bull, cuckold, hotwife, switch, voyeur, exhibitionniste. Découvrez les" },
  { term: "📍 Lieux & Événements", def: "Club libertin, sauna libertin, soirée privée, gang bang party, apéro coquin, weekend libertin, boat party. Vocabulaire spécifique des" },
  { term: "🌈 Orientations & Identités", def: "Bi-curieux, pansexuel, sapiosexuel, hétéroflexible, homoflexible. Termes inclusifs du" },
  { term: "💞 Relations & Structures", def: "Polyamour, couple libre, relation ouverte, throuple (trouple), ethical non-monogamy, relationship anarchy. Comprendre les différences entre libertinage et polyamour grâce à notre" },
  { term: "🛡️ Consentement & Sécurité", def: "Safe word, soft limit, hard limit, consentement explicite, aftercare, négociation, scène. Termes essentiels pour garantir des expériences respectueuses selon notre" },
  { term: "Lettre A", def: "5 termes" },
  { term: "Lettre B", def: "6 termes" },
  { term: "Lettre C", def: "8 termes" },
  { term: "Lettre D", def: "5 termes" },
  { term: "Lettre E", def: "4 termes" },
  { term: "Lettre F", def: "5 termes" },
  { term: "Lettre G", def: "4 termes" },
  { term: "Lettre H", def: "3 termes" },
  { term: "Lettre I", def: "2 termes" },
  { term: "Lettre J", def: "2 termes" },
  { term: "Lettre K", def: "1 terme" },
  { term: "Lettre L", def: "4 termes" },
  { term: "Lettre M", def: "5 termes" },
  { term: "Lettre N", def: "3 termes" },
  { term: "Lettre O", def: "2 termes" },
  { term: "Lettre P", def: "6 termes" },
  { term: "Lettre Q", def: "1 terme" },
  { term: "Lettre R", def: "4 termes" },
  { term: "Lettre S", def: "8 termes" },
  { term: "Lettre T", def: "4 termes" },
  { term: "Lettre U", def: "2 termes" },
  { term: "Lettre V", def: "4 termes" },
  { term: "Lettre W", def: "2 termes" },
  { term: "Lettre X", def: "1 terme" },
];

const Lexique = () => (
  <>
    <MetaTags
      title="Lexique Libertin Complet 2026 – Tous les Termes | AKOKY"
      description="Le lexique libertin complet : définitions des termes, pratiques et expressions du lifestyle libertin. Guide AKOKY pour comprendre le vocabulaire libertin."
      canonical="https://akoky.com/fr/lexique"
      lang="fr"
      ogImage="https://akoky.com/images/lexique-libertine-cover.webp"
    />
    <HreflangTags slug="lexique" />
    <ContentPageLayout
      lang="fr"
      title="Lexique Libertin Complet"
      description="Tous les termes du libertinage définis"
      canonical="https://akoky.com/fr/lexique"
      heroTitle="Lexique Libertin"
      heroSubtitle="Le dictionnaire complet du lifestyle libertin : définitions, termes et expressions pour tout comprendre."
      heroImage="https://akoky.com/images/lexique-libertine-cover.webp"
      breadcrumb={[{ label: "Lexique Libertin" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Lexique libertin : comprendre le vocabulaire du libertinage</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Le lexique libertin AKOKY est le dictionnaire le plus complet du libertinage en français avec plus de 200 termes définis de A à Z . Destiné aux débutants curieux , couples en exploration, célibataires et libertins confirmés, ce guide pédagogique vous permettra de maîtriser le vocabulaire libertin , comprendre les pratiques sexuelles (échangisme, mé</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Depuis l'essor des plateformes libertines comme AKOKY , Wyylde , NousLibertins , Libertic et SexyLib , le libertinage moderne s'est démocratisé en France, Belgique et Espagne. Comprendre le jargon libertin est devenu essentiel pour : (1) Communiquer clairement vos limites et envies , (2) Respecter le consentement de chacun, (3) Décrypter les codes </p>
            <p className="text-muted-foreground leading-relaxed mb-3">Ce dictionnaire libertin 2026 couvre l'ensemble des pratiques sexuelles (soft swap, full swap, exhibitionnisme, voyeurisme, BDSM léger, fétichisme), les rôles (dominant, soumis, switch, cuckold, hotwife), les orientations (bi-curieux, pansexuel, sapiosexuel), les termes relationnels (polyamour, couple libre, relation ouverte, throuple), et les expr</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Explorer le Lexique par Catégorie</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Échangisme , mélangisme , candaulisme , triolisme , gang bang, bukkake, soft swap, full swap. Comprenez les nuances entre chaque pratique pour mieux exprimer vos envies en club ou lors d' événements .</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Couple libertin, femme seule, homme seul, unicorn (licorne), bull, cuckold, hotwife, switch, voyeur, exhibitionniste. Découvrez les codes implicites de chaque profil dans la communauté AKOKY .</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Club libertin, sauna libertin, soirée privée, gang bang party, apéro coquin, weekend libertin, boat party. Vocabulaire spécifique des établissements et événements libertins en Europe.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Termes du Lexique Libertin</h2>
          <div className="space-y-4">
            {TERMS.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <dt className="font-bold text-foreground mb-1">{item.term}</dt>
                <dd className="text-muted-foreground text-sm leading-relaxed">{item.def}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Lexique;
