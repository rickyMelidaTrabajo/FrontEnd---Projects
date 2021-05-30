let buttonMenu = document.querySelector('.button-menu');
let menu = document.querySelector('.menu');

buttonMenu.addEventListener('click', () => {
    menu.classList.add('menu-view');
    menu.classList.remove('hide-view');
})