// Crie um algoritmo que faça que a variável A seja igual a B, B seja igual a C e que C seja igual a A.
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; //A

// Uma solução mais moderna para o exercício:
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
