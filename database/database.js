import { Sequelize } from "sequelize";
import { tiposDeNavioModel } from "./models/TiposDeNavio.js";
import { frutaModel } from "./models/Fruta.js";
import { peixeModel } from "./models/Peixe.js";
import { pirataModel } from "./models/Pirata.js";
import { navioCapitaneadoModel } from "./models/NavioCapitaneado.js";
import { usuarioModel } from "./models/Usuario.js";

import { configs } from "./configs/databaseConfigs.js";

const database = new Sequelize(configs);

database.define("Frutas", frutaModel);
database.define("Peixes", peixeModel);
database.define("Usuarios", usuarioModel);
const tipoNavio = database.define("TiposDeNavios", tiposDeNavioModel);
const piratas = database.define("Piratas", pirataModel);
const naviosCapitaneados = database.define(
  "NaviosCapitaneados",
  navioCapitaneadoModel
);

tipoNavio.hasMany(naviosCapitaneados, {
  foreignKey: { name: "tipoNavio", allowNull: false },
});
piratas.hasOne(naviosCapitaneados, {
  foreignKey: { name: "capitao", unique: true, allowNull: false },
});

async function run() {
  await database.sync();
}
run();

export { database };
