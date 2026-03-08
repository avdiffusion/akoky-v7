import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const ActualitesIt = () => (
  <>
    <MetaTags title="Attualità Libertina 2026 | AKOKY Italia" description="Ultime notizie libertine: aperture di club, eventi esclusivi, tendenze." canonical="https://akoky.com/it/attualita-libertina-guida" lang="it" />
    <HreflangTags slug="attualita-libertina-guida" />
    <ContentPageLayout lang="it" title="Attualità Libertina 2026 | AKOKY Italia" description="Ultime notizie libertine: aperture di club, eventi esclusivi, tendenze." canonical="https://akoky.com/it/attualita-libertina-guida" heroTitle="Attualità Libertina" heroSubtitle="Le ultime notizie della community libertina in Italia e in Europa" breadcrumb={[{ label: "Attualità Libertina" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Notizie della Community</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Le ultime notizie del mondo libertino in Italia e in Europa: aperture di club, eventi esclusivi, interviste.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventi in Evidenza del Mese</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY mette in evidenza ogni mese gli eventi più attesi: serate tematiche, weekend a Cap d&#39;Agde, soirée private esclusive.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tendenze 2026</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Miglioramento degli stabilimenti, digitalizzazione, wellness libertino, diversificazione dei formati degli eventi.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ActualitesIt;
