import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Qual è il tempo di risposta del supporto?", answer: "Il team risponde in meno di 24 ore lavorative. I membri VIP hanno supporto prioritario con risposta in meno di 4 ore." },
  { question: "Il supporto è disponibile in italiano?", answer: "Sì. Il supporto AKOKY è disponibile in italiano, francese, spagnolo, tedesco e portoghese." },
  { question: "Come segnalare un problema di sicurezza?", answer: "Usa il pulsante 'Segnala' disponibile su ogni profilo o contattaci via email a security@akoky.com." },
  { question: "Posso proporre una partnership commerciale?", answer: "Sì. Invia la tua proposta a partnerships@akoky.com con dettagli sulla tua attività e la partnership desiderata." },
];

const ContactGuideIt = () => (
  <>
    <MetaTags title="Contatto AKOKY | Supporto e Assistenza Clienti" description="Contatta il team AKOKY: supporto tecnico, richieste commerciali, stampa. Team disponibile in italiano 24h." canonical="https://akoky.com/it/contatto-guida" lang="it" />
    <HreflangTags slug="contatto-guida" />
    <ContentPageLayout lang="it" title="Contatto AKOKY | Supporto e Assistenza Clienti" description="Contatta il team AKOKY." canonical="https://akoky.com/it/contatto-guida" heroTitle="Contattare AKOKY" heroSubtitle="Il nostro team è qui per aiutarti" breadcrumb={[{ label: "Contattare AKOKY" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Canali di Contatto</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il team AKOKY è disponibile attraverso diversi canali per rispondere alle tue esigenze. Che si tratti di supporto tecnico, questioni commerciali, partnership o stampa, trova il canale adeguato qui sotto.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">📧 Supporto Generale</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Per questioni sul tuo account, funzionalità della piattaforma o problemi tecnici: <strong>support@akoky.com</strong>. Risposta in meno di 24h lavorative.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">🤝 Partnership e Club</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Se gestisci un <Link to="/it/clubbing" className="text-primary hover:underline">club libertino</Link> o una <Link to="/it/saune-libertine" className="text-primary hover:underline">sauna</Link> e vuoi apparire nel directory AKOKY, o per qualsiasi proposta di partnership: <strong>partnerships@akoky.com</strong>.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">📰 Stampa e Media</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Richieste di intervista, press kit, dati statistici e comunicati stampa: <strong>press@akoky.com</strong>. Consulta anche la nostra <Link to="/it/stampa" className="text-primary hover:underline">sala stampa</Link> per le risorse disponibili.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">🔒 Sicurezza</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Per segnalare un problema di sicurezza, un profilo fraudolento o qualsiasi comportamento inadeguato: <strong>security@akoky.com</strong>. Trattamento prioritario in meno di 2 ore.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Informazioni sull'Azienda</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY è gestito da Liberty-Interactive-Ltd, un'azienda europea dedicata allo sviluppo di piattaforme social sicure ed etiche per adulti. Sede in Europa, con team distribuito in diversi paesi europei.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Unisciti alla Community</h3>
            <p className="text-muted-foreground mb-4">Registrati gratuitamente e scopri tutto l'ecosistema AKOKY.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Crea un Account Gratuito</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ContactGuideIt;
