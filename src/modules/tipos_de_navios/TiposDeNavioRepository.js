import { database } from "../../../database/database.js";
const tiposDeNavios = database.models.TiposDeNavios;
const naviosCapitaneados = database.models.naviosCapitaneados;

class TiposDeNaviosRepository {
  async get() {
    return await tiposDeNavios.findAll();
  }

  async create(body) {
    return await tiposDeNavios.create(body);
  }

  async delete(nome) {
    return await tiposDeNavios.destroy({ where: { nome } });
  }

  async select(nome) {
    return await tiposDeNavios.findOne({
      where: { nome },
      include: naviosCapitaneados,
    });
  }

  async update(nome, body) {
    return await tiposDeNavios.update(body, { where: { nome } });
  }
}

export { TiposDeNaviosRepository };
