// Exercício 3 Inversão de Frases

// Enunciado: Desenvolva uma aplicação que solicite uma frase e a exiba com os caracteres invertidos.

// Exemplo: Javascript → tpircsavaJ.

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt, alert, for ou forEach.
// Teste o seu código.

function invertePalavra() {
  const palavra = prompt("Insira a sua frase ou palavra a ser invertida")
  if (typeof palavra === "string" && palavra.trim().length > 0) {
    const arrayDaPalavra = palavra.split("");
    arrayDaPalavra.reverse();
    const novaPalavra = arrayDaPalavra.join("");
    alert(`${palavra} → ${novaPalavra}`);
  } else if (palavra.trim().length === 0) {
    alert(
      "Não é possivel fazer a exibição com um valor vazio, insira uma palavra ou uma frase por favor!"
    );
  }
}

invertePalavra();
