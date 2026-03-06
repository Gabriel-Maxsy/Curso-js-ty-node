// 🎯 Seu objetivo (regras):
// Sem usar . para acessar propriedades diretamente (pedido.cliente.nome, por exemplo):
// Extraia:

// o nome do cliente
// o email
// o status do pedido

// Dos itens:
// Pegue apenas o primeiro item
// Extraia o nome e o preco desse item
// Crie uma variável chamada total contendo:
// a soma dos preços dos três itens
// sem usar loop ainda (só lógica básica)

// Se o telefone do cliente não existir, crie a variável com valor padrão "Não informado"

const pedido = {
  id: 123,
  cliente: {
    nome: "Gabriel",
    contato: {
      email: "gabriel@email.com"
    }
  },
  itens: [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 }
  ],
  status: "processando"
};

// const {cliente: {nome, contato: email}, status: pedidoStatus} = pedido;
// console.log( nome, email, pedidoStatus);

// const {itens: [primeiro]} = pedido;
// console.log(primeiro);

const {itens: [{ preco: preco1}, { preco: preco2 }, {preco: preco3}] } = pedido;
console.log( preco1, preco2 );

let total = preco1 + preco2 + preco3;

console.log(total);

const {telefone = "não existe"} = pedido;

console.log(telefone);