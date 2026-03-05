import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const QuestionsDebutants = () => (
  <ContentPageLayout
    title="Questions de Débutants : Vos Réponses Ici | AKOKY"
    description="Toutes les questions que vous vous posez sur le libertinage, avec des réponses honnêtes et bienveillantes."
    canonical="https://akoky.com/questions-debutants-libertinage"
    heroTitle="Questions de Débutants : Vos Réponses Ici"
    heroSubtitle="Toutes les questions que vous vous posez (et celles que vous n'osez pas poser), avec des réponses honnêtes et bienveillantes"
    heroImage="https://akoky.com/images/questions-debutants-cover.webp"
    breadcrumb={[{ label: "Guides", href: "/debuter-libertinage" }, { label: "Questions débutants" }]}
    faq={[
      { question: "Est-ce que le libertinage est réservé aux couples expérimentés ?", answer: "Pas du tout. Beaucoup de personnes découvrent le libertinage chaque semaine. Certains établissements proposent même des soirées spéciales débutants." },
      { question: "Faut-il forcément participer lors d'une première soirée ?", answer: "Non. Vous pouvez simplement venir pour observer, découvrir l'ambiance ou passer un moment avec votre partenaire." },
      { question: "Comment dire non sans être mal à l'aise ?", answer: "Simplement et clairement. Un « non merci » suffit toujours. Le refus est normal et respecté." },
      { question: "La jalousie est-elle normale quand on débute ?", answer: "Oui. L'important est d'en parler ouvertement avec son partenaire et d'avancer progressivement." },
      { question: "Peut-on venir juste en couple sans échanger ?", answer: "Bien sûr. De nombreux couples viennent uniquement pour l'ambiance." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Article", name: "Questions de Débutants en Libertinage", url: "https://akoky.com/questions-debutants-libertinage" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-16">
        <div className="flex flex-wrap gap-3">
          <Link to="/premier-club-libertin" className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">1. Premier club libertin</Link>
          <Link to="/premier-rendez-vous-libertin" className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">2. Premier rendez-vous</Link>
          <Link to="/questions-debutants-libertinage" className="px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium">3. FAQ débutants</Link>
        </div>

        <div>
          <p className="text-muted-foreground text-lg leading-relaxed">Débuter dans ce milieu soulève naturellement de nombreuses interrogations. Pas de jugement ici : toutes les questions sont légitimes. Cette FAQ regroupe les questions les plus fréquentes des débutants, avec des réponses claires et honnêtes.</p>
        </div>

        {/* Sections */}
        {[
          { title: "💑 Questions Couple / Solo", items: [
            { q: "Peut-on débuter seul·e ou faut-il être en couple ?", a: "Les deux sont possibles ! Les couples sont majoritaires dans les clubs, mais les célibataires ont également leur place. Femmes seules : accès privilégié. Hommes seuls : accès plus sélectif." },
            { q: "Mon/ma partenaire est intéressé·e, mais moi j'hésite. Dois-je me forcer ?", a: "Non, jamais. Cette exploration ne peut fonctionner que si les deux partenaires sont réellement motivés." },
          ]},
          { title: "🛑 Questions sur les Limites", items: [
            { q: "Comment définir mes limites avant de me lancer ?", a: "Listez vos limites absolues (hard limits) et vos zones de curiosité (soft limits). Ces limites peuvent évoluer avec le temps." },
            { q: "Peut-on changer d'avis en pleine soirée ?", a: "Oui, à tout moment. Le consentement n'est pas un contrat irrévocable." },
          ]},
          { title: "🔒 Questions sur la Sécurité", items: [
            { q: "Comment savoir si un club est sérieux et sûr ?", a: "Sur l'annuaire AKOKY, tous les clubs référencés sont vérifiés. Vérifiez avis, règlement affiché, personnel formé, hygiène." },
            { q: "Comment protéger mon anonymat ?", a: "Utilisez un pseudo, floutez vos photos, ne partagez pas d'infos personnelles. Les clubs interdisent strictement les photos." },
          ]},
          { title: "✋ Questions sur le Consentement", items: [
            { q: "Qu'est-ce qu'un consentement valide ?", a: "Libre, éclairé, spécifique, révocable et enthousiaste. Le silence n'est PAS un consentement." },
            { q: "Comment demander le consentement sans « tuer l'ambiance » ?", a: "Demander le consentement ne tue pas l'ambiance ! Exemples : « Ça vous dirait de nous rejoindre ? », « On peut vous embrasser ? »" },
          ]},
          { title: "🎯 Questions Pratiques", items: [
            { q: "Combien coûte une soirée en club ?", a: "Couples : 40-120€. Femmes seules : souvent gratuit ou 20-40€. Hommes seuls : 80-150€ (si acceptés)." },
            { q: "Faut-il prévenir à l'avance ?", a: "Cela dépend des clubs. Pour votre première fois, appelez le club en avance pour vérifier qu'ils accueillent des débutants." },
          ]},
          { title: "💭 Questions sur les Émotions", items: [
            { q: "Comment gérer la jalousie ?", a: "La jalousie est normale au début. Définissez des limites progressives, utilisez un signal de sécurité, débriefer après chaque expérience." },
            { q: "Est-ce normal de se sentir bizarre ou coupable après ?", a: "Oui, c'est fréquent après les premières fois. Parlez-en ensemble, ne jugez pas vos émotions." },
          ]},
        ].map((section, sIdx) => (
          <div key={sIdx}>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-display">{section.title}</h2>
            <div className="space-y-6">
              {section.items.map((item, iIdx) => (
                <div key={iIdx} className="p-6 bg-card/50 rounded-2xl border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/debuter-libertinage" className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
            <p className="text-foreground font-bold">🌱 Guide complet débutants →</p>
          </Link>
          <Link to="/premier-club-libertin" className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
            <p className="text-foreground font-bold">🏛️ Premier club libertin →</p>
          </Link>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default QuestionsDebutants;
