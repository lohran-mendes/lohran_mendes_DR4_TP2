// Exercício 13 Grupo - Sorteio de números para o usuário

// No arquivo script.js, siga as etapas abaixo:

// Pergunte ao usuário quantos números ele deseja sortear.
// Sorteie a quantidade de números informados pelo usuário.
// Obs:

// Utilize uma estrutura de repetição (while ou for).
// Utilize Math.random com Math.ceil para gerar os números aleatórios.
// Utilize console.log para exibir os números ao usuário.
// Utilize prompt para perguntar ao usuário.
// Os números sorteados devem ser aleatórios, entre 1 e 60.

const qtdNumerosSorteados = Number(
  prompt("Quantos números você deseja sortear?")
);

function sorteaNumeros(quantidade) {
  const numerosSortados = [];
  if (
    !isNaN(qtdNumerosSorteados) &&
    Number.isInteger(qtdNumerosSorteados) &&
    qtdNumerosSorteados >= 1 &&
    qtdNumerosSorteados <= 60
  ) {
    for (let i = 0; i < quantidade; i++) {
      let addNumber = Math.ceil(Math.random() * 60);
      if (!numerosSortados.includes(addNumber)) {
        numerosSortados.push(addNumber);
      } else i--;
    }
    console.log(numerosSortados);
  } else
    alert(
      `${qtdNumerosSorteados} Não é um valor válido, lembre-se de entrar com um valor numérico inteiro entre 1 e 60!`
    );
}

sorteaNumeros(qtdNumerosSorteados);
