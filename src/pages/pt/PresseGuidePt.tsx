import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Como obter o press kit AKOKY?", answer: "O press kit completo (logotipos, estatísticas, biografias, fotos de imprensa) está disponível mediante pedido para press@akoky.com." },
  { question: "O AKOKY aceita pedidos de entrevista?", answer: "Sim. Os porta-vozes do AKOKY estão disponíveis para entrevistas sobre libertinismo, tecnologia e tendências sociais. Contacta press@akoky.com." },
  { question: "Posso publicar artigos sobre o AKOKY?", answer: "Sim. Incentivamos a cobertura jornalística independente. Contacta-nos para dados atualizados e citações oficiais." },
  { question: "O AKOKY tem presença em Portugal?", answer: "Sim. O AKOKY tem uma comunidade ativa em Portugal e está disponível integralmente em português." },
];

const PresseGuidePt = () => (
  <>
    <MetaTags title="Sala de Imprensa AKOKY | Recursos para Jornalistas" description="Sala de imprensa oficial AKOKY: comunicados, press kit, contacto para jornalistas. Dados e estatísticas sobre o libertinismo na Europa." canonical="https://akoky.com/pt/sala-de-imprensa" lang="pt" />
    <HreflangTags slug="sala-de-imprensa" />
    <ContentPageLayout lang="pt" title="Sala de Imprensa AKOKY | Recursos para Jornalistas" description="Sala de imprensa oficial AKOKY." canonical="https://akoky.com/pt/sala-de-imprensa" heroTitle="Sala de Imprensa AKOKY" heroSubtitle="Recursos para jornalistas, bloggers e parceiros de mídia" heroType="cover" heroImage="/images/pt-imprensa-cover.webp" breadcrumb={[{ label: "Sala de Imprensa AKOKY" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY em Números</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>1,5 milhões</strong> de membros registados em toda a Europa</li>
            <li><strong>500+</strong> clubes e saunas libertinos verificados</li>
            <li><strong>300+</strong> eventos organizados ou referenciados por mês</li>
            <li><strong>8 países</strong> europeus cobertos: França, Espanha, Portugal, Bélgica, Suíça, Luxemburgo, Alemanha, Itália</li>
            <li><strong>6 línguas</strong> disponíveis na plataforma</li>
            <li><strong>Primeira plataforma</strong> mundial com funcionalidade multi-perfil</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Sobre o AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY é a plataforma líder do libertinismo na Europa. Fundada originalmente como AcoquinementVotre em França, evoluiu para se tornar uma plataforma internacional de nova geração que combina rede social, diretório de clubes, calendário de eventos e ferramentas de comunicação avançadas. A missão do AKOKY é oferecer à comunidade libertina europeia um espaço seguro, ético e inovador.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Inovações Tecnológicas</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Multi-perfil:</strong> Primeira plataforma mundial a permitir vários perfis numa única conta</li>
            <li><strong>Chat tipo WhatsApp:</strong> Mensagens com grupos, partilha de média e funcionalidades avançadas</li>
            <li><strong>Live streaming:</strong> Transmissões em direto seguras e moderadas</li>
            <li><strong>Testemunhos verificados:</strong> Sistema de avaliações ligado a perfis reais</li>
            <li><strong>Modo incógnito:</strong> Navegação invisível para máxima discrição</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Contacto Imprensa</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Para pedidos de entrevista, press kits, dados estatísticos ou qualquer outra necessidade editorial: <strong>press@akoky.com</strong>. Para parcerias e questões comerciais: <strong>partnerships@akoky.com</strong>. Consulta a página de <Link to="/pt/contacto-akoky" className="text-primary hover:underline">contacto</Link> para mais opções.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Cobertura Mediática Recente</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY tem sido referenciado em diversos meios de comunicação europeus pela sua abordagem inovadora ao libertinismo digital. A cobertura mediática destaca frequentemente a segurança, a ética e as inovações tecnológicas da plataforma como fatores diferenciadores no mercado.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PresseGuidePt;
