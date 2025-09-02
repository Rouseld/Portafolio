let header;

document.addEventListener('DOMContentLoaded', () => {
    console.log('el dom ha cargado')
    header = document.querySelector(".header");
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

function pageBack(){
    window.location.href = '/index.html';
}