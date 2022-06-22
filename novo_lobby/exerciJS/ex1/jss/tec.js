function aa(){
    let cxnumero = document.getElementById('num');
    let numero = parseFloat(cxnumero.value);
    let acao = numero**3;


    document.getElementById('result').innerHTML = 'Seu número elevado a 3 é igual a ' + acao; 
}
