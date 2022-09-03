var menu = document.getElementById('menu-mobile');
var menuclick = document.getElementById('menu')

menuclick.addEventListener('click', function abrindoMenu(){
   menu.classList.toggle('active');
})

const elementos = document.querySelectorAll('[data-animacao]');
const animacaoScroll = () =>{
    const windowTop = window.scrollY + window.innerHeight * 0.35;
    elementos.forEach((element) => {
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        }else{
            element.classList.remove('animate');
        }
    });
};
animacaoScroll();
window.addEventListener("scroll", () =>{
    animacaoScroll();
})