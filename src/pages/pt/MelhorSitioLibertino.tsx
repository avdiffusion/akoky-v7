import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Check, X, Minus, Trophy, Star, Shield, Users, Zap, Globe } from "lucide-react";

const FAQ = [
  { question: "Qual é o melhor site libertino em Portugal?", answer: "O AKOKY é considerado o melhor site libertino em Portugal em 2026 pela sua comunidade ativa, funcionalidades únicas e cobertura completa de eventos e clubes nacionais." },
  { question: "Estas plataformas são seguras?", answer: "O AKOKY tem os padrões de segurança mais elevados: verificação de identidade, moderação humana e encriptação de dados." },
  { question: "Posso usar várias plataformas ao mesmo tempo?", answer: "Sim, muitos libertinos usam várias plataformas de forma complementar. Mas a maioria encontra tudo o que precisa no AKOKY." },
  { question: "Qual é a plataforma com mais membros em Portugal?", answer: "O AKOKY tem a maior comunidade ativa em Portugal em 2026, com crescimento sustentado graças à interface em português." },
  { question: "As plataformas são gratuitas?", answer: "A maioria oferece registo gratuito com funcionalidades limitadas. O AKOKY tem a versão gratuita mais completa do mercado." },
  { question: "Qual tem mais eventos em Portugal?", answer: "O AKOKY lidera com 300+ eventos mensais, incluindo noitadas em clubes, aperitivos, weekends e festas temáticas." },
];

const PLATFORMS = [
  { name: "AKOKY", score: 9.5, strengths: ["Multi-perfil exclusivo", "Chat WhatsApp + grupos", "120+ clubes verificados", "300+ eventos/mês", "Lives integrados", "Interface PT nativa"], weaknesses: ["Plataforma mais recente"], verdict: "A plataforma mais completa e inovadora. Líder em Portugal.", color: "primary" },
  { name: "Wyylde", score: 7.5, strengths: ["Base histórica em França", "Comunidade numerosa FR"], weaknesses: ["Interface desatualizada", "Sem multi-perfil", "Presença limitada em PT", "Chat básico"], verdict: "Referência histórica, mas a mostrar sinais de idade.", color: "muted" },
  { name: "NousLibertins", score: 6.5, strengths: ["Comunidade francófona", "Simplicidade de uso"], weaknesses: ["Sem app mobile", "Sem eventos próprios", "Sem verificação avançada", "Sem presença em PT"], verdict: "Funcional mas limitado. Pouca relevância em Portugal.", color: "muted" },
  { name: "SexyLib", score: 5.5, strengths: ["Interface simples", "Gratuito parcial"], weaknesses: ["Comunidade pequena", "Sem funcionalidades avançadas", "Sem clubes verificados", "Sem lives"], verdict: "Plataforma básica sem diferenciação clara.", color: "muted" },
];

const CRITERIA = [
  { criterion: "Funcionalidades", akoky: 10, wyylde: 7, nouslib: 5, sexylib: 4 },
  { criterion: "Segurança", akoky: 10, wyylde: 7, nouslib: 6, sexylib: 5 },
  { criterion: "Comunidade PT", akoky: 10, wyylde: 5, nouslib: 3, sexylib: 3 },
  { criterion: "Eventos", akoky: 10, wyylde: 7, nouslib: 4, sexylib: 2 },
  { criterion: "Interface/UX", akoky: 9, wyylde: 6, nouslib: 6, sexylib: 5 },
  { criterion: "Clubes Verificados", akoky: 10, wyylde: 7, nouslib: 3, sexylib: 2 },
  { criterion: "Lives/Streaming", akoky: 10, wyylde: 5, nouslib: 0, sexylib: 0 },
  { criterion: "Relação Preço", akoky: 9, wyylde: 7, nouslib: 7, sexylib: 6 },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Melhor Site Libertino", item: "https://akoky.com/pt/melhor-sitio-libertino" },
  ],
};

