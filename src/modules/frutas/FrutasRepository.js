import { database } from "../../../database/database.js";
const frutas = database.models.Frutas;

class FrutasRepository {
  async get() {
    return await frutas.findAll();
  }

  async create(body) {
    return await frutas.create(body);
  }

  async delete(nome) {
    return await frutas.destroy({ where: { nome } });
  }

  async select(nome) {
    return await frutas.findOne({ where: { nome } });
  }

  async update(nome, body) {
    return await frutas.update(body, { where: { nome } });
  }
}

export { FrutasRepository };
