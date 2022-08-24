import express from "express";
import { FrutasController } from "../src/modules/frutas/FrutasController.js";
import { authMiddleware } from "../src/middleware/authMiddleware.js";

const frutasController = new FrutasController();

const routes = express.Router();

routes.get("/frutas", frutasController.getFrutas);
routes.post("/frutas", authMiddleware, frutasController.postFrutas);
routes.get("/frutas/:nome", frutasController.selectFrutas);
routes.delete("/frutas/:nome", authMiddleware, frutasController.deleteFrutas);
routes.put("/frutas/:nome", authMiddleware, frutasController.updateFrutas);

export default routes;
