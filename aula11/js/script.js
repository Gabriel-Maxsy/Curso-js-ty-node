// alert('Mensagem1')
// window.confirm('Deseja realmente apgar?') // vem do objeto window, tanto o alert quanto o prompt, ex: window.alert()
// prompt('Digite seu nome: ')

let num1 = Number(prompt('Digite um número: '));
let num2 = Number(prompt('Digite outro número'));
const result = num1 + num2;
alert(`O resultado da conta foi: ${result}`);

// exemplo acima funciona apenas no navegador.
// Solução do prof:

// let num1 = prompt('Digite um número: ');
// let num2 = prompt('Digite outro número: ');

// num1 = Number(num1);
// num2 = Number(num2);

// alert(`O resultado da soma foi ${num1 + num2}`)