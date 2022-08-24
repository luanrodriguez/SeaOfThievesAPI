import express from "express";
import { PeixesController } from "../src/modules/peixes/PeixesController.js";
import { authMiddleware } from "../src/middleware/authMiddleware.js";

const peixesController = new PeixesController();

const routes = express.Router();

routes.get("/peixes", peixesController.getPeixes);
routes.post("/peixes", authMiddleware, peixesController.postPeixes);
routes.get("/peixes/:nome", peixesController.selectPeixes);
routes.delete("/peixes/:nome", authMiddleware, peixesController.deletePeixes);
routes.put("/peixes/:nome", authMiddleware, peixesController.updatePeixes);

export default routes;
