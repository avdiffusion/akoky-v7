import ContentPageLayout from "@/components/layout/ContentPageLayout";

const Cookies = () => (
  <ContentPageLayout
    title="Politique de Cookies | AKOKY"
    description="Transparence totale sur l'utilisation des cookies sur AKOKY. Découvrez les types de cookies utilisés et comment gérer vos préférences."
    canonical="https://akoky.com/cookies"
    heroTitle="Politique de Cookies"
    heroSubtitle="Transparence totale sur l'utilisation des cookies sur AKOKY"
    heroType="gradient"
    breadcrumb={[{ label: "Cookies" }]}
    schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Politique de Cookies AKOKY", url: "https://akoky.com/cookies" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-3xl mx-auto prose prose-invert max-w-none space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-foreground font-display">🍪 Qu'est-ce qu'un cookie ?</h2>
          <p className="text-muted-foreground leading-relaxed">Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, smartphone, tablette) lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences (comme la langue, la connexion, ou d'autres paramètres) pendant une période donnée, afin que vous n'ayez pas à les saisir à nouveau lors de vos prochaines visites.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground font-display">📋 Types de cookies utilisés sur AKOKY</h2>
          
          <div className="space-y-6 mt-6">
            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-2">🔒 Cookies essentiels (obligatoires)</h3>
              <p className="text-primary text-sm mb-3">Toujours actifs</p>
              <p className="text-muted-foreground mb-4">Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li><strong>akoky_session</strong> - Maintient votre session active</li>
                <li><strong>akoky_cookie_consent</strong> - Stocke vos préférences de cookies</li>
                <li><strong>akoky_csrf</strong> - Protection contre les attaques CSRF</li>
              </ul>
            </div>

            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-2">📊 Cookies analytiques</h3>
              <p className="text-muted-foreground/60 text-sm mb-3">Optionnel</p>
              <p className="text-muted-foreground mb-4">Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les performances de notre site.</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li><strong>_ga</strong> - Google Analytics (2 ans)</li>
                <li><strong>_gid</strong> - Google Analytics (24 heures)</li>
                <li><strong>akoky_analytics</strong> - Analytics AKOKY (1 an)</li>
              </ul>
            </div>

            <div className="p-6 bg-card/50 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-2">🎯 Cookies marketing</h3>
              <p className="text-muted-foreground/60 text-sm mb-3">Optionnel</p>
              <p className="text-muted-foreground mb-4">Ces cookies peuvent être définis par nos partenaires publicitaires via notre site.</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li><strong>_fbp</strong> - Facebook Pixel (3 mois)</li>
                <li><strong>akoky_ads</strong> - Publicités AKOKY (6 mois)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground font-display">⚙️ Comment gérer vos cookies ?</h2>
          <p className="text-muted-foreground leading-relaxed">Vous pouvez à tout moment modifier vos préférences de cookies. Vous pouvez également configurer votre navigateur pour refuser tous les cookies ou pour vous alerter lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement sans cookies.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground font-display">🌐 Paramètres du navigateur</h2>
          <p className="text-muted-foreground mb-4">Voici comment gérer les cookies dans les navigateurs les plus courants :</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-card/50 border border-border rounded-lg text-foreground hover:border-primary/30 transition-colors text-sm">🌐 Google Chrome</a>
            <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-card/50 border border-border rounded-lg text-foreground hover:border-primary/30 transition-colors text-sm">🦊 Firefox</a>
            <a href="https://support.apple.com/fr-fr/HT201265" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-card/50 border border-border rounded-lg text-foreground hover:border-primary/30 transition-colors text-sm">🧭 Safari</a>
            <a href="https://support.microsoft.com/fr-fr/microsoft-edge" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-card/50 border border-border rounded-lg text-foreground hover:border-primary/30 transition-colors text-sm">🔷 Microsoft Edge</a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground font-display">📧 Nous contacter</h2>
          <p className="text-muted-foreground leading-relaxed">Pour toute question concernant notre politique de cookies, vous pouvez nous contacter à :</p>
          <p className="text-muted-foreground mt-2"><strong>Email :</strong> <a href="mailto:privacy@akoky.com" className="text-primary hover:underline">privacy@akoky.com</a></p>
          <p className="text-muted-foreground"><strong>Adresse :</strong> Liberty-Interactive-Ltd (932607310)</p>
          <p className="text-muted-foreground/60 text-sm mt-4">Dernière mise à jour : Janvier 2026</p>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Cookies;
