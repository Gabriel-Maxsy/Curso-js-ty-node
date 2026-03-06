const frutas = ["pera", "maçã", "uva"];
const pessoa = {
    nome: "Gabriel",
    sobrenome: "Silva",
    idade: 20
};

for (let i in frutas) {
    console.log(frutas[i]);
};

for (let i in pessoa) {
    console.log(i, pessoa[i]);
};