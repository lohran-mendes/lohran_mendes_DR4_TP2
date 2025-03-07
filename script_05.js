// Exercício 5 Separação de Números Pares e Ímpares

// Enunciado: Construa uma aplicação que utilize o array [4, 2, 4, 6, 8, 3, 7, 1, 8, 6] e separe os números ímpares dos pares em arrays diferentes, exibindo cada um em mensagens separadas.

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt e alert.
// Teste o seu código.

const array = [4, 2, 4, 6, 8, 3, 7, 1, 8, 6];

function separaArrays(array) {
  if (
    Array.isArray(array) &&
    array.every((value) => typeof value === "number" && !isNaN(value))
  ) {
    const arrayPar = array.filter((value) => value % 2 === 0);
    const arrayImpar = array.filter((value) => value % 2 !== 0);
    alert("Aqui está o array novo somente com os valores pares: \n" + arrayPar);
    alert(
      "Aqui está o array novo somente com os valores ímpares: \n" + arrayImpar
    );
  } else
    alert(
      "O valor informado deve ser um array de números, tente novamente com a entrada correta!"
    );
}

separaArrays(array);
