import { Sequelize } from "sequelize";
import { tiposDeNavioModel } from "./models/TiposDeNavio.js";
import { frutaModel } from "./models/Fruta.js";
import { peixeModel } from "./models/Peixe.js";
import { pirataModel } from "./models/Pirata.js";
import { navioCapitaneadoModel } from "./models/NavioCapitaneado.js";

import { configs } from "./configs/databaseConfigs.js";

const database = new Sequelize(configs.dev);

const tipoNavio = database.define("TiposDeNavios", tiposDeNavioModel);
database.define("Frutas", frutaModel);
database.define("Peixes", peixeModel);
const piratas = database.define("Piratas", pirataModel);
const naviosCapitaneados = database.define(
  "NaviosCapitaneados",
  navioCapitaneadoModel
);

tipoNavio.hasMany(naviosCapitaneados);

async function run() {
  await database.sync({ force: true });
}
run();

export { database };
