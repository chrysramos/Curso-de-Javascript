// String, Number, Undefined, Null, Boolean

// Tipo String
const nome = 'Chrystian';
const sobrenome = 'Ramos';
const apelido = `Baixinho`;

// Tipo Number
const num1 = 10;
const num2 = 10.52; // Number Float ou Flutuante

// Tipo Undefined
let nomeAluno; // Indefinido -> é quando não definimos um valor, então ela não aponta pra nenhum local na memória

// Tipo Nulo
let sobrenomeAluno = null; // Nulo -> não aponta pra nenhum local na memória. Esse tipo é utilizado quando não se quer apontar para nenhum lugar da memória

// Tipo Boolean
const boolean = true; // Ele pode ser True ou False (Verdadeiro ou Falso), ele é um valor "Lógico".
const aprovado = true; // O aluno foi aprovado.

// Para ver o tipo da variável e o valor
console.log(typeof aprovado, aprovado);

// Aqui utilizamos o tipo de variável "array"
const a = [1, 2]; // O "=" é o sinal de atribuição
const b = a; // Podemos então dizer que foi atribuido o valor de "a" na variável "b"

console.log(a, b);

// Podemos ver que ao adicionar o 3 na variável "b", acabamos por adicionar em "a", pois eles estão alocado no mesmo espaço da memória
b.push(3);
console.log(a, b);

// Desta maneira não modificamos as duas variáveis e sim apenas a que queremos modificar
let c = 2;
let d = c;

console.log(c, d);

c = 3;

console.log(c, d);
