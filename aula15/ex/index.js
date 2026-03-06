const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

// texto.innerHTML = '';
// texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>
// <p>${numero} É inteiro: ${Number.isInteger(numero)}</p>
// <p>É NaN: ${Number.isNaN(numero)}</p>
// <p>Arredondando para baixo: ${Math.floor(numero)}</p>
// <p>Arredondando para cima: ${Math.ceil(numero)}</p>
// <p>Com duas casa decimais: ${numero.toFixed(2)}</p>`;

// Solução do professor:

texto.innerHTML = '';
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} É inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}</p>`;