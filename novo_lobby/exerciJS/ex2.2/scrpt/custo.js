let tanque = document.getElementById('tanque');
let valor = document.getElementById('valor');
let comb = document.getElementsByName('combustivel');

calcular.onclick = function(){
    let comb = document.getElementsByName('combustivel');
    for(let i = 0; i < comb.length; i++){
        if(comb[0].checked){
            litro_tanque = valor.value / 3.96;
            if(litro_tanque > tanque.value){
                resto = litro_tanque - tanque.value
                document.getElementById('resultado').innerHTML = "A quantidade de combustivel é maior em " + resto.toFixed(2) + " Litros que a capacidade do tanque"
            }
            else{
                document.getElementById('resultado').innerHTML = 'Você pode comprar: ' + litro_tanque.toFixed(2) + ' Litros de álcool';
            }
        }
        else{
            litro_tanque = valor.value / 4.75;
            if(litro_tanque > tanque.value){
                resto = litro_tanque - tanque.value
                document.getElementById('resultado').innerHTML = "A quantidade de combustivel é maior em " + resto.toFixed(2) + " Litros que a capacidade do tanque"
            }
            else{
                document.getElementById('resultado').innerHTML ='Você pode comprar: ' + litro_tanque.toFixed(2) + ' Litros de gasolina';
            }
        }
    }

}
novo.onclick = function(){
    document.getElementById('valor').value='';
    document.getElementById('tanque').value='';
    
}