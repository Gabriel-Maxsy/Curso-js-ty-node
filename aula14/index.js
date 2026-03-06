// let num1 = 12.5758924869;
// let num2 = 2.5;

// console.log(num1.toString()); // vira string.
// console.log(num1.toString(2)); // Mostra o valor binario do número.
// console.log(num1.toFixed(2)); // Formata para duas casas decimais.
// console.log(Number.isInteger(num1)); // Verifica se o número é inteiro.

// let temp = num1 * 'ola';
// console.log(Number.isNaN(temp)) //verifica se a conta deu um resultado: NaN.


// Resolvendo problema dos números decimais:

let x = 0.7;
let y = 0.1;

x += y; //0.8
x += y; //0.9
x += y; //1.0

// console.log(x); // saida: 0.999999..
// Consertando:
x = Number(x.toFixed(2));
console.log(x);