import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Peut-on débuter seul·e ou faut-il être en couple ?", answer: "Les deux sont possibles ! Les couples sont majoritaires dans les clubs, mais les célibataires ont également leur place." },
  { question: "Mon/ma partenaire est intéressé·e, mais moi j'hésite. Dois-je me forcer ?", answer: "Non, jamais. Cette exploration ne peut fonctionner que si les deux partenaires sont réellement motivés. Se forcer par peur de décevoir l'autre est la pire raison de débuter." },
  { question: "On est en couple libre. Est-ce différent du libertinage ?", answer: "Oui et non. Les couples libres s'autorisent des relations extérieures, souvent de manière séparée et avec une dimension affective possible." },
  { question: "Peut-on rencontrer des gens pour simplement discuter, sans rien de sexuel ?", answer: "Absolument ! Beaucoup de débutants passent leurs premières soirées à discuter au bar, danser, observer. C'est même recommandé." },
  { question: "Comment définir mes limites avant de me lancer ?", answer: "Prenez le temps d'une discussion approfondie avec votre partenaire (ou avec vous-même si vous êtes solo). Listez vos limites absolues (hard limits) et vos zones de curiosité (soft limits) ." },
  { question: "Peut-on changer d'avis en pleine soirée ?", answer: "Oui, à tout moment. Le consentement n'est pas un contrat irrévocable. Si vous aviez dit \"oui\" en arrivant mais que vous ne le sentez plus, vous pouvez dire \"stop\"." },
  { question: "Que faire si mon/ma partenaire dépasse mes limites ?", answer: "Stoppez immédiatement. Utilisez votre signal de sécurité, interrompez l'action, et isolez-vous avec votre partenaire pour en parler." },
  { question: "Est-ce normal d'avoir beaucoup de limites au début ?", answer: "Oui, c'est même recommandé ! Mieux vaut commencer avec beaucoup de limites et les assouplir progressivement, que l'inverse." },
  { question: "Comment savoir si un club est sérieux et sûr ?", answer: "Sur l'annuaire AKOKY , tous les clubs référencés sont vérifiés. Mais voici les critères à vérifier vous-même :" },
  { question: "Les IST/MST sont-elles fréquentes dans ce milieu ?", answer: "Pas plus qu'ailleurs si les précautions sont prises. Les pratiquants réguliers sont souvent mieux informés et plus prudents que la moyenne." },
  { question: "Comment protéger mon anonymat et ma vie privée ?", answer: "La discrétion est une règle d'or dans ce milieu. Voici comment vous protéger :" },
  { question: "Que faire si je me sens harcelé·e ou mal à l'aise ?", answer: "Réagissez immédiatement :" },
  { question: "Qu'est-ce qu'un consentement valide exactement ?", answer: "Un consentement valide est :" },
  { question: "Comment demander le consentement sans \"tuer l'ambiance\" ?", answer: "Demander le consentement ne tue pas l'ambiance, au contraire ! C'est sexy et respectueux." },
  { question: "Mon partenaire a dit oui, mais je sens qu'il/elle n'est pas vraiment à l'aise. Que faire ?", answer: "Fiez-vous à votre instinct. Si vous sentez une hésitation, prenez une pause et parlez-en en privé :" },
  { question: "Peut-on consentir sous l'effet de l'alcool ?", answer: "Non. Une personne alcoolisée ne peut pas consentir de manière valide, car son jugement est altéré." },
  { question: "Est-ce que tout le monde est beau et jeune dans les clubs ?", answer: "Absolument pas ! C'est l'un des plus gros mythes sur ce milieu." },
  { question: "Combien coûte une soirée en club ?", answer: "Les tarifs varient selon les clubs et les soirées :" },
  { question: "Faut-il prévenir à l'avance ou peut-on venir spontanément ?", answer: "Cela dépend des clubs :" },
  { question: "Que se passe-t-il si on croise quelqu'un qu'on connaît ?", answer: "C'est rare, mais ça arrive. La règle est simple : respectez la discrétion mutuelle ." },
  { question: "Comment savoir si je suis prêt·e ?", answer: "Il n'y a pas de test parfait, mais voici quelques indicateurs :" },
  { question: "Comment gérer la jalousie lors des premières fois ?", answer: "La jalousie est normale au début . Même les couples les plus solides la ressentent." },
  { question: "Est-ce normal de se sentir bizarre ou coupable après ?", answer: "Oui, c'est fréquent après les premières fois." },
  { question: "Peut-on tomber amoureux·se de quelqu'un d'autre ?", answer: "Oui, ça peut arriver. C'est l'un des risques de l'exploration." },
];

