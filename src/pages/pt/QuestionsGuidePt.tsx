import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "É obrigatório fazer algo?", answer: "Não. O direito de dizer não é absoluto. Muitos casais só observam na primeira visita." },
  { question: "É preciso estar em casal?", answer: "Não. Mulheres solteiras muito bem-vindas. Homens solteiros sob condições." },
  { question: "É perigoso o libertinismo?", answer: "Não, se praticado com consentimento e comunicação. A segurança é central." },
  { question: "Como encontrar casais?", answer: "AKOKY: 1,5M de membros na Europa. Cria o teu perfil gratuito." },
  { question: "Quanto custa a entrada?", answer: "Entre 20€ e 80€ por casal. Mulheres solteiras: frequentemente gratuito." },
  { question: "Que dress code levar?", answer: "Consulta a ficha do clube no AKOKY. Geralmente elegante ou sexy para os homens." },
];

const QuestionsGuidePt = () => (
  <>
    <MetaTags title="Perguntas Frequentes para Principiantes no Libertinismo — AKOKY" description="As 50 perguntas mais frequentes dos principiantes: funcionamento, segurança, vocabulário." canonical="https://akoky.com/pt/perguntas-principiantes-guia" lang="pt" />
    <HreflangTags slug="perguntas-principiantes-guia" />
    <ContentPageLayout lang="pt" title="Perguntas Frequentes para Principiantes no Libertinismo — AKOKY" description="As 50 perguntas mais frequentes dos principiantes: funcionamento, segurança, vocabulário." canonical="https://akoky.com/pt/perguntas-principiantes-guia" heroTitle="Perguntas para Principiantes" heroSubtitle="As respostas às perguntas que todos fazem ao descobrir o libertinismo" breadcrumb={[{ label: "Perguntas para Principiantes" }]}
      faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default QuestionsGuidePt;
