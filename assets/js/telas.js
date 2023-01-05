import { showProjects } from "./projetos.js";
import { conteudo, desafios } from "./projetos.js";

const containerSobre = document.getElementById('container-sobre');
const containerFormacao = document.getElementById("container-formacao");
const containerProjetos = document.getElementById("container-projetos");
const ativarTela = document.getElementById('container-flex');

var indexSlide = 0


export function activeMenuSobre(){
    containerProjetos.style.display = "none";
    containerFormacao.style.display = "flex"
    containerSobre.style.display = "flex";
    ativarTela.classList.remove('select-projetos');
    ativarTela.classList.add('select-sobre');
    if(ativarTela.classList.contains('select-principal')){
        ativarTela.classList.remove('select-principal');
    }
}


export function activeMenuProjects(){
    indexSlide = 0
    containerProjetos.style.display = "flex";
    containerFormacao.style.display = "none"
    containerSobre.style.display = "none";
    ativarTela.classList.remove('select-sobre');
    ativarTela.classList.add('select-projetos');
    if(ativarTela.classList.contains('select-principal')){
        ativarTela.classList.remove('select-principal');
    }

    const arrowLeft = document.getElementById('left')
    const arrowRight = document.getElementById("right")
    const menuPessoais = document.getElementById("pessoais")
    const menuDesafios = document.getElementById("desafios")

    menuPessoais.onclick = () =>{
        indexSlide = 0
        showProjects(conteudo)
        menuPessoais.classList.add('active-menu')
        menuDesafios.classList.remove('active-menu')
    }

    menuDesafios.onclick = () =>{
        indexSlide = 0
        showProjects(desafios)
        menuPessoais.classList.remove('active-menu')
        menuDesafios.classList.add('active-menu')
    }

    arrowLeft.onclick = ()=>{
        alterSlide(-1)
    }

    arrowRight.onclick = ()=>{
        alterSlide(1)
    }

    checkSlides()
}

export function activeMenuMain(){
    if(ativarTela.classList.contains('select-sobre')){
        ativarTela.classList.remove('select-sobre');
        ativarTela.classList.add('select-principal');
    }else if(ativarTela.classList.contains('select-projetos')){
        ativarTela.classList.remove('select-projetos');
        ativarTela.classList.add('select-principal');
    }
}

function alterSlide(slide){
    indexSlide = slide + indexSlide
    const slides = document.querySelectorAll('.slide')
    
    if(indexSlide < 0){
        indexSlide = slides.length - 1
    }else if(indexSlide > slides.length - 1){
        indexSlide = 0
    }

    slides.forEach(function (element, posicion){
        
        if(posicion == indexSlide){
            element.style.display = 'flex'
        }else{
            element.style.display = 'none'
        }
    })
}

function checkSlides(){
    const slides = document.querySelectorAll('.slide')
    
    slides.forEach(function (element,position){
        if(position == 0){
            element.style.display = 'flex'
        }else{
            element.style.display = 'none'
        }
    })
}