// src/Pages/Projects/ProjectPage.jsx
//
// Pagina que resuelve cual proyecto renderizar segun el "<slug>" de la URL.
// Lee el parametro de la ruta, busca el proyecto en projectsData y,
// si existe, lo muestra en ProjectDetailPage.
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import { ProjectDetailPage } from "../../Components/ProjectDetailPage";

export function ProjectPage() {
  const { slug } = useParams();

  // Busca el proyecto cuyo slug coincida con el de la URL.
  const project = projectsData.find((item) => item.slug === slug);

  // Si el proyecto no existe, mostramos un mensaje simple con un enlace a la home.
  if (!project) {
    return (
      <div className="projectpage">
        <div className="projectPage__notFound">
          <h1 className="title__h1">Project not found</h1>
          <p className="text__medium">
            The project you are looking for does not exist or may have changed its link.
          </p>
          <Link to="/" className="btn__regular">
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailPage project={project} />;
}