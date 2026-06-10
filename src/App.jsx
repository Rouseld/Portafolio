import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { HeroSliderItem } from './HeroSliderItem'
import {InfiniteSlider} from "./InfiniteSlider"

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
            <InfiniteSlider SliderItems={[
                <HeroSliderItem key="0" imgUrl='Asset__PortafolioImg--2.png' pageUrl='DupontGarageApp.html' index='0' />,
                <HeroSliderItem key="1" imgUrl='Asset__PortafolioImg--7.png' pageUrl='DupontGarageApp.html' index='1' />,
                <HeroSliderItem key="2" imgUrl='Asset__PortafolioImg--3.png' pageUrl='DupontGarageApp.html' index='2' />,
                <HeroSliderItem key="3" imgUrl='Asset__PortafolioImg--4.png' pageUrl='DupontGarageApp.html' index='3' />
            ]} />
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

