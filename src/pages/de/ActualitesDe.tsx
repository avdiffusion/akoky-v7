import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const ActualitesDe = () => (
  <>
    <MetaTags title="Libertine Neuigkeiten 2026 | AKOKY Deutschland" description="Neueste libertine Nachrichten: Club-Eröffnungen, exklusive Events, Trends." canonical="https://akoky.com/de/libertine-neuigkeiten" lang="de" />
    <HreflangTags slug="libertine-neuigkeiten" />
    <ContentPageLayout lang="de" title="Libertine Neuigkeiten 2026 | AKOKY Deutschland" description="Neueste libertine Nachrichten: Club-Eröffnungen, exklusive Events, Trends." canonical="https://akoky.com/de/libertine-neuigkeiten" heroTitle="Libertine Neuigkeiten" heroSubtitle="Die neuesten Nachrichten aus der libertinen Community in Deutschland und Europa" breadcrumb={[{ label: "Libertine Neuigkeiten" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Community-Nachrichten</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Die neuesten Nachrichten aus der libertinen Welt in Deutschland und Europa: Club-Eröffnungen, exklusive Events, Brancheninterviews.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Herausragende Events des Monats</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY hebt jeden Monat die meisterwarteten Events hervor: Themenabende, Wochenenden in Cap d&#39;Agde, exklusive private Soirées.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Trends 2026</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Qualitätssteigerung der Einrichtungen, Digitalisierung, libertines Wellness, Diversifizierung der Eventformate.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ActualitesDe;
