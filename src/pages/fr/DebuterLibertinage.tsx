import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Par où commencer quand on est débutant ?", answer: "Commencez par vous informer : lire des guides, comprendre les règles du milieu et échanger avec des personnes bienveillantes. Sur AKOKY, vous pouvez consulter les avis, participer à des événements soft ou simplement observer avant de vous lancer." },
  { question: "Comment aborder le sujet du libertinage avec son ou sa partenaire ?", answer: "Choisissez un moment calme, sans pression. Exprimez vos envies avec honnêteté et écoutez celles de votre partenaire. Le libertinage repose avant tout sur la communication et le respect mutuel. Rien ne doit être imposé." },
  { question: "Quelles sont les règles fondamentales du milieu libertin ?", answer: "Le consentement explicite est la règle numéro un. Le respect du « non », l’hygiène, la discrétion et la communication sont essentiels. Chacun avance à son rythme et peut poser ses limites à tout moment." },
  { question: "La jalousie est-elle normale quand on débute ?", answer: "Oui, c’est fréquent au début. L’important est d’en parler ouvertement avec son ou sa partenaire, de définir des limites claires et d’avancer progressivement. Si un malaise apparaît, il est toujours possible de faire une pause." },
  { question: "Peut-on découvrir le libertinage sans aller en club ?", answer: "Absolument. Il existe des apéros libertins, des événements soft, des discussions en ligne et des lives permettant de découvrir l’ambiance sans pression. Les clubs ne sont qu’une option parmi d’autres." },
];

const DebuterLibertinage = () => (
  <>
    <MetaTags
      title="Débuter dans le Libertinage 2026 – Guide Complet | AKOKY"
      description="Guide complet pour débuter dans le libertinage : premiers pas, conseils, définitions et ressources. AKOKY accompagne les débutants."
      canonical="https://akoky.com/fr/debuter-libertinage"
      lang="fr"
      ogImage="/images/debuter-libertinage-cover.webp"
    />
    <HreflangTags slug="debuter-libertinage" />
    <ContentPageLayout
      lang="fr"
      title="Débuter dans le Libertinage 2026 – Guide Complet"
      description="Guide complet pour débuter dans le libertinage : premiers pas, conseils, définitions et ressources. "
      canonical="https://akoky.com/fr/debuter-libertinage"
      heroTitle="Guide du Libertinage en France"
      heroSubtitle="Tout ce qu'il faut savoir pour débuter dans le libertinage en toute sérénité."
      heroImage="/images/debuter-libertinage-cover.webp"
      breadcrumb={[{ label: "Débuter dans le Libertinage" }]}
      faq={FAQ}
    >

      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Débuter dans le libertinage, à votre rythme</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Le libertinage ne commence pas par un club ou une rencontre, mais par la compréhension, la réflexion et le respect de vos propres limites. Voici les meilleures portes d’entrée pour avancer sereinement.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Avant toute expérience, il est essentiel de comprendre les règles, les pratiques et les codes du libertinage moderne.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Peur, hésitation, curiosité, doutes… Toutes les questions légitimes des débutants, expliquées simplement et sans jugement.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Débuter dans le libertinage en toute sérénité</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Vous vous posez des questions sur le libertinage ? C’est normal. Très normal même. Que ce soit une première fois, une simple curiosité ou une envie qui grandit, tout commence toujours par des questions.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Ici, il n’est pas question de morale, ni de règles toutes faites. Nous ne sommes pas là pour vous dire quoi faire , mais pour vous accompagner et vous éclairer.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Le libertinage commence bien avant une soirée ou un club. Il commence par le dialogue, avec soi-même d’abord, puis avec son ou sa partenaire, s’il y en a un·e.</p>
        </div>
      </section>
      <section className="py-10 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5">Ressources pour débuter</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { to: "/fr/guide-ultime-libertinage-france", label: "Guide Ultime" },
              { to: "/fr/questions-debutants-libertinage", label: "Questions Débutants" },
              { to: "/fr/premier-club-libertin", label: "Premier Club" },
              { to: "/fr/premier-rendez-vous-libertin", label: "Premier RDV" },
              { to: "/fr/lexique", label: "Lexique Libertin" },
              { to: "/fr/libertinage", label: "Le Libertinage" },
              { to: "/fr/evenements", label: "Événements" },
              { to: "/fr/clubs-libertins", label: "Clubs Libertins" },
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

export default DebuterLibertinage;
