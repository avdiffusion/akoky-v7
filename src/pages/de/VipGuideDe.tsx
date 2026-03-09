import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const VipGuideDe = () => (
  <>
    <MetaTags title="AKOKY VIP Premium | Exklusiver Zugang zur Libertinen Community" description="Schalte VIP-Zugang frei: exklusive Events, verifizierte Profile, erweiterte Funktionen." canonical="https://akoky.com/de/vip" lang="de" />
    <HreflangTags slug="vip" />
    <ContentPageLayout lang="de" title="AKOKY VIP Premium | Exklusiver Zugang" description="Schalte VIP-Zugang frei: exklusive Events, verifizierte Profile, erweiterte Funktionen." canonical="https://akoky.com/de/vip" heroTitle="AKOKY VIP" heroSubtitle="Alle Premium-Funktionen der AKOKY-Plattform freischalten" breadcrumb={[{ label: "AKOKY VIP" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Seite wird vorbereitet</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Inhalte demnächst verfügbar.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default VipGuideDe;
