import { FrutasRepository } from "./FrutasRepository.js";
const repository = new FrutasRepository();

const internalErrorMessage = { fail: "Ocorreu um erro" };
const notFoundErrorMessage = { fail: "Não há frutas com esse nome" };

class FrutasController {
  async getFrutas(req, res) {
    try {
      return res.json(await repository.get());
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async selectFrutas(req, res) {
    try {
      const result = await repository.select(req.params.nome);
      if (result) {
        return res.json(result);
      }
      return res.status(404).json(notFoundErrorMessage);
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async postFrutas(req, res) {
    try {
      return res.status(201).json(await repository.create(req.body));
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async deleteFrutas(req, res) {
    try {
      const result = await repository.delete(req.params.nome);
      if (result > 0) {
        return res.json({ success: "Fruta removida com sucesso!" });
      }
      return res.status(404).json(notFoundErrorMessage);
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async updateFrutas(req, res) {
    try {
      const [result] = await repository.update(req.params.nome, req.body);
      if (result > 0) {
        return res.json({ success: "Fruta alterada com sucesso!" });
      }
      return res
        .status(404)
        .json({ fail: "Não há frutas com esse nome ou com essa propriedade" });
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }
}

export { FrutasController };
