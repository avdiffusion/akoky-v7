import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";

const Blog = () => (
  <ContentPageLayout
    title="Blog libertin AKOKY – Actualités, Conseils & Guides"
    description="Découvrez nos actualités, conseils, guides et témoignages exclusifs sur le libertinage. Le blog AKOKY est votre média lifestyle libertin reconnu."
    canonical="https://akoky.com/blog"
    heroTitle="Blog libertin AKOKY"
    heroSubtitle="Découvrez nos actualités, conseils, guides et témoignages exclusifs sur le libertinage"
    heroImage="https://akoky.com/images/blog.webp"
    breadcrumb={[{ label: "Blog" }]}
    faq={[
      { question: "Qu'est-ce que le blog AKOKY ?", answer: "Le blog AKOKY est votre source d'information privilégiée sur le lifestyle libertin. Nous publions régulièrement des articles, guides pratiques, témoignages authentiques et conseils d'experts." },
      { question: "Comment trouver des articles sur les clubs libertins ?", answer: "Utilisez le filtre « Clubs et établissements » en haut de page pour accéder à tous nos guides et avis sur les clubs échangistes." },
      { question: "Le blog propose-t-il des conseils pour débuter ?", answer: "Absolument ! Notre section « Conseils libertins » regroupe de nombreux guides pour débutants." },
      { question: "À quelle fréquence le blog est-il mis à jour ?", answer: "Le blog AKOKY publie plusieurs nouveaux articles chaque semaine." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Blog", name: "Blog AKOKY", url: "https://akoky.com/blog" }}
  >
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-12">
        <div>
          <p className="text-muted-foreground text-lg leading-relaxed"><strong>Bienvenue sur le blog AKOKY</strong>, votre média lifestyle libertin reconnu. Depuis 2014, nous partageons des <Link to="/libertinage" className="text-primary hover:underline">guides complets sur le libertinage</Link>, des avis détaillés sur les <Link to="/clubbing" className="text-primary hover:underline">meilleurs clubs échangistes</Link>, l'actualité des <Link to="/evenements" className="text-primary hover:underline">événements libertins</Link> et des conseils pratiques pour <Link to="/debuter-libertinage" className="text-primary hover:underline">débuter sereinement</Link>.</p>
        </div>

        <div className="text-center p-12 bg-card/50 rounded-2xl border border-border">
          <p className="text-muted-foreground text-lg mb-4">Chargement des articles...</p>
          <p className="text-muted-foreground/60 text-sm">Le blog dynamique est alimenté depuis l'application AKOKY.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 font-display">Les pages incontournables AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed">Nos guides complets : <Link to="/libertinage" className="text-primary hover:underline">libertinage</Link>, <Link to="/clubbing" className="text-primary hover:underline">clubs échangistes</Link>, <Link to="/evenements" className="text-primary hover:underline">événements libertins</Link>, <Link to="/debuter-libertinage" className="text-primary hover:underline">débuter</Link>.</p>
        </div>
      </div>
    </section>
  </ContentPageLayout>
);

export default Blog;
