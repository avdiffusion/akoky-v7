import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Qual é a missão do AKOKY?", answer: "Oferecer à comunidade libertina europeia uma plataforma premium, segura e ética que coloque o consentimento, a segurança e a autenticidade no centro de cada interação." },
  { question: "Quem está por trás do AKOKY?", answer: "O AKOKY é operado pela Liberty-Interactive-Ltd, uma empresa europeia dedicada ao desenvolvimento de plataformas sociais seguras e éticas para adultos." },
  { question: "O AKOKY é conforme ao RGPD?", answer: "Sim. O AKOKY respeita rigorosamente o RGPD e todas as regulamentações europeias de proteção de dados. A privacidade é uma prioridade absoluta." },
  { question: "Em quantos países está disponível?", answer: "O AKOKY está disponível em toda a Europa: França, Espanha, Portugal, Bélgica, Suíça, Luxemburgo, Alemanha e Itália." },
];

const VisionGuidePt = () => (
  <>
    <MetaTags title="A Visão do AKOKY | Plataforma Libertina Moderna e Responsável" description="Descobre a visão do AKOKY: uma plataforma libertina moderna, segura e responsável. De AcoquinementVotre ao AKOKY, a história de uma evolução." canonical="https://akoky.com/pt/visao-akoky-guia" lang="pt" />
    <HreflangTags slug="visao-akoky-guia" />
    <ContentPageLayout lang="pt" title="A Visão do AKOKY | Plataforma Libertina Moderna e Responsável" description="Descobre a visão do AKOKY." canonical="https://akoky.com/pt/visao-akoky-guia" heroTitle="A Nossa Visão" heroSubtitle="AKOKY: construir a comunidade libertina mais segura e autêntica da Europa" heroType="cover" heroImage="/images/pt-visao-cover.webp" breadcrumb={[{ label: "A Nossa Visão" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">De AcoquinementVotre ao AKOKY: Uma Evolução Natural</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY nasceu da convicção de que a comunidade libertina europeia merecia uma plataforma à sua altura. Fundado inicialmente como AcoquinementVotre em França, o projeto evoluiu para se tornar o AKOKY — uma plataforma internacional, moderna e segura que serve 1,5 milhões de membros em toda a Europa.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Esta evolução não foi apenas uma mudança de nome: foi uma transformação completa da visão, da tecnologia e da ambição. O AKOKY de 2026 é uma plataforma de nova geração que reinventa cada aspeto da experiência libertina online.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Os 4 Pilares da Nossa Visão</h2>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Segurança Absoluta</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Encriptação de nível bancário, verificação manual de perfis, moderação humana 24h/7d, modo incógnito e geolocalização aproximada. A segurança dos nossos membros é a nossa obsessão número um.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Inovação Tecnológica</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">O multi-perfil (primeira mundial), o chat tipo WhatsApp com grupos, os testemunhos verificados e o <Link to="/pt/live" className="text-primary hover:underline">live streaming</Link> avançado são inovações exclusivas do AKOKY. Continuamos a desenvolver funcionalidades que nenhuma outra plataforma oferece.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Ética e Consentimento</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">O consentimento é a pedra angular de tudo o que fazemos. A nossa carta ética é clara, as nossas regras são rigorosas e a nossa moderação é ativa. Promovemos um libertinismo respeitoso, responsável e inclusivo.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Comunidade Europeia</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY é uma plataforma verdadeiramente europeia, disponível em 6 línguas e presente em 8 países. Com <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">120+ clubes verificados</Link> e <Link to="/pt/eventos" className="text-primary hover:underline">300+ eventos mensais</Link>, somos o maior ecossistema libertino do continente.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">A Nossa Visão para Portugal</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Portugal é um mercado em plena expansão para o libertinismo moderno. A abertura cultural portuguesa, a tradição de hospitalidade e a localização geográfica privilegiada fazem de Portugal um destino natural para a comunidade libertina europeia. O AKOKY investe ativamente no desenvolvimento da comunidade portuguesa com eventos locais, parcerias com clubes e conteúdos em português.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Faz Parte da Nossa Visão</h3>
            <p className="text-muted-foreground mb-4">Junta-te à comunidade libertina mais inovadora da Europa.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Criar Conta Gratuita</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default VisionGuidePt;
