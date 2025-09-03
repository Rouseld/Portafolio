let header;
let tabButtonActive;
let tabButtonInactive;
let tabActive;
let tabInactive;
let tabAllThumbnails;
let lightbox;
let lightboxContent;

document.addEventListener('DOMContentLoaded', () => {
    console.log('el dom ha cargado')
    header = document.querySelector(".header");
    tabButtonInactive = document.querySelector('.tab__button')
    tabButtonActive = document.querySelector('.tab__button--active')
    lightbox = document.querySelector('.lightbox')

    addEventsThumbnail();
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

function addEventsThumbnail(){
    tabAllThumbnails = document.querySelectorAll('.tabscontent-thumbnail')
    const tabAllThumbnailsArray = Array.from(tabAllThumbnails)


    tabAllThumbnailsArray.forEach(value => {
        console.log(value)

        value.addEventListener('click',function(){
            console.log('tas haciendo click')
            const attribute = value.getAttribute('data-full-src')
            console.log(attribute)

            lightbox.classList.remove('lightbox')
            lightbox.classList.add('lightbox--visible')

            lightboxContent.querySelector('lightbox__content')
            console.log(lightboxContent)



        })
    })
}