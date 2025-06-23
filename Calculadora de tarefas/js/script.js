const input = document.getElementById("entrada");
const lista = document.getElementById("lista");

function adicionar() {
  const texto = input.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
  input.value = "";
}

function marcar() {
  // Remove destaque anterior, se existir
  const anterior = document.getElementById("importante");
  if (anterior) {
    anterior.removeAttribute("id"); // só tira o destaque, não apaga o item
  }

  // Marca o último como importante
  const ultItem = lista.lastElementChild;
  if (ultItem) {
    ultItem.setAttribute("id", "importante");
  }
}

function executar() {
  const importante = document.getElementById("importante");
  if (importante) {
    alert(`Executando tarefa: ${importante.textContent}`);
    importante.remove(); // remove da lista após execução
  } else {
    alert("Nenhuma tarefa marcada como importante.");
  }
}
