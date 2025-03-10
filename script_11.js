// Exercício 11 Validação de Expressões Aritméticas

// Enunciado: Crie uma aplicação que receba uma expressão aritmética com parênteses, por exemplo “(23 + 4) * (67 - 9)” e informe se a mesma está bem formada ou não. Utilize os conceitos de pilha.

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt e alert.
// Teste o seu código.

const expressao = "(23 + 4) * (67 - 9)";

function validaExpressao(entrada) {
  let arrayDeValidacao = [];
  let expressaoValida = true;
  if (typeof entrada === "string") {
    const arrayDaExpressao = [...entrada.replaceAll(" ", "").split("")];
    arrayDaExpressao.forEach((valor) => {
      switch (valor) {
        case "(":
          arrayDeValidacao.push(valor);
          break;
        case ")":
          if (arrayDeValidacao.length > 0) {
            arrayDeValidacao.pop();
          } else {
            expressaoValida = false;
            return;
          }
          break;
        default:
          break;
      }
    });
    if (arrayDeValidacao.length === 0 && expressaoValida) {
      alert(`A expressão ${entrada} está correta!`);
    } else alert(`A expressão ${entrada} está errada.`);
  } else alert("É necessário que a entrada seja uma string!");
}

validaExpressao(expressao);
