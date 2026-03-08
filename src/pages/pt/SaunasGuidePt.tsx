import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Droplets, Thermometer, Shield, Users, Clock, Star } from "lucide-react";

/* ═══════════ FAQ ═══════════ */
const FAQ = [
  { question: "O que é uma sauna libertina?", answer: "Uma sauna libertina combina instalações de bem-estar (jacuzzi, hammam, sauna seca, piscina) com espaços íntimos para encontros consentidos entre adultos." },
  { question: "Qual é a diferença entre sauna e clube libertino?", answer: "O clube privilegia a festa (bar, música, pista de dança). A sauna centra-se no bem-estar e no relaxamento, com um ambiente mais calmo e propício a contactos naturais." },
  { question: "Preciso de levar alguma coisa?", answer: "A maioria dos saunas fornece toalha e chinelos. Leva apenas o essencial: identificação, preservativos (embora sejam fornecidos) e artigos de higiene pessoal." },
  { question: "A nudez é obrigatória?", answer: "Nos espaços de água e sauna, a nudez é habitual e encorajada. Nas zonas de bar e convívio, podes usar toalha ou roupão." },
  { question: "As saunas são adequadas para principiantes?", answer: "Absolutamente. O ambiente relaxado e sem dress code complexo torna os saunas o formato ideal para quem está a começar no libertinismo." },
  { question: "Posso ir sozinho/a a uma sauna libertina?", answer: "Depende do estabelecimento. Alguns aceitam singles, outros são exclusivamente para casais. Consulta a ficha no AKOKY." },
  { question: "Quanto custa a entrada?", answer: "Entre 25€ e 50€ por casal na maioria dos saunas em Portugal. Mulheres solteiras têm frequentemente preço reduzido." },
  { question: "Os saunas são higiénicos?", answer: "Sim. Os saunas verificados pelo AKOKY cumprem normas rigorosas de higiene: limpeza contínua, toalhas frescas, produtos desinfetantes disponíveis." },
];

/* ═══════════ FACILITIES ═══════════ */
const FACILITIES = [
  { icon: Droplets, title: "Jacuzzi", desc: "Jacuzzi misto, frequentemente o local dos primeiros contactos. Ambiente relaxado e convivial.", tag: "Essencial" },
  { icon: Thermometer, title: "Sauna Finlandesa", desc: "Sauna seca tradicional com temperaturas entre 80°C e 100°C. Ideal para descontrair antes de socializar.", tag: "Clássico" },
  { icon: Droplets, title: "Hammam", desc: "Banho de vapor húmido a 40-50°C. Ambiente sensual e envolvente, perfeito para contactos suaves.", tag: "Sensual" },
  { icon: Droplets, title: "Piscina Interior", desc: "Presente nos saunas premium. Permite nadar e relaxar num ambiente aquecido e íntimo.", tag: "Premium" },
  { icon: Shield, title: "Cabinas Privadas", desc: "Espaços fechados para dois ou quatro pessoas. Intimidade total com porta que fecha por dentro.", tag: "Íntimo" },
  { icon: Star, title: "Zona de Massagens", desc: "Área dedicada a massagens sensuais entre casais ou com massagista profissional (nos saunas premium).", tag: "Wellness" },
];

/* ═══════════ COMPARISON ═══════════ */
const COMPARISON = [
  { criteria: "Dress code", sauna: "Toalha / nu", clube: "Elegante / sexy" },
  { criteria: "Ambiente", sauna: "Relaxado, calmo", clube: "Festivo, enérgico" },
  { criteria: "Primeiro contacto", sauna: "Natural (jacuzzi)", clube: "Social (bar, pista)" },
  { criteria: "Horários", sauna: "Tarde + noite", clube: "Noite + madrugada" },
  { criteria: "Ideal para", sauna: "Principiantes, casais", clube: "Experientes, festas" },
  { criteria: "Preço médio", sauna: "25-40€/casal", clube: "30-80€/casal" },
  { criteria: "Espaços wellness", sauna: "✅ Jacuzzi, hammam, sauna", clube: "❌ Geralmente não" },
  { criteria: "Música / DJ", sauna: "❌ Ambiente calmo", clube: "✅ DJ, pista de dança" },
];

/* ═══════════ TOP SAUNAS PT ═══════════ */
const TOP_SAUNAS = [
  { name: "Sauna Termal Porto", city: "Porto", rating: "4.5/5", highlight: "Maior sauna do Norte — Piscina, Jacuzzi XXL, Hammam", price: "35€/casal" },
  { name: "Sauna Atlântico Funchal", city: "Funchal", rating: "4.4/5", highlight: "Jardim tropical, jacuzzi exterior, cabinas temáticas", price: "30€/casal" },
  { name: "Sauna Oceano Algarve", city: "Portimão", rating: "4.4/5", highlight: "Vista oceânica panorâmica, massagens profissionais", price: "35€/casal" },
  { name: "Sauna Paraíso Lisboa", city: "Lisboa", rating: "4.3/5", highlight: "Coração de Lisboa, jacuzzi, hammam, cabinas", price: "30€/casal" },
  { name: "Sauna Costa Azul", city: "Almada", rating: "4.3/5", highlight: "Jacuzzi exterior, piscina climatizada, vista mar", price: "30€/casal" },
];

