function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
        enumerable: false,  // Mostra a chave
        value: estoque, // Valor
        writable: true, // Pode alterar o valor?
        configurable: true // Pode deletar, alterar o valor, etc?
    });

    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true,  // Mostra a chave
    //         value: nome, // Valor
    //         writable: true, // Pode alterar o valor?
    //         configurable: true // Pode deletar, alterar o valor, etc?
    //     },

    //     preco: {
    //         enumerable: true,  // Mostra a chave
    //         value: nome, // Valor
    //         writable: true, // Pode alterar o valor?
    //         configurable: true // Pode deletar, alterar o valor, etc?
    //     }

    // });
}

const p1 = new Produto("Camisa", 20, 3);

console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}