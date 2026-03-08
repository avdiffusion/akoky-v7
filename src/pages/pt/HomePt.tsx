import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "O AKOKY é gratuito?", answer: "Sim, o registo é completamente gratuito. As funções básicas estão disponíveis para todos os membros. As funcionalidades premium (multi-perfil, eventos VIP, lives exclusivos) estão disponíveis com a subscrição VIP." },
  { question: "O AKOKY está disponível em Portugal?", answer: "Sim. O AKOKY tem uma comunidade ativa em todo Portugal: Lisboa, Porto, Setúbal, Coimbra, Braga, Faro e muitas outras cidades." },
  { question: "Como garante o AKOKY a discrição?", answer: "Com encriptação de nível bancário, verificação manual de perfis, modo incógnito, desfoque de fotos e geolocalização aproximada. A tua identidade e dados estão protegidos." },
  { question: "Posso juntar-me sozinho/a?", answer: "Claro. O AKOKY dá as boas-vindas tanto a casais como a solteiros. As mulheres solteiras têm acesso privilegiado a muitos clubes e eventos." },
];

const HomePt = () => (
  <>
    <MetaTags
      title="AKOKY Portugal | A Comunidade Libertina Premium da Europa"
      description="Junta-te ao AKOKY, a maior comunidade libertina da Europa. 1,5 milhões de membros, 120+ clubes verificados, 300 eventos por mês. Registo gratuito."
      canonical="https://akoky.com/pt"
      lang="pt"
    />
    <HreflangTags slug="" />
    <ContentPageLayout
      lang="pt"
      title="AKOKY Portugal | A Comunidade Libertina Premium da Europa"
      description="Junta-te ao AKOKY, a maior comunidade libertina da Europa. 1,5 milhões de membros, 120+ clubes verificados, 300 eventos por mês. Registo gratuito."
      canonical="https://akoky.com/pt"
      heroTitle="A Maior Comunidade Libertina da Europa"
      heroSubtitle="1,5 milhões de membros, clubes verificados e eventos exclusivos em Portugal e na Europa. Começa grátis."
      breadcrumb={[{ label: "A Maior Comunidade Libertina da Europa" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O que é o AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY é a maior plataforma comunitária libertina premium da Europa. Com mais de 1,5 milhões de membros ativos, um diretório de 120+ clubes verificados e mais de 300 eventos organizados por mês, o AKOKY oferece um ecossistema completo para casais e solteiros que desejam explorar o estilo de vida libertino de forma segura, discreta e autêntica.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Ao contrário das apps de encontros convencionais, o AKOKY é uma rede social completa: chat tipo WhatsApp com grupos, multi-perfil exclusivo, testemunhos verificados, live streaming e um diretório de clubes com avaliações da comunidade.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Por que Escolher o AKOKY?</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Segurança e Discrição</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Verificação de identidade, moderação humana 24h/7d e opções avançadas de privacidade: desfoque de fotos, modo incógnito, geolocalização aproximada. A tua vida privada, protegida.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💎 Qualidade Premium</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">App mobile iOS e Android, funcionalidades avançadas e acesso a eventos exclusivos. O AKOKY SAFE, o nosso sistema de verificação, garante autenticidade em cada perfil.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🤝 Comunidade Respeitosa</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Código ético claro, consentimento no centro de cada troca e acompanhamento para os novos membros. Uma comunidade onde o respeito não é opcional.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🌍 Rede Europeia</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Presença ativa em Portugal, França, Espanha, Bélgica, Alemanha e Itália. Eventos e encontros à escala europeia para uma experiência sem fronteiras.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Clubes Libertinos em Portugal</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY referencia os melhores clubes libertinos verificados em Portugal: Lisboa, Porto, Setúbal, Coimbra, Braga e mais de 20 outras cidades. Cada ficha inclui fotos, horários, preços e avaliações verificadas da comunidade.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Junta-te ao AKOKY Portugal</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O registo é gratuito e não requer cartão de crédito. Cria o teu perfil, descobre a comunidade e explora ao teu ritmo. O AKOKY está disponível em português, francês, espanhol, alemão e italiano.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default HomePt;
