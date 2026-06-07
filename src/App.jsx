import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { HeroSlider } from './HeroSlider'

function Inicio() {
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <Helmet>  
        <meta name="description" content="Bienvenido a mi nuevo portafolio." />
      </Helmet>
      <h1 className='react_title'>🚀 ¡React y Vite están vivos!</h1>
      <p>La estructura funciona a la perfección.</p>
    </div>

   <section className="section__hero__innercontainer--bottom">
      <div className="hero__innercontainer__bottom__slider">
        <HeroSlider imgUrl='Asset__PortafolioImg--2.png' pageUrl='DupontGarageApp.html' />
      </div>
    </section>
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