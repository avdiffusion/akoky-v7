import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import ReviewsList from "@/components/reviews/ReviewsList";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://akoky.com/pt" },
    { "@type": "ListItem", "position": 2, "name": "Avaliações", "item": "https://akoky.com/pt/avaliacoes" },
  ],
};

const PAGE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Avaliações AKOKY – Testemunhos verificados",
    "description": "Descobre avaliações autênticas e verificadas de membros AKOKY. Testemunhos reais sobre a experiência, os eventos, os clubes parceiros e a subscrição premium.",
    "url": "https://akoky.com/pt/avaliacoes",
    "inLanguage": "pt",
    "isPartOf": { "@type": "WebSite", "name": "AKOKY", "url": "https://akoky.com" },
  },
  BREADCRUMB_SCHEMA,
];

const AvaliacoesPt = () => {
  return (
    <>
      <Helmet>
        <html lang="pt" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:site_name" content="AKOKY" />
        <meta name="twitter:site" content="@akoky_official" />
      </Helmet>
      <HreflangTags slug="avaliacoes" />

      <ContentPageLayout
        lang="pt"
        title="Avaliações AKOKY – Testemunhos verificados e experiências reais dos membros"
        description="Descobre avaliações autênticas e verificadas de membros AKOKY. Testemunhos reais sobre a experiência, os eventos, os clubes parceiros e a subscrição premium."
        canonical="https://akoky.com/pt/avaliacoes"
        heroTitle="Avaliações Membros AKOKY – Testemunhos verificados"
        heroSubtitle="Descobre mais de 60 testemunhos autênticos da comunidade libertina AKOKY, plataforma comunitária de encontros libertinos na Europa"
        heroImage="/images/jeux-cover.webp"
        breadcrumb={[{ label: "Avaliações" }]}
        faq={[
          { question: "As avaliações AKOKY são autênticas e verificadas?", answer: "Sim, 100% das nossas avaliações são autênticas e verificadas. Cada testemunho provém de um membro ativo da nossa comunidade e é controlado pela nossa equipa de moderação antes da publicação. Ao contrário de certas plataformas concorrentes, nunca publicamos avaliações falsas ou testemunhos patrocinados. O nosso compromisso: transparência total para construir uma comunidade libertina de confiança." },
          { question: "Qual é a nota média do AKOKY?", answer: "O AKOKY obtém uma nota média de 4,7/5 baseada em mais de 60 avaliações verificadas de membros. Esta avaliação reflete a satisfação global da nossa comunidade relativamente à qualidade da plataforma, à segurança nos eventos, ao ambiente nos clubes parceiros e ao respeito pelo consentimento. Esta nota coloca-nos entre as melhores plataformas libertinas da Europa, à frente de atores como Libertic e SexyLib." },
          { question: "Como posso deixar uma avaliação no AKOKY?", answer: "Se és membro ativo do AKOKY, podes partilhar o teu testemunho contactando a nossa equipa pela página de contacto. Privilegiamos as avaliações detalhadas que abordem a tua experiência real: ambiente nas festas, qualidade dos encontros, facilidade de utilização da aplicação móvel e respeito pelas regras de consentimento. As melhores avaliações podem fazer-te ganhar até 12 meses de subscrição premium gratuita." },
          { question: "Posso ganhar uma subscrição ao deixar uma avaliação?", answer: "Sim! Os testemunhos autênticos e detalhados podem fazer-te ganhar até 12 meses de subscrição premium AKOKY. Recompensamos os membros que dedicam tempo a partilhar a sua experiência de forma construtiva e honesta. Quer sejas principiante no libertinismo ou membro confirmado, a tua opinião conta e ajuda a melhorar continuamente a nossa plataforma e os nossos serviços." },
          { question: "O AKOKY é melhor avaliado que o Wyylde ou o NousLibertins?", answer: "Com uma nota de 4,7/5, o AKOKY posiciona-se como uma das plataformas libertinas melhor avaliadas da Europa. A nossa abordagem premium, focada na qualidade em vez da quantidade, distingue-nos de concorrentes como Wyylde, NousLibertins, Libertic ou SexyLib. Os nossos membros apreciam particularmente a moderação rigorosa, a verificação dos perfis, a organização de eventos exclusivos e a nossa visão ética do libertinismo moderno." },
        ]}
        schema={PAGE_SCHEMA}
      >
        {/* Intro SEO */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Porque são importantes as avaliações AKOKY?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>No universo das <Link to="/pt/libertinismo" className="text-primary hover:underline">plataformas libertinas</Link>, a transparência e a autenticidade são essenciais. Ao contrário dos sites de encontros clássicos ou de concorrentes como Wyylde e NousLibertins, o AKOKY aposta numa comunidade de qualidade em vez da quantidade. O nosso <Link to="/pt/guia-libertinismo-completo" className="text-primary hover:underline">guia libertino</Link> acompanha cada membro na sua descoberta. Cada avaliação publicada nesta página provém de um membro verificado que realmente participou nos nossos <Link to="/pt/eventos" className="text-primary hover:underline">eventos libertinos</Link> ou utilizou os nossos serviços premium.</p>
              <p>Os nossos testemunhos cobrem todos os aspetos da experiência AKOKY: o ambiente nos <Link to="/pt/clubbing" className="text-primary hover:underline">clubes libertinos parceiros</Link>, a qualidade da nossa <Link to="/pt/app" className="text-primary hover:underline">aplicação móvel</Link>, o respeito pelo consentimento nas festas, a moderação da comunidade e as vantagens da <Link to="/pt/vip" className="text-primary hover:underline">adesão VIP</Link>. Estas experiências permitem aos novos membros compreender melhor a nossa filosofia e juntar-se a uma <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">comunidade libertina</Link> ética e acolhedora.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <span className="text-4xl mb-4 block">⭐</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">★★★★★</span>
                <span className="text-5xl font-black text-primary block">4.7</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Nota média</span>
              </div>
              <div className="text-center">
                <span className="text-4xl mb-4 block">🧾</span>
                <span className="text-5xl font-black text-primary block">60+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">avaliações verificadas</span>
              </div>
              <div className="text-center">
                <span className="text-4xl mb-4 block">✅</span>
                <span className="text-5xl font-black text-primary block">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Avaliações autênticas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews from CSV */}
        <ReviewsList lang="pt" />

        {/* CTA Testemunho */}
        <section className="py-16 px-4 bg-card/30 border-y border-border">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Partilha a tua experiência AKOKY e ganha até 12 meses VIP</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              És membro da nossa comunidade libertina? O teu testemunho é precioso e pode fazer-te ganhar até <strong className="text-foreground">12 meses de subscrição premium</strong>. Partilha a tua experiência autêntica sobre as nossas <Link to="/pt/eventos" className="text-primary hover:underline">festas libertinas</Link>, a nossa <Link to="/pt/app" className="text-primary hover:underline">aplicação</Link> ou os <Link to="/pt/clubbing" className="text-primary hover:underline">estabelecimentos parceiros</Link>, e ajuda a comunidade AKOKY a crescer com respeito e bom ambiente.
            </p>
            <a href="https://akoky.com/pt/contacto-akoky" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
              👉 Quero publicar um testemunho
            </a>
          </div>
        </section>
      </ContentPageLayout>
    </>
  );
};

export default AvaliacoesPt;
