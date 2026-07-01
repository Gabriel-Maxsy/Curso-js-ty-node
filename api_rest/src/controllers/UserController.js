import { password } from "../config/database";
import User from "../models/User";

class UserController {

  // Create - Cria um novo usuário no banco:
  async store(req, res) {
    try {

      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;

      return res.json({id, nome, email});

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }

  }

  // Index - retorna todos os usuários:
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch(e) {
      return res.json(null);
    }
  }

  // Show - Mostra um user específico:
  async show(req, res) {
    try {
      // const {id} = req.params;

      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;

      return res.json({ id, nome, email });

    } catch(e) {
      return res.json(null);
    }
  }

  // Update - Atualiza um user no banco:
  async update(req, res) {
    try {

      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['User não encontrado'],
        });
      }

      const novosDados = await user.update(req.body);

      const { id, nome, email} = novosDados;

      return res.json({ id, nome, email});

    } catch(e) {

      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });

    }
  }

  // Delete - Deleta um usuário do banco:
    async delete(req, res) {
    try {



      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['User não encontrado'],
        });
      }

      await user.destroy();
      return res.json(user);

    } catch(e) {

      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });

    }
  }
}

export default new UserController();
