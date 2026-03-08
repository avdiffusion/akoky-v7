import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Quanto custa a subscrição VIP?", answer: "Os preços variam por duração. Subscrições mensais, trimestrais e anuais estão disponíveis com descontos progressivos. Consulta a página VIP para os preços atualizados." },
  { question: "Posso cancelar a qualquer momento?", answer: "Sim. A subscrição VIP pode ser cancelada a qualquer momento sem compromisso nem penalização. O acesso VIP mantém-se até ao fim do período pago." },
  { question: "O que inclui o multi-perfil VIP?", answer: "O multi-perfil permite criar vários perfis (casal, solteiro, solteira) numa única conta, com mudança instantânea. Exclusivo AKOKY — nenhuma outra plataforma oferece esta funcionalidade." },
  { question: "Os eventos VIP são mesmo exclusivos?", answer: "Sim. Os eventos VIP são reservados aos membros premium e oferecem experiências que não estão disponíveis aos membros gratuitos: locais excepcionais, catering, serviço personalizado." },
  { question: "A certificação VIP é segura?", answer: "A verificação de identidade é feita de forma segura e confidencial. Os dados são encriptados e nunca partilhados. A certificação garante à comunidade que és quem dizes ser." },
];

const VipGuidePt = () => (
  <>
    <MetaTags title="AKOKY VIP Premium | Acesso Exclusivo à Comunidade Libertina" description="Desbloqueia o acesso VIP AKOKY: eventos exclusivos, perfis verificados, multi-perfil, lives premium e funcionalidades avançadas." canonical="https://akoky.com/pt/vip-premium-guia" lang="pt" />
    <HreflangTags slug="vip-premium-guia" />
    <ContentPageLayout lang="pt" title="AKOKY VIP Premium | Acesso Exclusivo à Comunidade Libertina" description="Desbloqueia o acesso VIP AKOKY." canonical="https://akoky.com/pt/vip-premium-guia" heroTitle="AKOKY VIP" heroSubtitle="Desbloqueia todas as funcionalidades premium da plataforma AKOKY" heroType="cover" heroImage="/images/pt-vip-cover.webp" breadcrumb={[{ label: "AKOKY VIP" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Porquê Tornar-se VIP AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O estatuto VIP AKOKY é o passaporte para a experiência libertina mais completa da Europa. Acede a funcionalidades exclusivas, eventos premium, verificação de identidade e visibilidade privilegiada na comunidade. Os membros VIP são os mais ativos e os mais bem avaliados — porque a qualidade atrai qualidade.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Funcionalidades VIP Exclusivas</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-3">
            <li><strong>Multi-perfil certificado:</strong> Cria vários perfis (casal, solteiro, solteira) numa única conta. Primeira mundial no universo libertino.</li>
            <li><strong>Badge de confiança:</strong> O badge VIP visível no teu perfil sinaliza à comunidade que foste verificado e certificado.</li>
            <li><strong>Eventos exclusivos:</strong> Acesso a <Link to="/pt/eventos" className="text-primary hover:underline">eventos VIP</Link> em locais excepcionais: iates, palacetes, quintas premium.</li>
            <li><strong>Lives premium:</strong> Acesso a <Link to="/pt/live" className="text-primary hover:underline">lives exclusivos</Link> com conteúdos VIP reservados.</li>
            <li><strong>Álbuns privados:</strong> Partilha fotos de forma segura com controlo total de quem pode ver.</li>
            <li><strong>Mensagens prioritárias:</strong> As tuas mensagens aparecem em destaque nas caixas de entrada dos outros membros.</li>
            <li><strong>Jogos premium:</strong> Acesso a todos os <Link to="/pt/jogos" className="text-primary hover:underline">jogos exclusivos</Link> AKOKY, incluindo edições limitadas.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">A Verificação de Identidade VIP</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">A certificação VIP inclui uma verificação de identidade segura e confidencial. Este processo garante à comunidade que és realmente a pessoa do teu perfil, eliminando perfis falsos e aumentando a confiança entre membros. Os dados de verificação são encriptados com tecnologia de nível bancário e nunca são partilhados.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">VIP em Portugal: Experiências Exclusivas</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Os membros VIP em Portugal têm acesso a experiências únicas: noitadas em quintas do Douro, fins de semana em villas privadas no Algarve, jantares libertinos em restaurantes exclusivos de Lisboa. Cada evento VIP é curado com atenção ao detalhe para oferecer o melhor da experiência libertina portuguesa.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Torna-te VIP Hoje</h3>
            <p className="text-muted-foreground mb-4">Desbloqueia todas as funcionalidades premium e vive a experiência AKOKY ao mais alto nível.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Subscrever VIP</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default VipGuidePt;
