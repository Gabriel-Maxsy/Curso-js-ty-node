exports.paginaInicial = (req, res) => {
    res.render("index", {
        titulo: undefined,
        numeros: [1, 2, 3, 4]
    });
};

exports.trataPost = (req, res, next) => {
    res.send(`teste de rota post: ${req.body.cliente}`);
};