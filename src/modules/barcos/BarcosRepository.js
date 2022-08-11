import { database } from "../../../database/database.js";
const barcos = database.models.Barcos;

class BarcosRepository {
  async get() {
    return await barcos.findAll();
  }

  async create(body) {
    return await barcos.create(body);
  }

  async delete(nome) {
    return await barcos.destroy({ where: { nome } });
  }

  async select(nome) {
    return await barcos.findOne({ where: { nome } });
  }

  async update(nome, body) {
    return await barcos.update(body, { where: { nome } });
  }
}

export { BarcosRepository };
