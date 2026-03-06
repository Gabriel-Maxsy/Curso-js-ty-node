function Pessoa(nome, sobrenome) {
    const ID = 1;
    const metodoInterno = function() {};

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + " sou um metodo");
    };
}

const p1 = new Pessoa("Gabriel", "Maxsy");
const p2 = new Pessoa("Caio", "Evaudro");

console.log(p1.nome);
p2.metodo();