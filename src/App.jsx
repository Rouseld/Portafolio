import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {HeroSliderItem} from './Pages/Homepage/HeroSliderItem'
import { InfiniteSlider } from './Components/InfiniteSlider'
import { SectionTextContent } from './Components/SectionTextContent'
import { HeroSection } from './Pages/Homepage/HeroSection'
import { SectionProcess } from './Pages/Homepage/SectionProcess'

function Inicio() {

 
  return (
    <>
      <Helmet>  
        <meta name="description" content="Bienvenido a mi nuevo portafolio." />
      </Helmet>

     <HeroSection></HeroSection>
     <SectionProcess></SectionProcess>
     

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

