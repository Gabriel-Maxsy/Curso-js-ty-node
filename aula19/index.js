/*
    Primitivos (imutaveis) - string, number, boolean, undefined, null 
    (bigint, symbol) - valores cópiadas.
*/

/*

let a = "A";
let b = "B"; // Cópia

console.log(a, b);

a = "Outra coisa";
console.log(a, b);

*/

/* 
    Dados imutáveis não ligam duas variáveis a um lugar da memória mas 
    sim fazem uma cópia como no exemplo acima. 
*/

// Referência (mutável) - array, object, function - passando por referência.

// let a = [1, 2, 3]; 
// let b = a;

// console.log(a, b);

// a.push(4); // [1, 2, 3, 4]
// console.log(a, b); // não é uma cópia, apontam pro mesmo valor na memória.

// b.pop(); // [1, 2, 3]
// console.log(a, b);

// a forma correta de "copiar" um array sem referência é:

// let a = [1, 2, 3]; 
// let b = [...a];

// console.log(a, b);

// a.push(4); 
// console.log(a, b); 

// b.pop();
// console.log(a, b);

// Mesma lógica pra objetos:
const a = {
    nome: "Gabriel",
    sobrenome: "Maxsy"
};

const b = a
// para não apontar para o mesmo valor:
// const b = {...a}

b.nome = "teste"

console.log(b)