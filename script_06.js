// Exercício 6 Soma e Multiplicação de Números

// Enunciado: Construa uma aplicação que solicite que o usuário informe um número inteiro entre 3 e 10 e, usando while, informe a soma e a multiplicação dos números entre 1 e o número que foi informado. Apresente somente uma mensagem.

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt, alert e while.
// Teste o seu código.

function somaEMultiplica() {
  const numero = Number(prompt("Insira um número inteiro entre 3 e 10"));
  let valorInicial = 1;
  if (
    !isNaN(numero) &&
    Number.isInteger(numero) &&
    numero >= 3 &&
    numero <= 10
  ) {
    while (valorInicial <= numero) {
      alert(
        `O resultado de ${valorInicial} + ${numero} é igual a ${
          valorInicial + numero
        } \nOa resultado de ${valorInicial} x ${numero} é igual a ${
          valorInicial * numero
        }`
      );
      valorInicial++;
    }
  } else
    alert(
      "O valor informado tem que ser um número inteiro de 3 a 10, tente novamente informando o valor que satisfaça a condição!"
    );
}
somaEMultiplica();
