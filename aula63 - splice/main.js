//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// nomes.splice(índice atual, delete, elementos)

// unshift:
// nomes.splice(0,0,"Maxsy");

// pop:
// nomes.splice(-1,1)

// shift:
removidos = nomes.splice(0,1);

// Adicionando elemento no meio da lista:
nomes.splice(2,0,"Davi");
console.log(nomes);
