// argumentos que sustenta todos os argumetnos enviados.
// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }

// funcao(1,2,3,4,5,6,7,8);

// Rest parameter
// const conta = function(operador, acumulador, ...numeros) {
//     for(let numero of numeros){
//         if (operador === "+") acumulador += numero;
//         if (operador === "-") acumulador -= numero;
//         if (operador === "*") acumulador *= numero;
//         if (operador === "/") acumulador /= numero;
//     }
//     console.log(acumulador);
// };

// conta("+", 1, 20, 30, 40, 50);


// const conta = function(operador, acumulador, ...numeros) {
//     console.log(arguments);
// };

// conta("+", 1, 20, 30, 40, 50);

// Arrow function


const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};

conta("+", 1, 20, 30, 40, 50);