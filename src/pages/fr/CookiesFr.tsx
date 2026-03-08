import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const CookiesFr = () => (
  <>
    <MetaTags title="Politique Cookies AKOKY | Gestion & Confidentialité" description="Politique de gestion des cookies AKOKY : cookies essentiels, analytiques, publicitaires. Vos choix, vos données, votre confidentialité." canonical="https://akoky.com/fr/cookies" lang="fr" />
    <HreflangTags slug="cookies" />
    <ContentPageLayout lang="fr" title="Politique Cookies AKOKY | Gestion & Confidentialité" description="Politique de gestion des cookies AKOKY : cookies essentiels, analytiques, publicitaires. Vos choix, vos données, votre confidentialité." canonical="https://akoky.com/fr/cookies" heroTitle="Politique de Cookies" heroSubtitle="Transparence totale sur l&#39;utilisation des cookies sur AKOKY"
      heroImage="https://akoky.com/images/logo-akoky.webp" breadcrumb={[{ label: "Politique de Cookies" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-4">Transparence totale sur l&#39;utilisation des cookies sur AKOKY</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">🍪 Qu&#39;est-ce qu&#39;un cookie ?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, smartphone, tablette) lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences (comme la langue, la connexion, ou d&#39;autres paramètres) pendant une période donnée, afin que vous n&#39;ayez pas à les saisir à nouveau lors de vos prochaines visites.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">📋 Types de cookies utilisés sur AKOKY</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Cookies essentiels (obligatoires)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions que vous effectuez, comme la définition de vos préférences de confidentialité, la connexion ou le remplissage de formulaires.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📊 Cookies analytiques</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d&#39;améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir comment les visiteurs naviguent sur le site.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎯 Cookies marketing</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ces cookies peuvent être définis par nos partenaires publicitaires via notre site. Ils peuvent être utilisés pour établir un profil de vos intérêts et vous montrer des publicités pertinentes sur d&#39;autres sites.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">⚙️ Comment gérer vos cookies ?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Vous pouvez à tout moment modifier vos préférences de cookies en cliquant sur le bouton ci-dessous :</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Vous pouvez également configurer votre navigateur pour refuser tous les cookies ou pour vous alerter lorsqu&#39;un cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement sans cookies.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">🌐 Paramètres du navigateur</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Voici comment gérer les cookies dans les navigateurs les plus courants :</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">📧 Nous contacter</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Pour toute question concernant notre politique de cookies, vous pouvez nous contacter à :</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Dernière mise à jour : Janvier 2026</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default CookiesFr;
