import express from "express";
import { TiposDeNaviosController } from "./src/modules/tipos_de_navios/TiposDeNavioController.js";
import { FrutasController } from "./src/modules/frutas/FrutasController.js";
import { PeixesController } from "./src/modules/peixes/PeixesController.js";
import { PiratasController } from "./src/modules/piratas/PiratasController.js";
import { NaviosCapitaneadosController } from "./src/modules/navios_capitaneados/NaviosCapitaneadosController.js";

const routes = express.Router();

const tiposDeNavioController = new TiposDeNaviosController();
const frutasController = new FrutasController();
const peixesController = new PeixesController();
const piratasController = new PiratasController();
const naviosCapitaneadosController = new NaviosCapitaneadosController();

routes.get("/tipos-de-navios", tiposDeNavioController.getTiposDeNavios);
routes.post("/tipos-de-navios", tiposDeNavioController.postTiposDeNavios);
routes.get(
  "/tipos-de-navios/:nome",
  tiposDeNavioController.selectTiposDeNavios
);
routes.delete(
  "/tipos-de-navios/:nome",
  tiposDeNavioController.deleteTiposDeNavios
);
routes.put(
  "/tipos-de-navios/:nome",
  tiposDeNavioController.updateTiposDeNavios
);

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

routes.get("/piratas", piratasController.getPiratas);
routes.post("/piratas", piratasController.postPiratas);
routes.get("/piratas/:nome", piratasController.selectPiratas);
routes.delete("/piratas/:nome", piratasController.deletePiratas);
routes.put("/piratas/:nome", piratasController.updatePiratas);

routes.get(
  "/navios-capitaneados",
  naviosCapitaneadosController.getNaviosCapitaneados
);
routes.post(
  "/navios-capitaneados",
  naviosCapitaneadosController.postNaviosCapitaneados
);
routes.get(
  "/navios-capitaneados/:nome",
  naviosCapitaneadosController.selectNaviosCapitaneados
);
routes.delete(
  "/navios-capitaneados/:nome",
  naviosCapitaneadosController.deleteNaviosCapitaneados
);
routes.put(
  "/navios-capitaneados/:nome",
  naviosCapitaneadosController.updateNaviosCapitaneados
);

export { routes };
