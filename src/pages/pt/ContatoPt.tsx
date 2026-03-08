import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Como contactar o suporte AKOKY?", answer: "Através do nosso formulário online, por email para support@akoky.com ou a partir do teu espaço de membro. A nossa equipa responde em menos de 24 horas úteis." },
  { question: "O AKOKY oferece suporte em português?", answer: "Sim. O nosso suporte está disponível em português, francês, espanhol, alemão e italiano." },
  { question: "Como denunciar um perfil problemático?", answer: "Usa o botão &#39;Denunciar&#39; disponível em cada perfil. A nossa equipa de moderação trata cada denúncia em menos de 2 horas." },
];

const ContatoPt = () => (
  <>
    <MetaTags
      title="AKOKY Portugal | Contacto — Suporte e Assistência Premium"
      description="Contacta o AKOKY: suporte para membros, pedidos de parceiros, imprensa e afiliação. Equipa disponível 24h para te acompanhar."
      canonical="https://akoky.com/pt/contato"
      lang="pt"
    />
    <HreflangTags slug="contato" />
    <ContentPageLayout
      lang="pt"
      title="AKOKY Portugal | Contacto — Suporte e Assistência Premium"
      description="Contacta o AKOKY: suporte para membros, pedidos de parceiros, imprensa e afiliação. Equipa disponível 24h para te acompanhar."
      canonical="https://akoky.com/pt/contato"
      heroTitle="Contactar o AKOKY"
      heroSubtitle="A nossa equipa está disponível 24h para te ajudar. Encontra o canal de contacto adequado para o teu pedido."
      breadcrumb={[{ label: "Contactar o AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Suporte para Membros</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Tens uma questão sobre a tua conta, uma funcionalidade ou uma experiência na plataforma? A nossa equipa de suporte responde em menos de 24 horas úteis. Acede ao formulário de contacto a partir do teu espaço de membro para uma resposta mais rápida.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Email de Suporte</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">support@akoky.com — Para todas as questões relativas à tua conta e às funcionalidades da plataforma.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Horários</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Segunda a sexta: 9-20h. Sábado e domingo: 10-18h. Tempo de resposta habitual: menos de 24 horas úteis.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Pedidos de Parceria</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Geres um clube libertino, organizas eventos ou representas um media? Temos propostas específicas para cada perfil.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Clubes Libertinos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Referencia o teu estabelecimento no diretório AKOKY e acede à nossa comunidade de 1,5 milhões de membros. Contacta a nossa equipa de parcerias para as condições.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Organizadores de Eventos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Publica os teus eventos no calendário AKOKY e beneficia da nossa visibilidade. Escreve-nos para partenaires@akoky.com.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Media e Influencers</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Para pedidos de imprensa, entrevistas ou colaborações editoriais: presse@akoky.com. A nossa equipa de comunicação responde em 48 horas úteis.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Denunciar um Perfil</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Se encontrares um perfil ou conteúdo que não respeita a carta AKOKY, utiliza o botão &#39;Denunciar&#39; disponível em cada perfil. A nossa equipa de moderação trata cada denúncia em menos de 2 horas.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ContatoPt;
