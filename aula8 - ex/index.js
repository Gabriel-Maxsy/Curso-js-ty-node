const nome = "Gabriel";
const sobrenome = "Silva";
const idade = 20;
const peso = 68;
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg e mede ${altura} de altura. \nSeu imc é ${imc} e nasceu em ${anoNascimento}`)