// O PROMPT SEMPRE retornará uma string
let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

// Em uma concatenação utilize SEMPRE TEMPLATE STRING
alert(`O resultado da soma dos dois números é ${resultado}`);
