import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Dove trovo le ultime notizie libertine?", answer: "La sezione attualità di AKOKY viene aggiornata settimanalmente con aperture, eventi e tendenze del settore." },
  { question: "Come restare aggiornato?", answer: "Iscriviti gratuitamente su AKOKY e attiva le notifiche per ricevere gli aggiornamenti direttamente sul tuo smartphone." },
];

const LINKS = [
  { href: "/it/attualita-libertine", icon: "📰", title: "Attualità e Tendenze", desc: "Analisi approfondite e tendenze 2026." },
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Il calendario degli eventi più attesi." },
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Nuove aperture e club in evidenza." },
  { href: "/it/blog", icon: "📖", title: "Blog AKOKY", desc: "Articoli e guide approfondite." },
];

const ActualitesIt = () => (
  <>
    <MetaTags title="Attualità Libertina 2026 | AKOKY Italia" description="Ultime notizie libertine: aperture di club, eventi esclusivi, tendenze." canonical="https://akoky.com/it/attualita-libertina-guida" lang="it" />
    <HreflangTags slug="attualita-libertina-guida" />
    <ContentPageLayout lang="it" title="Attualità Libertina 2026 | AKOKY Italia" description="Ultime notizie libertine in Italia e in Europa." canonical="https://akoky.com/it/attualita-libertina-guida" heroTitle="Attualità Libertina" heroSubtitle="Le ultime notizie della community libertina in Italia e in Europa" breadcrumb={[{ label: "Attualità Libertina" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Notizie della Community</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Le ultime notizie del mondo libertino in Italia e in Europa: aperture di <Link to="/it/club-libertini" className="text-primary hover:underline">club</Link>, <Link to="/it/eventi" className="text-primary hover:underline">eventi esclusivi</Link>, interviste e analisi del settore.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventi in Evidenza del Mese</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY mette in evidenza ogni mese gli eventi più attesi: serate tematiche, weekend esclusivi e soirée private. Consulta le <Link to="/it/attualita-libertine" className="text-primary hover:underline">tendenze 2026</Link> per approfondire.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tendenze 2026</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Miglioramento degli stabilimenti, digitalizzazione, wellness libertino, diversificazione dei formati degli eventi. L'Italia è al centro di una trasformazione che sta rendendo il <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo</Link> più accessibile e sicuro che mai.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Rimani Aggiornato</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscriviti gratuitamente su AKOKY per ricevere le ultime notizie della community.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Iscriviti Gratuitamente →</a>
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

export default ActualitesIt;
