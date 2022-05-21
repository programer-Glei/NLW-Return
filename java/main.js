
let logo = document.querySelector('#logo')
let menu = document.querySelector('.imgmenu')

function onScroll(){

    if(scrollY > 0){
        navigation.classList.add('scroll')
        logo.src = "assets/logo_nova.svg"
        menu.src = "assets/menu_nova.svg"
    }else{
        navigation.classList.remove('scroll')
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