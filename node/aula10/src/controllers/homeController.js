exports.paginaInicial = (req, res) => {
        res.render("index");
};

exports.trataPost = (req, res) => {
    res.send(`teste de rota post: ${req.body.nome}`);
};