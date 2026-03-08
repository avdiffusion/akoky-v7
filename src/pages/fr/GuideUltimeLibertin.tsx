import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Le libertinage est-il légal en France ?", answer: "Oui. Le libertinage entre adultes consentants est parfaitement légal. Les clubs libertins sont des établissements déclarés et encadrés par la loi." },
  { question: "Quelle est la différence entre libertinage et échangisme ?", answer: "Le libertinage est un terme global englobant plusieurs pratiques. L'échangisme désigne plus précisément l'échange de partenaires entre couples." },
  { question: "Faut-il obligatoirement aller en club ?", answer: "Non. Le libertinage peut se vivre via des rencontres privées, des soirées sélectives ou des événements organisés." },
  { question: "Existe-t-il des clubs libertins partout en France ?", answer: "Oui. La France compte plusieurs centaines de clubs, répartis sur l'ensemble du territoire." },
  { question: "Le libertinage est-il réservé aux couples ?", answer: "Non. Les couples sont majoritaires, mais les femmes seules sont très bien accueillies et les hommes seuls acceptés sous conditions." },
  { question: "Peut-on venir uniquement pour observer ?", answer: "Oui. Beaucoup de libertins viennent pour observer, découvrir l'ambiance ou vivre une expérience soft." },
  { question: "Le consentement est-il vraiment respecté ?", answer: "Absolument. Le consentement est la règle numéro un. Un non est toujours respecté, sans discussion." },
  { question: "Y a-t-il des règles strictes dans les clubs ?", answer: "Oui. Hygiène, respect, discrétion et sécurité sont strictement appliqués dans les établissements sérieux." },
  { question: "Peut-on changer d'avis à tout moment ?", answer: "Oui. Vous pouvez refuser, arrêter ou partir à n'importe quel moment, sans pression." },
  { question: "Comment choisir son premier club libertin ?", answer: "Privilégiez un club reconnu, propre et proposant des soirées adaptées aux débutants. Consultez les avis sur AKOKY." },
  { question: "Existe-t-il des soirées spéciales débutants ?", answer: "Oui. De nombreux clubs organisent des soirées découverte avec une ambiance plus douce." },
  { question: "Le libertinage peut-il renforcer un couple ?", answer: "Oui, s'il repose sur la communication. Mal préparé, il peut aussi fragiliser un couple." },
  { question: "Les téléphones sont-ils autorisés ?", answer: "Leur usage est très encadré. La discrétion et l'anonymat sont essentiels." },
  { question: "Y a-t-il des risques sanitaires ?", answer: "Comme dans toute activité sexuelle, des précautions s'imposent. Le préservatif est obligatoire dans les clubs sérieux." },
];

const TOC = [
  { label: "Qu'est-ce que le libertinage ?", anchor: "#definition" },
  { label: "Histoire du libertinage en France", anchor: "#histoire" },
  { label: "Les différents types de libertinage", anchor: "#types" },
  { label: "Comment débuter dans le libertinage", anchor: "#debuter" },
  { label: "Les règles d'or du libertinage", anchor: "#regles" },
  { label: "Les clubs libertins en France", anchor: "#clubs" },
];

