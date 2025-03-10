// Exercício 12 Grupo - Pontuação do time

// No arquivo script.js, siga as etapas abaixo:

// Pergunte ao usuário o nome do time de futebol, o número de vitórias, o número de empates e o número de derrotas.
// Crie uma função que receba como parâmetros as respostas do usuário e informe:
// A quantidade total de pontos.
// A média de pontos por jogo.
// Chame esta função, passando os dados informados pelo usuário.
// Observações:

// Cada vitória vale 3 pontos, cada empate vale 1 ponto e cada derrota vale 0 pontos.
// Utilize console.log para exibir os números ao usuário.
// Utilize prompt para perguntar ao usuário.
// Todo jogo só tem 3 resultados possíveis: vitória, empate ou derrota. Pense nisso na hora de fazer a média.

const nomeDoTime = prompt("Informe aqui o nome do time de futebol");
const numeroDeVitorias = prompt("Informe aqui o número de vitórias");
const numeroDeDerrotas = prompt("Informe aqui o número de derrotas");
const numeroDeEmpates = prompt("Informe aqui o número de empates");

function pontuacaoTime(nome, qtdVitorias, qtdDerrotas, qtdEmpates) {
  let vitorias;
  let derrotas;
  let empates;

  if (typeof nome !== "string" || nome.trim().length === 0) {
    console.log(
      "O nome do time não é válido, deve ser uma string que não seja vazia"
    );
    return;
  }
  if (
    typeof qtdVitorias === "number" &&
    Number.isInteger(qtdVitorias) &&
    qtdVitorias >= 0
  ) {
    vitorias = qtdVitorias;
  } else if (
    qtdVitorias.trim().length > 0 &&
    !isNaN(qtdVitorias) &&
    Number.isInteger(Number(qtdVitorias)) &&
    Number(qtdVitorias) >= 0
  ) {
    vitorias = Number(qtdVitorias);
  } else {
    console.log(
      "A quantidade de vitórias não é válida, deve ser um número inteiro maior que zero!"
    );
    return;
  }

  if (
    typeof qtdDerrotas === "number" &&
    Number.isInteger(qtdDerrotas) &&
    qtdDerrotas >= 0
  ) {
    derrotas = qtdDerrotas;
  } else if (
    qtdDerrotas.trim().length > 0 &&
    !isNaN(qtdDerrotas) &&
    Number.isInteger(Number(qtdDerrotas)) &&
    Number(qtdDerrotas) >= 0
  ) {
    derrotas = Number(qtdDerrotas);
  } else {
    console.log(
      "A quantidade de derrotas não é válida, deve ser um número inteiro maior que zero!"
    );
    return;
  }
  if (
    typeof qtdEmpates === "number" &&
    Number.isInteger(qtdEmpates) &&
    qtdEmpates >= 0
  ) {
    empates = qtdEmpates;
  } else if (
    qtdEmpates.trim().length > 0 &&
    !isNaN(qtdEmpates) &&
    Number.isInteger(Number(qtdEmpates)) &&
    Number(qtdEmpates) >= 0
  ) {
    empates = Number(qtdEmpates);
  } else {
    console.log(
      "A quantidade de empates não é válida, deve ser um número inteiro maior que zero!"
    );
    return;
  }

  const pontosSobreVitoria = 3 * vitorias;
  const qtdDePontosTotais = pontosSobreVitoria + empates;
  const qtdDeJogos = vitorias + empates + derrotas;
  const mediaDePontosPorJogo = (qtdDePontosTotais / qtdDeJogos).toFixed(2);

  console.log(`${nome} disputou ${qtdDeJogos} jogos`);
  console.log(`Fez um total de ${qtdDePontosTotais} pontos`);
  console.log(
    `E teve uma média de ${
      mediaDePontosPorJogo > 0 ? mediaDePontosPorJogo : "nenhum"
    } pontos por jogo`
  );
}

pontuacaoTime(nomeDoTime, numeroDeVitorias, numeroDeDerrotas, numeroDeEmpates);
