import { UsuariosRepository } from "./UsuariosRepository.js";
import { hashPassword } from "../../utils/PasswordHandler.js";
const repository = new UsuariosRepository();

const internalErrorMessage = { fail: "Ocorreu um erro" };

class UsuariosController {
  async postUsuarios(req, res) {
    try {
      const { usuario, senha } = req.body;
      const senhaHash = await hashPassword(senha);
      const response = await repository.create({ usuario, senha: senhaHash });
      delete response.dataValues.senha;
      return res.status(201).json(response);
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }
}

export { UsuariosController };
