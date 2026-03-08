import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Quais são as vantagens do estatuto VIP AKOKY?", answer: "Acesso a eventos exclusivos, multi-perfil certificado, álbuns privados, lives VIP, mensagens prioritárias e badge de confiança visível pela comunidade." },
  { question: "O que é a funcionalidade multi-perfil?", answer: "A funcionalidade exclusiva AKOKY que te permite criar vários perfis (casal, solteiro homem, solteira mulher) numa única conta, com mudança em um único clique." },
  { question: "Como obter a certificação VIP?", answer: "A certificação é concedida após verificação de identidade. Garante à comunidade que és realmente a pessoa indicada no teu perfil." },
];

const VipPt = () => (
  <>
    <MetaTags
      title="AKOKY VIP | Subscrição Premium — Acesso Exclusivo Comunidade Libertina"
      description="Descobre a subscrição VIP AKOKY: acesso exclusivo a eventos libertinos privados, multi-perfil certificado e comunidade premium segura."
      canonical="https://akoky.com/pt/vip"
      lang="pt"
    />
    <HreflangTags slug="vip" />
    <ContentPageLayout
      lang="pt"
      title="AKOKY VIP | Subscrição Premium — Acesso Exclusivo Comunidade Libertina"
      description="Descobre a subscrição VIP AKOKY: acesso exclusivo a eventos libertinos privados, multi-perfil certificado e comunidade premium segura."
      canonical="https://akoky.com/pt/vip"
      heroTitle="Estatuto VIP AKOKY"
      heroSubtitle="Acede a privilégios exclusivos e vive a experiência libertina ao seu mais alto nível."
      breadcrumb={[{ label: "Estatuto VIP AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Porque Tornar-se VIP no AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O estatuto VIP AKOKY é muito mais do que uma subscrição: é o teu passe para uma experiência libertina de nível superior. Mais funcionalidades, mais exclusividade, mais confiança da comunidade.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Multi-Perfil: Uma Só Conta, Várias Identidades</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Uma Única Conta</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Com o estatuto VIP podes criar até três perfis diferentes (casal, solteiro homem, solteira mulher) sob uma única conta. Cada perfil tem a sua própria galeria, descrição e configurações de privacidade.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Mudança com Um Único Clique</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Muda de perfil instantaneamente consoante o contexto: usa o perfil casal para os eventos em clube, o perfil individual para os aperitivos, sem precisar de fazer logout.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Certificação Obrigatória</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos os perfis VIP são certificados através de verificação de identidade. O badge de confiança é visível para toda a comunidade, aumentando significativamente a tua credibilidade.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Vantagens Exclusivas VIP</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Eventos Exclusivos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Os membros VIP têm acesso prioritário e exclusivo aos eventos mais seletos do AKOKY: noitadas privadas em villas, fins de semana de luxo, encontros íntimos com seleção de convidados.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Álbuns Privados</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Cria álbuns fotográficos privados com controlo total de acessos: decide quem pode ver as tuas fotos e por quanto tempo. Partilha de forma segura e seletiva.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Lives Exclusivos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Acede aos lives mais exclusivos da plataforma: noitadas em clubes de luxo, conteúdos VIP e transmissões privadas reservadas à comunidade premium.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VipPt;
