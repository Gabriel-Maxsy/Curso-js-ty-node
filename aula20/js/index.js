// IIFE
function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        // console.log(nome.value, sobrenome.value, peso.value, altura.value);

        function criaPessoa(nome, sobrenome, peso, altura) {  
            
            return {
                "nome": nome, 
                "sobrenome": sobrenome, 
                "peso": peso,
                "altura": altura
            };
        };

        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        console.log(pessoas);
        
    };

    form.addEventListener("submit", recebeEventoForm);
    
};

meuEscopo();



//  ============================ Solução do professo ============================ //

// function meuEscopo() {
//     const form = document.querySelector(".form");
//     const resultado = document.querySelector(".resultado");
    
//     const pessoas = [];

//     function recebeEventoForm(evento) {
//         evento.preventDefault();
        
//         const nome = form.querySelector('.nome');
//         const sobrenome = form.querySelector(".sobrenome");
//         const peso = form.querySelector(".peso");
//         const altura = form.querySelector(".altura");

//         // console.log(nome.value, sobrenome.value, peso.value, altura.value);

//         pessoas.push({
//             nome: nome.value,
//             sobrenome: sobrenome.value,
//             peso: peso.value,
//             altura: altura.value
//         });

//         console.log(pessoas);

//         resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        
//     };

//     form.addEventListener("submit", recebeEventoForm);
    
// };

// meuEscopo();