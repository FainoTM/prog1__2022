
letra.onkeyup = function(event){
    this.value = this.value.toUpperCase();
    n_teclas.innerHTML = this.value.length;
    if (event.onkeyup === 32){
        n_teclas.value = n_teclas - 1;
    }
}

