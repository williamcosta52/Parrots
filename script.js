let quantidadeCartas;
const conteudo = document.querySelector(".conteudo");
let cartasjogo = [];
let cards = [
  "./imagens/bobrossparrot.gif",
  "./imagens/bobrossparrot.gif",
  "./imagens/explodyparrot.gif",
  "./imagens/explodyparrot.gif",
  "./imagens/fiestaparrot.gif",
  "./imagens/fiestaparrot.gif",
  "./imagens/metalparrot.gif",
  "./imagens/metalparrot.gif",
  "./imagens/revertitparrot.gif",
  "./imagens/revertitparrot.gif",
  "./imagens/tripletsparrot.gif",
  "./imagens/tripletsparrot.gif",
  "./imagens/unicornparrot.gif",
  "./imagens/unicornparrot.gif",
];

mostrarCartas();
function mostrarCartas() {
  while (
    quantidadeCartas % 2 !== 0 ||
    quantidadeCartas < 4 ||
    quantidadeCartas > 14
  ) {
    quantidadeCartas = Number(prompt("Qual a quantidade de cartas?"));
  }
}
mostrarJogo();
function mostrarJogo() {
  for (let i = 0; i < quantidadeCartas; i++) {
    cartasjogo[i] = cards[i];
  }
  cartasjogo.sort(comparador);
  for (let i = 0; i < cartasjogo.length; i++) {
    conteudo.innerHTML += `<div onclick="virarcarta(this)" class="card">
    <div class="frente face"><img src="./imagens/back.png" /></div>
    <div class="costas face">
      <img src="${cartasjogo[i]}" />
    </div>
</div>`;
  }
}
function virarcarta(carta) {
  carta.classList.add("girarcarta");
}
function comparador() {
  return Math.random() - 0.5;
}
