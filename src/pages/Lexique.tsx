import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Lexique = () => (
  <ContentPageLayout
    title="Lexique Libertin – Vocabulaire du Libertinage de A à Z | AKOKY"
    description="Le dictionnaire le plus complet du libertinage en français : plus de 200 termes définis de A à Z. Comprenez les pratiques, les codes et le vocabulaire libertin."
    canonical="https://akoky.com/lexique"
    heroTitle="Lexique Libertin"
    heroSubtitle="Le vocabulaire du libertinage de A à Z"
    heroImage="https://akoky.com/images/lexique-libertine-cover.webp"
    breadcrumb={[{ label: "Lexique" }]}
    faq={[
      { question: "Qu'est-ce que l'échangisme ?", answer: "L'échangisme consiste, pour deux couples, à échanger leurs partenaires pour des moments intimes. Cette pratique repose sur un accord mutuel entre les quatre personnes impliquées." },
      { question: "Qu'est-ce que le candaulisme ?", answer: "Le candaulisme est une pratique où un homme éprouve du plaisir à voir sa partenaire avoir des relations sexuelles avec d'autres hommes, tout en restant spectateur." },
      { question: "Qu'est-ce qu'une licorne (unicorn) dans le milieu libertin ?", answer: "Une « licorne » désigne une femme bisexuelle célibataire qui rejoint des couples pour des expériences à trois. Le terme vient de la rareté supposée de ce profil." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "DefinedTermSet", name: "Lexique Libertin AKOKY", url: "https://akoky.com/lexique" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-12">
        <div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">Le <strong>lexique libertin AKOKY</strong> est le <strong>dictionnaire le plus complet du libertinage en français</strong> avec plus de <strong>200 termes définis de A à Z</strong>. Destiné aux <Link to="/debuter-libertinage" className="text-primary hover:underline">débutants curieux</Link>, couples en exploration, célibataires et libertins confirmés.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 font-display">Explorer le Lexique par Catégorie</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🔄", title: "Pratiques Libertines", desc: "Échangisme, mélangisme, candaulisme, triolisme..." },
              { icon: "👥", title: "Profils & Rôles", desc: "Couple libertin, unicorn, bull, cuckold, hotwife..." },
              { icon: "📍", title: "Lieux & Événements", desc: "Club libertin, sauna, soirée privée, gang bang party..." },
              { icon: "🌈", title: "Orientations & Identités", desc: "Bi-curieux, pansexuel, sapiosexuel, hétéroflexible..." },
              { icon: "💞", title: "Relations & Structures", desc: "Polyamour, couple libre, throuple, ethical non-monogamy..." },
              { icon: "🛡️", title: "Consentement & Sécurité", desc: "Safe word, soft limit, hard limit, aftercare..." },
            ].map((c, i) => (
              <div key={i} className="p-4 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{c.icon}</span>
                <h3 className="text-foreground font-bold mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sample entries */}
        {[
          { letter: "A", terms: [
            { term: "Aftercare", def: "Moment de soin et d'attention après une pratique sexuelle intense, particulièrement important dans le BDSM." },
            { term: "Annuaire libertin", def: "Répertoire en ligne listant les clubs libertins, saunas, soirées et événements libertins d'une région ou d'un pays." },
          ]},
          { letter: "B", terms: [
            { term: "BDSM", def: "Acronyme pour Bondage, Discipline, Domination, Soumission, Sadisme et Masochisme. Ensemble de pratiques érotiques consensuelles." },
            { term: "Bi-curieux", def: "Personne hétérosexuelle qui ressent une curiosité ou une attirance occasionnelle pour des expériences homosexuelles." },
          ]},
          { letter: "C", terms: [
            { term: "Candaulisme", def: "Pratique où un homme éprouve du plaisir à voir sa partenaire avoir des relations sexuelles avec d'autres hommes, tout en restant spectateur." },
            { term: "Club libertin", def: "Établissement privé dédié aux rencontres et pratiques libertines avec espaces de socialisation et salons privés." },
          ]},
          { letter: "E", terms: [
            { term: "Échangisme", def: "Pratique consistant, pour deux couples, à échanger leurs partenaires pour des rapports sexuels consentis." },
            { term: "Exhibitionnisme", def: "Plaisir de se montrer, d'être observé et admiré pendant des moments intimes dans un cadre sécurisé et consenti." },
          ]},
          { letter: "M", terms: [
            { term: "Mélangisme", def: "Pratique libertine soft où les couples s'embrassent et se caressent mutuellement sans aller jusqu'à la pénétration avec d'autres partenaires." },
          ]},
          { letter: "T", terms: [
            { term: "Triolisme", def: "Relation sexuelle à trois personnes. Peut s'agir d'un couple qui invite une troisième personne à les rejoindre." },
          ]},
          { letter: "V", terms: [
            { term: "Voyeurisme", def: "Plaisir de regarder d'autres personnes lors de moments intimes, toujours avec leur consentement explicite." },
          ]},
        ].map((section, sIdx) => (
          <div key={sIdx}>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display border-b border-border pb-2">{section.letter}</h2>
            <div className="space-y-4">
              {section.terms.map((t, tIdx) => (
                <div key={tIdx}>
                  <h3 className="text-foreground font-bold">{t.term}</h3>
                  <p className="text-muted-foreground text-sm">{t.def}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-muted-foreground text-center italic">Le lexique complet avec plus de 200 termes est disponible sur l'application AKOKY.</p>

        <div className="text-center">
          <Link to="/libertinage" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Comprendre le libertinage →</Link>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Lexique;
