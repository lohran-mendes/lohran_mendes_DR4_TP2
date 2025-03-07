// Exercício 2 Exibição de Caracteres de uma Palavra

// Enunciado: Crie uma aplicação que exiba os caracteres de uma palavra fornecida pelo usuário, um embaixo do outro.

// Observações:

// Valide sempre as entradas de dados: aqui pede-se somente 1 palavra.
// Utilize prompt, alert, for ou forEach.
// Teste o seu código.

function exibeCaracteres() {
  const palavra = prompt('Insira uma única palavra!')
  if (
    typeof palavra === "string" &&
    palavra.length > 0 &&
    !palavra.includes(" ")
  ) {
    let h1 = document.querySelector('h1')
    let caracteres = palavra.toUpperCase().split('')
    caracteres.forEach((caractere) => {
      const paragrafo = document.createElement('p')
      paragrafo.innerText = caractere + '\n'
      h1.appendChild(paragrafo)
    })
  } else if (palavra.trim().length === 0) {
    alert("Não é possivel fazer a exibição com um valor vazio, insira uma palavra por favor!");
  } else if (palavra.includes(" ")) {
    alert(
      "Não é possível fazer a validação com mais de uma palavra, insira somente uma por favor!"
    );
  }
}
exibeCaracteres()