// Exercício 9 Ordenação de Números (Ascendente e Descendente)

// Enunciado: Construa uma aplicação que defina um array [2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15] e mostre-o em ordem ascendente e descendente na mesma mensagem.

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt e alert.
// Teste o seu código.

const array = [2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15];

function sortArray(arrayDeEntrada) {
  if (
    Array.isArray(arrayDeEntrada) &&
    arrayDeEntrada.every((value) => typeof value === "number" && !isNaN(value))
  ) {
    const arrayAscendente = [...arrayDeEntrada].sort((a, b) => a - b);
    const arrayDescendente = [...arrayDeEntrada].sort((a, b) => b - a);
    alert(
      `O array de forma Ascendente fica desta maneira:\n${arrayAscendente}\n\rO array de forma Descendente fica desta maneira:\n${arrayDescendente}`
    );
  } else
    alert(
      "O valor de entrada não satisfaz as condições, é necessário ser um array somente com valores númericos."
    );
}

sortArray(array);
