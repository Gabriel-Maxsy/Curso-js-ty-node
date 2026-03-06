exports.paginaInicial = (req, res) => {
    res.render("index");
};

exports.trataPost = (req, res, next) => {
    res.send(`teste de rota post: ${req.body.cliente}`);
};