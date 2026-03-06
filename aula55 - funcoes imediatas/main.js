// IIFE -> Immediatlely invoked function expression:

(function(idade, peso, altura){
    const sobrenome = "Maxsy";
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome("Gabriel"));
    }

    falaNome()
    console.log(idade, peso, altura)
})(21, 66, 1.80);