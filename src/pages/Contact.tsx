import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Contact = () => (
  <ContentPageLayout
    title="Contact – Support & Assistance | AKOKY"
    description="Contactez l'équipe Akoky : support technique, partenariats, presse, affiliation. Réponse sous 24-72h."
    canonical="https://akoky.com/contact"
    heroTitle="Contact"
    heroSubtitle="Une question ? Notre équipe est à votre écoute"
    heroType="gradient"
    breadcrumb={[{ label: "Contact" }]}
    schema={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact AKOKY", url: "https://akoky.com/contact" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Contacter Akoky : Support & Assistance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L'équipe Akoky est à votre écoute pour répondre à toutes vos questions. Que vous soyez membre à la recherche d'un support technique, un journaliste souhaitant couvrir notre plateforme, un club libertin intéressé par un partenariat ou un professionnel désireux de rejoindre notre programme d'affiliation, nous sommes là pour vous accompagner.</p>
          <p className="text-muted-foreground leading-relaxed">Notre engagement : vous offrir une expérience premium et sécurisée. Chaque message est traité avec soin, confidentialité et professionnalisme.</p>
        </div>

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

        <div className="p-8 bg-card/50 rounded-2xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6">Questions fréquentes</h3>
          <div className="space-y-6">
            {[
              { q: "Combien de temps pour une réponse ?", a: "Nous répondons généralement sous 24h ouvrées. Les demandes urgentes sont traitées en priorité." },
              { q: "Support téléphonique disponible ?", a: "Oui, du lundi au vendredi de 9h à 18h. Pour les membres VIP, un support prioritaire est disponible avec des créneaux étendus jusqu'à 20h." },
              { q: "Urgence ?", a: "Pour les urgences (problème de sécurité, compte compromis), contactez-nous immédiatement par téléphone ou via le formulaire en précisant \"URGENT\" dans l'objet." },
              { q: "Mon message est-il confidentiel ?", a: "Absolument. Toutes vos communications avec Akoky sont strictement confidentielles et protégées par notre système de chiffrement AKOKY Safe." },
            ].map((f, i) => (
              <div key={i}>
                <h4 className="text-foreground font-semibold mb-1">{f.q}</h4>
                <p className="text-muted-foreground text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: "🎙️", title: "Contact Presse", desc: "Journalistes, médias et blogueurs : accédez à nos communiqués de presse, dossiers médias et demandez une interview.", link: "/presse" },
            { icon: "🤝", title: "Partenariats Clubs", desc: "Vous gérez un club libertin et souhaitez rejoindre le réseau Akoky ? Contactez notre équipe partenariats.", link: "/presse" },
            { icon: "💼", title: "Programme d'Affiliation", desc: "Créateurs de contenu, influenceurs et professionnels : rejoignez notre programme d'affiliation.", link: "/presse" },
          ].map((c, i) => (
            <Link key={i} to={c.link} className="p-6 bg-card/50 rounded-2xl border border-border hover:border-primary/30 transition-colors">
              <span className="text-3xl mb-3 block">{c.icon}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Contact;
