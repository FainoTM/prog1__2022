function myFunction(){
    let cxnum1 = document.getElementById('1num');
    let cxnum2 = document.getElementById('2num');
    let cxnum3 = document.getElementById('3num');

    let num1 = parseFloat(cxnum1.value);
    let num2 = parseFloat(cxnum2.value);
    let num3 = parseFloat(cxnum3.value);

    let maior = null;

    if(num1 > num2 && num1 > num3){
        maior = num1;
    }
    else if(num2 > num1 && num2 > num3){
        maior = num2
    }
    else {
        maior = num3
    }


    document.getElementById('result').innerHTML = 'O maior número é: ' + maior


}