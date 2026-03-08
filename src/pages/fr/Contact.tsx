import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Comment contacter le support AKOKY ?", answer: "Via notre formulaire en ligne, par email à support@akoky.com ou depuis votre espace membre. Notre équipe répond sous 24h ouvrées." },
  { question: "AKOKY propose-t-il un support en plusieurs langues ?", answer: "Oui. Notre support est disponible en français, espagnol, allemand, italien et portugais." },
  { question: "Comment signaler un profil problématique ?", answer: "Utilisez le bouton 'Signaler' disponible sur chaque profil. Notre équipe de modération traite chaque signalement sous 2h." },
];

const Contact = () => (
  <>
    <MetaTags
      title="AKOKY | Contact - Support & Assistance Plateforme Libertine Premium"
      description="Contactez Akoky : support membre, demandes partenaires, presse et affiliation. Équipe disponible 24h pour vous accompagner sur la plateforme libertine premium."
      canonical="https://akoky.com/fr/contact"
      lang="fr"
    />
    <HreflangTags slug="contact" />
    <ContentPageLayout
      lang="fr"
      title="AKOKY | Contact - Support & Assistance Plateforme Libertine Premium"
      description="Contactez Akoky : support membre, demandes partenaires, presse et affiliation. Équipe disponible 24h pour vous accompagner sur la plateforme libertine premium."
      canonical="https://akoky.com/fr/contact"
      heroTitle="Contact"
      heroSubtitle="Une question ? Notre équipe est à votre écoute"
      heroImage="/images/logo-akoky.webp"
      breadcrumb={[{ label: "Contact" }]}
      faq={FAQ}
    >
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Contacter Akoky : Support &amp; Assistance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">L'équipe Akoky est à votre écoute pour répondre à toutes vos questions. Que vous soyez membre à la recherche d'un support technique, un journaliste souhaitant couvrir notre plateforme, un club libertin intéressé par un partenariat ou un professionnel désireux de rejoindre notre programme d'affiliation, nous sommes là pour vous accompagner.</p>
            <p className="text-muted-foreground leading-relaxed">Notre engagement : vous offrir une expérience premium et sécurisée. Chaque message est traité avec soin, confidentialité et professionnalisme. Nous nous efforçons de répondre à toutes les demandes dans les meilleurs délais.</p>
          </div>

          {/* Infos de contact */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📧", title: "Email", info: "contact@akoky.com", sub: "Réponse sous 24-72h" },
              { icon: "📞", title: "Téléphone", info: "00 00 00 00 00", sub: "Lun-Ven 9h-18h" },
              { icon: "📍", title: "Adresse", info: "Paris, France", sub: "Siège social" },
              { icon: "🕐", title: "Horaires", info: "9h00 - 18h00", sub: "Du lundi au vendredi" },
            ].map((c, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border text-center">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-1">{c.title}</h3>
                <p className="text-foreground font-medium">{c.info}</p>
                <p className="text-muted-foreground text-sm">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Formulaire placeholder */}
          <div className="p-8 bg-card/50 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Envoyez-nous un message</h3>
            <p className="text-muted-foreground leading-relaxed">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
          </div>

          {/* FAQ inline */}
          <div className="p-8 bg-card/50 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Questions fréquentes</h3>
            <div className="space-y-6">
              {[
                { q: "Combien de temps pour une réponse ?", a: "Nous répondons généralement sous 24h ouvrées. Les demandes urgentes sont traitées en priorité. Pour les questions simples, consultez d'abord notre FAQ complète." },
                { q: "Support téléphonique disponible ?", a: "Oui, du lundi au vendredi de 9h à 18h. Pour les membres VIP, un support prioritaire est disponible avec des créneaux étendus jusqu'à 20h." },
                { q: "Urgence ?", a: "Pour les urgences (problème de sécurité, compte compromis), contactez-nous immédiatement par téléphone ou via le formulaire en précisant \"URGENT\" dans l'objet." },
                { q: "Mon message est-il confidentiel ?", a: "Absolument. Toutes vos communications avec Akoky sont strictement confidentielles et protégées par notre système de chiffrement AKOKY Safe. Aucune donnée n'est jamais partagée." },
              ].map((f, i) => (
                <div key={i}>
                  <h4 className="text-foreground font-semibold mb-1">{f.q}</h4>
                  <p className="text-muted-foreground text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Autres moyens de contact */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Autres moyens de nous contacter</h3>
            <p className="text-muted-foreground mb-6">Selon la nature de votre demande, vous pouvez également nous joindre via nos canaux spécialisés pour une réponse encore plus rapide et personnalisée.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: "🎙️", title: "Contact Presse", desc: "Journalistes, médias et blogueurs : accédez à nos communiqués de presse, dossiers médias et demandez une interview avec notre équipe.", link: "/fr/presse" },
                { icon: "🤝", title: "Partenariats Clubs", desc: "Vous gérez un club libertin et souhaitez rejoindre le réseau Akoky ? Contactez notre équipe partenariats pour découvrir nos offres dédiées.", link: "/fr/presse" },
                { icon: "💼", title: "Programme d'Affiliation", desc: "Créateurs de contenu, influenceurs et professionnels du milieu libertin : rejoignez notre programme d'affiliation et bénéficiez de commissions attractives.", link: "/fr/presse" },
              ].map((c, i) => (
                <Link key={i} to={c.link} className="p-6 bg-card/50 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                  <span className="text-3xl mb-3 block">{c.icon}</span>
                  <h4 className="text-lg font-bold text-foreground mb-2">{c.title}</h4>
                  <p className="text-muted-foreground text-sm">{c.desc}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Contact;
