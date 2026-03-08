import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Cuál es la misión de AKOKY?", answer: "Ofrecer a la comunidad libertina europea una plataforma premium, segura y ética, que ponga el consentimiento, la seguridad y la autenticidad en el centro de cada interacción." },
  { question: "¿AKOKY cumple con el RGPD?", answer: "Sí. AKOKY está operado por Liberty-Interactive-Ltd y cumple estrictamente con el RGPD y el Data Protection Act (DPA 2018). La protección de datos es una prioridad absoluta." },
  { question: "¿En qué países está disponible AKOKY?", answer: "AKOKY está disponible en toda Europa: Francia, España, Bélgica, Suiza, Luxemburgo, Alemania, Italia y Portugal. La expansión a nuevos mercados está en curso." },
];

const VisionEs = () => (
  <>
    <HreflangTags slug="vision" />
    <ContentPageLayout
      lang="es"
      title="AKOKY | Nuestra Visión — La Evolución del Libertinaje Moderno"
      description="Descubre la visión de AKOKY: una plataforma libertina moderna, segura y responsable. De AcoquinementVotre a AKOKY, la historia de una evolución."
      canonical="https://akoky.com/es/vision"
      heroTitle="Nuestra Visión"
      heroSubtitle="AKOKY nació de una convicción: el libertinaje moderno merece una plataforma a su altura."
      heroImage="/images/es-vision-cover.webp"
      breadcrumb={[{ label: "Nuestra Visión" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">El Nacimiento de una Visión</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY es la evolución natural de AcoquinementVotre, una plataforma pionera del libertinaje francés. Con los años, quedó claro que la comunidad libertina merecía algo más que un simple sitio de citas: una verdadera red social, un ecosistema completo que combinara encuentros, eventos, clubes y contenido educativo en un solo lugar.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">De AcoquinementVotre a AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">El cambio de nombre refleja una evolución profunda. AKOKY no es solo una nueva marca: es una nueva filosofía. Más inclusiva, más tecnológica, más ética. Un proyecto que pone al ser humano, su consentimiento y su seguridad en el centro de todo.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Visión AKOKY</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Libertad Asumida</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY cree que cada adulto tiene el derecho de explorar su sexualidad libremente, sin juicios y sin vergüenza. Nuestra plataforma ofrece un espacio donde la libertad es celebrada, no tolerada.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Consentimiento Claro</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">El consentimiento no es un detalle en AKOKY: es el fundamento de todo. Cada funcionalidad, cada política, cada decisión editorial está construida alrededor del principio de consentimiento libre, informado y entusiasta.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Seguridad Reforzada</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La verificación de identidad, la moderación humana 24h/7d, el cifrado de datos y las opciones avanzadas de privacidad hacen de AKOKY la plataforma libertina más segura de Europa.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Tecnología al Servicio del Ser Humano</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">El multiperfil, el chat tipo WhatsApp, el live streaming y la geolocalización inteligente no son funcionalidades por las que presumir: son herramientas al servicio de encuentros más auténticos y de una comunidad más conectada.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Elegancia y Discreción</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY rechaza la vulgaridad. Nuestra interfaz, nuestro vocabulario y nuestro contenido editorial reflejan una visión elegante y respetuosa del libertinaje. La sensualidad no necesita ser obscena.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Nuestra Hoja de Ruta</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY continúa creciendo: nuevas funcionalidades, expansión a nuevos países, más <Link to="/es/eventos" className="text-primary hover:underline">eventos</Link>, más <Link to="/es/clubes-libertinos" className="text-primary hover:underline">clubes verificados</Link>. Descubre el <Link to="/es/libertinaje" className="text-primary hover:underline">libertinaje moderno</Link>, la <Link to="/es/app" className="text-primary hover:underline">aplicación AKOKY</Link> y accede a la <Link to="/es/vip" className="text-primary hover:underline">experiencia VIP</Link>. Porque AKOKY no es un producto: es un proyecto colectivo.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VisionEs;
