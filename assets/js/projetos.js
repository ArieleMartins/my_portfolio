const conteudo = [
    {
        img: 'assets/imgs/aluraFlix.png',
        alt: 'Projeto AluraFlix - Desenvolvido durante a imersão dev da Alura',
        tec: ['HTML', 'CSS', 'JS'],
        desc: {name: 'AluraFlix', desc: 'Projeto feito durante a imersão dev Alura. Site onde você pode adicionar capas de seus filmes/séries/hqs favoritos e separa-los por genêro.'},
        href: 'https://arielemartins.github.io/exercicios_js/aluraFlix_imers%C3%A3oDev/"',
        github: 'https://github.com/ArieleMartins/exercicios_js/tree/master/aluraFlix_imers%C3%A3oDev'
    }, 
    {
        img: 'assets/imgs/conversores.png',
        alt: 'Projeto WebConversor - Projeto onde possui diversos conversores',
        tec: ['HTML', 'CSS', 'JS'],
        desc: {name: 'WebConversor', desc: 'Projeto feito durante a imersão dev Alura. Site com diversos conversore, como: Conversor de Moeda (Utilizando API para pegar os valores em tempo real), Temperatura e Ano-luz.'},
        href: 'https://arielemartins.github.io/exercicios_js/conversores/',
        github: 'https://github.com/ArieleMartins/exercicios_js/tree/master/conversores'
    },
    {
        img:'assets/imgs/calculadora.png',
        alt: 'Calculadora Web',
        tec: ['HTML', 'CSS', 'JS'],
        desc: {name: 'Calculadora Web', desc: 'Projeto onde o usuário pode fazer calculos simples, como: soma, divisão, subtração e multiplicação. O usuário também pode usar as teclas para fazer os calculos'},
        href: 'https://arielemartins.github.io/exercicios_js/calculadora/',
        github: 'https://github.com/ArieleMartins/exercicios_js/tree/master/calculadora'
    },
    {
        img:'assets/imgs/calculando_media.png',
        alt: 'Calculando Média',
        tec: ['HTML', 'CSS', 'JS'],
        desc: {name: 'Calculando Média', desc: 'Projeto onde o usuário pode calcular as médias de seus alunos ou participantes, pode adicionar quantos participantes quiser e quantas notas quiser'},
        href: 'https://arielemartins.github.io/exercicios_js/media/',
        github: 'https://github.com/ArieleMartins/exercicios_js/tree/master/media'
    },
    {
        img:'assets/imgs/to_do_list.png',
        alt: 'To-Do List',
        tec: ['HTML', 'CSS', 'JS'],
        desc: {name: 'To-Do List', desc: 'Projeto onde o usuário pode adicionar e remover tarefas, pode buscar e filtrar da feitas e não feitas'},
        href: 'https://arielemartins.github.io/exercicios_js/to-do-list/',
        github: 'https://github.com/ArieleMartins/exercicios_js/tree/master/to-do-list'
    },
    {
        img:'assets/imgs/pedra_papel_tesoura.png',
        alt: 'Pedra, Papel e Tesoura',
        tec: ['HTML', 'CSS', 'JS'],
        desc: {name: 'Pedra, Papel e Tesoura', desc: 'Projeto onde o usuário pode se diverti jogando com sua máquina jogando pedra, papel e tesoura'},
        href: 'https://arielemartins.github.io/exercicios_js/pedra_papel_tesoura/',
        github: 'https://github.com/ArieleMartins/exercicios_js/tree/master/pedra_papel_tesoura'
    },
]
console.log(conteudo[0].desc)

window.onload = function (){
    var container = document.getElementById('projetos-projeto');
    for(var index = 0; index < conteudo.length; index++){
        container.innerHTML += `
    <div class="container-projeto">
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
}