var projetos = document.getElementById('projetos');
var list = document.getElementById('list');
projetos.addEventListener('click', function exibir(){
    list.classList.toggle('ativo');
})