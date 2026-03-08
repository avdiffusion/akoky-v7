import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Qual é o tempo de resposta do suporte?", answer: "A equipa responde em menos de 24 horas úteis. Os membros VIP têm suporte prioritário com resposta em menos de 4 horas." },
  { question: "O suporte está disponível em português?", answer: "Sim. O suporte AKOKY está disponível em português, francês, espanhol, alemão e italiano." },
  { question: "Como denunciar um problema de segurança?", answer: "Usa o botão 'Denunciar' disponível em cada perfil ou contacta-nos por email para security@akoky.com. Tratamos cada denúncia com prioridade máxima." },
  { question: "Posso propor uma parceria comercial?", answer: "Sim. Envia a tua proposta para partnerships@akoky.com com detalhes sobre o teu negócio e a parceria pretendida." },
];

const ContactGuidePt = () => (
  <>
    <MetaTags title="Contacto AKOKY | Suporte e Atendimento ao Cliente" description="Contacta a equipa AKOKY: suporte técnico, consultas comerciais, imprensa. Equipa disponível em português 24h." canonical="https://akoky.com/pt/contacto-akoky" lang="pt" />
    <HreflangTags slug="contacto-akoky" />
    <ContentPageLayout lang="pt" title="Contacto AKOKY | Suporte e Atendimento ao Cliente" description="Contacta a equipa AKOKY." canonical="https://akoky.com/pt/contacto-akoky" heroTitle="Contactar AKOKY" heroSubtitle="A nossa equipa está aqui para te ajudar" heroType="cover" heroImage="/images/akoky.webp" breadcrumb={[{ label: "Contactar AKOKY" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Canais de Contacto</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">A equipa AKOKY está disponível através de vários canais para responder às tuas necessidades. Seja para suporte técnico, questões comerciais, parcerias ou imprensa, encontra o canal adequado abaixo.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">📧 Suporte Geral</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Para questões sobre a tua conta, funcionalidades da plataforma ou problemas técnicos: <strong>support@akoky.com</strong>. Resposta em menos de 24h úteis.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">🤝 Parcerias e Clubes</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Se geres um <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clube libertino</Link> ou <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">sauna</Link> e queres aparecer no diretório AKOKY, ou para qualquer proposta de parceria comercial: <strong>partnerships@akoky.com</strong>.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">📰 Imprensa e Mídia</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Pedidos de entrevista, press kits, dados estatísticos e comunicados de imprensa: <strong>press@akoky.com</strong>. Consulta também a nossa <Link to="/pt/sala-de-imprensa" className="text-primary hover:underline">sala de imprensa</Link> para recursos disponíveis.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">🔒 Segurança</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Para denunciar um problema de segurança, um perfil fraudulento ou qualquer comportamento inadequado: <strong>security@akoky.com</strong>. Tratamento prioritário em menos de 2 horas.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Informação da Empresa</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY é operado pela Liberty-Interactive-Ltd, uma empresa europeia dedicada ao desenvolvimento de plataformas sociais seguras e éticas para adultos. Sede na Europa, com equipa distribuída em vários países europeus.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Junta-te à Comunidade</h3>
            <p className="text-muted-foreground mb-4">Regista-te gratuitamente e descobre todo o ecossistema AKOKY.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Criar Conta Gratuita</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ContactGuidePt;
