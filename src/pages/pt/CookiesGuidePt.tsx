import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "O que são cookies?", answer: "Cookies são pequenos ficheiros de texto armazenados no teu dispositivo quando visitas um website. Permitem ao site lembrar as tuas preferências e melhorar a experiência de navegação." },
  { question: "Posso recusar os cookies?", answer: "Sim. Podes configurar as tuas preferências de cookies a qualquer momento. Os cookies essenciais não podem ser desativados pois são necessários ao funcionamento do site." },
  { question: "Os cookies comprometem a minha privacidade?", answer: "Os cookies do AKOKY respeitam o RGPD. Os cookies analíticos e de marketing são opcionais e só são ativados com o teu consentimento explícito." },
  { question: "Como alterar as minhas preferências de cookies?", answer: "Podes alterar as tuas preferências a qualquer momento através do banner de cookies ou nas definições do teu perfil AKOKY." },
];

const CookiesGuidePt = () => (
  <>
    <MetaTags title="AKOKY Política de Cookies | Gestão e Privacidade" description="Cookies AKOKY: essenciais, analíticos, de marketing. Gestão das tuas preferências e proteção da tua privacidade conforme o RGPD." canonical="https://akoky.com/pt/politica-cookies-guia" lang="pt" />
    <HreflangTags slug="politica-cookies-guia" />
    <ContentPageLayout lang="pt" title="AKOKY Política de Cookies | Gestão e Privacidade" description="Cookies AKOKY: essenciais, analíticos, de marketing." canonical="https://akoky.com/pt/politica-cookies-guia" heroTitle="Política de Cookies" heroSubtitle="Transparência total sobre a utilização de cookies no AKOKY" heroImage="/images/logo-akoky.webp" breadcrumb={[{ label: "Política de Cookies" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">A Nossa Política de Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY utiliza cookies para garantir o funcionamento do site, melhorar a experiência de navegação e, com o teu consentimento, analisar o tráfego e personalizar conteúdos. Esta página explica os diferentes tipos de cookies que utilizamos e como podes gerir as tuas preferências.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipos de Cookies Utilizados</h2>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Cookies Essenciais</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Necessários ao funcionamento do site. Incluem cookies de sessão, autenticação e segurança. Não podem ser desativados pois o site não funciona corretamente sem eles.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Cookies Analíticos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Permitem-nos compreender como os visitantes utilizam o site: páginas mais visitadas, tempo de sessão, percursos de navegação. Estes dados são anónimos e ajudam-nos a melhorar a plataforma. Ativados apenas com o teu consentimento.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Cookies de Marketing</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Utilizados para personalizar os anúncios e conteúdos apresentados. Estes cookies são totalmente opcionais e só são ativados com consentimento explícito.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Gestão das Tuas Preferências</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Podes alterar as tuas preferências de cookies a qualquer momento. Ao visitar o AKOKY pela primeira vez, um banner apresenta as opções disponíveis. Posteriormente, podes aceder às definições de cookies através das definições do teu perfil ou do link disponível no rodapé de cada página.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Conformidade RGPD</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY respeita integralmente o Regulamento Geral sobre a Proteção de Dados (RGPD). O teu consentimento é recolhido antes de qualquer cookie não essencial ser ativado. Os dados recolhidos são tratados de acordo com a nossa política de privacidade e nunca são vendidos a terceiros.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Duração dos Cookies</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Cookies de sessão:</strong> Eliminados quando fechas o navegador</li>
            <li><strong>Cookies persistentes:</strong> Duração máxima de 13 meses conforme a regulamentação europeia</li>
            <li><strong>Cookies de consentimento:</strong> Armazenados durante 6 meses para lembrar as tuas preferências</li>
          </ul>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default CookiesGuidePt;
