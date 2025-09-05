let header;
let tabButtonActive;
let tabButtonInactive;
let tabActive;
let tabInactive;
let tabAllThumbnails;
let lightbox;
let lightboxContent;
let lightboxButton;
let body;

document.addEventListener('DOMContentLoaded', () => {
    console.log('el dom ha cargado')
    header = document.querySelector(".header");
    lightbox = document.querySelector('.lightbox')
    lightboxButton = document.querySelector('.lightbox--iconcontainer');


     openLightbox();
     lightboxButton.addEventListener('click', function() {
        closeLightbox();
     })
})

document.addEventListener('scroll' , () => {
    let windowposition = window.scrollY

    if (windowposition > 1000){
        showHeader()
    } if ( windowposition < 1000){
        hideHeader()
        console.log('no funciona')
    }
})

function showHeader(){
    if(header.className == 'header'){
        header.classList.remove('header')
        header.classList.add('header--visible')
        console.log('tas mostrando el header')
    }
}

function hideHeader(){
    if(header.className == 'header--visible'){
        header.classList.remove('header--visible')
        header.classList.add("header")
    }
}

function toggleTab(){
    
    tabButtonInactive = document.querySelector('.tab__button')
    tabButtonActive = document.querySelector('.tab__button--active')

    tabActive = document.querySelector('.gallerycontainer__innercontainer__bottom--tabscontent-tabvisible')
    tabInactive = document.querySelector('.gallerycontainer__innercontainer__bottom--tabscontent-tab')

    tabButtonActive.classList.remove('tab__button--active')
    tabButtonActive.classList.add('tab__button')

    tabButtonInactive.classList.remove('tab__button')
    tabButtonInactive.classList.add('tab__button--active')
    
    tabActive.classList.remove('gallerycontainer__innercontainer__bottom--tabscontent-tabvisible')
    tabActive.classList.add('gallerycontainer__innercontainer__bottom--tabscontent-tab')

    tabInactive.classList.remove('gallerycontainer__innercontainer__bottom--tabscontent-tab')
    tabInactive.classList.add('gallerycontainer__innercontainer__bottom--tabscontent-tabvisible')
}

function pageBack(){
    window.location.href = '/index.html';
}

function openLightbox(){
    tabAllThumbnails = document.querySelectorAll('.tabscontent-thumbnail')
    const tabAllThumbnailsArray = Array.from(tabAllThumbnails)


    tabAllThumbnailsArray.forEach(value => {
        console.log(value)

        value.addEventListener('click',function(){
            console.log('tas haciendo click')
            console.log(value.className)
            
            lightboxContent = document.querySelector('.lightbox__content')

            if(value.classList.contains('thumbnail__mobile')){
                lightboxContent.classList.remove('lightbox__content') 
                lightboxContent.classList.add('lightbox__content-mobile')       
            }

            const attribute = value.getAttribute('data-full-src')


            lightbox.classList.remove('lightbox')
            lightbox.classList.add('lightbox--visible')

            lightboxContent.src = attribute

            body = document.querySelector('body')
            body.style.overflow = 'hidden'



        })
    })
}


function closeLightbox(){
    console.log('esta funcionando')
    lightbox.classList.remove('lightbox--visible')
    lightbox.classList.add('lightbox')
    body.style.overflow = ''
}

