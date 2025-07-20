const n = 5;
let fatorial = 1;
for(let i = n; i >= 1; i--) {
    fatorial *= i;
}
console.log(`${n}! = ${fatorial}`); // Saída: 5! = 120