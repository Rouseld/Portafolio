let hero__slider;


document.addEventListener('DOMContentLoaded',function(){
    const result = document.getElementsByClassName('section__hero__innercontainer--bottom')[0]
    hero__slider = result
    console.log('se ha cargado el dom')
    console.log(hero__slider) 

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
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

console.log(hero__slider)
