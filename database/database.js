import { Sequelize } from "sequelize";
import { barcoModel } from "./models/Barco.js";
import { frutaModel } from "./models/Fruta.js";
import { peixeModel } from "./models/Peixe.js";

import { configs } from "./configs/databaseConfigs.js";

const database = new Sequelize(configs.dev);

database.define("Barcos", barcoModel);
database.define("Frutas", frutaModel);
database.define("Peixes", peixeModel);

(async () => {
  await database.sync();
})();

export { database };
