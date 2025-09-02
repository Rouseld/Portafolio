let header;

document.addEventListener('DOMContentLoaded', () => {
    console.log('el dom ha cargado')
    header = document.querySelector(".header");
})

document.addEventListener('scroll' , () => {
    let windowposition = window.scrollY

    if (windowposition >= 1000){
        showHeader()
    }
})

function showHeader(){
    if(header.className == 'header'){
        header.classList.add('header--visible')
        console.log('tas mostrando el header')
    }
}

function pageBack(){
    window.location.href = '/index.html';
}