const opcoes = ["pedra", "papel", "tesoura"];
let contadorJogador = 0;
let contadorComputador = 0;
let empates = 0;
document.querySelector("#placar-jogador").textContent = `Jogador: ${contadorJogador}`;
document.querySelector("#placar-computador").textContent = `Computador: ${contadorComputador}`;
document.querySelector("#empates").textContent = `Empates: ${empates}`;

function jogadaComputador() {
  return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function jogarRodada(escolhaJogador, escolhaComputador) {
  escolhaJogador = escolhaJogador.toLowerCase();
  if (!opcoes.includes(escolhaJogador)) {
    return "Escolha inválida";
  }
  if (escolhaJogador == escolhaComputador) {
    contadorJogador;
    contadorComputador;
    empates++
    return "É um empate";
  }
  if (
    (escolhaJogador == "pedra" && escolhaComputador == "tesoura") ||
    (escolhaJogador == "papel" && escolhaComputador == "pedra") ||
    (escolhaJogador == "tesoura" && escolhaComputador == "papel")
  ) {
    contadorJogador++;
    contadorComputador;
    return "Você venceu!";
  }
  contadorJogador;
  contadorComputador++;
  return "Você perdeu!";
}

function limparPlacar() {
  contadorJogador = 0;
  contadorComputador = 0;
  empates = 0;
  document.querySelector("#placar-jogador").textContent = `Jogador: ${contadorJogador}`;
  document.querySelector("#placar-computador").textContent = `Computador: ${contadorComputador}`;
  document.querySelector("#empates").textContent = `Empates: ${empates}`;
}

function reiniciarJogo() {
  limparPlacar();
  document.querySelector("#resultado").textContent = "";
  document.querySelector("#jogador-escolha").textContent = "";
  document.querySelector("#computador-escolha").textContent = "";
}

const botaoPedra = document.querySelector("#pedra");
botaoPedra.addEventListener("click", () => {
  const escolhaComputador = jogadaComputador();
  const resultado = jogarRodada("pedra", escolhaComputador);
  document.querySelector("#resultado").textContent = resultado;
  document.querySelector("#jogador-escolha").textContent = `Você escolheu: pedra`;
  document.querySelector("#computador-escolha").textContent = `Computador escolheu: ${escolhaComputador}`;
  document.querySelector("#placar-jogador").textContent = `Jogador: ${contadorJogador}`;
  document.querySelector("#placar-computador").textContent = `Computador: ${contadorComputador}`;
  document.querySelector("#empates").textContent = `Empates: ${empates}`;
});

const botaoPapel = document.querySelector("#papel");
botaoPapel.addEventListener("click", () => {
  const escolhaComputador = jogadaComputador();
  const resultado = jogarRodada("papel", escolhaComputador);
  document.querySelector("#resultado").textContent = resultado;
  document.querySelector("#jogador-escolha").textContent = `Você escolheu: papel`;
  document.querySelector("#computador-escolha").textContent = `Computador escolheu: ${escolhaComputador}`;
  document.querySelector("#placar-jogador").textContent = `Jogador: ${contadorJogador}`;
  document.querySelector("#placar-computador").textContent = `Computador: ${contadorComputador}`;
  document.querySelector("#empates").textContent = `Empates: ${empates}`;
});

const botaoTesoura = document.querySelector("#tesoura");
botaoTesoura.addEventListener("click", () => {
  const escolhaComputador = jogadaComputador();
  const resultado = jogarRodada("tesoura", escolhaComputador);
  document.querySelector("#resultado").textContent = resultado;
  document.querySelector("#jogador-escolha").textContent = `Você escolheu: tesoura`;
  document.querySelector("#computador-escolha").textContent = `Computador escolheu: ${escolhaComputador}`;
  document.querySelector("#placar-jogador").textContent = `Jogador: ${contadorJogador}`;
  document.querySelector("#placar-computador").textContent = `Computador: ${contadorComputador}`;
  document.querySelector("#empates").textContent = `Empates: ${empates}`;
});
