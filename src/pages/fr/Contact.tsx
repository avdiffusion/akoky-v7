import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

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
      heroImage="https://akoky.com/images/logo-akoky.webp"
      breadcrumb={[{ label: "Contact" }]}
      faq={{FAQ}}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto prose-custom">
          <p className="text-muted-foreground leading-relaxed mb-4">Une question ? Notre équipe est à votre écoute</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Contacter Akoky : Support & Assistance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L'équipe Akoky est à votre écoute pour répondre à toutes vos questions. Que vous soyez membre à la recherche d'un support technique, un journaliste souhaitant couvrir notre plateforme, un club libertin intéressé par un partenariat ou un professionnel désireux de rejoindre notre programme d'affiliation, nous sommes là pour vous accompagner.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Notre engagement : vous offrir une expérience premium et sécurisée. Chaque message est traité avec soin, confidentialité et professionnalisme. Nous nous efforçons de répondre à toutes les demandes dans les meilleurs délais.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Email</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">[email&#160;protected]</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Téléphone</h3>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Adresse</h3>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Horaires</h3>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Envoyez-nous un message</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Questions fréquentes</h3>
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Combien de temps pour une réponse ?</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">Nous répondons généralement sous 24h ouvrées. Les demandes urgentes sont traitées en priorité. Pour les questions simples, consultez d'abord notre FAQ complète .</p>
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Support téléphonique disponible ?</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">Oui, du lundi au vendredi de 9h à 18h. Pour les membres VIP, un support prioritaire est disponible avec des créneaux étendus jusqu'à 20h.</p>
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Urgence ?</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">Pour les urgences (problème de sécurité, compte compromis), contactez-nous immédiatement par téléphone ou via le formulaire en précisant "URGENT" dans l'objet.</p>
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Mon message est-il confidentiel ?</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">Absolument. Toutes vos communications avec Akoky sont strictement confidentielles et protégées par notre système de chiffrement AKOKY Safe. Aucune donnée n'est jamais partagée.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Autres moyens de nous contacter</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Selon la nature de votre demande, vous pouvez également nous joindre via nos canaux spécialisés pour une réponse encore plus rapide et personnalisée.</p>
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">🎙️ Contact Presse</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">Journalistes, médias et blogueurs : accédez à nos communiqués de presse, dossiers médias et demandez une interview avec notre équipe.</p>
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">🤝 Partenariats Clubs</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">Vous gérez un club libertin et souhaitez rejoindre le réseau Akoky ? Contactez notre équipe partenariats pour découvrir nos offres dédiées.</p>
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">💼 Programme d'Affiliation</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">Créateurs de contenu, influenceurs et professionnels du milieu libertin : rejoignez notre programme d'affiliation et bénéficiez de commissions attractives.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default Contact;
