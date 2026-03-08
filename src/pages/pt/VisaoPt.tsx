import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Qual é a missão do AKOKY?", answer: "Oferecer à comunidade libertina europeia uma plataforma premium, segura e ética, que coloque o consentimento, a segurança e a autenticidade no centro de cada interação." },
  { question: "O AKOKY é conforme ao RGPD?", answer: "Sim. O AKOKY é operado pela Liberty-Interactive-Ltd e respeita rigorosamente o RGPD. A proteção de dados é uma prioridade absoluta." },
  { question: "Em que países está disponível o AKOKY?", answer: "O AKOKY está disponível em toda a Europa: França, Espanha, Bélgica, Suíça, Luxemburgo, Alemanha, Itália e Portugal." },
];

const VisaoPt = () => (
  <>
    <MetaTags
      title="AKOKY | A Nossa Visão — A Evolução do Libertinismo Moderno"
      description="Descobre a visão do AKOKY: uma plataforma libertina moderna, segura e responsável. De AcoquinementVotre ao AKOKY, a história de uma evolução."
      canonical="https://akoky.com/pt/visao"
      lang="pt"
    />
    <HreflangTags slug="visao" />
    <ContentPageLayout
      lang="pt"
      title="AKOKY | A Nossa Visão — A Evolução do Libertinismo Moderno"
      description="Descobre a visão do AKOKY: uma plataforma libertina moderna, segura e responsável. De AcoquinementVotre ao AKOKY, a história de uma evolução."
      canonical="https://akoky.com/pt/visao"
      heroTitle="A Nossa Visão"
      heroSubtitle="O AKOKY nasceu de uma convicção: o libertinismo moderno merece uma plataforma à sua altura."
      breadcrumb={[{ label: "A Nossa Visão" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O Nascimento de uma Visão</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY é a evolução natural do AcoquinementVotre, uma plataforma pioneira do libertinismo francês. Ao longo dos anos tornou-se claro que a comunidade libertina merecia mais do que um simples site de encontros: uma verdadeira rede social, um ecossistema completo que combinasse encontros, eventos, clubes e conteúdos educativos num único lugar.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">A Visão AKOKY</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Liberdade Assumida</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY acredita que cada adulto tem o direito de explorar a sua sexualidade livremente, sem julgamentos e sem vergonha. A nossa plataforma oferece um espaço onde a liberdade é celebrada, não tolerada.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Consentimento Claro</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">O consentimento não é um detalhe no AKOKY: é o fundamento de tudo. Cada funcionalidade, cada política, cada decisão editorial é construída em torno do princípio do consentimento livre, informado e entusiasta.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Segurança Reforçada</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">A verificação de identidade, a moderação humana 24h/7d, a encriptação de dados e as opções avançadas de privacidade tornam o AKOKY a plataforma libertina mais segura da Europa.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Tecnologia ao Serviço do Ser Humano</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">O multi-perfil, o chat tipo WhatsApp, o live streaming e a geolocalização inteligente são ferramentas para encontros mais autênticos e uma comunidade mais conectada.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Elegância e Discrição</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY rejeita a vulgaridade. A nossa interface, o nosso vocabulário e os nossos conteúdos editoriais refletem uma visão elegante e respeitosa do libertinismo. A sensualidade não precisa de ser obscena.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VisaoPt;
