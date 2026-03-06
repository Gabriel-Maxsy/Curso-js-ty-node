// Atribuição via desestruturação com objetos

const pessoa = {
    // nome: "Gabriel",
    sobrenome: "Silva",
    idade: 20,
    endereco: {
        rua: "rancharia",
        numero: 37
    }
};

// const {nome, sobrenome, ...resto} = pessoa;
// console.log(nome, sobrenome, resto);

// const { endereco: {rua, ...r} } = pessoa;
// console.log(rua, r);

// const {nome: r, sobrenome, ...resto} = pessoa;
// console.log(r, sobrenome, resto);

const {nome: teste = "oi", ...resto} = pessoa;
console.log(teste);