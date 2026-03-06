// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//                                   arrow function
const numerosFiltro = numeros.filter(valor => valor > 10);

// console.log(numerosFiltro);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
const pessoasIdosas = pessoas.filter(obj => obj.idade > 50);
const pessoasTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith("a"));
console.log(pessoasTerminaComA);

console.log(pessoas);
// let maiorDez = [];
// for (numero of numeros) {
//     console.log(numero);
//     if (numero > 10) {
//         maiorDez.push(numero);
//     }
// }

// console.log(maiorDez);