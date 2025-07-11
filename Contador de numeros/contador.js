function contarnumero(numeroBase, digito){
    let texto = numeroBase.toString();
    let d = digito.toString();
    let contador = 0;


    for(let i = 0; i < texto.length; i++){
    if(texto[i] === d){
        contador++;
        }
    }
    return contador;
}

    console.log(contarnumero(1234567891234, 3)); // Deve mostrar 2
    console.log(contarnumero(33333, 3));         // Deve mostrar 5
    console.log(contarnumero(777, 5));           // Deve mostrar 0
