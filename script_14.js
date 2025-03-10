// Exercício 14 Grupo - Arrow function

// No arquivo script.js, siga as etapas abaixo:

// Crie uma função de seta (arrow function), para calcular a soma entre três valores, informados pelo usuário através do prompt.
// Chame esta função e exiba o resultado.

const primeiroValor = prompt("Insira aqui o primeiro valor da soma");
const segundoValor = prompt("Insira aqui o segundo valor da soma");
const terceiroValor = prompt("Insira aqui o terceiro valor da soma");

const funcaoDeSeta = (a, b, c) => {
  if (typeof a === "string" && !isNaN(a) && a.trim().length > 0) {
    a = Number(a);
  } else {
    alert("O primeiro valor não é válido, precisa ser um valor numérico!");
    return;
  }
  if (typeof b === "string" && !isNaN(b) && b.trim().length > 0) {
    b = Number(b);
  } else {
    alert("O segundo valor não é válido, precisa ser um valor numérico!");
    return;
  }
  if (typeof c === "string" && !isNaN(c) && c.trim().length > 0) {
    c = Number(c);
  } else {
    alert("O terceiro valor não é válido, precisa ser um valor numérico!");
    return;
  }
  alert(`O resultado da soma de ${a}, ${b} e ${c} é igual a = ${a + b + c}`);
};

funcaoDeSeta(primeiroValor, segundoValor, terceiroValor);
