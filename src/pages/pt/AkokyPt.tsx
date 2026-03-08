import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Shield, Users, Heart, Sparkles, BookOpen, Gamepad2, Newspaper } from "lucide-react";

const FAQ = [
  { question: "O que é o AKOKY e para que serve a plataforma?", answer: "O AKOKY é uma plataforma comunitária adulta europeia dedicada a encontros, clubes parceiros e eventos privados. Destina-se a casais, solteiros e perfis curiosos que desejem evoluir num quadro estruturado, respeitoso e seguro." },
  { question: "Em que se diferencia o AKOKY das outras plataformas?", answer: "Ao contrário de outras plataformas, o AKOKY combina uma rede comunitária, um diretório de clubes parceiros verificados, eventos privados enquadrados, lives exclusivos e uma abordagem ética centrada no consentimento e na qualidade das trocas." },
  { question: "Como garante o AKOKY a segurança e a discrição dos membros?", answer: "Cada perfil é moderado manualmente, os dados são protegidos segundo as normas RGPD, e ferramentas avançadas permitem gerir a visibilidade dos perfis e das fotos. O serviço AKOKY Safe reforça a proteção dos membros diariamente." },
  { question: "A inscrição no AKOKY é gratuita?", answer: "Sim. A inscrição é gratuita e permite descobrir a plataforma, os clubes parceiros e os eventos. Uma subscrição VIP opcional desbloqueia funcionalidades avançadas como mensagens ilimitadas e acesso a eventos exclusivos." },
  { question: "Quem pode usar o AKOKY?", answer: "O AKOKY está aberto a casais, mulheres solteiras, homens solteiros (sob condições), solteiros e perfis poliamorosos. Cada evento especifica claramente os perfis aceites." },
  { question: "O AKOKY propõe eventos adaptados a principiantes?", answer: "Sim. O AKOKY organiza eventos acessíveis a principiantes, como aperitivos de descoberta, visitas guiadas a clubes e noitadas pedagógicas. Um guia dedicado está igualmente disponível para compreender os códigos." },
];

const STATS = [
  { value: "1.5M+", label: "Membros Ativos", link: "/pt" },
  { value: "120+", label: "Clubes Libertinos Verificados", link: "/pt/clubes-libertinos" },
  { value: "300+", label: "Eventos Libertinos/Mês", link: "/pt/eventos" },
  { value: "20+", label: "Lives Libertinos/Semana", link: "/pt/live" },
];

const VALUES = [
  { num: "01", title: "Autenticidade dos perfis e das trocas", desc: "O AKOKY valoriza perfis reais, transparentes e coerentes. A sinceridade prevalece sobre a encenação, de modo a favorecer encontros adultos baseados na confiança e expectativas claramente expressas." },
  { num: "02", title: "Segurança, confidencialidade e proteção de dados", desc: "A plataforma integra ferramentas de segurança avançadas, moderação humana ativa e gestão rigorosa dos dados pessoais para garantir a discrição e o bem-estar de cada membro." },
  { num: "03", title: "Respeito, consentimento e limites claros", desc: "O consentimento explícito, o respeito pelos limites e a tolerância zero face a comportamentos intrusivos ou deslocados constituem a base de todas as interações no AKOKY." },
  { num: "04", title: "Elegância e abordagem responsável do lifestyle adulto", desc: "O AKOKY defende uma visão refinada e responsável do lifestyle adulto, oposta ao voyeurismo, ao conteúdo de má qualidade ou às plataformas oportunistas, privilegiando a qualidade das experiências em vez da quantidade." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "A Nossa Missão", item: "https://akoky.com/pt/akoky" },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AKOKY",
  url: "https://akoky.com",
  logo: "https://akoky.com/images/logo-akoky.webp",
  description: "Plataforma comunitária adulta europeia dedicada a encontros, clubes parceiros e eventos privados.",
  foundingDate: "2014",
};

