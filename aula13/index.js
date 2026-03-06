//                01234567 
let umaStrting = "Um texto";

// console.log(umaStrting[4]) saida: e 

// console.log(umaStrting.charAt(5)) saida: x

// Procura o index da string:
// console.log(umaStrting.indexOf("texto")); saida: 3 (começo de "texto")

// Podemos também procurar o index de uma palavra/letra a partir de outro index:
// console.log(umaStrting.indexOf("o", 3)); // procure o index de "o" a partir do index 3, saida: 7

// Pegando o ultimo digito:
// console.log(umaStrting.lastIndexOf("o", 3)); //A diferença é que vai de trás pra frente ou seja: procura do 3 pra trás. saida: -1

// substituindo valores:
// console.log(umaStrting.replace("Um", "Outro")); //Trocando "Um texto" para "Outro texto"

//Pegando o tamanho da string (Contando o 0 inicial):
// console.log(umaStrting.length); // Saida: 8 (Não tem paratenses pois é um atributo)

// Fatiamento pegando do indice 3 até o indicie 7 (mas temos que colocar um a mais se não é cortado)
// console.log(umaStrting.slice(3, 8)); // Saida: texto
// console.log(umaStrting.slice(-2)); // Aqui ele pega o tamanho da string -2 e começa a partir desse ponto, nesse ex começou do 5 pra frente

// console.log(umaStrting.split(' ')) // dividindo uma palvra baseada no parametro, saida: [ 'Um', 'texto' ]

// console.log(umaStrting.toUpperCase()) // saida: UM TEXTO
// console.log(umaStrting.toLowerCase()) // saida: um texto