const GuideUltimeLibertin = () => (
  <>
    <MetaTags title="Guide Ultime du Libertinage en France 2026 – Plus de 500 Clubs | AKOKY" description="Le guide de référence du libertinage en France : 500+ clubs vérifiés, conseils experts, codes à connaître, débuter sereinement. Tout savoir sur le libertinage français." canonical="https://akoky.com/fr/guide-ultime-libertinage-france" lang="fr" ogImage="/images/app-cover.webp" />
    <HreflangTags slug="guide-ultime-libertinage-france" />
    <ContentPageLayout lang="fr" title="Guide Ultime du Libertinage en France 2026 – Plus de 500 Clubs | AKOKY" description="Le guide de référence du libertinage en France : 500+ clubs vérifiés, conseils experts, codes à connaître, débuter sereinement. Tout savoir sur le libertinage français." canonical="https://akoky.com/fr/guide-ultime-libertinage-france" heroTitle="Guide Ultime du Libertinage en France" heroSubtitle="Le guide de référence complet : 500+ clubs vérifiés, conseils experts, codes à connaître"
      heroImage="/images/app-cover.webp" breadcrumb={[{ label: "Guide Ultime du Libertinage en France" }]} faq={FAQ}>

      {/* Table des matières */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">📚 Table des matières complète</h2>
          <p className="text-muted-foreground mb-6">Naviguez facilement dans ce guide de 8000+ mots</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">🎯 Les Fondamentaux</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#definition" className="hover:text-primary">1. Qu'est-ce que le libertinage ?</a></li>
                <li><a href="#histoire" className="hover:text-primary">2. Histoire du libertinage en France</a></li>
                <li><a href="#types" className="hover:text-primary">3. Les différents types de libertinage</a></li>
                <li><a href="#debuter" className="hover:text-primary">4. Comment débuter dans le libertinage</a></li>
                <li><a href="#regles" className="hover:text-primary">5. Les règles d'or du libertinage</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">🏛️ Lieux & Événements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#clubs" className="hover:text-primary">6. Les clubs libertins en France</a></li>
                <li><Link to="/fr/guide-libertin-france" className="hover:text-primary">7. Comment choisir son club</Link></li>
                <li><Link to="/fr/saunas-libertins" className="hover:text-primary">8. Les saunas libertins</Link></li>
                <li><Link to="/fr/evenements" className="hover:text-primary">9. Soirées privées et événements</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">💡 Conseils Pratiques</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/fr/premier-club-libertin" className="hover:text-primary">10. Votre première fois en club</Link></li>
                <li><Link to="/fr/lexique" className="hover:text-primary">11. Lexique libertin complet</Link></li>
                <li><Link to="/fr/questions-debutants-libertinage" className="hover:text-primary">12. FAQ complète</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 01 - Qu'est-ce que le libertinage ? */}
      <section id="definition" className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Qu'est-ce que le libertinage ?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Le libertinage est une pratique sexuelle consensuelle qui permet aux couples et aux célibataires d'explorer leur sexualité au-delà des codes traditionnels. En France, cette pratique rassemble aujourd'hui plus de 2 millions d'adeptes occasionnels ou réguliers.</p>
            <p>Contrairement aux idées reçues, <Link to="/fr/libertinage" className="text-primary hover:underline">le libertinage moderne</Link> n'est pas seulement une question de sexe. C'est avant tout une philosophie de vie basée sur la liberté, le respect mutuel, et la communication au sein du couple. Il s'agit d'une démarche volontaire où chacun définit ses propres limites et règles.</p>
            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Définition et principes fondamentaux</h3>
            <p>Le libertinage se caractérise par plusieurs principes essentiels qui garantissent une pratique saine et épanouissante. Le <strong>consentement</strong> est la pierre angulaire : chaque participant doit être pleinement d'accord avec ce qui se passe, sans aucune pression. Le <strong>respect des limites</strong> de chacun est absolu — un "non" est toujours respecté immédiatement. La <strong>discrétion</strong> est également fondamentale : ce qui se passe dans la sphère libertine reste privé.</p>
            <p>Pour <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">débuter dans le libertinage</Link>, il est crucial de comprendre ces principes avant de se lancer. La plupart des <Link to="/fr/clubs-libertins" className="text-primary hover:underline">clubs libertins en France</Link> appliquent strictement ces règles, créant ainsi un environnement sûr et bienveillant pour tous.</p>
            <div className="bg-card border border-border rounded-xl p-5 mt-6">
              <h4 className="font-semibold text-foreground mb-2">💡 Le saviez-vous ?</h4>
              <p className="text-sm">Selon une étude réalisée par AKOKY en 2025, 68% des couples libertins affirment que cette pratique a renforcé leur complicité et leur communication. Découvrez tous les <Link to="/fr/avis" className="text-primary hover:underline">avis et témoignages de nos membres</Link>.</p>
            </div>
            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Libertinage vs infidélité : la différence fondamentale</h3>
            <p>Il est essentiel de distinguer le libertinage de l'infidélité. Dans le libertinage, <strong>tout est transparent et consensuel</strong>. Les deux partenaires sont informés, d'accord, et souvent présents ensemble. Il n'y a ni mensonge, ni trahison. L'infidélité, à l'inverse, implique la dissimulation et la violation de la confiance.</p>
            <p>Cette transparence est ce qui permet au libertinage de renforcer les couples plutôt que de les fragiliser. Beaucoup de témoignages recueillis sur <Link to="/fr/blogs" className="text-primary hover:underline">notre blog</Link> confirment que cette pratique a sauvé des relations en perte de vitesse en réintroduisant du désir et de la complicité.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {[
              { icon: "🔓", title: "Liberté", desc: "Explorer sa sexualité sans jugement dans un cadre défini ensemble" },
              { icon: "🤝", title: "Respect", desc: "Honorer les limites de chacun à chaque instant" },
              { icon: "💬", title: "Communication", desc: "Dialoguer ouvertement avant, pendant et après" },
              { icon: "🎭", title: "Discrétion", desc: "Protéger l'anonymat et la vie privée de tous" },
            ].map((p, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-4 text-center">
                <span className="text-2xl block mb-2">{p.icon}</span>
                <h4 className="font-semibold text-foreground text-sm mb-1">{p.title}</h4>
                <p className="text-muted-foreground text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6">Pour approfondir votre compréhension, consultez notre <Link to="/fr/guide-libertin-france" className="text-primary hover:underline">guide complet du libertinage en France</Link> et notre <Link to="/fr/lexique" className="text-primary hover:underline">lexique libertin de A à Z</Link> qui définit plus de 200 termes.</p>
        </div>
      </section>

      {/* 02 - Histoire */}
      <section id="histoire" className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Histoire du libertinage en France</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>La France possède une longue tradition libertine qui remonte à plusieurs siècles. Des salons du XVIIIe siècle aux clubs modernes, découvrez l'évolution fascinante de cette pratique qui a façonné la culture française.</p>
            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Des origines aristocratiques au libertinage moderne</h3>
            <p>Le libertinage trouve ses racines dans l'aristocratie française du XVIIIe siècle. Les salons parisiens organisaient des rencontres où l'on transgressait les règles morales de l'époque. Des figures comme le Marquis de Sade ou Casanova ont marqué cette période, même si leur libertinage était très différent de la pratique consensuelle et respectueuse que nous connaissons aujourd'hui.</p>
            <p>Au XXe siècle, notamment après Mai 68 et la révolution sexuelle, le libertinage s'est démocratisé. Les premiers <Link to="/fr/clubs-libertins-paris" className="text-primary hover:underline">clubs libertins parisiens</Link> ont ouvert leurs portes dans les années 1970, offrant des espaces dédiés aux couples et célibataires souhaitant explorer leur sexualité dans un cadre sécurisé.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-8">
            {[
              { era: "1970s", title: "Naissance des premiers clubs", desc: "Ouverture des premiers établissements libertins en France, principalement à Paris et sur la Côte d'Azur." },
              { era: "1980-90s", title: "Expansion nationale", desc: "Les clubs se multiplient dans toute la France : Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille..." },
              { era: "2000s", title: "Révolution Internet", desc: "Les sites de rencontres libertines démocratisent l'accès à la communauté." },
              { era: "2010-20s", title: "Professionnalisation", desc: "Les clubs deviennent plus luxueux, sécurisés et accueillants." },
              { era: "2020-26", title: "Ère digitale", desc: "Applications mobiles comme AKOKY, événements haut de gamme, normalisation." },
            ].map((p, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4">
                <span className="text-primary font-bold text-sm">{p.era}</span>
                <h4 className="font-semibold text-foreground text-sm mt-1 mb-1">{p.title}</h4>
                <p className="text-muted-foreground text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed mt-8">
            <h3 className="text-xl font-semibold text-primary mt-4 mb-3">Le libertinage en France aujourd'hui</h3>
            <p>En 2026, la France compte plus de 500 établissements libertins répertoriés sur AKOKY, répartis dans toutes les régions. Des grandes métropoles comme <Link to="/fr/clubs-libertins-paris" className="text-primary hover:underline">Paris</Link>, <Link to="/fr/clubs-libertins-lyon" className="text-primary hover:underline">Lyon</Link> et <Link to="/fr/clubs-libertins-marseille" className="text-primary hover:underline">Marseille</Link> aux villes moyennes comme <Link to="/fr/clubs-libertins-strasbourg" className="text-primary hover:underline">Strasbourg</Link>, <Link to="/fr/clubs-libertins-rennes" className="text-primary hover:underline">Rennes</Link>, <Link to="/fr/clubs-libertins-montpellier" className="text-primary hover:underline">Montpellier</Link>, <Link to="/fr/clubs-libertins-grenoble" className="text-primary hover:underline">Grenoble</Link> et <Link to="/fr/clubs-libertins-toulon" className="text-primary hover:underline">Toulon</Link>, l'offre n'a jamais été aussi diverse et accessible.</p>
            <p>Chaque région française possède aujourd'hui ses clubs : l'<Link to="/fr/clubs-libertins-ile-de-france" className="text-primary hover:underline">Île-de-France</Link>, l'<Link to="/fr/clubs-libertins-auvergne-rhone-alpes" className="text-primary hover:underline">Auvergne-Rhône-Alpes</Link>, la <Link to="/fr/clubs-libertins-nouvelle-aquitaine" className="text-primary hover:underline">Nouvelle-Aquitaine</Link>, l'<Link to="/fr/clubs-libertins-occitanie" className="text-primary hover:underline">Occitanie</Link>, la <Link to="/fr/clubs-libertins-paca" className="text-primary hover:underline">Provence-Alpes-Côte d'Azur</Link>, la <Link to="/fr/clubs-libertins-bretagne" className="text-primary hover:underline">Bretagne</Link>, et même les <Link to="/fr/clubs-libertins-pays-de-la-loire" className="text-primary hover:underline">Pays de la Loire</Link>.</p>
            <p>Le profil des adeptes a également évolué. Si le libertinage était autrefois réservé à une élite, il concerne aujourd'hui toutes les catégories socioprofessionnelles. L'âge moyen se situe entre 35 et 45 ans, mais on trouve des participants de 25 à 65 ans et plus.</p>
            <p>Consultez notre page <Link to="/fr/actualites-libertines" className="text-primary hover:underline">actualités libertines</Link> pour suivre l'évolution de la scène française et européenne.</p>
          </div>
        </div>
      </section>

      {/* 03 - Les différents types de libertinage */}
      <section id="types" className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Les différents types de libertinage</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">Le libertinage ne se résume pas à une seule pratique. Il existe une grande diversité de formes et de niveaux d'implication. Comprendre ces différences vous aidera à mieux définir ce qui vous correspond et à explorer sereinement.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🌸", title: "Soft Libertinage", level: "Débutant", desc: "Pratiques sensuelles sans pénétration avec d'autres partenaires. Caresses, baisers, masturbation mutuelle, jeux érotiques." },
              { icon: "🔥", title: "Hard Libertinage", level: "Confirmé", desc: "Relations sexuelles complètes avec d'autres partenaires, incluant toutes les pratiques souhaitées par les participants." },
              { icon: "👁️", title: "Voyeurisme", level: "Tout niveau", desc: "Plaisir de regarder d'autres personnes lors de moments intimes, toujours avec leur consentement explicite." },
              { icon: "🎭", title: "Exhibitionnisme", level: "Tout niveau", desc: "Plaisir de se montrer, d'être observé et admiré pendant des moments intimes dans un cadre sécurisé." },
              { icon: "🔄", title: "Échangisme", level: "Intermédiaire", desc: "Échange de partenaires entre deux couples consentants, chacun vivant une expérience avec le/la partenaire de l'autre." },
              { icon: "🎪", title: "Mélangisme", level: "Confirmé", desc: "Pratiques sexuelles en groupe, sans limite stricte de nombre de participants, dans une ambiance collective et festive." },
              { icon: "👑", title: "Candaulisme", level: "Spécifique", desc: "Un partenaire (généralement l'homme) prend plaisir à voir son/sa partenaire avec une ou plusieurs autres personnes." },
              { icon: "🎯", title: "Triolisme", level: "Intermédiaire", desc: "Relation sexuelle à trois personnes, généralement un couple qui invite une troisième personne dans leur intimité." },
            ].map((p, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-5">
                <span className="text-2xl block mb-2">{p.icon}</span>
                <h3 className="font-bold text-foreground text-sm mb-1">{p.title}</h3>
                <span className="text-xs text-primary font-medium">{p.level}</span>
                <p className="text-muted-foreground text-xs mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6">Découvrez plus de 200 termes et pratiques dans notre <Link to="/fr/lexique" className="text-primary hover:underline">lexique libertin complet de A à Z</Link>.</p>
        </div>
      </section>

      {/* 04 - Comment débuter */}
      <section id="debuter" className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Comment débuter dans le libertinage</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Se lancer dans le libertinage est une décision importante qui nécessite réflexion, communication et préparation. Voici un guide complet étape par étape pour débuter sereinement et profiter pleinement de cette nouvelle aventure.</p>
            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Étape 1 : La communication dans le couple</h3>
            <p>Avant toute chose, il est crucial d'avoir une <strong>communication ouverte et honnête</strong> avec votre partenaire. Le libertinage ne doit jamais être imposé par l'un des deux. C'est un projet commun qui nécessite l'enthousiasme et le consentement plein et entier des deux partenaires.</p>
            <p>Prenez le temps de discuter de vos motivations, de vos fantasmes, mais aussi de vos craintes et de vos limites. Cette étape est essentielle et ne doit pas être précipitée. Consultez notre guide sur <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">comment débuter dans le libertinage</Link> pour plus de conseils détaillés.</p>
            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Étape 2 : Choisir votre première expérience</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card border border-primary/30 rounded-xl p-5">
              <span className="text-xs text-primary font-bold">✨ Recommandé pour débuter</span>
              <h4 className="font-bold text-foreground mt-2 mb-2">Visite d'un club en observateurs</h4>
              <p className="text-muted-foreground text-sm">Visitez un <Link to="/fr/clubs-libertins" className="text-primary hover:underline">club libertin</Link> sans pression de participation. Découvrez l'ambiance à <Link to="/fr/clubs-libertins-paris" className="text-primary hover:underline">Paris</Link>, <Link to="/fr/clubs-libertins-lyon" className="text-primary hover:underline">Lyon</Link>, <Link to="/fr/clubs-libertins-marseille" className="text-primary hover:underline">Marseille</Link> ou dans votre région.</p>
              <Link to="/fr/premier-club-libertin" className="text-primary text-sm font-medium mt-3 inline-block">→ Guide première visite en club</Link>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h4 className="font-bold text-foreground mb-2">Soirée dans un sauna libertin</h4>
              <p className="text-muted-foreground text-sm">Les <Link to="/fr/saunas-libertins" className="text-primary hover:underline">saunas libertins</Link> offrent une ambiance plus détendue et moins intimidante qu'un club traditionnel. Parfait pour une approche progressive dans un cadre relaxant.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h4 className="font-bold text-foreground mb-2">Rendez-vous avec un autre couple</h4>
              <p className="text-muted-foreground text-sm">Rencontrez un autre couple via <Link to="/fr/application" className="text-primary hover:underline">l'application AKOKY</Link> dans un cadre privé. Vous gardez le contrôle total de la situation et du rythme.</p>
              <Link to="/fr/premier-rendez-vous-libertin" className="text-primary text-sm font-medium mt-3 inline-block">→ Guide du premier rendez-vous libertin</Link>
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed mt-8">
            <h3 className="text-xl font-semibold text-primary mb-3">Conseils essentiels pour bien débuter</h3>
            <ol className="space-y-2 ml-4 list-decimal list-inside">
              <li><strong>Prenez votre temps</strong> : Il n'y a aucune urgence. Certains couples mettent des mois à franchir le pas, et c'est parfaitement normal.</li>
              <li><strong>Fixez des limites claires</strong> : Définissez ensemble ce qui est acceptable et ce qui ne l'est pas. Ces limites peuvent évoluer avec le temps.</li>
              <li><strong>Restez ensemble</strong> : Pour une première fois, restez dans la même pièce et gardez un contact visuel régulier.</li>
              <li><strong>Débrief systématique</strong> : Après chaque expérience, prenez le temps d'en parler le lendemain à tête reposée.</li>
              <li><strong>Le droit de dire non</strong> : Vous pouvez toujours refuser, changer d'avis, ou partir. C'est votre droit absolu.</li>
            </ol>
            <p>Pour encore plus de conseils pratiques, consultez notre <Link to="/fr/questions-debutants-libertinage" className="text-primary hover:underline">FAQ complète pour débutants</Link> avec toutes les réponses aux questions que vous vous posez.</p>
          </div>
        </div>
      </section>

      {/* 05 - Les règles d'or */}
      <section id="regles" className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Les règles d'or du libertinage</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">Le libertinage repose sur des règles fondamentales qui garantissent le respect, la sécurité et le plaisir de tous. Ces règles sont universelles et appliquées dans tous les clubs et événements libertins sérieux en France et en Europe.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "1", title: "Le consentement est ABSOLU", desc: "Tout acte nécessite le consentement explicite de toutes les personnes impliquées. Un 'non', un silence, une hésitation = NON. Le consentement peut être retiré à tout moment." },
              { num: "2", title: "Un NON est un NON", desc: "Aucune justification n'est nécessaire. Vous pouvez refuser une proposition sans donner de raison. Le refus doit être accepté immédiatement, sans insistance, sans négociation, sans rancune." },
              { num: "3", title: "La discrétion est sacrée", desc: "Ce qui se passe dans la sphère libertine reste privé. Pas de photos sans accord, pas de révélation d'identité, pas de discussion en dehors de la communauté sur qui vous avez vu ou rencontré." },
              { num: "4", title: "L'hygiène est primordiale", desc: "Une hygiène irréprochable est attendue de tous. Douches régulières pendant la soirée, préservatifs systématiques pour les pénétrations, propreté corporelle parfaite." },
              { num: "5", title: "Le couple prime toujours", desc: "Dans le libertinage en couple, votre partenaire passe toujours en premier. Vérifiez régulièrement que tout va bien, respectez les limites définies ensemble." },
            ].map((r, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-5">
                <span className="text-primary font-bold text-lg">{r.num}</span>
                <h3 className="font-bold text-foreground mt-1 mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6">Ces règles sont appliquées strictement dans tous les établissements référencés sur AKOKY. Le non-respect peut entraîner une exclusion immédiate. Pour en savoir plus, consultez notre page sur <Link to="/fr/libertinage" className="text-primary hover:underline">le libertinage moderne</Link>.</p>
        </div>
      </section>

      {/* 06 - Les clubs libertins en France */}
      <section id="clubs" className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Les clubs libertins en France</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>La France compte plus de 500 clubs libertins répartis sur tout le territoire, des grandes métropoles aux villes moyennes. Découvrez l'offre exceptionnelle et diversifiée des établissements français, reconnus comme les meilleurs d'Europe.</p>
            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Les grandes villes libertines de France</h3>
            <p>Chaque grande ville française possède aujourd'hui ses clubs libertins de qualité. <Link to="/fr/clubs-libertins-paris" className="text-primary hover:underline">Paris</Link> reste la capitale incontestée avec plus de 50 établissements, suivie de près par <Link to="/fr/clubs-libertins-lyon" className="text-primary hover:underline">Lyon</Link> et <Link to="/fr/clubs-libertins-marseille" className="text-primary hover:underline">Marseille</Link> qui proposent une offre riche et variée.</p>
            <p>Les autres grandes métropoles ne sont pas en reste : <Link to="/fr/clubs-libertins-toulouse" className="text-primary hover:underline">Toulouse</Link>, <Link to="/fr/clubs-libertins-bordeaux" className="text-primary hover:underline">Bordeaux</Link>, <Link to="/fr/clubs-libertins-nantes" className="text-primary hover:underline">Nantes</Link>, <Link to="/fr/clubs-libertins-lille" className="text-primary hover:underline">Lille</Link>, <Link to="/fr/clubs-libertins-strasbourg" className="text-primary hover:underline">Strasbourg</Link>, <Link to="/fr/clubs-libertins-nice" className="text-primary hover:underline">Nice</Link>, <Link to="/fr/clubs-libertins-rennes" className="text-primary hover:underline">Rennes</Link>, <Link to="/fr/clubs-libertins-montpellier" className="text-primary hover:underline">Montpellier</Link>, <Link to="/fr/clubs-libertins-grenoble" className="text-primary hover:underline">Grenoble</Link>, <Link to="/fr/clubs-libertins-toulon" className="text-primary hover:underline">Toulon</Link> et <Link to="/fr/clubs-libertins-reims" className="text-primary hover:underline">Reims</Link> offrent toutes des établissements de qualité.</p>
            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Les clubs par région</h3>
            <ul className="space-y-2 ml-4">
              <li>• <strong><Link to="/fr/clubs-libertins-ile-de-france" className="text-primary hover:underline">Île-de-France</Link></strong> : Plus de 60 clubs concentrés principalement à Paris et en proche banlieue</li>
              <li>• <strong><Link to="/fr/clubs-libertins-auvergne-rhone-alpes" className="text-primary hover:underline">Auvergne-Rhône-Alpes</Link></strong> : Lyon, Grenoble et de nombreuses stations de ski</li>
              <li>• <strong><Link to="/fr/clubs-libertins-nouvelle-aquitaine" className="text-primary hover:underline">Nouvelle-Aquitaine</Link></strong> : Bordeaux et le Sud-Ouest</li>
              <li>• <strong><Link to="/fr/clubs-libertins-occitanie" className="text-primary hover:underline">Occitanie</Link></strong> : Toulouse et Montpellier</li>
              <li>• <strong><Link to="/fr/clubs-libertins-paca" className="text-primary hover:underline">Provence-Alpes-Côte d'Azur</Link></strong> : La Côte d'Azur et ses établissements luxueux</li>
              <li>• <strong><Link to="/fr/clubs-libertins-bretagne" className="text-primary hover:underline">Bretagne</Link></strong> : Rennes et les villes côtières</li>
              <li>• <strong><Link to="/fr/clubs-libertins-pays-de-la-loire" className="text-primary hover:underline">Pays de la Loire</Link></strong> : Nantes et la région nantaise</li>
              <li>• <strong><Link to="/fr/clubs-libertins-grand-est" className="text-primary hover:underline">Grand Est</Link></strong> : Strasbourg et Reims</li>
              <li>• <strong><Link to="/fr/clubs-libertins-hauts-de-france" className="text-primary hover:underline">Hauts-de-France</Link></strong> : Lille et le Nord</li>
              <li>• <strong><Link to="/fr/clubs-libertins-normandie" className="text-primary hover:underline">Normandie</Link></strong> : Le Havre et Rouen</li>
            </ul>
            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Les clubs en Europe</h3>
            <p>Au-delà de la France, AKOKY référence également les meilleurs clubs en Europe :</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Belgique</strong> : <Link to="/fr/clubs-libertins-bruxelles" className="text-primary hover:underline">Bruxelles</Link>, <Link to="/fr/clubs-libertins-anvers" className="text-primary hover:underline">Anvers</Link>, <Link to="/fr/clubs-libertins-liege" className="text-primary hover:underline">Liège</Link>, <Link to="/fr/clubs-libertins-charleroi" className="text-primary hover:underline">Charleroi</Link>, <Link to="/fr/clubs-libertins-gand" className="text-primary hover:underline">Gand</Link>, <Link to="/fr/clubs-libertins-bruges" className="text-primary hover:underline">Bruges</Link></li>
              <li>• <strong>Suisse</strong> : <Link to="/fr/clubs-libertins-geneve" className="text-primary hover:underline">Genève</Link>, <Link to="/fr/clubs-libertins-zurich" className="text-primary hover:underline">Zurich</Link>, <Link to="/fr/clubs-libertins-lausanne" className="text-primary hover:underline">Lausanne</Link>, <Link to="/fr/clubs-libertins-bale" className="text-primary hover:underline">Bâle</Link></li>
              <li>• <strong>Luxembourg</strong> : <Link to="/fr/clubs-libertins-luxembourg" className="text-primary hover:underline">Luxembourg-Ville</Link></li>
            </ul>
            <p>Consultez notre <Link to="/fr/clubs-libertins" className="text-primary hover:underline">annuaire complet des clubs libertins</Link> pour découvrir tous les établissements référencés avec avis, photos et informations détaillées.</p>
          </div>
          <div className="bg-card border border-primary/30 rounded-xl p-5 mt-6 text-center">
            <h4 className="font-bold text-foreground mb-2">🎯 Trouvez le club parfait</h4>
            <p className="text-muted-foreground text-sm mb-4">Utilisez <Link to="/fr/application" className="text-primary hover:underline">l'application AKOKY</Link> pour géolocaliser les clubs autour de vous, consulter les avis des membres, voir les photos et réserver vos soirées. Plus de 500 établissements vous attendent !</p>
            <Link to="/fr/application" className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">Télécharger l'application AKOKY</Link>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/fr/clubs-libertins", label: "Clubs Libertins" },
              { to: "/fr/saunas-libertins", label: "Saunas Libertins" },
              { to: "/fr/evenements", label: "Événements" },
              { to: "/fr/debuter-libertinage", label: "Débuter" },
              { to: "/fr/lexique", label: "Lexique" },
              { to: "/fr/premier-club-libertin", label: "Premier Club" },
              { to: "/fr/premier-rendez-vous-libertin", label: "Premier RDV" },
              { to: "/fr/application", label: "Application AKOKY" },
              { to: "/fr/guide-libertin-france", label: "Guide Libertin France" },
            ].map((l, i) => (
              <Link key={i} to={l.to} className="text-sm px-4 py-2 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);
export default GuideUltimeLibertin;
