import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const CookiesFr = () => (
  <>
    <MetaTags
      title="Politique Cookies AKOKY | Gestion & Confidentialité"
      description="Politique de gestion des cookies AKOKY : cookies essentiels, analytiques, publicitaires. Vos choix, vos données, votre confidentialité."
      canonical="https://akoky.com/fr/cookies"
      lang="fr"
    />
    <HreflangTags slug="cookies" />
    <ContentPageLayout
      lang="fr"
      title="Politique Cookies AKOKY | Gestion & Confidentialité"
      description="Politique de gestion des cookies AKOKY : cookies essentiels, analytiques, publicitaires. Vos choix, vos données, votre confidentialité."
      canonical="https://akoky.com/fr/cookies"
      heroTitle="Politique de Cookies"
      heroSubtitle="Transparence totale sur l'utilisation des cookies sur AKOKY"
      heroImage="/images/logo-akoky.webp"
      breadcrumb={[{ label: "Politique de Cookies" }]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">

          {/* Qu'est-ce qu'un cookie */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">🍪 Qu'est-ce qu'un cookie ?</h2>
            <p className="text-muted-foreground leading-relaxed">Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, smartphone, tablette) lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences (comme la langue, la connexion, ou d'autres paramètres) pendant une période donnée, afin que vous n'ayez pas à les saisir à nouveau lors de vos prochaines visites.</p>
          </div>

          {/* Types de cookies */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">📋 Types de cookies utilisés sur AKOKY</h2>

            <div className="space-y-8">
              {/* Cookies essentiels */}
              <div className="p-6 bg-card/50 rounded-2xl border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">🔒 Cookies essentiels (obligatoires)</h3>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">Toujours actifs</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions que vous effectuez, comme la définition de vos préférences de confidentialité, la connexion ou le remplissage de formulaires.</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li><strong>akoky_session</strong> – Maintient votre session active</li>
                  <li><strong>akoky_cookie_consent</strong> – Stocke vos préférences de cookies</li>
                  <li><strong>akoky_csrf</strong> – Protection contre les attaques CSRF</li>
                </ul>
              </div>

              {/* Cookies analytiques */}
              <div className="p-6 bg-card/50 rounded-2xl border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">📊 Cookies analytiques</h3>
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-bold">Optionnel</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir comment les visiteurs naviguent sur le site.</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li><strong>_ga</strong> – Google Analytics (2 ans)</li>
                  <li><strong>_gid</strong> – Google Analytics (24 heures)</li>
                  <li><strong>akoky_analytics</strong> – Analytics AKOKY (1 an)</li>
                </ul>
              </div>

              {/* Cookies marketing */}
              <div className="p-6 bg-card/50 rounded-2xl border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">🎯 Cookies marketing</h3>
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-bold">Optionnel</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">Ces cookies peuvent être définis par nos partenaires publicitaires via notre site. Ils peuvent être utilisés pour établir un profil de vos intérêts et vous montrer des publicités pertinentes sur d'autres sites.</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li><strong>_fbp</strong> – Facebook Pixel (3 mois)</li>
                  <li><strong>akoky_ads</strong> – Publicités AKOKY (6 mois)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comment gérer vos cookies */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">⚙️ Comment gérer vos cookies ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Vous pouvez à tout moment modifier vos préférences de cookies en cliquant sur le bouton ci-dessous :</p>
            <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-all mb-4">⚙️ Gérer mes préférences de cookies</button>
            <p className="text-muted-foreground leading-relaxed">Vous pouvez également configurer votre navigateur pour refuser tous les cookies ou pour vous alerter lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement sans cookies.</p>
          </div>

          {/* Paramètres du navigateur */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">🌐 Paramètres du navigateur</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Voici comment gérer les cookies dans les navigateurs les plus courants :</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🌐", name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                { icon: "🦊", name: "Firefox", url: "https://support.mozilla.org/fr/kb/activer-desactiver-cookies" },
                { icon: "🧭", name: "Safari", url: "https://support.apple.com/fr-fr/HT201265" },
                { icon: "🔷", name: "Microsoft Edge", url: "https://support.microsoft.com/fr-fr/microsoft-edge" },
              ].map((b, i) => (
                <a key={i} href={b.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors text-center">
                  <span className="text-2xl block mb-2">{b.icon}</span>
                  <span className="text-foreground font-medium text-sm">{b.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Nous contacter */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">📧 Nous contacter</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Pour toute question concernant notre politique de cookies, vous pouvez nous contacter à :</p>
            <div className="p-6 bg-card/50 rounded-2xl border border-border space-y-2">
              <p className="text-muted-foreground"><strong>Email :</strong> contact@akoky.com</p>
              <p className="text-muted-foreground"><strong>Adresse :</strong> Liberty-Interactive-Ltd (932607310)</p>
            </div>
            <p className="text-muted-foreground text-sm mt-4">Dernière mise à jour : Janvier 2026</p>
          </div>

        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default CookiesFr;
