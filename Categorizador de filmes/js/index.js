const filmes = [
  { titulo: "Interestelar", ano: 2014 },
  { titulo: "Matrix", ano: 1999 },
  { titulo: "Oppenheimer", ano: 2023 },
  { titulo: "Toy Story", ano: 1995 },
  { titulo: "Duna", ano: 2021 }
];

function filtrarFilmes(callback) {
  return filmes.filter(callback);
}

function filtrarPorAno() {
  const anoDigitado = parseInt(document.getElementById("filtroAno").value);
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  if (isNaN(anoDigitado)) {
    resultado.innerHTML = "<li>Digite um ano válido.</li>";
    return;
  }

  const filtrados = filtrarFilmes(filme => filme.ano >= anoDigitado);

  if (filtrados.length === 0) {
    resultado.innerHTML = "<li>Nenhum filme encontrado.</li>";
    return;
  }

  filtrados.forEach(filme => {
    const li = document.createElement("li");
    li.textContent = `${filme.titulo} (${filme.ano})`;
    resultado.appendChild(li);
  });
}
