import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Peut-on débuter seul·e ou faut-il être en couple ?", answer: "Si vous êtes célibataire, privilégiez les événements &quot;mixtes bienvenus&quot; ou les clubs avec quotas hommes acceptables." },
  { question: "Mon/ma partenaire est intéressé·e, mais moi j&#39;hésite. Dois-je me forcer ?", answer: "Si après réflexion vous ne le sentez toujours pas, votre partenaire doit respecter votre choix. 
                                Un couple qui force l&#39;un des deux va droit dans le mur." },
  { question: "Peut-on rencontrer des gens pour simplement discuter, sans rien de sexuel ?", answer: "Les clubs ne sont pas que des lieux de sexe : ce sont aussi des espaces de socialisation 
                                où l&#39;on rencontre des gens ouverts d&#39;esprit, partage des expériences, rit, danse..." },
  { question: "Comment définir mes limites avant de me lancer ?", answer: "Prenez le temps d&#39;une discussion approfondie avec votre partenaire (ou avec vous-même si vous êtes solo). 
                                Listez" },
  { question: "Peut-on changer d&#39;avis en pleine soirée ?", answer: "Personne ne vous en voudra. Changer d&#39;avis est un droit, pas une faiblesse." },
  { question: "Que faire si mon/ma partenaire dépasse mes limites ?", answer: "Si c&#39;était involontaire (malentendu, oubli), rappelez vos limites clairement et décidez ensemble 
                                si vous continuez la soirée ou rentrez." },
  { question: "Est-ce normal d&#39;avoir beaucoup de limites au début ?", answer: "Certains couples débutent en mode &quot;observation uniquement&quot;. D&#39;autres acceptent les caresses mais pas plus. 
                                D&#39;autres encore posent des règles très strictes (pas de baisers, pas de pénétration, etc.)." },
  { question: "Les IST/MST sont-elles fréquentes dans ce milieu ?", answer: "Les clubs sérieux fournissent des préservatifs gratuitement et imposent leur usage." },
  { question: "Comment protéger mon anonymat et ma vie privée ?", answer: "Si quelqu&#39;un viole votre vie privée, c&#39;est une faute grave : signalez-le au club et à AKOKY." },
  { question: "Que faire si je me sens harcelé·e ou mal à l&#39;aise ?", answer: "Les comportements insistants ou agressifs sont interdits. Une personne qui ne respecte pas 
                                un &quot;non&quot; sera exclue du club." },
];

const QuestionsDebutants = () => (
  <>
    <MetaTags title="Questions Débutants Libertinage : Réponses Complètes 2026" description="Toutes les réponses aux questions que se posent les débutants : couple, solo, limites, sécurité, consentement, jalousie. FAQ complète et bienveillante." canonical="https://akoky.com/fr/questions-debutants-libertinage" lang="fr" />
    <HreflangTags slug="questions-debutants-libertinage" />
    <ContentPageLayout lang="fr" title="Questions Débutants Libertinage : Réponses Complètes 2026" description="Toutes les réponses aux questions que se posent les débutants : couple, solo, limites, sécurité, consentement, jalousie. FAQ complète et bienveillante." canonical="https://akoky.com/fr/questions-debutants-libertinage" heroTitle="Questions des Débutants" heroSubtitle="Les 50 questions les plus fréquentes des débutants sur le libertinage"
      heroImage="https://akoky.com/images/questions-debutants-cover.webp" breadcrumb={[{ label: "Questions des Débutants" }]}
      faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-4">Toutes les questions que vous vous posez (et celles que vous n&#39;osez pas poser), avec des réponses honnêtes et bienveillantes</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Débuter dans ce milieu soulève naturellement de nombreuses interrogations. 
                    Pas de jugement ici : toutes les questions sont légitimes, et il vaut mieux les poser 
                    avant de se lancer. Cette FAQ regroupe les questions les plus fréquentes des débutants, 
                    avec des réponses claires, honnêtes et issues de l&#39;expérience de milliers de membres.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">💑 Questions Couple / Solo</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Si vous êtes célibataire, privilégiez les événements &quot;mixtes bienvenus&quot; ou les clubs avec quotas hommes acceptables.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Si après réflexion vous ne le sentez toujours pas, votre partenaire doit respecter votre choix. 
                                Un couple qui force l&#39;un des deux va droit dans le mur.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Oui et non. Les</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Les clubs ne sont pas que des lieux de sexe : ce sont aussi des espaces de socialisation 
                                où l&#39;on rencontre des gens ouverts d&#39;esprit, partage des expériences, rit, danse...</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Personne ne vous jugera si vous ne participez pas activement. La pression n&#39;existe que dans votre tête.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">🛑 Questions sur les Limites</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Prenez le temps d&#39;une discussion approfondie avec votre partenaire (ou avec vous-même si vous êtes solo). 
                                Listez</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default QuestionsDebutants;
