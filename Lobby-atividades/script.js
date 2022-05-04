var i = 0;
var txt = 'LOBBY DE ATIVIDADES';
var speed = 100;

function typeWriter() {
  if (i < txt.length + 1) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
span();
}
function span(){
    if(i == txt.length){
        document.getElementById("demo").innerHTML +=  '<span class="input-cursor"> |</span>';
    }
}