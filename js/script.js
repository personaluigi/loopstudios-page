function openMenu() {
    if (menuNav.style.display == 'block') {
        menuNav.style.diplay  = 'none'
    } else {
        menuNav.style.display  = 'block'
        menu.style.display     = 'none'
        shutMenu.style.display = 'block'
    }
}

function closeMenu() {
    if (menuNav.style.display == 'none') {
        menuNav.style.diplay   = 'block'
        shutMenu.style.display = 'none'
        
    } else {
        menuNav.style.display  = 'none'
        menu.style.display     = 'block'
    }
}