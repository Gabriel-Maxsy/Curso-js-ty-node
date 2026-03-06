function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa("Gabriel", "Maxsy");
const p2 = new Pessoa("Da", "Silva");

console.log(p1, p2);