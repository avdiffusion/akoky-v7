import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const VisionGuideEs = () => (
  <>
    <MetaTags title="Nuestra Visión AKOKY – Plataforma Libertina Premium | AKOKY" description="Descubre la visión de AKOKY: revolucionar el libertinaje digital con ética, innovación y benevolencia." canonical="https://akoky.com/es/vision-akoky-guide" lang="es" ogImage="/images/es-vision-cover.webp" />
    <HreflangTags slug="vision-akoky-guide" />
    <ContentPageLayout lang="es" title="Nuestra Visión AKOKY" description="Revolucionar el libertinaje digital con ética e innovación." canonical="https://akoky.com/es/vision-akoky-guide" heroTitle="Nuestra Visión" heroSubtitle="La visión fundadora de AKOKY para revolucionar el libertinaje." heroImage="/images/es-vision-cover.webp" breadcrumb={[{ label: "Nuestra Visión" }]} faq={[]}>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">El nacimiento de una visión</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">El libertinaje ha sido siempre una expresión de libertad. Sin embargo, con la llegada del digital, muchas plataformas han reproducido los mismos esquemas: interfaces anticuadas, enfoques superficiales, ausencia de verdadera protección.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">De esta observación nació Akoky. No como una plataforma más, sino como una respuesta pensada y respetuosa a las necesidades de una comunidad que merece herramientas a la altura de sus exigencias.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Cinco pilares fundamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Libertad asumida", desc: "Un espacio donde cada persona puede expresar sus deseos sin juicio." },
              { title: "Consentimiento claro", desc: "Herramientas para que cada miembro exprese claramente sus expectativas y límites." },
              { title: "Seguridad reforzada", desc: "AKOKY Safe: cifrado de datos, moderación 24/7, perfiles verificados." },
              { title: "Elegancia premium", desc: "Interfaz y contenido que reflejan una visión elegante y respetuosa." },
              { title: "Comunidad benevolente", desc: "Respeto, discreción y benevolencia como reglas de oro." },
              { title: "Innovación constante", desc: "Nuevas funcionalidades, expansión y más clubes verificados." },
            ].map((p, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Nuestra hoja de ruta</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">AKOKY continúa creciendo: nuevas funcionalidades, expansión a nuevos países, más <Link to="/es/eventos" className="text-primary hover:underline">eventos</Link>, más <Link to="/es/clubes-libertinos" className="text-primary hover:underline">clubes verificados</Link>. Descubre la <Link to="/es/app" className="text-primary hover:underline">aplicación AKOKY</Link> y accede a la <Link to="/es/vip" className="text-primary hover:underline">experiencia VIP</Link>.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VisionGuideEs;
