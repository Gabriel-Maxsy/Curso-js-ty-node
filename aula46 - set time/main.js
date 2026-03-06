function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000); // De 1 em 1 segundo executa.

setTimeout(function() {
    clearInterval(timer);
    console.log("teste");
}, 3000); // Para a execução em 3 segundos.

setTimeout(function() {
    console.log("olá mundo!");
}, 5000);