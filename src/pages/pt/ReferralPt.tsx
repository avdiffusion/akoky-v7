import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "O programa de referral é gratuito?", answer: "Sim. A participação no programa de referral é completamente gratuita para todos os membros AKOKY." },
  { question: "Quando são atribuídas as vantagens?", answer: "As vantagens são atribuídas automaticamente quando o novo membro ativa a sua conta com o teu link de referral." },
  { question: "Existe um limite de referrals?", answer: "Não. Podes convidar quantas pessoas quiseres. Quanto mais convidares, mais vantagens acumulas." },
];

const ReferralPt = () => (
  <>
    <MetaTags
      title="Programa de Referral AKOKY | Convida Amigos e Ganha Vantagens"
      description="Convida os teus amigos para o AKOKY e ganha vantagens exclusivas: acesso VIP, eventos gratuitos e muito mais. O programa de referral da comunidade libertina."
      canonical="https://akoky.com/pt/referral"
      lang="pt"
    />
    <HreflangTags slug="referral" />
    <ContentPageLayout
      lang="pt"
      title="Programa de Referral AKOKY | Convida Amigos e Ganha Vantagens"
      description="Convida os teus amigos para o AKOKY e ganha vantagens exclusivas: acesso VIP, eventos gratuitos e muito mais. O programa de referral da comunidade libertina."
      canonical="https://akoky.com/pt/referral"
      heroTitle="Programa de Referral AKOKY"
      heroSubtitle="Convida os teus amigos, ganha vantagens exclusivas e faz crescer a tua comunidade."
      breadcrumb={[{ label: "Programa de Referral AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Como Funciona o Programa de Referral?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O programa de referral do AKOKY recompensa-te por fazer crescer a comunidade. Cada novo membro que se regista com o teu link de referral dá-te direito a vantagens exclusivas: dias VIP gratuitos, acesso prioritário a eventos e muito mais.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">As Tuas Vantagens</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Dias VIP Gratuitos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Por cada amigo que se regista com o teu link e ativa a sua conta, recebes dias de subscrição VIP gratuitos. Quanto mais amigos convidares, mais tempo desfrutes das vantagens VIP.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Acesso Prioritário a Eventos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Os melhores referrers têm acesso prioritário aos eventos mais exclusivos do AKOKY: noitadas privadas em villas, fins de semana temáticos e experiências VIP.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Badge de Referrer</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Os membros que trouxeram novos membros para a comunidade recebem um badge especial visível no seu perfil. Um reconhecimento da tua contribuição para a comunidade.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Como Começar?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Acede ao teu espaço de membro AKOKY, vai à secção &#39;Referral&#39; e copia o teu link pessoal. Partilha-o com os teus amigos, nas redes sociais ou onde quiseres. Cada registo com o teu link é contabilizado automaticamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ReferralPt;
