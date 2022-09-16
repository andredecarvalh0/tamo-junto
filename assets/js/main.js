/*==================== MENU SHOW Y HIDDEN ====================*/
const btnMobile = document.getElementById('nav-toggle');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show-menu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 