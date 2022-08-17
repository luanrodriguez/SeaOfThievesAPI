import express from "express";
import { BarcosController } from "./src/modules/barcos/BarcosController.js";
import { FrutasController } from "./src/modules/frutas/FrutasController.js";
import { PeixesController } from "./src/modules/peixes/PeixesController.js";

const routes = express.Router();

const barcosController = new BarcosController();
const frutasController = new FrutasController();
const peixesController = new PeixesController();

routes.get("/barcos", barcosController.getBarcos);
routes.post("/barcos", barcosController.postBarcos);
routes.get("/barcos/:nome", barcosController.selectBarcos);
routes.delete("/barcos/:nome", barcosController.deleteBarcos);
routes.put("/barcos/:nome", barcosController.updateBarcos);

routes.get("/frutas", frutasController.getFrutas);
routes.post("/frutas", frutasController.postFrutas);
routes.get("/frutas/:nome", frutasController.selectFrutas);
routes.delete("/frutas/:nome", frutasController.deleteFrutas);
routes.put("/frutas/:nome", frutasController.updateFrutas);

routes.get("/peixes", peixesController.getPeixes);
routes.post("/peixes", peixesController.postPeixes);
routes.get("/peixes/:nome", peixesController.selectPeixes);
routes.delete("/peixes/:nome", peixesController.deletePeixes);
routes.put("/peixes/:nome", peixesController.updatePeixes);

export { routes };
