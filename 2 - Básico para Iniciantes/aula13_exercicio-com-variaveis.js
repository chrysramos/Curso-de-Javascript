// Crie um algoritmo que faça que a variável A seja igual a B, B seja igual a C e que C seja igual a A.
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; //A

// Para resolvermos isso temos que criar uma variável temporário para armazenar o valor de A
const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp; // Aqui temos que buscar o valor da variável varATemp

console.log(varA, varB, varC);
