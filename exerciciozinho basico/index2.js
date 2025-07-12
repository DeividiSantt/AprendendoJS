let numero = prompt("Digite um número para ver a tabuada:");
numero = Number(numero);

if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
} else {
    for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
    }
}
