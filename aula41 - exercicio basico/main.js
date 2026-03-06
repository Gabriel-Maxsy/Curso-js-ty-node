// Escreva uma função que receba dois números e devolva o maior deles:
function maior(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(maior(3, 2));

// Arrow function (faz exatamente a mesma coisa):
const maior2 = (num1, num2) => num1 > num2 ? num1 : num2;