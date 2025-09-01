let hero__slider;
let hero__slider__contents;
let sliderAnimationContainer;
let animationContainer;
let processSliderContainer;
let processSliderInnerContainer;
let processSliderButtonRight;
let processSliderButtonLeft;
let projectItemContainer;
let projectItem;
let projectTitle;

document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementsByClassName('section__hero__innercontainer--bottom')[0];
    animationContainer = document.querySelector('.section__hero__innercontainer--bottom');
    sliderAnimationContainer = document.querySelector('.hero__innercontainer__bottom__slider');
    processSliderContainer = document.querySelector('.section__process__innercontainer--slidercontainer')
    processSliderInnerContainer = document.querySelector('.section__process__innercontainer--sliderinnercontainer')
    processSliderButtonRight = document.querySelector('.section__process__innercontainer--buttonright')
    processSliderButtonLeft = document.querySelector('.section__process__innercontainer--buttonleft')
    projectItemContainer = document.querySelector('.section__projects__innercontainer--bottom')
    projectItem = projectItemContainer.children
    projectTitle = document.querySelector('.title__project')
    hero__slider = result;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    addEvents();
    hoverProjectItem()
});

function addAnimation() {
    hero__slider.setAttribute("data-animated", true);
    const heroSliderInner = hero__slider.querySelector('.hero__innercontainer__bottom__slider');
    const heroSliderInnerContent = Array.from(heroSliderInner.children);

    heroSliderInnerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        heroSliderInner.appendChild(duplicatedItem);
    });
}

function hoverProjectItem(){

    const itemArray = Array.from(projectItem)
    console.log(itemArray)
    itemArray.forEach( (value) => {
        value.addEventListener('mouseover', () =>{
            const innerItem = value.children
            const arrayInnerItem = Array.from(innerItem)

            const itemTitle =arrayInnerItem[1]
            itemTitle.classList.remove('title__project')
            itemTitle.classList.add('title__project--visible')

            console.warn(arrayInnerItem[2])

            const itemtags = arrayInnerItem[2]
            console.warn(itemtags)
            itemtags.classList.remove('tagscontainer')
            itemtags.classList.add('tagscontainer--visible')
        })

        value.addEventListener('mouseleave', () =>{
            const innerItem = value.children
            const arrayInnerItem = Array.from(innerItem)

            const itemTitle = arrayInnerItem[1]
            const itemTags = arrayInnerItem[2]
            if ( itemTitle.className === 'title__h4 title__project--visible' || (itemTags.className = 'tagsContainer--visible'))
            
            itemTitle.classList.remove('title__project--visible')
            itemTitle.classList.add('title__project')

            itemTags.classList.remove('tagscontainer--visible')
            itemTags.classList.add('tagscontainer')
        })
    })
}

function addEvents(){
  processSliderButtonRight.addEventListener('click', function(){
    const startPosition = new DOMMatrix(getComputedStyle(processSliderInnerContainer).transform).m41;
    const distanceToMove = -500
    const duration = 1500
    const targetPostion = startPosition + distanceToMove;
    let startime = null

    function processAnimation (currentTime){
      if (startime === null){
        startime = currentTime
      }

      const elapsedTime = currentTime - startime;
      console.log(currentTime, startime)
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = progress * (2 - progress);
      const currentPosition = startPosition + (distanceToMove * easedProgress);
      processSliderInnerContainer.style.transform = `translateX(${currentPosition}px)`;
      if (progress < 1 && startPosition > -1491) {
      requestAnimationFrame(processAnimation);
    }
    

    }
     requestAnimationFrame(processAnimation);

  })

  processSliderButtonLeft.addEventListener('click', function(){
    console.log('funciona')
    const startPosition = new DOMMatrix(getComputedStyle(processSliderInnerContainer).transform).m41;
    console.warn(startPosition)
    const distanceToMove = +500
    const duration = 1500
    const targetPostion = startPosition + distanceToMove;
    let startime = null

    function processAnimation (currentTime){
      if (startime === null){
        startime = currentTime
      }

      const elapsedTime = currentTime - startime;
      console.log(currentTime, startime)
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = progress * (2 - progress);
      const currentPosition = startPosition + (distanceToMove * easedProgress);
      processSliderInnerContainer.style.transform = `translateX(${currentPosition}px)`;
      if (progress < 1 && startPosition < -1) {
      requestAnimationFrame(processAnimation);
    }
    

    }
     requestAnimationFrame(processAnimation);

  })
}



/* function toggleSliderOverlay() {
    const hero_sliders = document.querySelectorAll(".main-slider");

    hero_sliders.forEach((slider, index) => {
        slider.addEventListener('click', () => {
            const allOverlays = document.querySelectorAll('.slider-overlay--visible');

            centerActiveSlider(slider, index);

            function closeOtherOverlay() {
                allOverlays.forEach(overlay => {
                    overlay.classList.remove('slider-overlay--visible');
                    overlay.classList.add('slider-overlay--hidden');
                    centerActiveSlider(slider, index);
                });
            }

            const hiddenOverlays = slider.querySelector('.slider-overlay--hidden');
            const visibleOverlays = slider.querySelector('.slider-overlay--visible');

            if (!visibleOverlays) {
                if (hiddenOverlays.className !== 'hero__slider--1-content slider-overlay--visible') {
                    hiddenOverlays.classList.remove('slider-overlay--hidden');
                    hiddenOverlays.classList.add('slider-overlay--visible');
                    sliderAnimationContainer.classList.remove('hero__innercontainer__bottom__slider');
                    sliderAnimationContainer.classList.add('hero__innercontainer__bottom__slider--paused');
                    closeOtherOverlay();
                    centerActiveSlider(slider, index);
                }
            } else {
                visibleOverlays.classList.remove('slider-overlay--visible');
                visibleOverlays.classList.add('slider-overlay--hidden');
                sliderAnimationContainer.classList.remove('hero__innercontainer__bottom__slider--paused');
                sliderAnimationContainer.classList.add('hero__innercontainer__bottom__slider');
                closeOtherOverlay();
            }
        });
    });
}

function centerActiveSlider(slider, index) {
    sliderAnimationContainer.style.transform = '';
    const SliderWidth = slider.offsetWidth;
    const animationContainerWidth = animationContainer.offsetWidth;
    const offsetCenter = (animationContainerWidth / 2);
    const sliderPosition = (SliderWidth * index) + (SliderWidth / 2);
    const offset = -(sliderPosition) + offsetCenter;
    sliderAnimationContainer.style.transform = `translateX(${offset}px)`;
}

toggleSliderOverlay(); */