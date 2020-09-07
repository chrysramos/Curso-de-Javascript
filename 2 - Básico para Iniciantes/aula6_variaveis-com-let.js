// Podemos usar tanto LET ou VAR para declarar variáveis, mas LET é o mais aconselhado e atual
let ele = 'Eduardo';
let ela = 'Mônica';
let filho = 'João';

console.log(ele + ' nasceu em 1984.');
console.log('Em 2000 ' + ele + ' conheceu ' + ela + '.');
console.log(ele + ' casou-se com ' + ela + ' em 2012.');
console.log(ela + ' teve um filho com ' + ele + ' em 2015.');
console.log('O filho de ' + ele + ' se chama ' + filho + '.');

// Podemos declarar uma variável sem um valor
let nome;
console.log(nome); // O valor dela padrão será UNDEFINED

// Inicializando a variável 'nome' com um valor
nome = 'João';
console.log(nome);

// Por ser uma variável podemos variar o seu valor
nome = 'Chrys';
console.log(nome);

/* 
  Observação:
  - Ao declarar uma variável LET, ela por sua vez não poderar ser declarada novamente, caso isso aconteça obteremos um erro de sintaxe, pois ele já foi declarado.
*/

/*
  1 - Não podemos criar variáveis com palavras reservadas da linguagem

  2 - Variáveis precisam ter nomes significativos

  3 - Não pode começar o nome de uma variável com um número

  4 - Não pode conter espaço ou hífen no nome de uma variável

  5 - Pode e deve se usar camelCase em variáveis compostas

  6 - As variáveis são Case-sensitive, isso significa que letra maiúscula é diferente de letra minúscula

  7 - Não podemos redeclarar variáveis com let

  8 - Não utilize VAR, utilize LET 
*/
