import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Faut-il obligatoirement participer lors de sa première visite ?", answer: "Non, absolument pas. Observer fait partie intégrante de l'expérience. Vous pouvez passer toute la soirée au bar, discuter, danser et observer sans jamais participer activement. Personne ne vous jugera." },
  { question: "Comment choisir son premier club libertin ?", answer: "Renseignez-vous sur les avis, le dress code, la clientèle habituelle et les tarifs. Privilégiez un club reconnu pour son accueil des débutants. Consultez l'annuaire AKOKY pour trouver un établissement vérifié près de chez vous." },
  { question: "Peut-on venir seul(e) dans un club libertin ?", answer: "Cela dépend des clubs. Certains acceptent les hommes seuls et les femmes seules, d'autres sont réservés aux couples. Vérifiez la politique d'admission avant de vous déplacer." },
  { question: "Que faire si on ne se sent pas à l'aise une fois sur place ?", answer: "Vous pouvez partir à tout moment, sans justification. Si un comportement vous dérange, n'hésitez pas à en parler au staff. Votre confort est la priorité." },
];

const PremierClubLibertin = () => (
  <>
    <MetaTags
      title="Votre Premier Club Libertin 2026 – Guide Complet | AKOKY"
      description="Guide complet pour votre premier club libertin : comment choisir, s'y préparer et profiter de l'expérience. Conseils AKOKY."
      canonical="https://akoky.com/fr/premier-club-libertin"
      lang="fr"
      ogImage="https://akoky.com/images/premier-club-cover.webp"
    />
    <HreflangTags slug="premier-club-libertin" />
    <ContentPageLayout
      lang="fr"
      title="Votre Premier Club Libertin 2026 – Guide Complet"
      description="Guide complet pour votre premier club libertin : comment choisir, s'y préparer et profiter de l'expérience."
      canonical="https://akoky.com/fr/premier-club-libertin"
      heroTitle="Votre Premier Club Libertin : Le Guide Complet"
      heroSubtitle="Tout ce qu'il faut savoir pour vivre cette première expérience sereinement et avec confiance"
      heroImage="https://akoky.com/fr/images/premier-club-cover.webp"
      breadcrumb={[{ label: "Premier Club Libertin" }]}
      faq={FAQ}
    >
      {/* Guides étape par étape */}
      <section className="py-8 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-foreground mb-4">Guides étape par étape</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/fr/premier-club-libertin" className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary">1. Votre premier club libertin</Link>
            <Link to="/fr/premier-rendez-vous-libertin" className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors">2. Votre premier rendez-vous</Link>
            <Link to="/fr/questions-debutants-libertinage" className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors">3. FAQ débutants</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-4">Votre première visite dans un club peut susciter une multitude d'émotions : excitation, curiosité, mais aussi une pointe d'appréhension. C'est parfaitement normal ! Ce guide est conçu pour vous préparer à chaque étape de cette soirée, de la préparation mentale jusqu'aux premiers échanges sur place.</p>
          <div className="bg-card border border-border rounded-xl p-5 mt-4">
            <h3 className="font-semibold text-foreground mb-3">📌 Points clés à retenir</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Aucune obligation de participer activement dès la première visite</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Observer fait partie intégrante de l'expérience</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Le "non" est toujours respecté sans exception</span></li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Vous pouvez partir à tout moment si vous ne vous sentez pas à l'aise</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Préparation mentale */}
      <section className="py-12 px-4 bg-card/50" id="preparation">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">🧠 Préparation mentale : L'essentiel avant de partir</h2>

          <div className="space-y-8">
            {/* 1. Limites */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">1. Définissez vos limites en couple</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">Avant même de franchir la porte d'un établissement, il est crucial d'avoir eu <strong className="text-foreground">une discussion approfondie avec votre partenaire</strong>. Cette conversation doit aborder vos limites respectives, vos curiosités et vos appréhensions.</p>
              <h4 className="font-medium text-foreground mb-2">Questions à se poser ensemble :</h4>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Qu'est-ce qui nous attire dans cette expérience ?</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Quelles sont nos limites absolues (hard limits) ?</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Sommes-nous prêts à simplement observer ce soir ?</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Qu'est-ce qui serait acceptable ? Qu'est-ce qui ne l'est pas ?</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Comment signalerons-nous l'un à l'autre si quelque chose ne va pas ?</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Avons-nous un "safe word" ou un signal discret ?</span></li>
              </ul>
              <p className="text-sm text-primary/80 bg-primary/5 p-3 rounded-lg">💡 <strong>Conseil pro :</strong> Notez vos limites sur papier avant de partir. Cela permet de clarifier les choses et d'éviter les malentendus dans le feu de l'action.</p>
            </div>

            {/* 2. Attentes */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2. Gérez vos attentes</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Beaucoup de débutants arrivent avec des attentes irréalistes basées sur des films ou des fantasmes. La réalité d'un club est souvent plus douce, plus humaine et moins "performative" qu'imaginé.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background border border-border rounded-xl p-4">
                  <p className="text-sm font-medium text-destructive mb-1">❌ Mythe</p>
                  <p className="text-muted-foreground text-sm mb-2">Tout le monde participe dès l'arrivée</p>
                  <p className="text-sm font-medium text-green-500 mb-1">✅ Réalité</p>
                  <p className="text-muted-foreground text-sm">Beaucoup passent la soirée à discuter, danser ou simplement observer</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-4">
                  <p className="text-sm font-medium text-destructive mb-1">❌ Mythe</p>
                  <p className="text-muted-foreground text-sm mb-2">On sera sollicité constamment</p>
                  <p className="text-sm font-medium text-green-500 mb-1">✅ Réalité</p>
                  <p className="text-muted-foreground text-sm">Le respect des espaces personnels est la règle, on n'insiste jamais</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-4">
                  <p className="text-sm font-medium text-destructive mb-1">❌ Mythe</p>
                  <p className="text-muted-foreground text-sm mb-2">Il faut être "canon" pour être accepté</p>
                  <p className="text-sm font-medium text-green-500 mb-1">✅ Réalité</p>
                  <p className="text-muted-foreground text-sm">Tous les physiques sont bienvenus, la bienveillance prime</p>
                </div>
              </div>
            </div>

            {/* 3. Émotions */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">3. Anticipez vos émotions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Il est normal de ressentir une palette d'émotions lors de votre première visite : excitation, stress, jalousie, curiosité... Toutes ces émotions sont légitimes.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background border border-border rounded-xl p-5">
                  <span className="text-2xl mb-2 block">😰</span>
                  <h4 className="font-semibold text-foreground mb-2">Si vous vous sentez stressé·e</h4>
                  <p className="text-muted-foreground text-sm">Prenez votre temps au bar, observez l'ambiance, discutez avec votre partenaire. Personne ne vous juge si vous restez en retrait.</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-5">
                  <span className="text-2xl mb-2 block">💚</span>
                  <h4 className="font-semibold text-foreground mb-2">Si vous ressentez de la jalousie</h4>
                  <p className="text-muted-foreground text-sm">C'est normal au début. Utilisez votre signal pour en parler avec votre partenaire, prenez une pause ensemble, rappelez-vous pourquoi vous êtes là.</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-5">
                  <span className="text-2xl mb-2 block">✨</span>
                  <h4 className="font-semibold text-foreground mb-2">Si vous vous sentez à l'aise</h4>
                  <p className="text-muted-foreground text-sm">Parfait ! Mais restez attentif·ve aux signaux de votre partenaire. Avancez à deux, pas en solo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenue vestimentaire */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">👗 Que porter pour votre première soirée ?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">La tenue vestimentaire varie selon le type d'établissement. Consultez toujours le <strong className="text-foreground">dress code</strong> sur le site du club avant de vous rendre sur place.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-3">🎩 Club élégant</h3>
              <h4 className="text-sm font-medium text-foreground mb-2">Pour Madame :</h4>
              <ul className="space-y-1 mb-3">
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Robe de soirée, robe courte sexy ou lingerie fine</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Talons hauts recommandés</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Maquillage soigné</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Lingerie élégante (visible ou pas)</span></li>
              </ul>
              <h4 className="text-sm font-medium text-foreground mb-2">Pour Monsieur :</h4>
              <ul className="space-y-1 mb-3">
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Costume, chemise habillée</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Chaussures de ville cirées</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Éviter les baskets, shorts, survêtements</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Boxer élégant recommandé</span></li>
              </ul>
              <p className="text-sm text-destructive/80">⚠️ À éviter : Jogging, claquettes, tongs, vêtements de sport</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-3">♨️ Sauna / Hammam</h3>
              <h4 className="text-sm font-medium text-foreground mb-2">Pour tous :</h4>
              <ul className="space-y-1 mb-3">
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Serviette fournie sur place</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Maillot de bain optionnel (rarement porté)</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Tongs pour les zones humides</span></li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">•</span><span>Trousse de toilette (gel douche fourni généralement)</span></li>
              </ul>
              <p className="text-sm text-primary/80 bg-primary/5 p-3 rounded-lg">💡 <strong>Bon à savoir :</strong> Dans ces établissements, la nudité est plus naturelle et acceptée</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-3">🎭 Soirée thématique</h3>
              <p className="text-muted-foreground text-sm mb-3">Certains clubs organisent des soirées à thème : <em>black & white</em>, <em>années 80</em>, <em>cuir & latex</em>, <em>masquerade</em>, etc.</p>
              <p className="text-sm text-muted-foreground">Consultez l'événement sur <Link to="/fr/evenements" className="text-primary hover:underline">notre calendrier</Link> pour connaître le dress code spécifique.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-3">✅ Checklist de votre sac pour la soirée</h3>
              <ul className="space-y-2">
                {["Préservatifs (le club en fournit mais prévoyez les vôtres)", "Gel lubrifiant", "Lingettes intimes", "Brosse à dents / chewing-gum", "Tenue de rechange confortable", "Chargeur de téléphone", "Eau / boisson (selon règlement du club)", "Argent liquide (certains clubs n'acceptent pas la CB)"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-green-500">✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Codes et règles */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">📜 Les codes et règles à respecter</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Chaque établissement a ses propres règles, mais certains principes sont universels dans tous les clubs sérieux.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { emoji: "🚫", title: "Règle #1 : Le consentement est absolu", text: "\"Non\" veut dire \"Non\". Pas d'insistance, pas de négociation. Si quelqu'un refuse, on s'éloigne immédiatement avec le sourire. Le silence ou l'hésitation ne valent PAS un \"oui\"." },
              { emoji: "👀", title: "Règle #2 : Regarder, mais avec respect", text: "Observer est permis dans les espaces collectifs, mais fixez avec bienveillance. Si un couple demande de l'intimité, respectez leur espace. Certains espaces sont \"spectateurs bienvenus\", d'autres non." },
              { emoji: "💬", title: "Règle #3 : Approche respectueuse", text: "On ne touche jamais sans demander. Commencez par un regard, un sourire, une invitation verbale (\"Vous voulez vous joindre à nous ?\"). Restez poli et courtois même en cas de refus." },
              { emoji: "🧼", title: "Règle #4 : Hygiène irréprochable", text: "Douche obligatoire avant toute interaction. Réutilisez les douches entre deux moments. Utilisez systématiquement des préservatifs. Coupez vos ongles. L'hygiène est une marque de respect." },
              { emoji: "🤐", title: "Règle #5 : Discrétion absolue", text: "Ce qui se passe au club reste au club. Pas de photos sans autorisation explicite. Si vous croisez quelqu'un à l'extérieur, ne le saluez pas sauf s'il vous salue en premier. Respectez l'anonymat de chacun." },
              { emoji: "🍷", title: "Règle #6 : Alcool avec modération", text: "Un verre pour se détendre, oui. Mais l'alcool ne doit jamais altérer votre jugement ou celui des autres. Les personnes ivres ne peuvent pas consentir." },
              { emoji: "💕", title: "Règle #7 : Le couple prime", text: "Si vous êtes en couple, votre partenaire passe avant tout. Surveillez ses signaux, prenez des pauses ensemble, débriefez régulièrement. Vous êtes une équipe." },
            ].map((rule, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{rule.emoji}</span>
                  <h3 className="font-semibold text-foreground">{rule.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{rule.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-destructive/10 border border-destructive/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-3">⚠️ Comportements interdits</h3>
            <p className="text-muted-foreground text-sm mb-3">Ces comportements entraînent une exclusion immédiate :</p>
            <ul className="space-y-2">
              {["Insistance malgré un refus", "Toucher sans consentement", "Photographier/filmer sans autorisation", "Comportement agressif ou irrespectueux", "Révéler l'identité d'autres membres à l'extérieur", "État d'ébriété avancé"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-destructive">✕</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Déroulé type */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">⏱️ Déroulé type d'une première soirée</h2>

          <div className="space-y-6">
            {[
              { time: "21h00", title: "Arrivée & Accueil", text: "Vous êtes accueillis à l'entrée. On vous explique le règlement, les espaces du club, les tarifs (entrée + vestiaire + consommations). N'hésitez pas à mentionner que c'est votre première fois : le personnel sera encore plus attentionné.", tip: "Arrivez plutôt en début de soirée pour découvrir les lieux avant l'affluence. Vous serez moins intimidés." },
              { time: "21h30", title: "Installation & Observation", text: "Installez-vous au bar ou dans un salon confortable. Prenez un verre, discutez entre vous, observez l'ambiance qui s'installe. C'est le moment d'apprivoiser les lieux sans pression.", tip: "Visitez tous les espaces du club (salons, piste de danse, espaces câlins, fumoir) pour vous familiariser avec la configuration." },
              { time: "22h30", title: "Premiers Échanges", text: "L'ambiance se réchauffe. Vous pouvez engager la conversation avec d'autres couples au bar ou sur la piste de danse. Restez naturels, posez des questions, écoutez les expériences des autres.", tip: "\"C'est notre première fois\" est une excellente phrase d'accroche. Les habitués adorent conseiller les nouveaux." },
              { time: "23h30", title: "Observation Active (Optionnel)", text: "Si vous vous sentez à l'aise, vous pouvez vous rapprocher des espaces câlins pour observer ce qui s'y passe. Certains couples aiment être regardés, d'autres préfèrent plus d'intimité. Respectez les signaux.", tip: "Restez en retrait, ne fixez pas intensément, et éloignez-vous si on vous le demande." },
              { time: "00h30", title: "Point Couple", text: "Prenez une pause tous les deux. Isolez-vous quelques minutes pour faire le point : \"Comment tu te sens ?\", \"Tu veux continuer à observer ou on rentre ?\", \"Quelque chose t'a mis mal à l'aise ?\".", tip: "Ces moments de débriefing sont essentiels. Ils renforcent votre complicité et évitent les malentendus." },
              { time: "01h30", title: "Participation ou Départ", text: "Si vous vous sentez prêts et que l'occasion se présente (invitation d'un autre couple, attirance mutuelle), vous pouvez envisager de participer. Sinon, il est tout à fait acceptable de rentrer après cette première exploration.", tip: "Ne vous forcez jamais. Même si vous repartez \"juste\" après avoir observé, c'est déjà une belle première expérience !" },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">{step.time}</span>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{step.text}</p>
                  <p className="text-sm text-primary/80 bg-primary/5 p-2 rounded">💡 <strong>Astuce :</strong> {step.tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Débriefing */}
          <div className="mt-8 bg-card border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">🏠 Après la soirée : Le débriefing</h3>
            <p className="text-muted-foreground leading-relaxed">Une fois rentrés (ou le lendemain), prenez le temps de discuter de ce que vous avez vécu. Qu'avez-vous aimé ? Qu'est-ce qui vous a surpris ? Y a-t-il des choses qui vous ont dérangés ? Voulez-vous y retourner ? Ces échanges sont précieux pour construire votre expérience ensemble.</p>
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">👣 Vos premiers pas : Conseils pratiques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🍽️", title: "Mangez avant de partir", text: "Ne venez pas à jeun. Les clubs servent rarement de vrais repas, juste des snacks. Un ventre plein vous permettra de mieux profiter et de mieux gérer l'alcool." },
              { icon: "💰", title: "Prévoyez du liquide", text: "Tous les clubs n'acceptent pas la carte bancaire. Vérifiez à l'avance et prévoyez suffisamment d'argent liquide (entrée + vestiaire + consommations + pourboires)." },
              { icon: "📱", title: "Laissez votre téléphone au vestiaire", text: "Les photos sont strictement interdites. Mieux vaut laisser votre téléphone en sécurité au vestiaire pour éviter toute tentation ou malentendu." },
              { icon: "🚗", title: "Prévoyez votre retour", text: "Si vous consommez de l'alcool, prévoyez un taxi, VTC ou chauffeur sobre. Certains clubs sont excentrés, vérifiez les options de transport à l'avance." },
              { icon: "⏰", title: "Arrivez tôt", text: "En arrivant vers 21h-22h, vous découvrez les lieux avant l'affluence. Plus facile pour apprivoiser l'environnement et poser vos questions au staff." },
              { icon: "💬", title: "Posez des questions", text: "Le personnel est là pour vous aider. N'hésitez pas à demander où se trouvent les différents espaces, comment fonctionnent les codes (bracelets, signaux), ou toute autre question." },
              { icon: "🎭", title: "Restez vous-même", text: "Pas besoin de jouer un rôle. Les gens apprécient l'authenticité. Si vous êtes timides, c'est OK. Si vous êtes nerveux, c'est normal. Restez naturels." },
              { icon: "🚪", title: "Vous pouvez partir à tout moment", text: "Si après 30 minutes vous sentez que ce n'est pas pour vous, partez sans culpabilité. Personne ne vous jugera. Tester fait partie du processus." },
            ].map((conseil, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">{conseil.icon} {conseil.title}</h3>
                <p className="text-muted-foreground text-sm">{conseil.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuez votre découverte */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">📚 Continuez votre découverte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/fr/debuter-libertinage" className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors block">
              <span className="text-xl mb-1 block">🌱</span>
              <h3 className="font-semibold text-foreground mb-2">Guide complet débutants</h3>
              <p className="text-muted-foreground text-sm mb-2">Retour au guide principal pour une vision d'ensemble du libertinage</p>
              <span className="text-primary text-sm font-medium">Lire le guide →</span>
            </Link>
            <Link to="/fr/questions-debutants-libertinage" className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors block">
              <span className="text-xl mb-1 block">❓</span>
              <h3 className="font-semibold text-foreground mb-2">Questions fréquentes débutants</h3>
              <p className="text-muted-foreground text-sm mb-2">Toutes les réponses aux questions que vous vous posez encore</p>
              <span className="text-primary text-sm font-medium">Voir les questions →</span>
            </Link>
            <Link to="/fr/premier-rendez-vous-libertin" className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors block">
              <span className="text-xl mb-1 block">💬</span>
              <h3 className="font-semibold text-foreground mb-2">Premier rendez-vous</h3>
              <p className="text-muted-foreground text-sm mb-2">Comment préparer et réussir votre première rencontre avec d'autres personnes</p>
              <span className="text-primary text-sm font-medium">Lire les conseils →</span>
            </Link>
            <Link to="/fr/clubs" className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors block">
              <span className="text-xl mb-1 block">📍</span>
              <h3 className="font-semibold text-foreground mb-2">Trouver un club près de chez vous</h3>
              <p className="text-muted-foreground text-sm mb-2">120 établissements vérifiés avec avis de la communauté</p>
              <span className="text-primary text-sm font-medium">Voir l'annuaire →</span>
            </Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default PremierClubLibertin;
