import { TiposDeNaviosRepository } from "./TiposDeNavioRepository.js";
const repository = new TiposDeNaviosRepository();

const internalErrorMessage = { fail: "Ocorreu um erro" };
const notFoundErrorMessage = { fail: "Não há tipos de navios com esse nome" };

class TiposDeNaviosController {
  async getTiposDeNavios(req, res) {
    try {
      return res.json(await repository.get());
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async selectTiposDeNavios(req, res) {
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

  async postTiposDeNavios(req, res) {
    try {
      return res.status(201).json(await repository.create(req.body));
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async deleteTiposDeNavios(req, res) {
    try {
      const result = await repository.delete(req.params.nome);
      if (result > 0) {
        return res.json({ success: "Tipo de navios removido com sucesso!" });
      }
      return res.status(404).json(notFoundErrorMessage);
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }

  async updateTiposDeNavios(req, res) {
    try {
      const [result] = await repository.update(req.params.nome, req.body);
      if (result > 0) {
        return res.json({ success: "Tipo de navios alterado com sucesso!" });
      }
      return res.status(404).json({
        fail: "Não há tipos de navios com esse nome ou com essa propriedade",
      });
    } catch {
      return res.status(500).json(internalErrorMessage);
    }
  }
}

export { TiposDeNaviosController };