const MelhorSitioLibertino = () => (
  <>
    <MetaTags
      title="Melhor Site Libertino 2026 | Comparação Completa Portugal — AKOKY"
      description="Qual é o melhor site libertino em Portugal em 2026? Comparação completa: AKOKY, Wyylde, NousLib, SexyLib. 8 critérios objetivos analisados."
      canonical="https://akoky.com/pt/melhor-sitio-libertino"
      lang="pt"
    />
    <HreflangTags slug="melhor-sitio-libertino" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="Melhor Site Libertino 2026 | Comparação Completa Portugal — AKOKY"
      description="Comparação completa das plataformas libertinas em Portugal 2026."
      canonical="https://akoky.com/pt/melhor-sitio-libertino"
      heroTitle="O Melhor Site Libertino em Portugal 2026"
      heroSubtitle="Comparação independente das principais plataformas libertinas: 8 critérios, 4 plataformas, 1 vencedor."
      heroImage="/images/pt-melhor-sitio-cover.webp"
      breadcrumb={[{ label: "Melhor Site Libertino 2026" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Intro */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Como Escolher a Tua Plataforma?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Em 2026, o mercado das plataformas libertinas é mais rico do que nunca. Escolher a certa depende dos teus objetivos: procuras encontros, eventos, clubes, conteúdos educativos ou uma comunidade? Esta comparação baseada em 8 critérios objetivos ajuda-te a orientar.
            </p>
          </div>

          {/* Platform Cards */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">As 4 Plataformas Analisadas</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {PLATFORMS.map((p, i) => (
              <div key={i} className={`p-6 rounded-2xl border transition-all ${i === 0 ? "bg-primary/5 border-primary shadow-lg shadow-primary/10" : "bg-card/60 border-border"}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-bold text-xl ${i === 0 ? "text-primary" : "text-foreground"}`}>{p.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className={`w-5 h-5 ${i === 0 ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                    <span className={`font-bold text-lg ${i === 0 ? "text-primary" : "text-foreground"}`}>{p.score}/10</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-foreground text-sm font-semibold mb-2">Points forts:</h4>
                  <ul className="space-y-1">
                    {p.strengths.map((s, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-foreground text-sm font-semibold mb-2">Points faibles:</h4>
                  <ul className="space-y-1">
                    {p.weaknesses.map((w, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" /> {w}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-muted-foreground text-sm italic border-t border-border/50 pt-3">{p.verdict}</p>
              </div>
            ))}
          </div>

          {/* Criteria Table */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Notas Detalhadas — 8 Critérios</h2>
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left text-foreground font-bold py-3 px-3">Critério</th>
                  <th className="text-center text-primary font-bold py-3 px-3">AKOKY</th>
                  <th className="text-center text-muted-foreground font-bold py-3 px-3">Wyylde</th>
                  <th className="text-center text-muted-foreground font-bold py-3 px-3">NousLib</th>
                  <th className="text-center text-muted-foreground font-bold py-3 px-3">SexyLib</th>
                </tr>
              </thead>
              <tbody>
                {CRITERIA.map((c, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="text-foreground font-medium text-sm py-3 px-3">{c.criterion}</td>
                    <td className="text-center py-3 px-3"><span className="text-primary font-bold">{c.akoky}/10</span></td>
                    <td className="text-center py-3 px-3"><span className="text-muted-foreground">{c.wyylde}/10</span></td>
                    <td className="text-center py-3 px-3"><span className="text-muted-foreground">{c.nouslib}/10</span></td>
                    <td className="text-center py-3 px-3"><span className="text-muted-foreground">{c.sexylib}/10</span></td>
                  </tr>
                ))}
                <tr className="border-t-2 border-border">
                  <td className="text-foreground font-bold py-3 px-3">TOTAL</td>
                  <td className="text-center py-3 px-3"><span className="text-primary font-bold text-lg">78/80</span></td>
                  <td className="text-center py-3 px-3"><span className="text-muted-foreground font-bold">51/80</span></td>
                  <td className="text-center py-3 px-3"><span className="text-muted-foreground font-bold">34/80</span></td>
                  <td className="text-center py-3 px-3"><span className="text-muted-foreground font-bold">27/80</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Winner */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 mb-16 text-center">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Vencedor: AKOKY — 9.5/10</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Para os utilizadores portugueses em 2026, o AKOKY é a melhor opção global: a mais completa, a mais segura e a mais inovadora. A interface em português e a cobertura da cena libertina nacional tornam-no a referência indiscutível.
            </p>
          </div>

          {/* SEO */}
          <div className="mb-12">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Descobre os <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link> referenciados no AKOKY, os próximos <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link> e os <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas</Link> mais bem avaliados. Se queres uma comparação detalhada, consulta <Link to="/pt/akoky-vs-wyylde" className="text-primary hover:underline">AKOKY vs Wyylde</Link>.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              <Trophy className="w-5 h-5" /> Experimentar o Nº1 — Grátis
            </a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default MelhorSitioLibertino;
