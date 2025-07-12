let idade = prompt("Digite sua idade:");
idade = Number(idade);

if (isNaN(idade) || idade <= 0) {
    alert("Por favor, digite uma idade válida.");
} else {
    

idade = Number(idade);
if (idade <= 12) {
    alert("Você é uma criança.");
} else if (idade > 12 && idade < 18) {
    alert("Você é um adolescente.");
} else if (idade >= 18 && idade < 60) {
    alert("Você é um adulto.");
} else {
    alert("Você é um idoso.");
}
}

