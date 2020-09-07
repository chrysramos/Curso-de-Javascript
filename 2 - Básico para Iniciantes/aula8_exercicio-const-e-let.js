/* 
  Crie a frase abaixo:
  Eu sou Chrys Ramos, tenho 33 anos, peso 59kg, tenho 1.77m de altura 
  e meu IMC é de 18.832391713747644
  Chrys Ramos nasceu em 1987, na cidade de Valença - RJ.
*/

const nome = 'Chrys';
const sobrenome = 'Ramos';
const idade = 33;
let anoAtual = 2020;
const anoNascimento = anoAtual - idade;
const cidadeNascimento = 'Valença - RJ';
let peso = 59;
const alturaEmM = 1.77;
let imc = peso / (alturaEmM * alturaEmM);

/* 
  Exercício feito com concatenação e utilizando aspas

  console.log(
    'Eu sou ' +
      nome +
      ' ' +
      sobrenome +
      ', tenho ' +
      (anoAtual - anoNascimento) +
      ' anos, peso ' +
      peso +
      ' kg, tenho ' +
      alturaEmM +
      'm de altura e meu IMC é de ' +
      imc
  );

  console.log(nome + ' nasceu em ' + anoNascimento + '.');
*/

// Agora vamos utilizar o "Template Strings" que são as crases
console.log(
	`Eu sou ${nome} ${sobrenome}, tenho ${
		anoAtual - anoNascimento
	} anos, peso ${peso} kg, tenho ${alturaEmM}m de altura e meu IMC é de ${imc}`
);

console.log(
	`${nome} nasceu em ${anoNascimento}, na cidade de ${cidadeNascimento}.`
);

/*
  Observação:
  Quando se utiliza Template Strings usa-se ${var} para envolver a variável.
*/
