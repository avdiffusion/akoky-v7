import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Em que se diferencia o AKOKY de outras plataformas?", answer: "O AKOKY é a única plataforma com multi-perfil, chat tipo WhatsApp com grupos, testemunhos verificados e live streaming integrado." },
  { question: "O AKOKY está disponível como app mobile?", answer: "Sim. O AKOKY tem uma PWA otimizada para iOS e Android com notificações push, geolocalização e acesso completo a todas as funcionalidades." },
  { question: "Quem pode usar o AKOKY?", answer: "O AKOKY está aberto a todos os adultos com mais de 18 anos que respeitem a carta ética da plataforma, independentemente da orientação sexual ou situação sentimental." },
];

const AkokyPt = () => (
  <>
    <MetaTags
      title="AKOKY Portugal | A Plataforma Libertina Premium Europeia"
      description="Descobre o AKOKY: história, visão e funcionalidades únicas da plataforma libertina líder na Europa. Multi-perfil, chat, verificação."
      canonical="https://akoky.com/pt/akoky"
      lang="pt"
    />
    <HreflangTags slug="akoky" />
    <ContentPageLayout
      lang="pt"
      title="AKOKY Portugal | A Plataforma Libertina Premium Europeia"
      description="Descobre o AKOKY: história, visão e funcionalidades únicas da plataforma libertina líder na Europa. Multi-perfil, chat, verificação."
      canonical="https://akoky.com/pt/akoky"
      heroTitle="AKOKY: A Rede Social Libertina Premium"
      heroSubtitle="Nascida em França, presente em toda a Europa. A plataforma que reinventa o libertinismo moderno."
      breadcrumb={[{ label: "AKOKY: A Rede Social Libertina Premium" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O que é o AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY é muito mais do que uma app de encontros para adultos. É uma rede social completa, pensada especificamente para a comunidade libertina europeia. Nascida da evolução do AcoquinementVotre, uma plataforma pioneira do libertinismo francês, o AKOKY representa a próxima geração de plataformas para adultos.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">As Nossas Funcionalidades Exclusivas</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Chat tipo WhatsApp com Grupos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Mensagens instantâneas individuais e em grupo com notificações em tempo real. Organiza noitadas, coordena encontros e mantém contacto com a tua comunidade como no WhatsApp, mas num ambiente seguro e privado.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">👤 Multi-Perfil — Primeira Mundial</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">A única plataforma do mundo que permite criar vários perfis (casal, solteiro homem, solteira mulher) numa única conta, com mudança em um clique. Cada perfil tem a sua própria galeria, descrição e definições de privacidade.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">✅ Testemunhos Verificados</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Os membros podem deixar testemunhos verificados sobre os seus encontros. Um sistema único que garante autenticidade e ajuda a construir confiança dentro da comunidade.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📡 Live Streaming + Replay</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Mais de 20 lives por semana: atmosfera de clubes em direto, noitadas exclusivas, conteúdos VIP. Desfruta da experiência em casa ou usa-o para decidir que eventos visitar.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY SAFE</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O nosso sistema de verificação de identidade garante que cada membro é realmente quem diz ser. Perfis certificados, moderação humana 24h/7d, sistema de denúncia eficaz. A segurança não é uma opção, é uma prioridade.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AkokyPt;
