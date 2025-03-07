// Exercício 1 Repetição de Nomes com Contagem

// Enunciado: Construa uma aplicação que solicite um nome e exiba uma mensagem com esse nome repetido 10 vezes, mostrando o passo de 1 a 10 antes do nome.

// Exemplo: 1 - Machado de Assis.

// Observações:

// Valide sempre as entradas de dados.
// Gere a mensagem concatenando as strings e colocando “\n” para separar linhas.
// Utilize prompt, alert e for.
// Teste o seu código.

function recebeNome() {
  const nome = prompt("Insira um nome para usar o programa.")
  const h1 = document.querySelector("body");
  if (typeof nome === 'string' &&  nome.trim().length > 0) {
    for (let i = 1; i <= 10; i++) {
      const elementoCriado = document.createElement("p");
      elementoCriado.innerText = `${i} - ${nome}\n`;
      h1.appendChild(elementoCriado);
    }
  } else alert("Insira um nome que não seja vazio.");
}

recebeNome();
