let hero__slider;
let hero__slider__contents;

let sliderAnimationContainer;
let animationContainer


document.addEventListener('DOMContentLoaded',function(){
    const result = document.getElementsByClassName('section__hero__innercontainer--bottom')[0]
    animationContainer = document.querySelector('.section__hero__innercontainer--bottom')
    sliderAnimationContainer = document.querySelector('.hero__innercontainer__bottom__slider')
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


    const heroSliderInner = hero__slider.querySelector('.hero__innercontainer__bottom__slider')
    
    
    const heroSliderInnerContent = Array.from(heroSliderInner.children)

    heroSliderInnerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      heroSliderInner.appendChild(duplicatedItem)
    });
}

function toggleSliderOverlay() {
  const hero_sliders = document.querySelectorAll(".main-slider"); 
  console.log(hero_sliders)


  hero_sliders.forEach((slider,index) => {
    slider.addEventListener('click', () => {
      const allOverlays = document.querySelectorAll('.slider-overlay--visible');

      centerActiveSlider(slider,index)

      function closeOtherOverlay(){
        allOverlays.forEach(overlay => {
        overlay.classList.remove('slider-overlay--visible');
        overlay.classList.add('slider-overlay--hidden')
        centerActiveSlider(slider , index)
        

      });
      }

      const hiddenOverlays = slider.querySelector('.slider-overlay--hidden');
      const visibleOverlays = slider.querySelector('.slider-overlay--visible')



    if(!visibleOverlays){
      if(hiddenOverlays.className !== 'hero__slider--1-content slider-overlay--visible'){
         
        hiddenOverlays.classList.remove('slider-overlay--hidden')
        hiddenOverlays.classList.add('slider-overlay--visible'); 

        sliderAnimationContainer.classList.add('hero__innercontainer__bottom__slider--paused')

        closeOtherOverlay();
        centerActiveSlider(slider, index)
     } 
    } else {
        
        visibleOverlays.classList.remove('slider-overlay--visible')
        
        visibleOverlays.classList.add('slider-overlay--hidden')
          
        sliderAnimationContainer.classList.remove('hero__innercontainer__bottom__slider--paused')
        closeOtherOverlay();

    }

    });
  });
  
}



function centerActiveSlider(slider , index){

      sliderAnimationContainer.style.transform = '';

      const SliderWidth = slider.offsetWidth;

      const animationContainerWidth = animationContainer.offsetWidth;
      const offsetCenter = (animationContainerWidth /2 )

      const sliderPosition = (SliderWidth * index) + (SliderWidth /2);
      
      const offset = -(sliderPosition) + offsetCenter

      sliderAnimationContainer.style.transform = `translateX(${offset}px)`
}


toggleSliderOverlay();
