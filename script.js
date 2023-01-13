let quantidadeCartas;
const conteudo = document.querySelector(".conteudo");
let primeiraCarta = "";
let segundaCarta = "";

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
  if (
    !conteudo.classList.contains("aguardar") &&
    !carta.classList.contains("girarcarta")
  ) {
    carta.classList.add("girarcarta");
    if (primeiraCarta === "") {
      primeiraCarta = carta;
    } else if (segundaCarta === "") {
      segundaCarta = carta;
      conteudo.classList.add("aguardar");
      setTimeout(cartasIguais, 1000);
    }
  }
}
function comparador() {
  return Math.random() - 0.5;
}
function cartasIguais() {
  if (primeiraCarta.innerHTML === segundaCarta.innerHTML) {
    primeiraCarta = "";
    segundaCarta = "";
  } else {
    primeiraCarta.classList.remove("girarcarta");
    segundaCarta.classList.remove("girarcarta");
    primeiraCarta = "";
    segundaCarta = "";
  }
  conteudo.classList.remove("aguardar");
}
