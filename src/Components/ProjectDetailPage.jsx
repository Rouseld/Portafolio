// src/Components/ProjectDetailPage.jsx
//
// Pagina de detalle generica que renderiza cualquier proyecto del portafolio.
// Recibe el proyecto completo (del archivo projectsData.js) y arma:
//   - Header superior (aparece al hacer scroll)
//   - Titulo, descripcion y botones
//   - Imagenes principales del proyecto
//   - Galeria de capturas (si el proyecto la tiene)
//   - Prototipo interactivo en Figma (si el proyecto lo tiene)
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectGallery } from "./ProjectGallery";

export function ProjectDetailPage({ project }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      const windowPosition = window.pageYOffset;

      if (windowPosition > 600) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goBack() {
    navigate("/");
  }

  return (
    <div className="projectpage">
      <header className={`header ${isHeaderVisible ? "header--visible" : ""}`}>
        <div className="header__leftcontainer">
          <p className="text__small">You're watching</p>
          <h3 className="title__h3">{project.title}</h3>
        </div>
        <div className="header__rightcontainer">
          <button className="btn__regular" onClick={goBack}>
            Go Back <img src="/portafoliopages/media/Asset__arrow-left.svg" alt="" className="icon__small" />
          </button>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn__regular--outline">
                View Live Project
                <img src="/portafoliopages/media/icon__link.svg" alt="" className="icon__small" />
              </button>
            </a>
          )}
        </div>
      </header>

      <section className="maincontent__container">
        <div className="maincontent__container__top">
          <h1 className="title__h1">{project.title}</h1>
          <p className="text__medium">{project.description}</p>
          <div className="maincontent__container__top--buttoncontainer">
            <button className="btn__regular" onClick={goBack}>
              Go Back
              <img src="/portafoliopages/media/Asset__arrow-left.svg" alt="" className="icon__small" />
            </button>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <button className="btn__regular--outline">
                  View Live Project
                  <img src="/portafoliopages/media/icon__link.svg" alt="" className="icon__small" />
                </button>
              </a>
            )}
          </div>
        </div>

        <div className="maincontent__container__bottom">
          {project.heroImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={project.title}
              className={`maincontent__container__bottom--img ${image.isMobile ? "mobileimg" : ""}`}
            />
          ))}
        </div>
      </section>

      {/* Galeria de capturas del proyecto */}
      {project.gallery && <ProjectGallery gallery={project.gallery} />}

      {/* Prototipo interactivo del proyecto */}
      {project.prototype && (
        <section className="prototypecontainer">
          <h2 className="title__h2">Project Prototype</h2>
          <p className="text__medium">{project.prototype.description}</p>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width={project.prototype.iframeWidth}
            height={project.prototype.iframeHeight}
            src={project.prototype.iframeSrc}
            allowFullScreen
          />
        </section>
      )}
    </div>
  );
}