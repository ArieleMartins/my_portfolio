
const principal = document.getElementById("principal");
const sobre = document.getElementById('sobre');
const projetos = document.getElementById("projetos");
const containerSobre = document.getElementById('container-sobre');
const containerFormacao = document.getElementById("container-formacao");
const containerProjetos = document.getElementById("container-projetos");
const ativarTela = document.getElementById('container-flex');

sobre.addEventListener('click', function(){
    containerProjetos.style.display = "none";
    containerFormacao.style.display = "flex"
    containerSobre.style.display = "flex";
    ativarTela.classList.remove('select-projetos');
    ativarTela.classList.add('select-sobre');
    if(ativarTela.classList.contains('select-principal')){
        ativarTela.classList.remove('select-principal');
    }
})

projetos.addEventListener('click', function(){
    containerProjetos.style.display = "flex";
    containerFormacao.style.display = "none"
    containerSobre.style.display = "none";
    ativarTela.classList.remove('select-sobre');
    ativarTela.classList.add('select-projetos');
    if(ativarTela.classList.contains('select-principal')){
        ativarTela.classList.remove('select-principal');
    }
})

principal.addEventListener('click', function(){
    if(ativarTela.classList.contains('select-sobre')){
        ativarTela.classList.remove('select-sobre');
        ativarTela.classList.add('select-principal');
    }else if(ativarTela.classList.contains('select-projetos')){
        ativarTela.classList.remove('select-projetos');
        ativarTela.classList.add('select-principal');
    }
})