let a = document.getElementById('ninja');
let bbb = ''

teste.onclick = function(){
    bbb = teste.innerHTML
   teste.innerHTML = ninja.innerHTML 
   ninja.innerHTML = bbb
}
var i = 0;
var txt = 'Bem vindo a minha pagina de atividades';
var speed = 100;

function typeWriter() {
  if (i < txt.length + 1) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }
  span()
}
function span(){
    if(i == txt.length){
        document.getElementById("demo").innerHTML +=  '<span class="input-cursor"> |</span>';
    }
}