function soma(x=1, y=2) {
    const resultado = x + y;
    return resultado
};

resultadoSoma = soma(3);
// console.log(soma(2));
console.log(resultadoSoma);

// Outro modo de criar a função:

// const raiz = function(n){
//     return n ** 0.5;
// };

// console.log(raiz(9));

// Arrows Funcitons:

const raiz = (n) => n ** 0.5;

console.log(raiz(9));


// ----------- Exercício ------------ //

// Mini Exercício — Funções em JavaScript

// Crie uma função chamada gerenciarFila que receba um array de alunos e faça o seguinte:

// Remova o primeiro aluno da lista

// Adicione esse aluno removido no final da lista

// Retorne a nova lista

function gerenciarFila(array) {
    const novaLista = array.slice();

    let primeiro = novaLista.shift();
    
    novaLista.push(primeiro);
    
    return novaLista;
};

a1 = ["Gabriel", "Otavio", "Fernando"];
console.log(gerenciarFila(a1));