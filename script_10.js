// Exercício 10 Ordenação de Nomes (Ascendente e Descendente)

// Enunciado: Construa uma aplicação que defina um array com 10 nomes de escritores (se quiser use o mesmo da questão 7) e mostre uma mensagem com os nomes em ordem ascendente e descendente na mesma mensagem

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt e alert.
// Teste o seu código.

const escritoresFamosos = [
  "Machado de Assis",
  "Clarice Lispector",
  "Jorge Amado",
  "Guimarães Rosa",
  "Cecília Meireles",
  "Carlos Drummond de Andrade",
  "Fernando Pessoa",
  "Gabriel García Márquez",
  "Virginia Woolf",
  "Franz Kafka",
];

function mensagemPorNome(arrayDeEntrada) {
  if (
    Array.isArray(arrayDeEntrada) &&
    arrayDeEntrada.length > 0 &&
    arrayDeEntrada.every((value) => typeof value === "string" && isNaN(value))
  ) {
    const arrayAscendente = [...arrayDeEntrada].sort();
    const arrayDescendente = [...arrayDeEntrada].sort().reverse();
    alert(
      `O array com os nomes Ascendentes:\n${arrayAscendente.join(
        ", "
      )}\n\rO array com os nomes Descendentes:\n${arrayDescendente.join(", ")}`
    );
  } else
    alert(
      "É necessário que o array de entrada só tenha valores que sejam strings"
    );
}
mensagemPorNome(escritoresFamosos);
