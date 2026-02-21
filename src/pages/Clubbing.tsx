import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Clubbing = () => {
  return (
    <ContentPageLayout
      title="Guide Complet des Clubs & Saunas Libertins en France | AKOKY"
      description="Guide de référence sur les clubs libertins, saunas et établissements échangistes en France. Découvrez l'univers libertin, les différents types de lieux, et trouvez votre établissement idéal."
      canonical="https://akoky.com/clubbing"
      heroTitle="Clubs & Saunas Libertins en France"
      heroSubtitle="Le guide de référence pour découvrir, comprendre et choisir votre établissement libertin idéal"
      heroImage="/images/club.webp"
      breadcrumb={[{ label: "Clubbing" }]}
      faq={[
        { question: "Comment choisir son premier club libertin ?", answer: "Consultez notre guide pour débutants et les avis vérifiés sur AKOKY. Privilégiez un club avec une bonne réputation, une clientèle respectueuse et des soirées adaptées aux novices." },
        { question: "Quelle est la différence entre un club libertin et un sauna ?", answer: "Les clubs libertins mettent l'accent sur l'ambiance festive (bar, danse, espaces privés), tandis que les saunas privilégient le bien-être (hammam, spa) dans une atmosphère plus détendue." },
        { question: "Les femmes seules sont-elles acceptées ?", answer: "Oui, les femmes seules sont généralement les bienvenues dans la majorité des établissements libertins sans restriction particulière." },
        { question: "Comment AKOKY vérifie-t-il les clubs ?", answer: "Notre équipe visite et évalue chaque établissement référencé. Nous prenons en compte l'hygiène, le respect des règles, la qualité de l'accueil et les retours de nos membres." },
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Guide Complet des Clubs & Saunas Libertins en France",
        "description": "Guide de référence sur les clubs libertins en France.",
      }}
    >
      {/* Guide Géographique */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="text-4xl mb-4">🗺️</div>
            <h2 className="text-2xl font-bold text-white mb-4">Guide Géographique Complet</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Cette page constitue le point d'entrée central du clubbing libertin en France et en Europe. Elle structure l'ensemble des pays, régions et grandes villes afin de vous guider facilement vers les clubs, saunas et établissements libertins vérifiés par AKOKY.
            </p>
            <Link to="/clubbing-france-europe" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all">
              Découvrir le guide géographique complet →
            </Link>
            <div className="flex gap-4 mt-8">
              <div className="bg-white/5 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl">🇫🇷</div>
                <div className="text-sm text-gray-400 mt-1">France</div>
              </div>
              <div className="bg-white/5 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl">🇪🇺</div>
                <div className="text-sm text-gray-400 mt-1">Europe</div>
              </div>
              <div className="bg-white/5 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl">📍</div>
                <div className="text-sm text-gray-400 mt-1">Toutes régions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p>
              Bienvenue sur le portail AKOKY, votre référence indépendante et complète pour tout savoir sur les clubs libertins, saunas échangistes et établissements dédiés à l'échange en France. Notre mission est de démystifier le libertinage, de vous présenter les différents types de lieux existants, et de vous aider à choisir l'établissement qui vous correspond vraiment.
            </p>
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Comprendre l'univers libertin en France</h2>
            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Qu'est-ce que le libertinage moderne ?</h3>
            <p>
              Le libertinage contemporain en France désigne une pratique sexuelle librement consentie entre adultes, fondée sur l'échange, la découverte et le plaisir partagé. Le libertinage repose sur des valeurs fortes : respect mutuel, consentement explicite, discrétion et courtoisie.
            </p>
            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Les différents types d'établissements</h3>
            <p>
              Les <strong>clubs libertins</strong> proposent bar, piste de danse, salons privés et cabines. Les <strong>saunas libertins</strong> mettent l'accent sur le bien-être avec hammam, spa et espaces de relaxation. Certains établissements organisent des soirées thématiques régulières.
            </p>
            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Les règles à respecter</h3>
            <p>
              La première règle est le <strong>consentement absolu</strong> : un non est toujours un non. Le respect de l'intimité et de la discrétion est fondamental. La courtoisie et l'hygiène irréprochable sont exigées.
            </p>
          </div>
        </div>
      </section>

      {/* Différences */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center font-display">Clubs, saunas, établissements : quelles différences ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Clubs libertins</h3>
              <p className="text-gray-400">Ambiance festive avec bar, danse et espaces privés. Soirées à thème fréquentes.</p>
            </div>
            <div className="bg-card border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">♨️</div>
              <h3 className="text-xl font-bold text-white mb-3">Saunas libertins</h3>
              <p className="text-gray-400">Bien-être et détente avec hammam, spa et espaces de relaxation sensuels.</p>
            </div>
            <div className="bg-card border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-bold text-white mb-3">Lieux privés</h3>
              <p className="text-gray-400">Résidences et châteaux accueillant des événements ponctuels sur invitation.</p>
            </div>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default Clubbing;
