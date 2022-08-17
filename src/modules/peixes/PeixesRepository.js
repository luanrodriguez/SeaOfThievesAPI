import { database } from "../../../database/database.js";
const peixes = database.models.Peixes;

class PeixesRepository {
  async get() {
    return await peixes.findAll();
  }

  async create(body) {
    return await peixes.create(body);
  }

  async delete(nome) {
    return await peixes.destroy({ where: { nome } });
  }

  async select(nome) {
    return await peixes.findOne({ where: { nome } });
  }

  async update(nome, body) {
    return await peixes.update(body, { where: { nome } });
  }
}

export { PeixesRepository };
