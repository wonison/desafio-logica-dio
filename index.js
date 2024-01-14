// Inicializando o nome e a quantidade de experiência (XP) do herói
let nomeHeroi;
let xpHeroi;

// Solicitando ao usuário que insira valores válidos
do {
  nomeHeroi = prompt("Digite o nome do herói:");
  xpHeroi = parseInt(
    prompt("Digite a quantidade de experiência (XP) do herói:")
  );

  // Verificando se XP é um número válido
  if (isNaN(xpHeroi) || xpHeroi < 0) {
    alert("Por favor, insira uma quantidade de experiência válida.");
  }
} while (isNaN(xpHeroi) || xpHeroi < 0);

// Utilizando uma estrutura de decisão para determinar o nível
let nivel;

if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
  nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Exibindo a mensagem final
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
