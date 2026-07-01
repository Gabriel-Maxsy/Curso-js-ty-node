import jwt from 'jsonwebtoken';
import User from "../models/User";

export default async(req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({
      errors: ['Login required']
    });
  }

  const [, token ] = authorization.split(' ');

  try {

    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    // Enviando dados do usuário que enviou a requisção para nossa rota, possibilitando saber que está fazendo a requisição.
    const { id, email } = dados;

    console.log(dados);
    console.log(id);
    console.log(email);

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if(!user) {
      return res.status(401).json({
        errors: ['User inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();

  } catch(e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido']
    });
  }

}
