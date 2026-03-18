exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = "ESTE É uma variavel local.";
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};