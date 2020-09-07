/*
  1 - Não podemos criar constantes com palavras reservadas da linguagem

  2 - Constantes precisam ter nomes significativos

  3 - Não pode começar o nome de uma constantes com um número

  4 - Não pode conter espaço ou hífen no nome de uma constantes

  5 - Pode e deve se usar camelCase em constantes compostas

  6 - As constantes são Case-sensitive, isso significa que letra maiúscula é diferente de letra minúscula

  7 - Não podemos modificar o valor de uma constante

  8 - Não utilize VAR, utilize CONST 
*/

const nome = 'Eduardo';
console.log(nome);

// Pode-se atribuir uma variável no valor de outra variável
const numberOne = 5;
const numberTwo = 10;
const result = numberOne + numberTwo;
const resultDuplicate = result * 2;

console.log(result);
console.log(resultDuplicate);

/*
  Operadores Aritméticos:
  '+' adição
  '-' subtração
  '*' multiplicação
  '/' divisão
*/

/*
  O Javascript é de tipagem dinâmica:
  String = Texto (String fica entre aspas)
  Number = Número
*/
console.log(typeof numberTwo);
console.log(typeof nome);

// O sinal de adição serve para somar e concatenar
console.log(numberOne + numberTwo); // Aqui teremos a soma dos 2 números

const numberThree = '16';
console.log(numberOne + numberThree); // E aqui teremos a concatenação do número com a string

// Vamos fazer a verificação do tipo
console.log(typeof (numberOne + numberThree));

/* 
  Observação: 
  Para que o tipo da função acima seja 'Number', precisamos que os dois sejam do tipo 'Number', caso contrário será 'String'
*/
console.log(typeof (numberOne + numberTwo));
