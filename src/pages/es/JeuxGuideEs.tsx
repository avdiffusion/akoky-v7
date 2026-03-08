import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Los juegos AKOKY son gratuitos?", answer: "Sí, 100% gratuitos. AKOKY Space es totalmente accesible sin suscripción, sin compra integrada y sin limitación. Disfruta de todos nuestros juegos libertinos sin gastar un céntimo." },
  { question: "¿Se puede jugar en pareja?", answer: "¡Por supuesto! La mayoría de nuestros juegos están diseñados para jugarse en pareja, pero también puedes jugar solo/a o en grupo. Cada juego se adapta a tus deseos." },
  { question: "¿Los juegos son anónimos?", answer: "Sí, tu anonimato está garantizado. Ninguna inscripción obligatoria, ningún dato personal recopilado sin tu consentimiento. Juega con total discreción." },
  { question: "¿Hay que instalar la aplicación?", answer: "No, puedes jugar directamente desde tu navegador en akoky.space. La instalación es opcional pero recomendada para una experiencia óptima." },
  { question: "¿Los juegos son accesibles en móvil?", answer: "¡Sí! AKOKY Space es totalmente responsive y funciona perfectamente en móvil, tablet y desktop. Lleva tus juegos a todas partes, o descarga la aplicación AKOKY." },
  { question: "¿Los resultados son compartidos?", answer: "No, nunca. Todo lo que pasa en tus partidas queda privado. AKOKY no comparte ningún dato de juego con terceros." },
];

const GAMES = [
  { title: "Ruleta de Prendas Libertinas", desc: "Haz girar la rueda y descubre prendas sensuales, divertidas o atrevidas. Ideal para romper el hielo y dejar que el azar decida." },
  { title: "Dado del Deseo AKOKY", desc: "Lanza los dados y déjate guiar por tus deseos. Cada cara revela una acción, un desafío o una sorpresa pícara." },
  { title: "Verdad o Atrevimiento Libertino", desc: "El gran clásico revisado en versión libertina. Preguntas íntimas, desafíos audaces y momentos de complicidad garantizados." },
  { title: "Desafíos Pícaros de Pareja", desc: "Supera desafíos en dúo para reforzar vuestra complicidad. De lo romántico a lo tórrido, cada desafío acerca." },
  { title: "Cartas Twist Sensuales", desc: "Roba una carta y descubre escenarios inesperados. Cada tirada trae su lote de sorpresas y placer." },
  { title: "Quiz Libertino Interactivo", desc: "Pon a prueba tus conocimientos sobre el universo libertino descubriendo nuevas prácticas y curiosidades pícaras." },
];

const JeuxGuideEs = () => (
  <>
    <MetaTags title="Juegos Libertinos AKOKY Space – Quiz y Desafíos Sensuales | AKOKY" description="Descubre AKOKY Space: juegos libertinos, quiz y desafíos para explorar tu sexualidad con complicidad. Gratuito, privado, para parejas y solteros." canonical="https://akoky.com/es/juegos-libertinos-guia" lang="es" ogImage="/images/cover-jeux.webp" />
    <HreflangTags slug="juegos-libertinos-guia" />
    <ContentPageLayout lang="es" title="Juegos Libertinos AKOKY Space – Quiz y Desafíos Sensuales" description="Descubre AKOKY Space: juegos libertinos, quiz y desafíos para explorar tu sexualidad con complicidad." canonical="https://akoky.com/es/juegos-libertinos-guia" heroTitle="AKOKY Space – Juegos Libertinos y Exploración" heroSubtitle="Quiz sensuales, desafíos y juegos libertinos para explorar y compartir con benevolencia." heroImage="/images/es-juegos-cover.webp" breadcrumb={[{ label: "Juegos AKOKY Space" }]} faq={FAQ}> lang="es" title="Juegos Libertinos AKOKY Space – Quiz y Desafíos Sensuales" description="Descubre AKOKY Space: juegos libertinos, quiz y desafíos para explorar tu sexualidad con complicidad." canonical="https://akoky.com/es/juegos-libertinos-guia" heroTitle="AKOKY Space – Juegos Libertinos y Exploración" heroSubtitle="Quiz sensuales, desafíos y juegos libertinos para explorar y compartir con benevolencia." <ContentPageLayout lang="es" title="Juegos Libertinos AKOKY Space – Quiz y Desafíos Sensuales" description="Descubre AKOKY Space: juegos libertinos, quiz y desafíos para explorar tu sexualidad con complicidad." canonical="https://akoky.com/es/juegos-libertinos-guia" heroTitle="AKOKY Space – Juegos Libertinos y Exploración" heroSubtitle="Quiz sensuales, desafíos y juegos libertinos para explorar y compartir con benevolencia." heroImage="/images/es-juegos-cover.webp" breadcrumb={[{ label: "Juegos AKOKY Space" }]} faq={FAQ}>

      {/* Catálogo de juegos */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Nuestros Juegos Libertinos AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Una colección de juegos pícaros pensados para todos los libertinos, de la pareja principiante a los exploradores confirmados.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {GAMES.map((game, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all">
                <h3 className="font-bold text-foreground mb-2">{game.title}</h3>
                <p className="text-muted-foreground text-sm">{game.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi AKOKY Space */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">¿Por qué AKOKY Space?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎮", title: "100% Gratuito", desc: "Ninguna suscripción oculta, ninguna limitación. Disfruta de todos los juegos libertinos sin gastar un céntimo." },
              { icon: "🛡️", title: "Privacidad Total", desc: "Tus datos y resultados nunca se comparten. Juega con total discreción y anonimato garantizado." },
              { icon: "⭐", title: "Calidad AKOKY", desc: "Desarrollado por la referencia libertina europea, con la experiencia y calidad que conoces." },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-card border border-border rounded-xl text-center">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Elige un juego", desc: "Navega por nuestra colección y elige el juego que se adapte a tu humor." },
              { step: "2", title: "Juega al instante", desc: "Sin inscripción obligatoria. Empieza a jugar directamente desde tu navegador." },
              { step: "3", title: "Explora juntos", desc: "Comparte los desafíos con tu pareja o amigos y descubrid nuevas facetas." },
              { step: "4", title: "Repite sin fin", desc: "Cada partida es única gracias a nuestro algoritmo de variaciones infinitas." },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-xl text-center">
                <span className="text-2xl font-black text-primary">{item.step}</span>
                <h3 className="font-bold text-foreground mt-2 mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para jugar?</h2>
          <p className="text-muted-foreground mb-6">Accede a AKOKY Space directamente o descarga nuestra aplicación gratuita.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://akoky.space" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-black text-lg hover:scale-105 transition-all">Jugar ahora gratis</a>
            <Link to="/es/app" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all">Descargar la app</Link>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);
export default JeuxGuideEs;
