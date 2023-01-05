const fundo = document.querySelector('body');

var verificarTema = false;

export function theme(){
  tema.classList.toggle('claro');
  fundo.classList.toggle('claro')
  verificarTema = tema.classList.contains('claro');
}