/* ═══════════ TIPS ═══════════ */
const TIPS = [
  { icon: "🚿", title: "Duche Obrigatório", desc: "Toma sempre duche antes de entrar nos espaços comuns. É uma regra de higiene e de respeito." },
  { icon: "🧴", title: "Hidratação", desc: "Bebe água regularmente. O calor da sauna e do hammam desidrata — mantém-te hidratado/a." },
  { icon: "🤝", title: "Consentimento", desc: "Mesmo na nudez, o consentimento é obrigatório. Não tocar sem permissão explícita." },
  { icon: "⏰", title: "Chega Cedo", desc: "Nas primeiras visitas, chega cedo para explorares o espaço com calma e te familiarizares." },
  { icon: "🔇", title: "Discrição", desc: "Fala em tom moderado. O ambiente da sauna é de relaxamento — respeita a tranquilidade dos outros." },
  { icon: "📵", title: "Sem Telemóvel", desc: "Telemóveis e fotografias são estritamente proibidos em todos os espaços da sauna." },
];

/* ═══════════ SCHEMA ═══════════ */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Saunas Libertinos — Guia", item: "https://akoky.com/pt/saunas-libertinos-guia" },
  ],
};

const SaunasGuidePt = () => (
  <>
    <MetaTags
      title="Saunas Libertinos em Portugal 2026 | Guia Completo — AKOKY"
      description="Guia completo dos saunas libertinos em Portugal: instalações, etiqueta, preços, comparação com clubes. Descobre os melhores saunas verificados pelo AKOKY."
      canonical="https://akoky.com/pt/saunas-libertinos-guia"
      lang="pt"
    />
    <HreflangTags slug="saunas-libertinos-guia" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="Saunas Libertinos em Portugal 2026 | Guia Completo — AKOKY"
      description="Guia completo dos saunas libertinos em Portugal."
      canonical="https://akoky.com/pt/saunas-libertinos-guia"
      heroTitle="Saunas Libertinos em Portugal"
      heroSubtitle="O guia completo: instalações, etiqueta, preços e os melhores saunas verificados pelo AKOKY."
      heroImage="/images/sauna-cover-fr.webp"
      breadcrumb={[{ label: "Saunas Libertinos — Guia" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Intro */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Droplets className="w-4 h-4" /> Guia Wellness Libertino
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">O Universo dos Saunas Libertinos</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Os saunas libertinos combinam o melhor do bem-estar com a liberdade dos encontros entre adultos. Em Portugal, esta tendência está em plena ascensão: jacuzzi, hammam, sauna finlandesa e cabinas privadas num ambiente relaxado e propício a contactos naturais. Quer sejas principiante ou experiente, este guia cobre tudo o que precisas de saber.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              O AKOKY referencia os <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">melhores saunas verificados em Portugal</Link> com fichas detalhadas, fotografias, avaliações e informações práticas.
            </p>
          </div>

          {/* Facilities Grid */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Instalações Típicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {FACILITIES.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/5 text-primary">{f.tag}</span>
                </div>
                <h3 className="text-foreground font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Sauna vs Clube Libertino</h2>
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground text-sm font-semibold">Critério</th>
                  <th className="text-center py-3 px-4 text-sm font-bold text-cyan-400">♨️ Sauna</th>
                  <th className="text-center py-3 px-4 text-sm font-bold text-amber-400">🏛️ Clube</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-card/40 transition-colors">
                    <td className="py-3 px-4 text-foreground font-semibold text-sm">{row.criteria}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground text-sm">{row.sauna}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground text-sm">{row.clube}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Top Saunas PT */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Top 5 Saunas Libertinos em Portugal</h2>
          <div className="space-y-4 mb-16">
            {TOP_SAUNAS.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/30 transition-all flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-2xl font-black text-primary">#{i + 1}</span>
                  <div>
                    <h3 className="text-foreground font-bold">{s.name}</h3>
                    <span className="text-muted-foreground text-xs">{s.city}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm flex-1">{s.highlight}</p>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-amber-500/10 text-amber-400">⭐ {s.rating}</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/10 text-primary">{s.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Etiqueta e Dicas Práticas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {TIPS.map((t, i) => (
              <div key={i} className="p-5 rounded-xl bg-card/60 border border-border">
                <span className="text-2xl block mb-2">{t.icon}</span>
                <h3 className="text-foreground font-bold text-sm mb-1">{t.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* SEO */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Descobre o Wellness Libertino</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os saunas libertinos são o formato ideal para quem procura <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar no libertinismo</Link> num ambiente sem pressão. Combina bem-estar com encontros naturais, explora os <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos em Portugal</Link> e consulta os próximos <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Descarrega a <Link to="/pt/app" className="text-primary hover:underline">aplicação AKOKY</Link> para encontrar saunas perto de ti e ler as <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações verificadas</Link> de cada estabelecimento.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              Explorar os Saunas no AKOKY
            </a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default SaunasGuidePt;