const QuestionsDebutantsLibertinage = () => (
  <>
    <MetaTags
      title="Questions de Débutants sur le Libertinage – 24 Réponses | AKOKY"
      description="Les 24 questions les plus fréquentes des débutants sur le libertinage. Réponses complètes et bienveillantes par AKOKY."
      canonical="https://akoky.com/fr/questions-debutants-libertinage"
      lang="fr"
      ogImage="/images/questions-debutants-cover.webp"
    />
    <HreflangTags slug="questions-debutants-libertinage" />
    <ContentPageLayout
      lang="fr"
      title="Questions de Débutants sur le Libertinage – 24 Réponses"
      description="Les 24 questions les plus fréquentes des débutants sur le libertinage. Réponses complètes et bienvei"
      canonical="https://akoky.com/fr/questions-debutants-libertinage"
      heroTitle="Questions de Débutants sur le Libertinage"
      heroSubtitle="Les réponses aux questions que tout débutant se pose sur le libertinage."
      heroImage="/images/questions-debutants-cover.webp"
      breadcrumb={[{ label: "Questions de Débutants" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">💑 Questions Couple / Solo</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Les deux sont possibles ! Les couples sont majoritaires dans les clubs, mais les célibataires ont également leur place.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Si vous êtes célibataire, privilégiez les événements "mixtes bienvenus" ou les clubs avec quotas hommes acceptables.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Non, jamais. Cette exploration ne peut fonctionner que si les deux partenaires sont réellement motivés. Se forcer par peur de décevoir l'autre est la pire raison de débuter.</p>
          <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Femmes seules : Très recherchées, accès privilégié aux clubs (souvent gratuit ou tarif réduit), large choix de partenaires potentiels.</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Hommes seuls : Accès plus sélectif (quotas dans les clubs, tarifs élevés), mais les événements AKOKY organisent régulièrement des soirées mixtes ouvertes.</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Exprimez vos réserves honnêtement</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Identifiez ce qui vous freine (peur, jalousie, manque d'envie, valeurs...)</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Proposez une approche progressive : consulter le forum AKOKY, lire des témoignages, assister à un apéro soft</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Fixez une deadline : "On reparle de ça dans 3 mois après avoir mieux compris"</span></li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Peut-on débuter seul·e ou faut-il être en couple ?</h3>
              
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Mon/ma partenaire est intéressé·e, mais moi j'hésite. Dois-je me forcer ?</h3>
              
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">On est en couple libre. Est-ce différent du libertinage ?</h3>
              
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Peut-on rencontrer des gens pour simplement discuter, sans rien de sexuel ?</h3>
              
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">🛑 Questions sur les Limites</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Prenez le temps d'une discussion approfondie avec votre partenaire (ou avec vous-même si vous êtes solo). Listez vos limites absolues (hard limits) et vos zones de curiosité (soft limits) .</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Important : Ces limites peuvent évoluer. Ce qui est non aujourd'hui peut devenir oui plus tard, et inversement. Réévaluez régulièrement.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Oui, à tout moment. Le consentement n'est pas un contrat irrévocable. Si vous aviez dit "oui" en arrivant mais que vous ne le sentez plus, vous pouvez dire "stop".</p>
          <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Embrasser sur la bouche : OK / Pas OK</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Caresses : OK / Pas OK</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Pénétration avec d'autres : OK / Pas OK</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Sexe oral : Donner OK / Recevoir OK / Aucun</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Éjaculation : Préservatif obligatoire / Autres règles</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Pratiques spécifiques (sodomie, BDSM, etc.) : OK / Pas OK</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Observer seulement ce soir : OUI c'est le plan</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Utilisez votre "safe word" ou signal avec votre partenaire</span></li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Comment définir mes limites avant de me lancer ?</h3>
              
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Peut-on changer d'avis en pleine soirée ?</h3>
              
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Que faire si mon/ma partenaire dépasse mes limites ?</h3>
              
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Est-ce normal d'avoir beaucoup de limites au début ?</h3>
              
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">🔒 Questions sur la Sécurité</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Sur l'annuaire AKOKY , tous les clubs référencés sont vérifiés. Mais voici les critères à vérifier vous-même :</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Red flags : Personnel désagréable, lieux sales, clients agressifs tolérés, absence de règles affichées.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Pas plus qu'ailleurs si les précautions sont prises. Les pratiquants réguliers sont souvent mieux informés et plus prudents que la moyenne.</p>
          <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Avis de la communauté : Consultez les retours d'expérience sur AKOKY</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Règlement affiché : Les clubs sérieux affichent leurs règles clairement (consentement, hygiène, comportements interdits)</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Personnel formé : Le staff intervient en cas de comportement inapproprié</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Hygiène irréprochable : Propreté des lieux, préservatifs fournis, douches disponibles</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Pas de pression : Aucune insistance pour participer ou consommer</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Préservatifs obligatoires pour toute pénétration</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Dépistage régulier (tous les 3-6 mois selon votre activité)</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Hygiène stricte (douche avant/après, lavage des mains)</span></li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Comment savoir si un club est sérieux et sûr ?</h3>
              
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Les IST/MST sont-elles fréquentes dans ce milieu ?</h3>
              
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Comment protéger mon anonymat et ma vie privée ?</h3>
              
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Que faire si je me sens harcelé·e ou mal à l'aise ?</h3>
              
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">✋ Questions sur le Consentement</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Le silence n'est PAS un consentement. L'hésitation n'est PAS un consentement. Seul un "oui" clair et enthousiaste en est un.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Demander le consentement ne tue pas l'ambiance, au contraire ! C'est sexy et respectueux.</p>
          <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Libre : Sans pression, chantage ou manipulation</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Éclairé : La personne sait ce à quoi elle consent</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Spécifique : Consentir à X ne veut pas dire consentir à Y</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Révocable : On peut changer d'avis à tout moment</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Enthousiaste : Un "oui" clair et joyeux, pas un "bon... OK"</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>"Ça vous dirait de nous rejoindre ?"</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>"On peut vous embrasser ?"</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>"Tu es d'accord pour qu'on continue ?"</span></li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Qu'est-ce qu'un consentement valide exactement ?</h3>
              
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Comment demander le consentement sans "tuer l'ambiance" ?</h3>
              
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Mon partenaire a dit oui, mais je sens qu'il/elle n'est pas vraiment à l'aise. Que faire ?</h3>
              
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Peut-on consentir sous l'effet de l'alcool ?</h3>
              
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">🎯 Questions Pratiques</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Absolument pas ! C'est l'un des plus gros mythes sur ce milieu.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Vous trouverez une immense diversité de physiques, d'âges (de 20 à 70 ans), de styles, de corpulences. Ce qui compte, c'est l'attitude, le respect et la confiance en soi.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Les personnes qui jugent sur l'apparence physique sont minoritaires et mal vues. La bienveillance et l'ouverture d'esprit sont les vraies valeurs de ce milieu.</p>
          <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Couples : 40€ à 120€ l'entrée (moyenne 60-80€)</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Femmes seules : Souvent gratuit ou 20-40€</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Hommes seuls : 80€ à 150€ (si acceptés)</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Clubs ouverts : Vous pouvez venir sans réservation (vérifiez les horaires)</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Soirées privées : Réservation obligatoire (surtout pour les hommes seuls)</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Événements thématiques : Inscription souvent requise</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Vérifier qu'ils accueillent des débutants ce soir-là</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Connaître l'affluence prévue</span></li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Est-ce que tout le monde est beau et jeune dans les clubs ?</h3>
              
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Combien coûte une soirée en club ?</h3>
              
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Faut-il prévenir à l'avance ou peut-on venir spontanément ?</h3>
              
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Que se passe-t-il si on croise quelqu'un qu'on connaît ?</h3>
              
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">💭 Questions sur les Émotions</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Il n'y a pas de test parfait, mais voici quelques indicateurs :</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Si vous cochez ces cases, vous êtes probablement prêt·e pour une première exploration douce (soirée observation, apéro rencontre, visite de club).</p>
            <p className="text-muted-foreground leading-relaxed mb-3">La jalousie est normale au début . Même les couples les plus solides la ressentent.</p>
          <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>✅ Vous avez discuté longuement avec votre partenaire de vos motivations et limites</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>✅ Vous êtes curieux·se mais sans pression à "performer"</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>✅ Vous acceptez l'idée de simplement observer sans participer</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>✅ Vous êtes capable de dire "non" sans culpabilité</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>✅ Votre relation de couple est solide et communicante</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Définissez des limites progressives : Commencez soft (caresses), ajustez au fur et à mesure</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Utilisez un signal de sécurité : Un mot ou geste discret pour dire "pause, on se parle"</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Débriefer après chaque expérience : "Comment tu t'es senti·e ?", "Quelque chose t'a dérangé·e ?"</span></li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Comment savoir si je suis prêt·e ?</h3>
              
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Comment gérer la jalousie lors des premières fois ?</h3>
              
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Est-ce normal de se sentir bizarre ou coupable après ?</h3>
              
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Peut-on tomber amoureux·se de quelqu'un d'autre ?</h3>
              
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">📚 Continuez votre découverte</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Retour au guide principal pour une vision d'ensemble</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Guide pratique pour votre première visite en club</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Préparer et réussir votre première rencontre</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Guide complet débutants</h3>
              <p className="text-muted-foreground text-sm">Retour au guide principal pour une vision d'ensemble</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Premier club libertin</h3>
              <p className="text-muted-foreground text-sm">Guide pratique pour votre première visite en club</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Premier rendez-vous</h3>
              <p className="text-muted-foreground text-sm">Préparer et réussir votre première rencontre</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">Trouver un club</h3>
              <p className="text-muted-foreground text-sm">120 établissements vérifiés avec avis authentiques</p>
            </div>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default QuestionsDebutantsLibertinage;
