// Exercício 4 Identificação de Idades Extremas

// Enunciado: Crie uma aplicação que peça ao usuário que insira 5 idades, armazene-as em um array e informe a idade do mais novo e do mais velho.

// Observações:

// Não é preciso validar idades repetidas, mas evite-as no seu teste.
// Valide sempre as entradas de dados.
// Utilize prompt, alert e sort.
// Teste o seu código.

function recebeIdades() {
  const idades = [];
  for (let i = 1; i <= 5; i++) {
    let idade = prompt(`insira a ${i}ª idade!`);
    if(idade === null) return alert("Cancelando o programa!")
    idade = Number(idade);
    while (isNaN(idade) || idade <= 0 || !Number.isInteger(idade)) {
      idade = prompt(
        "Insira uma idade válida (deve ser um número inteiro maior que 0) Ou clique em cancelar para cancelar o programa!"
      );
      if (idade === null) {
        return alert("Cancelando o programa!");
      }
      idade = Number(idade);
    }
    idades.push(idade);
  }
  let maisNovo = Math.min(...idades);
  let maisVelho = Math.max(...idades);
  alert(
    `${maisNovo} é a idade do mais novo\n${maisVelho} é a idade mais alta!`
  );
}

recebeIdades();
