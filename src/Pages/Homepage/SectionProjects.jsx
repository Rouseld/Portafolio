import { SectionTextContent } from "../../Components/SectionTextContent";
import { ProjectCard } from "../../Components/ProjectCard";
import { FadeInUp } from "../../Components/FadeInUp";

const projects = [
  { imageUrl: "/media/Asset__MarkeguinAcademyImg.png", redirectUrl: "./portafoliopages/MarkenguinLmsWebsite.html", title: "Lms Website", tags: ["Javascript", "Figma", "Web Development"] },
  { imageUrl: "/media/Asset__MedpassCRMImg.png", redirectUrl: "./portafoliopages/Medpasscrm.html", title: "Medpass CRM", tags: ["Zeplin", "Figma"] },
  { imageUrl: "/media/Asset__HealthbirdImg.png", redirectUrl: "./portafoliopages/HealthbirdApp.html", title: "Healthbird App Redesign", tags: ["UI/UX", "Figma"] },
  { imageUrl: "/media/Asset__MarkeguinLandingImg.png", redirectUrl: "./portafoliopages/MarkenguinLandingPage.html", title: "Markenguin Landing Page", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__CalculatorImg.png", redirectUrl: "./portafoliopages/CalculatorApp.html", title: "Discount Calculator", tags: ["Javascript", "Figma"] },
  { imageUrl: "/media/Asset__NanobebeImg.png", redirectUrl: "./portafoliopages/Nanobebe.html", title: "Nanobebe Ecommerce Website", tags: ["UI/UX", "AdobeXD", "Wordpress"] },
  { imageUrl: "/media/Asset__KatyImg.png", redirectUrl: "./portafoliopages/KathyMedical.html", title: "Pharmcy Website", tags: ["Magento", "Figma"] },
  { imageUrl: "/media/Asset__MedpassImg.png", redirectUrl: "./portafoliopages/MedpassWebsite.html", title: "Medpass Website", tags: ["Zeplin", "Figma"] },
  { imageUrl: "/media/Asset__Drugstore2doorImg.png", redirectUrl: "./portafoliopages/Drugstore2doorLandingPage.html", title: "Drugstore2door Landing", tags: ["UI/UX", "Figma"] },
  { imageUrl: "/media/Asset__ModernhomeImg.png", redirectUrl: "./portafoliopages/Modernhome.html", title: "Modern Home Website", tags: ["Wordpress", "Figma", "Crocoblock"] },
  { imageUrl: "/media/Assst__DupontGarageImg.png", redirectUrl: "./portafoliopages/DupontGarageApp.html", title: "Hub Cars App", tags: ["UI/UX", "Figma"] },
  { imageUrl: "/media/Asset__MarkenguinLanding2Img.png", redirectUrl: "./portafoliopages/MarkenguinSummerLanding.html", title: "Markenguin Summer Landing", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__Chattanooga.png", redirectUrl: "./portafoliopages/Chattanooga", title: "Chattanooga Party Inflatables", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__LyfeByTheHorns.png", redirectUrl: "./portafoliopages/Lyfebythehorns.html", title: "Podcast Website BLG", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__Sitz.png", redirectUrl: "./portafoliopages/SitzLandingPage.html", title: "Pet App Landing Page", tags: ["UI/UX", "Figma"] },
  { imageUrl: "/media/Asset__DirtLegalRacing.png", redirectUrl: "./portafoliopages/DirtLegalLanding.html", title: "Dirt Legal Landing Page", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__DirtLegalWelderUp.png", redirectUrl: "./portafoliopages/WelderUpLandingPage.html", title: "Welder Up Landing Page", tags: ["Wordpress", "Figma"] },
  { imageUrl: "/media/Asset__CiberSecurity.png", redirectUrl: "./portafoliopages/CyberSecurity.html", title: "CyberSecurity App", tags: ["UI/UX", "Figma"] }
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
              <ProjectCard
                imageUrl={project.imageUrl}
                redirectUrl={project.redirectUrl}
                title={project.title}
                tags={project.tags}
              />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}