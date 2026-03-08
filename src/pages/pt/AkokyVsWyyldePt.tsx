import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Check, X, Minus, Trophy, Shield, Users, Zap, MessageCircle, Star } from "lucide-react";

const FAQ = [
  { question: "O AKOKY é melhor que o Wyylde?", answer: "Depende das tuas prioridades. O AKOKY oferece mais funcionalidades inovadoras, enquanto o Wyylde tem uma base de utilizadores estabelecida. Muitos utilizadores usam ambas." },
  { question: "O que tem o AKOKY que o Wyylde não tem?", answer: "Multi-perfil (primeira mundial), chat tipo WhatsApp com grupos, testemunhos verificados, live streaming avançado e jogos integrados." },
  { question: "O Wyylde funciona bem em Portugal?", answer: "O Wyylde tem presença limitada em Portugal. O AKOKY tem uma comunidade local significativamente mais ativa com interface em português." },
  { question: "Posso usar as duas plataformas?", answer: "Claro! Muitos libertinos usam ambas de forma complementar. O AKOKY é ideal para funcionalidades avançadas, o Wyylde para a massa crítica francesa." },
  { question: "Qual é mais segura?", answer: "O AKOKY lidera com o sistema AKOKY Safe: verificação de identidade, moderação humana 24/7, encriptação AES-256 e modo incógnito." },
  { question: "Qual tem melhor relação qualidade-preço?", answer: "O AKOKY oferece mais funcionalidades na versão gratuita. O VIP AKOKY é mais acessível e inclui funcionalidades inexistentes no Wyylde Premium." },
];

const COMPARISON = [
  { feature: "Chat tipo WhatsApp + Grupos", akoky: "check", wyylde: "cross", category: "Comunicação" },
  { feature: "Multi-Perfil (casal/solo)", akoky: "check", wyylde: "cross", category: "Perfil" },
  { feature: "Testemunhos Verificados", akoky: "check", wyylde: "cross", category: "Confiança" },
  { feature: "Live Streaming HD + Replay", akoky: "check", wyylde: "minus", category: "Conteúdo" },
  { feature: "Jogos Libertinos Integrados", akoky: "check", wyylde: "cross", category: "Entretenimento" },
  { feature: "Diretório de Clubes Verificados", akoky: "check", wyylde: "check", category: "Clubes" },
  { feature: "Agenda de Eventos", akoky: "check", wyylde: "check", category: "Eventos" },
  { feature: "Geolocalização Aproximada", akoky: "check", wyylde: "minus", category: "Privacidade" },
  { feature: "Modo Incógnito", akoky: "check", wyylde: "cross", category: "Privacidade" },
  { feature: "Verificação de Identidade", akoky: "check", wyylde: "minus", category: "Segurança" },
  { feature: "Moderação Humana 24/7", akoky: "check", wyylde: "minus", category: "Segurança" },
  { feature: "Encriptação AES-256", akoky: "check", wyylde: "cross", category: "Segurança" },
  { feature: "Interface em Português", akoky: "check", wyylde: "cross", category: "Acessibilidade" },
  { feature: "Compatível Smart TV", akoky: "check", wyylde: "cross", category: "Dispositivos" },
  { feature: "Registo Gratuito Completo", akoky: "check", wyylde: "minus", category: "Preço" },
];

const VERDICT_POINTS = [
  { icon: Zap, title: "Inovação", winner: "AKOKY", desc: "Multi-perfil, chat com grupos e jogos são exclusivos AKOKY. O Wyylde não tem equivalente." },
  { icon: Shield, title: "Segurança", winner: "AKOKY", desc: "AKOKY Safe com verificação, encriptação e moderação 24/7 vs. sistema básico do Wyylde." },
  { icon: Users, title: "Comunidade PT", winner: "AKOKY", desc: "Comunidade portuguesa muito mais ativa no AKOKY, com interface nativa em português." },
  { icon: MessageCircle, title: "Comunicação", winner: "AKOKY", desc: "Chat avançado tipo WhatsApp vs. messagerie classique du Wyylde." },
  { icon: Star, title: "Relação Qualidade/Preço", winner: "AKOKY", desc: "Mais funcionalidades na versão gratuita e VIP mais acessível." },
  { icon: Trophy, title: "Massa Crítica FR", winner: "Wyylde", desc: "O Wyylde mantém uma base mais numerosa em França, o seu mercado histórico." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "AKOKY vs Wyylde", item: "https://akoky.com/pt/akoky-vs-wyylde" },
  ],
};

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "check") return <Check className="w-5 h-5 text-green-400" />;
  if (status === "cross") return <X className="w-5 h-5 text-red-400" />;
  return <Minus className="w-5 h-5 text-yellow-400" />;
};

