// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log("fala oi");
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log("sou um dado");
};

// function ativaFunction(função){
//     função();
// }

// ativaFunction(souUmDado);

// Arrow function
const functionArrow = () => {
    console.log("Arrow function");
};

// Dentro de um objeto
const obj = {
    falar() {
        console.log("obj falar");
    }
}

obj.falar();