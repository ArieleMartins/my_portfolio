var menu = document.getElementById('menu-mobile');
var menuclick = document.getElementById('menu')

menuclick.addEventListener('click', function abrindoMenu(){
   menu.classList.toggle('active');
})