import { NaviosCapitaneadosRepository } from "./NaviosCapitaneadosRepository.js";
import { handleNome } from "../../utils/HandleNome.js";
const repository = new NaviosCapitaneadosRepository();

const internalErrorMessage = { fail: "Ocorreu um erro" };
const notFoundErrorMessage = {
  fail: "Não há navios capitaneados com esse nome",
};

class NaviosCapitaneadosController {
  async getNaviosCapitaneados(req, res) {
    try {
      return res.json(await repository.get());
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async selectNaviosCapitaneados(req, res) {
    try {
      const nome = handleNome(req.params.nome);
      const result = await repository.select(nome);
      if (result) {
        return res.json(result);
      }
      return res.status(404).json(notFoundErrorMessage);
    } catch (err) {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async postNaviosCapitaneados(req, res) {
    try {
      return res.status(201).json(await repository.create(req.body));
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async deleteNaviosCapitaneados(req, res) {
    try {
      const nome = handleNome(req.params.nome);
      const result = await repository.delete(nome);
      if (result > 0) {
        return res.json({ success: "Navio capitaneado removido com sucesso!" });
      }
      return res.status(404).json(notFoundErrorMessage);
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async updateNaviosCapitaneados(req, res) {
    try {
      const nome = handleNome(req.params.nome);
      const [result] = await repository.update(nome, req.body);
      if (result > 0) {
        return res.json({ success: "Navio capitaneado alterado com sucesso!" });
      }
      return res.status(404).json({
        fail: "Não há navios capitaneados com esse nome ou com essa propriedade",
      });
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }
}

export { NaviosCapitaneadosController };
