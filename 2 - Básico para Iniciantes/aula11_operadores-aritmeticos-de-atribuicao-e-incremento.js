/* 
  Operadores Aritméticos, de Atribuição e Incremento

  Aritméticos:
  - Adição/Concatenação: +
  - Subtração: -
  - Multiplicação: *
  - Divisão: /
  - Potenciação: ** (É usado sempre que queremos elevar um número)
  - Resto da Divisão: %

  Observação: Concatenar significa unir.

  Ordem que os Operadores são executados:
  - Tudo que está entre parentêses: ()
  - Potenciação: ** 
  - Multiplicação: * , Divisão: / e Resto da Divisão: %
  - Adição: + e Subtração: -

  Observação: Caso tenha operadores que tenha a mesma importância juntos, como o caso de multiplicação e divisão (num1 * num2 / num3) o mesmo será executado na ordem que foi descrito na fórmula.
*/

const num1 = 10;
const num2 = 3;

// Adição +
console.log(num1 + num2);

// Subtração -
console.log(num1 - num2);

// Multiplicação *
console.log(num1 * num2);

// Divisão /
console.log(num1 / num2);

// Potenciação ** (No exemplo abaixo temos 10 elevado a 3)
console.log(num1 ** num2);

// Resto da Divisão %
console.log(num1 % num2);

// Operador de (pós)Incremento: ++ (depois do nome da variável)
// E temos também o (pós)Decremento: -- (depois do nome da variável)
let contadorPos = 1;
console.log(contadorPos++); // Aqui ele irá atribuir +1 na variável, mas não exibirá
console.log(contadorPos); // Aqui sim ele i´ra exibir o valor incrementado

// Observação: Em Operadores de Incremento e Decremento utilize sempre let, pois const não poderá ser modificado.

// Operador de (pré)Incremento: ++ (antes do nome da variável)
// E temos também o (pré)Decremento: -- (antes do nome da variável)
let contadorPre = 5;
console.log(++contadorPre); // Aqui ele já incrementa e exibe na tela o valor 6

// Observação: Em Operadores de Incremento e Decremento utilize sempre let, pois const não poderá ser modificado.

/* 
  Operadores de Atribuição:
    (+=) -> Ele mais o valor atribuido
    (-=) -> Ele menos o valor atribuido
    (*=) -> Ele vezes o valor atribuido
    (/=) -> Ele dividido pelo valor atribuido
*/

let passos = 2;
passos **= 10;
console.log(passos);

let number = 1;
number += 5;
console.log(number);

let idade = 33;
idade -= 2;
console.log(idade);

// NaN - Not a Number (Não é um número)
const number1 = 10;
const number2 = 'José';
console.log(number1 * number2);

// O Javascript faz a conversão e transforma a string para um tipo number
const number3 = '5';
console.log(number1 * number3);
console.log(typeof number3);

// Podemos ver abaixo que o Javascript achou melhor fazer a concatenação entre 10 e 5 ficando 105
console.log(number1 + number3);

// Para resolvermos isso podemos utilizar o "parseInt" (converter para inteiro)
const number4 = parseInt('5');
console.log(number1 + number4);
console.log(typeof number4);

// O Javascript não faz distinção de números inteiros para números flutuantes, para fazermos a conversão para Float utilizamos o "parseFloat"
const number5 = parseFloat('5.7');
console.log(number1 + number5);
console.log(typeof number5);

// Temos também o "Number" que verifica e transforma em inteiro o decimal de acordo com o número que está na string

const number6 = Number('7.9');
const number7 = Number('3');
console.log(number1 + number6 + number7);
