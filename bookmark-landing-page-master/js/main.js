/*MENU SHOW AND HIDDEN*/

const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close');

/*SHOW */
toggleMenu.addEventListener('click', () =>{
    navMenu.classList.toggle('show')
});

/*hidden*/
closeMenu.addEventListener('click', () =>{
    navMenu.classList.remove('show')
});

/*REMOVE MENU*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show');
}

navLink.forEach(item => item.addEventListener('click', linkAction));

/*SCROLLS SECTIONS ACTIVE LINK*/
const sections = documents.querySelectorAll('section[id]')