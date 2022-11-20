
let logo = document.querySelector('#logo')
let menu = document.querySelector('.imgmenu')
let nav = document.querySelector('#navigation')

function onScroll(){

    if(scrollY > 0){
        nav.classList.add('scroll')
        logo.src = "assets/logo_nova.svg"
        menu.src = "assets/menu_nova.svg"
    }else{
        nav.classList.remove('scroll')
        logo.src = "assets/logo.svg"
        menu.src = "assets/menu.svg"
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal('#home, #home img, #home .stats')