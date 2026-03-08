import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "A app AKOKY é gratuita?", answer: "Sim. O download e o uso básico são gratuitos. As funcionalidades premium estão disponíveis com a subscrição VIP." },
  { question: "Está disponível em iOS e Android?", answer: "Sim. O AKOKY é uma PWA compatível com iOS e Android. Acede em akoky.com e adiciona o ícone ao ecrã inicial." },
  { question: "A app respeita a minha privacidade?", answer: "Absolutamente. A geolocalização é aproximada, as fotos podem ser desfocadas automaticamente e o modo incógnito permite-te navegar de forma invisível." },
];

const AppPt = () => (
  <>
    <MetaTags
      title="AKOKY App | Aplicação Libertina Premium iOS e Android Portugal"
      description="Descarrega a app AKOKY: geolocalização, mensagens instantâneas, notificações de eventos e gestão de perfil. A app libertina mais completa da Europa."
      canonical="https://akoky.com/pt/app"
      lang="pt"
    />
    <HreflangTags slug="app" />
    <ContentPageLayout
      lang="pt"
      title="AKOKY App | Aplicação Libertina Premium iOS e Android Portugal"
      description="Descarrega a app AKOKY: geolocalização, mensagens instantâneas, notificações de eventos e gestão de perfil. A app libertina mais completa da Europa."
      canonical="https://akoky.com/pt/app"
      heroTitle="A App Libertina Mais Completa da Europa"
      heroSubtitle="Geolocalização, chat tipo WhatsApp, notificações de eventos e multi-perfil. Tudo no teu smartphone."
      breadcrumb={[{ label: "A App Libertina Mais Completa da Europa" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY App: A Tua Comunidade no Bolso</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">A aplicação AKOKY está disponível como PWA (Progressive Web App) otimizada para iOS e Android. Sem necessidade de download de uma loja de apps: acede diretamente pelo browser e adiciona o ícone ao ecrã inicial.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Funcionalidades Principais</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📍 Geolocalização</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Encontra membros, clubes e eventos perto de ti em tempo real. A geolocalização é aproximada para proteger a tua privacidade: a tua posição exata nunca é revelada.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Mensagens Instantâneas</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Chat individual e em grupo tipo WhatsApp, com confirmações de leitura, envio de fotos e mensagens de voz. Coordena encontros, organiza noitadas e mantém contacto com a tua rede de forma simples e segura.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔔 Notificações de Eventos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Recebe notificações push para os eventos que te interessam: novas noitadas na tua cidade, eventos dos teus clubes favoritos e lembretes de reserva. Nunca percas uma oportunidade.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">👤 Gestão de Perfil e Multi-Perfil</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Atualiza o teu perfil, gere a tua galeria de fotos e alterna entre os teus diferentes perfis (casal, solteiro homem, solteira mulher) com um único toque. A funcionalidade multi-perfil é exclusiva do AKOKY.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Privacidade e Segurança</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">A app AKOKY incorpora as mesmas proteções que a versão web: encriptação ponta a ponta, modo incógnito, desfoque de fotos e controlo total sobre a tua visibilidade. A tua privacidade, sob o teu controlo.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AppPt;
