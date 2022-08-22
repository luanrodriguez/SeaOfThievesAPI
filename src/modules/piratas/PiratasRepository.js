import { database } from "../../../database/database.js";
const piratas = database.models.Piratas;
const naviosCapitaneados = database.models.NaviosCapitaneados;

class PiratasRepository {
  async get() {
    return await piratas.findAll();
  }

  async create(body) {
    return await piratas.create(body);
  }

  async delete(nome) {
    return await piratas.destroy({ where: { nome } });
  }

  async select(nome) {
    return await piratas.findOne({
      where: { nome },
      include: naviosCapitaneados,
    });
  }

  async update(nome, body) {
    return await piratas.update(body, { where: { nome } });
  }
}

export { PiratasRepository };