const AkokyVsWyyldePt = () => (
  <>
    <MetaTags
      title="AKOKY vs Wyylde 2026 | Comparação Completa Portugal — Qual é Melhor?"
      description="Comparação AKOKY vs Wyylde 2026: funcionalidades, preços, segurança. AKOKY, a primeira rede social libertina com chat WhatsApp, multi-perfil e live streaming."
      canonical="https://akoky.com/pt/akoky-vs-wyylde"
      lang="pt"
    />
    <HreflangTags slug="akoky-vs-wyylde" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="AKOKY vs Wyylde 2026 | Comparação Completa Portugal — Qual é Melhor?"
      description="Comparação AKOKY vs Wyylde 2026: 15 critérios analisados."
      canonical="https://akoky.com/pt/akoky-vs-wyylde"
      heroTitle="AKOKY vs Wyylde 2026: Comparação Completa"
      heroSubtitle="O Wyylde é a referência histórica. O AKOKY é o desafiante que reinventa as regras com funcionalidades inéditas."
      breadcrumb={[{ label: "AKOKY vs Wyylde 2026" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Intro */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Por que Comparar AKOKY e Wyylde?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O Wyylde e o AKOKY são as duas plataformas libertinas mais completas disponíveis na Europa. Ambas têm bases de utilizadores significativas e propostas diferenciadas. Esta comparação independente, baseada em 15 critérios objetivos, ajudar-te-á a escolher a que melhor se adapta.
            </p>
          </div>

          {/* Comparison Table */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Tabela Comparativa — 15 Critérios</h2>
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left text-foreground font-bold py-4 px-4">Funcionalidade</th>
                  <th className="text-center text-primary font-bold py-4 px-4 w-24">AKOKY</th>
                  <th className="text-center text-muted-foreground font-bold py-4 px-4 w-24">Wyylde</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((c, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-card/40 transition-colors">
                    <td className="py-3 px-4">
                      <span className="text-foreground text-sm font-medium">{c.feature}</span>
                      <span className="text-xs text-muted-foreground ml-2">({c.category})</span>
                    </td>
                    <td className="text-center py-3 px-4"><StatusIcon status={c.akoky} /></td>
                    <td className="text-center py-3 px-4"><StatusIcon status={c.wyylde} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2">✅ Disponível | ⚠️ Parcial/Limitado | ❌ Indisponível</p>
          </div>

          {/* Verdict */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Veredicto por Categoria</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {VERDICT_POINTS.map((v, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <v.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-foreground font-bold">{v.title}</h3>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${v.winner === "AKOKY" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    🏆 {v.winner}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Final Verdict */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Conclusão: Qual Escolher em Portugal?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="text-primary font-bold text-lg mb-3">Escolhe AKOKY se...</h3>
                <ul className="space-y-2">
                  {["Procuras funcionalidades inovadoras", "Valorizas a segurança e verificação", "Queres interface em português", "Precisas de multi-perfil", "Queres lives e jogos integrados"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card/60 border border-border">
                <h3 className="text-foreground font-bold text-lg mb-3">Escolhe Wyylde se...</h3>
                <ul className="space-y-2">
                  {["Procuras massa crítica no mercado francês", "Já tens uma rede estabelecida na plataforma"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="mb-12">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para os utilizadores portugueses, o AKOKY é a escolha mais completa: interface em português, <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes locais</Link>, <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link> em todo o país e uma comunidade ativa. Consulta também a nossa <Link to="/pt/melhor-sitio-libertino" className="text-primary hover:underline">comparação completa dos sites libertinos</Link>.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              <Trophy className="w-5 h-5" /> Experimentar AKOKY Grátis
            </a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AkokyVsWyyldePt;
