// const pessoa1 = {
//     nome: "Gabriel",
//     sobrenome: "Silva",
//     idade: 20
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);


// Função factory:
// function criaPessoa (nome, sobrenome, idade) {
//     // return{
//     //     nome: nome,
//     //     sobrenome: sobrenome,
//     //     idade: idade
//     // };

//     OU

//     return {
//         nome, 
//         sobrenome, 
//         idade
//      };
// }

// const pessoa2 = criaPessoa("Yasmin", "Pires", 20);

// console.log(pessoa2.nome);

// ------------------- //

// Métodos em objetos 
// const pessoa1 = {
//     nome: "Gabriel",
//     sobrenome: "Silva",
//     idade: 20,

//     fala() {
//         console.log(`A minha idade atual é ${this.idade}`);
//     },

//     aumentaIdade() {
//         this.idade++;
//     }
// };

// pessoa1.fala()
// pessoa1.aumentaIdade()
// pessoa1.fala()

// ======================= Exercício ======================= //

// Mini Exercício – Sistema simples de “Contas Bancárias”
// Objetivo:

// Crie uma função factory chamada criaConta que receba:
    // nome do titular
    // saldo inicial
    
    // Essa função deve retornar um objeto com:
        // titular
        // saldo
        // um método verSaldo() que mostra o saldo atual
        // um método depositar(valor) que adiciona ao saldo
        // um método sacar(valor) que subtrai do saldo (não precisa validar nada ainda)
        // Crie duas contas usando essa função.
        
        // Chame os métodos das contas, por exemplo:
            // ver o saldo
            // fazer depósitos
            // fazer saques

function criaConta(titular, saldo) {
    return {
        titular,
        saldo,

        verSaldo() {
            console.log(`Você ${this.titular} tem ${this.saldo} na conta.`);
        },

        depositar(deposito) {
            this.saldo += deposito;
            console.log(`Você depositou ${deposito} em sua conta, agora você possui ${this.saldo}`);
        },

        sacar(saque) {
            this.saldo -= saque;
            console.log(`Você sacou ${saque} em sua conta, agora você possui ${this.saldo}`);
        }
    }
};

const gabriel = criaConta("Gabriel", 3000);

gabriel.verSaldo();
gabriel.sacar(300);
gabriel.verSaldo();
gabriel.depositar(5000);
