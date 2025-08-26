let hero__slider;
let hero__slider__contents;


document.addEventListener('DOMContentLoaded',function(){
    const result = document.getElementsByClassName('section__hero__innercontainer--bottom')[0]
    hero__slider = result
    console.log('se ha cargado el dom')
    console.log(hero__slider) 

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();

  openSliderOverlay()
}
})


function addAnimation(){
    console.log(hero__slider)
    hero__slider.setAttribute("data-animated", true);
    console.log('se ha ejecutado')
    
    
    //Html slider content functions

    const heroSliderInner = hero__slider.querySelector('.hero__innercontainer__bottom__slider')
    console.log(heroSliderInner)
    
    
    const heroSliderInnerContent = Array.from(heroSliderInner.children)
    console.log(heroSliderInnerContent)

    heroSliderInnerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      heroSliderInner.appendChild(duplicatedItem)
    });
}

function openSliderOverlay(){
  const hero__sliders = document.querySelectorAll(".main-slider"); // Seleccion de todos los items del carrusel
  hero__sliders.forEach(value => {
    value.addEventListener('click' ,() =>{ // agregamos el event listener a cada uno de los slides
      hero__sliders.forEach(sliderInactive =>{
        const sliderOverlayDisabling = sliderInactive.querySelector('.slider-overlay--hidden') // verificacion de que los slides esten oculto al que se esta seleccionando
        console.log(sliderOverlayDisabling)
      
      })

      const sliderOverlayActivating = document.querySelector('div[overlay]');
      if (sliderOverlayActivating){
        sliderOverlayActivating.setAttribute('overlay','visible')
      }
    })
  })
}

console.log(openSliderOverlay)
openSliderOverlay();
