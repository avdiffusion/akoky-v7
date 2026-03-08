import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Users, Building2, Newspaper, Shield, Clock, Globe } from "lucide-react";

const FAQ = [
  { question: "Como contactar o suporte AKOKY?", answer: "Através do nosso formulário online, por email para support@akoky.com ou a partir do teu espaço de membro. A nossa equipa responde em menos de 24 horas úteis." },
  { question: "O AKOKY oferece suporte em português?", answer: "Sim. O nosso suporte está disponível em português, francês, espanhol, alemão e italiano." },
  { question: "Como denunciar um perfil problemático?", answer: "Usa o botão 'Denunciar' disponível em cada perfil. A nossa equipa de moderação trata cada denúncia em menos de 2 horas." },
  { question: "Qual é o tempo de resposta do suporte?", answer: "Membros gratuitos: menos de 24h úteis. Membros VIP: menos de 4h com suporte prioritário dedicado." },
  { question: "Posso contactar o AKOKY para uma parceria?", answer: "Sim! Clubes, organizadores de eventos e média podem contactar-nos em partenaires@akoky.com para discutir oportunidades de parceria." },
  { question: "Onde encontro as condições legais?", answer: "Todas as informações legais (RGPD, termos de uso, política de cookies) estão disponíveis em legal.akoky.com." },
];

const CONTACT_CHANNELS = [
  { icon: Mail, title: "Suporte Geral", email: "support@akoky.com", desc: "Questões sobre conta, funcionalidades e experiência na plataforma.", response: "< 24h úteis" },
  { icon: Building2, title: "Parcerias — Clubes", email: "partenaires@akoky.com", desc: "Referencia o teu estabelecimento no diretório AKOKY e acede a 1,5M de membros.", response: "< 48h úteis" },
  { icon: Users, title: "Parcerias — Eventos", email: "partenaires@akoky.com", desc: "Publica os teus eventos no calendário AKOKY e beneficia da nossa visibilidade.", response: "< 48h úteis" },
  { icon: Newspaper, title: "Imprensa e Média", email: "presse@akoky.com", desc: "Pedidos de imprensa, entrevistas, colaborações editoriais e visuais HD.", response: "< 48h úteis" },
  { icon: Shield, title: "Denúncias e Segurança", email: "Botão 'Denunciar' no perfil", desc: "Denúncia de perfis falsos, assédio ou comportamentos que violem a carta AKOKY.", response: "< 2h" },
  { icon: Globe, title: "Afiliação", email: "affiliation@akoky.com", desc: "Programa de afiliação para bloggers, influencers e criadores de conteúdo lifestyle.", response: "< 72h" },
];

const SUPPORT_HOURS = [
  { day: "Segunda a Sexta", hours: "09:00 — 20:00" },
  { day: "Sábado", hours: "10:00 — 18:00" },
  { day: "Domingo", hours: "10:00 — 18:00" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Contacto", item: "https://akoky.com/pt/contato" },
  ],
};

const ContatoPt = () => (
  <>
    <MetaTags
      title="AKOKY Portugal | Contacto — Suporte e Assistência Premium"
      description="Contacta o AKOKY: suporte para membros, pedidos de parceiros, imprensa e afiliação. Equipa disponível 7/7 para te acompanhar."
      canonical="https://akoky.com/pt/contato"
      lang="pt"
    />
    <HreflangTags slug="contato" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="AKOKY Portugal | Contacto — Suporte e Assistência Premium"
      description="Contacta o AKOKY: suporte para membros, pedidos de parceiros, imprensa e afiliação."
      canonical="https://akoky.com/pt/contato"
      heroTitle="Contactar o AKOKY"
      heroSubtitle="A nossa equipa está disponível 7/7 para te ajudar. Encontra o canal de contacto adequado para o teu pedido."
      heroImage="/images/pt-contacto-cover.webp"
      breadcrumb={[{ label: "Contacto" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Contact Channels */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Canais de Contacto</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {CONTACT_CHANNELS.map((c, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/5 text-primary flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {c.response}
                  </span>
                </div>
                <h3 className="text-foreground font-bold mb-1">{c.title}</h3>
                <p className="text-primary text-sm font-semibold mb-2">{c.email}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Hours */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" /> Horários de Suporte
                </h2>
                <div className="space-y-3">
                  {SUPPORT_HOURS.map((h, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-card/60 border border-border/50">
                      <span className="text-foreground font-semibold text-sm">{h.day}</span>
                      <span className="text-primary font-bold text-sm">{h.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs mt-4">Tempo de resposta habitual: menos de 24 horas úteis. Membros VIP: menos de 4h.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" /> Contacto Rápido
                </h2>
                <div className="space-y-4">
                  {[
                    { label: "Suporte membros", value: "support@akoky.com" },
                    { label: "Parcerias", value: "partenaires@akoky.com" },
                    { label: "Imprensa", value: "presse@akoky.com" },
                    { label: "Afiliação", value: "affiliation@akoky.com" },
                    { label: "Informações legais", value: "legal.akoky.com" },
                  ].map((c, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">{c.label}</span>
                      <span className="text-primary font-semibold text-sm">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VIP Support */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-16">
            <div className="flex items-start gap-4">
              <span className="text-3xl">👑</span>
              <div>
                <h3 className="text-foreground font-bold text-lg mb-2">Suporte VIP Prioritário</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Os membros <Link to="/pt/vip" className="text-primary hover:underline">VIP</Link> beneficiam de suporte prioritário com tempo de resposta inferior a 4 horas, gestor de conta dedicado e assistência por chat em direto.
                </p>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Estamos Aqui para Ti</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O AKOKY é mais do que uma plataforma: é uma comunidade. Se tens questões sobre os <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link>, os <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link>, ou simplesmente precisas de ajuda a <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar</Link>, a nossa equipa está disponível para te guiar.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Consulta também o nosso <Link to="/pt/lexico-libertino" className="text-primary hover:underline">léxico libertino</Link>, a página de <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações</Link> e a <Link to="/pt/app" className="text-primary hover:underline">aplicação</Link> para tirares o máximo partido da plataforma.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              Criar a Minha Conta Grátis
            </a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ContatoPt;
