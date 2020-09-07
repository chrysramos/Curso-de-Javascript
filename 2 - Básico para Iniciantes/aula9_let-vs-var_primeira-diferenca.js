// var nome = 'Chrystian';
// var nome = 'Ramos';

let nome = 'Chrystian';
nome = 'Ramos';

console.log(nome);

/*
  Observação:
  Como podemos ver acima quando utilizamos o "var" para declarar a variável nome e depois redeclaramos com um novo valor, ela rodou no console subescrevendo o valor anterior.

  Já na variável "let" não podemos redeclarar uma variável let, pois obteremos um erro de sintaxe dizendo que o "identificador 'nome' já foi declarado". Para resolver isso, apenas elimine a palavra reservada "let" antes do nome da variável.

  Esse problema do "var" foi corrigido pelo ECMASCRIPT 2015 (ES6), sendo criado o let. ECMASCRIPT é o responsável pela padronização da linguagem Javascript.

  NUNCA crie variáveis sem as palavras reservadas "let" e "const"
*/
