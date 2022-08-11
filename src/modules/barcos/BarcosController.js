import { BarcosRepository } from "./BarcosRepository.js";
const repository = new BarcosRepository();

const internalErrorMessage = { fail: "Ocorreu um erro" };
const notFoundErrorMessage = { fail: "Não há barcos com esse nome" };

class BarcosController {
  async getBarcos(req, res) {
    try {
      return res.json(await repository.get());
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async selectBarcos(req, res) {
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

  async postBarcos(req, res) {
    try {
      return res.status(201).json(await repository.create(req.body));
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async deleteBarcos(req, res) {
    try {
      const result = await repository.delete(req.params.nome);
      if (result > 0) {
        return res.json({ success: "Barco removido com sucesso!" });
      }
      return res.status(404).json(notFoundErrorMessage);
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async updateBarcos(req, res) {
    try {
      const [result] = await repository.update(req.params.nome, req.body);
      if (result > 0) {
        return res.json({ success: "Barco alterado com sucesso!" });
      }
      return res
        .status(404)
        .json({ fail: "Não há barcos com esse nome ou com essa propriedade" });
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }
}

export { BarcosController };
