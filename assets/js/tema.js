const tema = document.getElementById('tema');
const fundo = document.querySelector('body');

var verificarTema = false;
tema.addEventListener('click', function(){
  tema.classList.toggle('claro');
  fundo.classList.toggle('claro')
  verificarTema = tema.classList.contains('claro');
})
