import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Como aceder aos lives AKOKY?", answer: "Os lives são acessíveis aos membros registados. Alguns conteúdos estão reservados aos membros VIP. Cria a tua conta gratuitamente no AKOKY." },
  { question: "Os lives são seguros?", answer: "Sim. Todos os participantes são verificados, a moderação é humana 24h/7d e o acesso é estritamente reservado a membros maiores de 18 anos." },
  { question: "Posso transmitir o meu próprio live?", answer: "Sim, os membros verificados podem transmitir. Cada transmissão está sujeita à carta AKOKY e a uma verificação preliminar." },
];

const LivePt = () => (
  <>
    <MetaTags
      title="Lives Libertinos Exclusivos | Streaming Premium AKOKY Portugal"
      description="Descobre 20+ lives libertinos por semana: atmosfera de clubes em direto, noitadas exclusivas, conteúdos VIP. Streaming seguro e discreto."
      canonical="https://akoky.com/pt/live"
      lang="pt"
    />
    <HreflangTags slug="live" />
    <ContentPageLayout
      lang="pt"
      title="Lives Libertinos Exclusivos | Streaming Premium AKOKY Portugal"
      description="Descobre 20+ lives libertinos por semana: atmosfera de clubes em direto, noitadas exclusivas, conteúdos VIP. Streaming seguro e discreto."
      canonical="https://akoky.com/pt/live"
      heroTitle="Lives AKOKY — Vídeos e Encontros em Direto"
      heroSubtitle="20+ lives por semana: clubes em direto, noitadas exclusivas, conteúdos VIP. Seguro e discreto."
      breadcrumb={[{ label: "Lives AKOKY — Vídeos e Encontros em Direto" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Bem-vindo à Experiência AKOKY Live</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY Live é a plataforma de streaming libertino mais completa da Europa. Com mais de 20 lives por semana, terás acesso a uma experiência imersiva do mundo libertino a partir do conforto de casa.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O Quadro AKOKY Live</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Experiência Imersiva</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Vive a atmosfera dos melhores clubes libertinos da Europa em direto. Cada live é uma janela para um mundo que poucos têm a oportunidade de descobrir.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Moderação Humana</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos os lives são supervisionados em tempo real pela nossa equipa de moderação. Qualquer conteúdo que não respeite a carta AKOKY é removido imediatamente.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Respeito e Consentimento</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos os participantes nos lives deram o seu consentimento explícito para ser filmados e transmitidos. Nenhuma imagem é publicada sem autorização prévia.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipos de Lives</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Lives de Casais</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Casais verificados partilham momentos da sua vida íntima em direto. Interage no chat, faz perguntas e cria ligações reais com pessoas da tua comunidade.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Lives Solo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Homens e mulheres solteiros partilham as suas experiências e interagem com a comunidade. O formato mais popular para principiantes que querem explorar antes de viver experiências pessoalmente.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Lives dos Clubes</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Alguns dos nossos clubes parceiros transmitem noitadas em direto exclusivamente para a comunidade AKOKY. Uma imersão total na atmosfera das melhores noitadas libertinas da Europa.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LivePt;
