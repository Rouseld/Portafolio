import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from './Global/Header'
import { HeroSection } from './Pages/Homepage/HeroSection'
import { SectionProcess } from './Pages/Homepage/SectionProcess'
import { SectionSkills } from './Pages/Homepage/SectionSkills'
import { SectionProjects } from './Pages/Homepage/SectionProjects'
import { RandomWords } from './Components/randomWords'

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
      <RandomWords></RandomWords>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}