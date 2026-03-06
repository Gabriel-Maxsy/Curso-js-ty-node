// Global
function retornaFuncao(nome) {
    return function(sobrenome) {
        return nome + " " + sobrenome;
    };
}

function falaNome(nome) {
    const sobrenome = "Maxsy";
    console.log(nome, sobrenome);
}

const funcao = retornaFuncao("Gabriel");
const funcao2 = retornaFuncao("Caio");
console.dir(funcao);
console.dir(funcao2);

console.log(funcao("Maxsy"), funcao2("Dutra"));