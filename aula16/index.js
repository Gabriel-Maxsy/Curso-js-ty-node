// const alunos = ["Gabriel", "Luis", "Maria"];
// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);

// Editando valores no array:
// alunos[0] = "Eduardo";

// Adicionando um valor no array:
// alunos[3] = "Yasmin";
// console.log(alunos);

// Printando o número de elementos presentes no array:
// console.log(alunos.length);

// Adicionando mais elementos ao final do array ultilizando length:
// alunos[alunos.length] = "teste";
// console.log(alunos);

// Função push pra adicionar elementos ao final:
// alunos.push("teste2");
// console.log(alunos);

// Adicionando elemento ao começo do array (mudando todos os elementos de índice):
// alunos.unshift("Primeiro Elemento");
// alunos.unshift("Novo Primeiro");
// console.log(alunos);

// Função que remove ultimo elemento do array:
// alunos.pop();
// Podemos ver quem foi removido guardando a remoção em uma variável:
// const removido = alunos.pop();
// console.log(removido); 
// console.log(alunos);

// Função que remove o elemento incial do array:
// alunos.shift();
// console.log(alunos);

// Deletando o elemento mas sem deletar o índice:
// delete alunos[1];
// console.log(alunos); // saida: [ 'Gabriel', <1 empty item>, 'Maria' ]

// Fatiando arrays:
// alunos.push("Eduardo");
// alunos.push("Fernando");

// console.log(alunos.slice(0, 3));
// Ou usando menos (mesma lógica da string (aula 13))
// console.log(alunos.slice(0, -1));

// Verificando tipo:
// console.log(alunos instanceof Array);

// ----------------------- EXERCÍCIO ----------------------- //

// Seu objetivo é criar um novo array chamado fila, seguindo estas regras:
// Mover o primeiro aluno para o final da fila
// Remover o último aluno da lista original
// Adicionar um novo aluno "Lucas" no início da fila

const alunos = ["Ana", "Bruno", "Carlos", "Daniel"];

let fila = []; 
const primeiro = alunos.shift();
alunos.pop();
fila.push("Lucas");
fila.push(primeiro);
console.log(fila);
console.log(alunos);