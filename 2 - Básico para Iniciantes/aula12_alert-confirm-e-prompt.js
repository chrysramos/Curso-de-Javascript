// Esses comando não existem no NodeJS, mas existem no Window no Console do Navegador(Browser)
alert('Com a nossa mensagem.');

confirm('Deseja realmente apagar?');

// Tudo que o usuário digitar na function prompt será uma string, para isso teremos que converter com o Number, parseInt ou parseFloat
prompt('Digite o seu nome:');

// Exercício
let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert('O resultado é ' + resultado);
