let resultconta = 0
let prim = document.getElementById("q1");
let seg = document.getElementById("q2");
let terc = document.getElementById("q3");
let quart = document.getElementById("q4");
let quin = document.getElementById("q5");
let sete = document.getElementById("q7");
let eight = document.getElementById("q8");
let nine = document.getElementById("q9");
let ten = document.getElementById("q10");
let el = document.getElementById("q11");
let tirty = document.getElementById("q13");
let forth = document.getElementById("q14");
let fifth = document.getElementById("q15");
let sixt = document.getElementById("q16");
let seventy = document.getElementById("q17");





botao.onclick = function(){
    resultconta += 1;
    
    
    if(resultconta > 5){
        resultconta = 0;
    }
    else{
        let a = document.getElementById('contar').innerHTML = resultconta
    }

    let resultcontastr = resultconta.toString()
    let b = document.getElementById('q'+ resultcontastr)
    if(resultcontastr == 0){
        prim.style.backgroundColor = 'white'
        seg.style.backgroundColor = 'white'
        terc.style.backgroundColor = 'white'
        quart.style.backgroundColor = 'white'
        quin.style.backgroundColor = 'white'
    }
     b.style.backgroundColor = 'red'

}
resultconta2 = 6;
botao2.onclick = function(){
    
    resultconta2 += 1;
    if(resultconta2 > 11){
        resultconta2 = 6;
    }
    else{
        let segundoresp = document.getElementById('segundoresp').innerHTML = resultconta2
    }

    let resultcontastr2 = resultconta2.toString()
    let b = document.getElementById('q'+ resultcontastr2);
    if(resultcontastr2 == 6){
        sete.style.backgroundColor = 'white'
        eight.style.backgroundColor = 'white'
        nine.style.backgroundColor = 'white'
        ten.style.backgroundColor = 'white'
        el.style.backgroundColor = 'white'
    }
     b.style.backgroundColor = 'red'

}
resultconta3 = 12;

botao3.onclick = function(){
    
    resultconta3 += 1;
    console.log(resultconta3)
    if(resultconta3 > 17){
        resultconta3 = 12;
    }
    else{
        let terceiroresp = document.getElementById('terceiroresp').innerHTML = resultconta3
    }
    let resultcontastr3 = resultconta3.toString()
    let b = document.getElementById('q'+ resultcontastr3);

    console.log(b)
    if(resultcontastr3 == 12){
        tirty.style.backgroundColor = 'white'
        forth.style.backgroundColor = 'white'
        fifth.style.backgroundColor = 'white'
        sixt.style.backgroundColor = 'white'
        seventy.style.backgroundColor = 'white'
    }
    
    b.style.backgroundColor = 'red'

}


confirmar.onclick = function(){
    let rprimeiro = document.getElementById('contar').innerHTML
    let rsegundo = document.getElementById('segundoresp').innerHTML
    let rterceiro = document.getElementById('terceiroresp').innerHTML
    console.log(rprimeiro)
    console.log(rsegundo)
    console.log(rterceiro)
    if(rprimeiro == 2 && rsegundo == 9 && rterceiro == 15){
        alert('Certa a resposta')
    }
    else{
        alert('Essa não é a resposta correta :(')
    }
}
