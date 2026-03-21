exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = "ESTE É uma variavel local.";
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.CheckCsrfError = (err, req, res, next) => {
  if(err && err.code == "EBADCSRFTOKEN") {
    return res.render("404");
  }
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next()
}