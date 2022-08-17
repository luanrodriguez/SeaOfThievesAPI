import { PeixesRepository } from "./PeixesRepository.js";
import { handleNome } from "../../utils/HandleNome.js";
const repository = new PeixesRepository();

const internalErrorMessage = { fail: "Ocorreu um erro" };
const notFoundErrorMessage = { fail: "Não há peixes com esse nome" };

class PeixesController {
  async getPeixes(req, res) {
    try {
      return res.json(await repository.get());
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async selectPeixes(req, res) {
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

  async postPeixes(req, res) {
    try {
      return res.status(201).json(await repository.create(req.body));
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async deletePeixes(req, res) {
    try {
      const nome = handleNome(req.params.nome);
      const result = await repository.delete(nome);
      if (result > 0) {
        return res.json({ success: "Peixe removido com sucesso!" });
      }
      return res.status(404).json(notFoundErrorMessage);
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async updatePeixes(req, res) {
    try {
      const nome = handleNome(req.params.nome);
      const [result] = await repository.update(nome, req.body);
      if (result > 0) {
        return res.json({ success: "Peixe alterado com sucesso!" });
      }
      return res
        .status(404)
        .json({ fail: "Não há peixes com esse nome ou com essa propriedade" });
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  _handleNome(nome) {
    if (nome.includes("-")) {
      return nome.replace("-", " ");
    }
    return nome;
  }
}

export { PeixesController };
