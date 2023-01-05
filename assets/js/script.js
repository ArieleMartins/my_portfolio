import { activeMenuSobre, activeMenuProjects, activeMenuMain } from "./telas.js";
import { conteudo } from "./projetos.js";
import { theme } from "./tema.js";

const principal = document.getElementById("principal");
const sobre = document.getElementById('sobre');
const projetos = document.getElementById("projetos");
const tema = document.getElementById('tema');

tema.addEventListener('click', function(){
  theme()
})

sobre.addEventListener('click', function(){
    activeMenuSobre()
})

projetos.addEventListener('click', function(){
    activeMenuProjects()
})

principal.addEventListener('click', function(){
    activeMenuMain()
})


window.onload = function (){
    var container = document.getElementById('projetos-projeto');
    for(var index = 0; index < conteudo.length; index++){
        container.innerHTML += `
    <div class="container-projeto slide">          
        <div class="container-imagem">
            <figure>
                <img src="${conteudo[index].img}"
                    alt="${conteudo[index].alt}">
            </figure>
        </div>
        <div class="container-desc-links">
            <div class="tecnologias">
                <ul>
                    <li class="hover width-html">
                        <div class="tec-html"></div><span class="span hover-html">${conteudo[index].tec[0]}</span>
                    </li>
                    <li class="hover width-css">
                        <div class="tec-css"></div><span class="span hover-css">${conteudo[index].tec[1]}</span>
                    </li>
                    <li class="hover width-js">
                        <div class="tec-js"></div><span class="span hover-js">${conteudo[index].tec[2]}</span>
                    </li>
                </ul>
            </div>
            <div class="desc">
                <h3 class="nome-projeto">${conteudo[index].desc.name}</h3>
                <p>${conteudo[index].desc.desc}</p>
            </div>
            <div class="container-links">
                <div class="container-play">
                    <a href="${conteudo[index].href}"
                        target="_blank" class="play"><i class="fa-solid fa-play"></i></a>
                </div>
                <div class="container-github">
                    <a href="${conteudo[index].github}"
                        target="_blank" class="repo-github"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>         
        `
    }

    const slides = document.querySelectorAll('.slide')
    slides[0].style.display = 'flex'
    
}