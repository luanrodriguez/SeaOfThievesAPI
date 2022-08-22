import { database } from "../../../database/database.js";
const naviosCapitaneados = database.models.NaviosCapitaneados;

class NaviosCapitaneadosRepository {
  async get() {
    return await naviosCapitaneados.findAll();
  }

  async create(body) {
    return await naviosCapitaneados.create(body);
  }

  async delete(nome) {
    return await naviosCapitaneados.destroy({ where: { nome } });
  }

  async select(nome) {
    return await naviosCapitaneados.findOne({ where: { nome } });
  }

  async update(nome, body) {
    return await naviosCapitaneados.update(body, { where: { nome } });
  }
}

export { NaviosCapitaneadosRepository };
