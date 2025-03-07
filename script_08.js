// Exercício 8 Seleção de Números com Antecessor Par

// Enunciado: Construa uma aplicação que defina um array [2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15] e gere outro array com os números que têm como antecessor um número par.

// Por exemplo: o número ‘10’, seu antecessor é ‘2’ que é par; logo, o número ‘10’ deve ser selecionado. Já o número ‘4’, possui ‘3’ como antecessor (ímpar), e, portanto, não deve ser selecionado. Ignore o primeiro número, pois este não tem antecessor.

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt e alert.
// Teste o seu código.

const array = [2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15];

function geraArray(entrada) {
  if (Array.isArray(entrada) && entrada.every((valor) => !isNaN(valor))) {
    const novoArray = entrada.filter((valor, indice, array) => {
      if (array[indice - 1] % 2 === 0) return valor;
    });
    alert(`O novo array gerado ficou desta maneira: \n${novoArray.join(", ")}`);
  } else
    alert(
      "A entrada não satisfaz a condicão de ser um array somente com valores numéricos, reveja a entrada e tente novamente!"
    );
}

geraArray(array);
