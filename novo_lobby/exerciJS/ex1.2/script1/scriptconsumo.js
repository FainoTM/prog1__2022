let distancia = document.getElementById('km');
let tipo = document.getElementById('car');
let check = document.getElementById('ac');


calcular.onclick = function(){
    if(tipo.value === 'carA'){
        consumo = distancia.value/8;
        if(check.checked){
            newconsumo = consumo * 0.05;
            consumo = newconsumo + consumo;
        }
        document.getElementById('resultado').innerHTML = "O consumo com esses parâmetros será: " + consumo + "Litros";
    }
    else if(tipo.value === 'carB'){
        consumo = distancia.value/9;
        if(check.checked){
            newconsumo = consumo * 0.05;
            consumo = newconsumo + consumo;
        }
        document.getElementById('resultado').innerHTML = "O consumo com esses parâmetros será: " + consumo + "Litros";
    }
    else{
        consumo = distancia.value/12;
        if(check.checked){
            newconsumo = consumo * 0.05;
            consumo = newconsumo + consumo;
        }
        document.getElementById('resultado').innerHTML = "O consumo com esses parâmetros será: " + consumo + "Litros";
    }
}
clear.onclick = function(){
    document.getElementById('km').value='';
    tipo.value = 'standard';
    check.checked = false
}
