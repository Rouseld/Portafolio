import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from './Global/Header'
import { HeroSection } from './Pages/Homepage/HeroSection'
import { SectionProcess } from './Pages/Homepage/SectionProcess'
import { SectionSkills } from './Pages/Homepage/SectionSkills'
import { SectionProjects } from './Pages/Homepage/SectionProjects'
import { ProjectPage } from './Pages/Projects/ProjectPage'

function Inicio() {
  return (
    <>
      <Helmet>  
        <meta name="description" content="Bienvenido a mi nuevo portafolio." />
      </Helmet>

      <Header />
      <HeroSection />
      <SectionProcess />
      <SectionSkills />
      <SectionProjects />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}