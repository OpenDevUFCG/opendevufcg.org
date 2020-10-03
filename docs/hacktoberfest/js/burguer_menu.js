const menuBurguer = document.getElementById('burguer-button');
const navBar = document.getElementById('nav-bar');

function toggleMenuBurguer() {
    menuBurguer.classList.toggle('active');
    navBar.classList.toggle('hidden-content');
}

menuBurguer.addEventListener('click', toggleMenuBurguer);