import { SectionTextContent } from "../../Components/SectionTextContent";
import { ProjectCard } from "../../Components/ProjectCard";
import { FadeInUp } from "../../Components/FadeInUp";
import { Link } from "react-router-dom";

// Cada proyecto apunta a la ruta dinamica /proyectos/<slug> del nuevo sistema.
const projects = [
  { imageUrl: "/media/Asset__MarkeguinAcademyImg.png", redirectUrl: "/proyectos/markenguin-lms-website", title: "Lms Website", tags: ["Javascript", "Figma", "Web Development"] },
  { imageUrl: "/media/Asset__MedpassCRMImg.png", redirectUrl: "/proyectos/medpass-crm", title: "Medpass CRM", tags: ["Zeplin", "Figma"] },
  { imageUrl: "/media/Asset__HealthbirdImg.png", redirectUrl: "/proyectos/healthbird-app", title: "Healthbird App Redesign", tags: ["UI/UX", "Figma"] },
  { imageUrl: "/media/Asset__MarkeguinLandingImg.png", redirectUrl: "/proyectos/markenguin-landing-page", title: "Markenguin Landing Page", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__CalculatorImg.png", redirectUrl: "/proyectos/discount-calculator", title: "Discount Calculator", tags: ["Javascript", "Figma"] },
  { imageUrl: "/media/Asset__NanobebeImg.png", redirectUrl: "/proyectos/nanobebe-ecommerce", title: "Nanobebe Ecommerce Website", tags: ["UI/UX", "AdobeXD", "Wordpress"] },
  { imageUrl: "/media/Asset__KatyImg.png", redirectUrl: "/proyectos/pharmacy-website", title: "Pharmcy Website", tags: ["Magento", "Figma"] },
  { imageUrl: "/media/Asset__MedpassImg.png", redirectUrl: "/proyectos/medpass-website", title: "Medpass Website", tags: ["Zeplin", "Figma"] },
  { imageUrl: "/media/Asset__Drugstore2doorImg.png", redirectUrl: "/proyectos/drugstore2door-landing", title: "Drugstore2door Landing", tags: ["UI/UX", "Figma"] },
  { imageUrl: "/media/Asset__ModernhomeImg.png", redirectUrl: "/proyectos/modern-home-website", title: "Modern Home Website", tags: ["Wordpress", "Figma", "Crocoblock"] },
  { imageUrl: "/media/Assst__DupontGarageImg.png", redirectUrl: "/proyectos/dupont-garage-app", title: "Hub Cars App", tags: ["UI/UX", "Figma"] },
  { imageUrl: "/media/Asset__MarkenguinLanding2Img.png", redirectUrl: "/proyectos/markenguin-summer-landing", title: "Markenguin Summer Landing", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__Chattanooga.png", redirectUrl: "/proyectos/chattanooga", title: "Chattanooga Party Inflatables", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__LyfeByTheHorns.png", redirectUrl: "/proyectos/podcast-website", title: "Podcast Website BLG", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__Sitz.png", redirectUrl: "/proyectos/sitz-landing-page", title: "Pet App Landing Page", tags: ["UI/UX", "Figma"] },
  { imageUrl: "/media/Asset__DirtLegalRacing.png", redirectUrl: "/proyectos/dirt-legal-landing", title: "Dirt Legal Landing Page", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__DirtLegalWelderUp.png", redirectUrl: "/proyectos/welder-up-landing-page", title: "Welder Up Landing Page", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__CiberSecurity.png", redirectUrl: "/proyectos/cybersecurity-app", title: "CyberSecurity App", tags: ["UI/UX", "Figma"] }
];

export function SectionProjects() {
  return (
    <section className="section__projects">
      <div className="section__projects--innercontainer">
        <div className="section__projects__innercontainer--top">
          <SectionTextContent
            TitleHtmlTag="h3"
            title="Explore my projects"
            className="title__h3"
            description="This is where my creative vision and technical skills converge. I leverage a robust suite of tools and platforms to forge the link between aesthetic design and functional development, crafting digital experiences that are both visually compelling and seamlessly executed."
          />
        </div>
        <div className="section__projects__innercontainer--bottom">
          {projects.map((project, index) => (
            <FadeInUp key={project.title} delay={index * 0.1} className="section__projects__innercontainer--projectitem">
              <Link to={project.redirectUrl}>
                <ProjectCard
                  imageUrl={project.imageUrl}
                  title={project.title}
                  tags={project.tags}
                />
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}