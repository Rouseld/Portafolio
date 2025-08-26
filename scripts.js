let hero__slider;
let hero__slider__contents;


document.addEventListener('DOMContentLoaded',function(){
    const result = document.getElementsByClassName('section__hero__innercontainer--bottom')[0]
    hero__slider = result
    console.log('se ha cargado el dom')
    console.log(hero__slider) 

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();

  toggleSliderOverlay();
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

function toggleSliderOverlay() {
  const hero_sliders = document.querySelectorAll(".main-slider"); 
  console.log(hero_sliders)

  hero_sliders.forEach(slider => {
      console.log(slider)
    slider.addEventListener('click', () => {
      const allOverlays = document.querySelectorAll('.slider-overlay--visible');
      console.log(allOverlays)

      function closeOtherOverlay(){
        allOverlays.forEach(overlay => {
        overlay.classList.remove('slider-overlay--visible');
        overlay.classList.add('slider-overlay--hidden')
      });
      }

      const hiddenOverlays = slider.querySelector('.slider-overlay--hidden');
      const visibleOverlays = slider.querySelector('.slider-overlay--visible')
      console.log(visibleOverlays)


    if(!visibleOverlays){
      console.log('No hay overlays')
      console.log(typeof(visibleOverlay))
      console.log(visibleOverlays)
      if(hiddenOverlays.className !== 'hero__slider--1-content slider-overlay--visible'){
         hiddenOverlays.classList.remove('slider-overlay--hidden')
         hiddenOverlays.classList.add('slider-overlay--visible'); 
         console.log('se ejecuto if')
                 closeOtherOverlay();
     } 
    } else {
        visibleOverlays.classList.remove('slider-overlay--visible')
        visibleOverlays.classList.add('slider-overlay--hidden')
        closeOtherOverlay();

    }

    });
  });
}

toggleSliderOverlay();
