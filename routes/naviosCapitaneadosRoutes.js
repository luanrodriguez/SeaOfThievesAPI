import express from "express";
import { NaviosCapitaneadosController } from "../src/modules/navios_capitaneados/NaviosCapitaneadosController.js";
import { authMiddleware } from "../src/middleware/authMiddleware.js";

const naviosCapitaneadosController = new NaviosCapitaneadosController();

const routes = express.Router();

routes.get(
  "/navios-capitaneados",
  naviosCapitaneadosController.getNaviosCapitaneados
);
routes.post(
  "/navios-capitaneados",
  authMiddleware,
  naviosCapitaneadosController.postNaviosCapitaneados
);
routes.get(
  "/navios-capitaneados/:nome",
  naviosCapitaneadosController.selectNaviosCapitaneados
);
routes.delete(
  "/navios-capitaneados/:nome",
  authMiddleware,
  naviosCapitaneadosController.deleteNaviosCapitaneados
);
routes.put(
  "/navios-capitaneados/:nome",
  authMiddleware,
  naviosCapitaneadosController.updateNaviosCapitaneados
);

export default routes;