const AkokyPt = () => (
  <>
    <MetaTags
      title="A Nossa Missão AKOKY | Valores, Visão e Compromissos — Comunidade Libertina Premium"
      description="Descobre os valores, a visão e os compromissos da comunidade AKOKY: a plataforma libertina premium europeia com 1.5M de membros, 120+ clubes e 300+ eventos mensais."
      canonical="https://akoky.com/pt/akoky"
      lang="pt"
      ogImage="https://akoky.com/images/akoky.webp"
    />
    <HreflangTags slug="akoky" />
    <SchemaOrg schema={[breadcrumbSchema, orgSchema]} />
    <ContentPageLayout
      lang="pt"
      title="A Nossa Missão AKOKY | Valores, Visão e Compromissos — Comunidade Libertina Premium"
      description="Descobre os valores, a visão e os compromissos da comunidade AKOKY."
      canonical="https://akoky.com/pt/akoky"
      heroTitle="A Nossa Missão AKOKY"
      heroSubtitle="Descobre os valores, a visão e os compromissos da comunidade Akoky"
      heroImage="/images/pt-visao-cover.webp"
      breadcrumb={[{ label: "A Nossa Missão AKOKY" }]}
      faq={FAQ}
    >
      {/* Section: Notre Mission */}
      <section className="py-16 md:py-24 px-4">
        <div className="container max-w-5xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">A Nossa Missão</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A Aplicação AKOKY: a experiência comunitária adulta no teu bolso</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Nascido de um projeto comunitário iniciado em 2014 e estruturado na sua forma atual desde 2020, o AKOKY desenvolve uma <Link to="/pt/app" className="text-primary hover:underline">aplicação mobile premium</Link> disponível em iOS e Android. Permite a mais de <Link to="/pt" className="text-primary hover:underline">1,5 milhão de membros</Link> descobrir <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes parceiros verificados</Link>, seguir <Link to="/pt/eventos" className="text-primary hover:underline">eventos privados cada mês</Link> e aceder a um ecossistema pensado para os encontros adultos modernos, fundado na discrição, no respeito e numa abordagem ética do lifestyle.
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <a href="https://akoky.com/application.html" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold hover:scale-105 transition-all inline-flex items-center gap-2">
              📱 Transferir para iOS
            </a>
            <a href="https://akoky.com/application.html" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold hover:scale-105 transition-all inline-flex items-center gap-2">
              🤖 Transferir para Android
            </a>
          </div>
          <p className="text-muted-foreground text-sm mb-10">Compatível iOS 13+ | ChromeOS | Android TV</p>

          {/* App Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-border mb-16">
            <img src="/images/3tel.webp" alt="Screenshot da aplicação AKOKY" className="w-full h-auto" loading="lazy" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {STATS.map((s, i) => (
              <Link key={i} to={s.link} className="text-center p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all group">
                <span className="text-3xl md:text-4xl font-bold text-primary block mb-2 group-hover:scale-110 transition-transform">{s.value}</span>
                <span className="text-muted-foreground text-sm">{s.label}</span>
              </Link>
            ))}
          </div>

          {/* Lexique Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Léxico Libertino Completo: Domina o Vocabulário do Libertinismo Moderno</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O nosso <Link to="/pt/lexico-libertino" className="text-primary hover:underline">léxico libertino</Link> referencia mais de 200 termos essenciais para compreender o <Link to="/pt/libertinismo" className="text-primary hover:underline">libertinismo moderno</Link>. Do <strong>swapping</strong> ao <strong>mélangisme</strong>, do <strong>candaulismo</strong> ao <strong>triolismo</strong>, descobre as definições precisas de todas as práticas libertinas. Quer sejas <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">principiante</Link> ou membro confirmado, este dicionário libertino permitir-te-á navegar com toda a confiança nos <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link>, nos <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link> e na nossa plataforma.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O AKOKY distingue-se de <strong>Wyylde</strong>, <strong>NousLibertins</strong>, <strong>Libertic</strong> e <strong>SexyLib</strong> pela sua abordagem pedagógica única. A nossa <Link to="/pt/visao" className="text-primary hover:underline">carta ética</Link> coloca o <strong>consentimento explícito</strong>, a <strong>discrição absoluta</strong> e o <strong>respeito pelos limites</strong> no centro de cada interação. Mais do que um simples site de encontros libertinos, o AKOKY é uma comunidade educativa onde cada membro pode florescer em total segurança.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Explora o nosso léxico para compreender os códigos das <strong>noitadas libertinas</strong>, as práticas do <strong>soft swap</strong> e do <strong>full swap</strong>, as nuances entre <strong>exibicionismo</strong> e <strong>voyeurismo</strong>, ou ainda as regras do <strong>gang bang</strong> respeitoso. Quer seja em <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">sauna libertino</Link> ou em clube, cada termo é explicado simplesmente, sem julgamento, com exemplos concretos dos testemunhos da nossa <Link to="/pt/avaliacoes" className="text-primary hover:underline">comunidade de 1.5M de membros</Link>. Uma abordagem educativa que valoriza a autenticidade, o respeito mútuo e a comunicação honesta.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Porque este léxico é único:</strong> Ao contrário de outras plataformas, o AKOKY enriquece continuamente o seu léxico graças aos retornos da comunidade. As nossas definições integram as evoluções do <Link to="/pt/libertinismo" className="text-primary hover:underline">libertinismo moderno</Link>, as novas práticas (como o <strong>throuple</strong> ou o <strong>poliamor ético</strong>), e os códigos específicos de cada região (Portugal, Espanha, Europa). Transfere a nossa <Link to="/pt/app" className="text-primary hover:underline">aplicação</Link> para aceder ao léxico offline durante as tuas noitadas em <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clube</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pt/lexico-libertino" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold hover:scale-105 transition-all inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Explorar o Léxico Libertino Completo (200+ Termos) →
              </Link>
              <a href="https://www.youtube.com/@akoky" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary/10 transition-all inline-flex items-center gap-2">
                🎥 Descobrir o canal YouTube do AKOKY
              </a>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Os valores fundadores do AKOKY</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              O AKOKY assenta numa visão clara dos encontros adultos modernos: um quadro estruturado, uma ética assumida e regras concebidas para garantir experiências respeitosas, seguras e de qualidade.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {VALUES.map((v, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/30 transition-all">
                  <span className="text-primary font-bold text-2xl mb-3 block">{v.num}</span>
                  <h3 className="text-foreground font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-muted-foreground leading-relaxed">
                No AKOKY, os encontros adultos não são um pretexto.<br />
                <strong className="text-foreground">Implicam responsabilidade, respeito e maturidade.</strong>
              </p>
            </div>
          </div>

          {/* Jeux / Games Section */}
          <div className="mb-16 bg-card/40 border border-border rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4">
                  <Gamepad2 className="w-4 h-4" /> Jogos Akoky
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Joga no teu telemóvel… ou na tua TV</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dado animado, desafios picantes, imersão total. Os jogos Akoky são concebidos para apimentar as tuas noitadas a dois ou a vários, no mobile como no ecrã grande.
                </p>
                <div className="mb-4">
                  <Link to="/pt/jogos" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold hover:scale-105 transition-all inline-flex items-center gap-2">
                    ▶ Jogar agora – Grátis
                  </Link>
                </div>
                <p className="text-muted-foreground text-sm">📺 Compatível TV · Chromecast · Smart TV</p>
              </div>
              <div className="flex items-center justify-center p-6">
                <img src="/images/app-tv.webp" alt="Jogos Akoky na televisão e grande ecrã" className="rounded-xl max-h-80 w-auto" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Mission SEO Block */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A Nossa Missão: Revolucionar o Libertinismo com Ética e Transparência</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fundado em <strong>2014</strong> por uma equipa apaixonada pelo <Link to="/pt/libertinismo" className="text-primary hover:underline">lifestyle libertino</Link>, o AKOKY tornou-se em 4 anos <strong>uma das plataformas comunitárias libertinas mais ativas da Europa</strong> com 1.5 milhão de membros ativos. Posicionamo-nos como a alternativa ética a <strong>Wyylde</strong>, <strong>NousLibertins</strong>, <strong>Libertic</strong> e <strong>SexyLib</strong>, colocando o <Link to="/pt/visao" className="text-primary hover:underline">consentimento</Link> e a <strong>transparência</strong> no centro do nosso ADN.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O nosso ecossistema único combina uma <strong>rede social libertina segura</strong>, um <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">diretório de 120 clubes verificados</Link> (Portugal, Espanha, Europa), <Link to="/pt/eventos" className="text-primary hover:underline">300 eventos mensais</Link> organizados por profissionais formados, <Link to="/pt/live" className="text-primary hover:underline">20 lives libertinos semanais</Link> e uma <Link to="/pt/app" className="text-primary hover:underline">aplicação mobile de ponta</Link> com geolocalização em tempo real. Cada funcionalidade é pensada para facilitar <strong>encontros libertinos autênticos</strong> garantindo ao mesmo tempo <strong>discrição</strong> e <strong>segurança</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O AKOKY não é apenas um simples site de encontros: é uma <strong>comunidade acolhedora</strong> que acompanha <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">os principiantes</Link> com um <Link to="/pt/lexico-libertino" className="text-primary hover:underline">léxico completo</Link>, um <Link to="/pt/blog" className="text-primary hover:underline">blog educativo</Link> e <Link to="/pt/avaliacoes" className="text-primary hover:underline">testemunhos autênticos</Link> (nota média 4.7/5). A nossa missão: democratizar o libertinismo moderno quebrando tabus, educando sem julgar, e criando um espaço onde casais, solteiros e curiosos possam florescer livremente no respeito mútuo.
            </p>
          </div>

          {/* Press Section */}
          <div className="mb-16 bg-card/40 border border-border rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4">
                  <Newspaper className="w-4 h-4" /> Espaço Imprensa
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Espaço Imprensa AKOKY — Dossier média e recursos oficiais</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bem-vindo ao espaço imprensa do AKOKY (akoky.com), a plataforma libertina de referência na Europa. Encontra aqui todos os nossos comunicados de imprensa, dossiers média, visuais oficiais e contactos para qualquer pedido jornalístico.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A nossa missão? Oferecer um espaço seguro, moderno e autêntico para casais e solteiros que desejam explorar o lifestyle libertino com elegância e respeito. Deseja falar do AKOKY nos seus média? Contacte a nossa equipa de imprensa para entrevistas, visuais HD ou qualquer informação complementar.
                </p>
                <Link to="/pt/sala-de-imprensa" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold hover:scale-105 transition-all inline-flex items-center gap-2 self-start">
                  Aceder ao dossier de imprensa →
                </Link>
              </div>
              <div className="flex items-center justify-center p-6">
                <img src="/images/akoky-presse.webp" alt="AKOKY Press Kit" className="rounded-xl max-h-80 w-auto" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Segurança Máxima e Discrição Garantida: A Diferença AKOKY</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Face aos problemas de <strong>perfis falsos</strong> e <strong>fugas de dados</strong> encontrados noutras plataformas libertinas, o AKOKY desenvolveu o <strong>AKOKY Safe</strong>, o nosso sistema de segurança proprietário de tripla camada. Cada perfil é <strong>verificado manualmente</strong> pela nossa equipa (foto + documento de identidade opcional para o badge certificado), todos os dados pessoais são <strong>encriptados end-to-end</strong> (norma bancária AES-256), e a nossa infraestrutura é <strong>conforme RGPD</strong> com alojamento na Europa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ao contrário de outros sites libertinos, o AKOKY oferece um <strong>modo incógnito</strong> na <Link to="/pt/app" className="text-primary hover:underline">aplicação</Link>, a possibilidade de desfocar as tuas fotos (visíveis apenas após aceitação mútua), e um sistema de <strong>geolocalização aproximada</strong> (raio de 5-10km) para proteger o teu endereço exato. As tuas <Link to="/pt/eventos" className="text-primary hover:underline">reservas de eventos</Link> e visitas em <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clube</Link> permanecem estritamente confidenciais: nenhuma informação é partilhada sem o teu consentimento explícito.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A nossa equipa de <strong>moderação 24/7</strong> (humanos, não bots) remove imediatamente qualquer conteúdo inapropriado, assédio ou desrespeito pelo <Link to="/pt/visao" className="text-primary hover:underline">consentimento</Link>. Resultado: o AKOKY apresenta uma taxa de satisfação de <strong>4.7/5</strong> em segurança segundo os nossos <Link to="/pt/avaliacoes" className="text-primary hover:underline">60+ testemunhos verificados</Link>. A discrição faz parte do nosso ADN desde 2020.
            </p>
            <a href="https://safe.akoky.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold hover:scale-105 transition-all inline-flex items-center gap-2">
              🛡️ Descobrir AKOKY Safe →
            </a>
          </div>

          {/* CTA Section */}
          <div className="text-center py-12 px-6 rounded-2xl bg-card/60 border border-border">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto para te juntares à comunidade?</h2>
            <p className="text-muted-foreground mb-8">Inscreve-te gratuitamente e descobre um universo de possibilidades</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/20">
              <Sparkles className="w-5 h-5" /> Criar a minha conta grátis
            </a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AkokyPt;
