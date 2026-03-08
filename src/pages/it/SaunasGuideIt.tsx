import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Qual è la differenza tra una sauna libertina e un club libertino?", answer: "La sauna offre impianti benessere (jacuzzi, hammam, sauna) con atmosfera rilassata e orari diurni. Il club è più festoso con musica, bar e dress code elegante." },
  { question: "Si può andare da soli in una sauna libertina?", answer: "Sì. Le saune sono molto accessibili ai single. Le donne sole e le coppie hanno generalmente accesso privilegiato." },
  { question: "Cosa portare in una sauna libertina?", answer: "Un asciugamano e ciabatte. La maggior parte delle strutture fornisce asciugamani a noleggio e armadietti con lucchetto." },
  { question: "Le saune libertine sono igieniche?", answer: "Le strutture referenziate su AKOKY rispettano standard di igiene rigorosi con pulizia regolare, asciugamani puliti e manutenzione costante degli impianti." },
];

const LINKS = [
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Directory dei club verificati in Italia." },
  { href: "/it/clubbing", icon: "🎭", title: "Guida al Clubbing", desc: "Prepararsi per una serata in club." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida completa per i principianti." },
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "300+ eventi al mese in tutta Italia." },
];

const SaunasGuideIt = () => (
  <>
    <MetaTags title="Saune Libertine 2026 | Guida Completa — AKOKY Italia" description="Scopri le migliori saune libertine in Italia e in Europa: cosa aspettarsi, come scegliere, prezzi e confronto con i club libertini." canonical="https://akoky.com/it/saune-libertine-guida" lang="it" />
    <HreflangTags slug="saune-libertine-guida" />
    <ContentPageLayout lang="it" title="Saune Libertine 2026 | Guida Completa — AKOKY Italia" description="Guida completa alle saune libertine in Italia e in Europa." canonical="https://akoky.com/it/saune-libertine-guida" heroTitle="Saune Libertine: Guida Completa" heroSubtitle="Tutto sulle saune libertine: atmosfera, prezzi, attrezzature e come scegliere la struttura giusta nel 2026." breadcrumb={[{ label: "Saune Libertine — Guida" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Cos'è una Sauna Libertina?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Una sauna libertina combina strutture benessere (sauna secca, hammam, jacuzzi, piscina) con spazi intimi per incontri tra adulti consenzienti. A differenza dei <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link> dall'atmosfera più festosa, la sauna offre un ambiente rilassato dove il benessere fisico è parte integrante dell'esperienza.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Le saune libertine sono particolarmente apprezzate da chi cerca un'alternativa più soft al clubbing tradizionale, con la possibilità di frequentare la struttura anche nelle ore diurne e in un contesto meno codificato.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Attrezzature Tipiche</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: "🧖", title: "Sauna Finlandese", desc: "Sauna secca ad alta temperatura (80-100°C). Ideale per la detossificazione e il rilassamento muscolare." },
              { icon: "💨", title: "Hammam / Bagno Turco", desc: "Vapore umido a temperatura moderata (40-50°C). Più dolce della sauna, perfetto per rilassarsi." },
              { icon: "🛁", title: "Jacuzzi / Vasca", desc: "Vasca idromassaggio condivisa, spesso il luogo dei primi contatti tra i visitatori." },
              { icon: "🚪", title: "Cabine Private", desc: "Spazi chiusi per momenti intimi più privati, per due o quattro persone." },
              { icon: "☕", title: "Bar / Zona Relax", desc: "Area per socializzare, bere qualcosa e fare conoscenza in un contesto informale." },
              { icon: "🎬", title: "Sala Cinema", desc: "Presente nelle strutture premium, proietta contenuti per adulti in un'atmosfera intima." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-sm text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Sauna vs Club Libertino</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-border rounded-xl text-sm">
              <thead><tr className="bg-muted"><th className="p-3 text-left text-foreground font-semibold">Criterio</th><th className="p-3 text-left text-foreground font-semibold">Sauna Libertina</th><th className="p-3 text-left text-foreground font-semibold">Club Libertino</th></tr></thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t border-border"><td className="p-3">Atmosfera</td><td className="p-3">Rilassata, tranquilla</td><td className="p-3">Festosa, musica alta</td></tr>
                <tr className="border-t border-border"><td className="p-3">Orari</td><td className="p-3">Diurni e serali</td><td className="p-3">Solo serali/notturni</td></tr>
                <tr className="border-t border-border"><td className="p-3">Dress code</td><td className="p-3">Accappatoio/asciugamano</td><td className="p-3">Elegante o sexy</td></tr>
                <tr className="border-t border-border"><td className="p-3">Benessere</td><td className="p-3">Sauna, jacuzzi, hammam</td><td className="p-3">Generalmente assente</td></tr>
                <tr className="border-t border-border"><td className="p-3">Prezzo medio</td><td className="p-3">15-40€ / persona</td><td className="p-3">30-80€ / coppia</td></tr>
                <tr className="border-t border-border"><td className="p-3">Ideale per</td><td className="p-3">Principianti, relax</td><td className="p-3">Serate sociali, feste</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Scegliere la Tua Sauna</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY referenzia le migliori <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link> verificate in Italia e in Europa con schede complete, foto e <Link to="/it/recensioni" className="text-primary hover:underline">recensioni autentiche</Link>. Considera la posizione, gli orari, il prezzo e la politica di ingresso prima di scegliere.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Le Regole d'Oro</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Igiene impeccabile: doccia obbligatoria prima di accedere agli spazi</li>
            <li>Consenso esplicito prima di ogni contatto fisico</li>
            <li>Rispetto assoluto del rifiuto senza insistere</li>
            <li>Discrezione totale: nessuna foto senza consenso</li>
            <li>Rispetto delle strutture e del personale</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Tua Prima Visita</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Per la tua prima visita, arriva in un orario tranquillo (mattina o primo pomeriggio). Inizia dagli spazi benessere per rilassarti e ambientarti. Non sentirti obbligato/a a fare nulla: molti visitatori vengono semplicemente per il relax. Se vuoi approfondire, consulta la nostra guida per <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziare nel libertinismo</Link>.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova la Tua Sauna Libertina</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscriviti gratuitamente su AKOKY e accedi al directory completo delle strutture verificate.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Accedi al Directory →</a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Scopri Anche</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {LINKS.map((l) => (
              <Link key={l.href} to={l.href} className="group block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                <span className="text-3xl mb-3 block">{l.icon}</span>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{l.title}</h3>
                <p className="text-muted-foreground text-sm">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default SaunasGuideIt;
