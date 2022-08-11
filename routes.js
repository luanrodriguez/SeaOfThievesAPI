import express from "express";
import { BarcosController } from "./src/modules/barcos/BarcosController.js";
import { FrutasController } from "./src/modules/frutas/FrutasController.js";

const routes = express.Router();

const barcosController = new BarcosController();
const frutasController = new FrutasController();

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

export { routes };
