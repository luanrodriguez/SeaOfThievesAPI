import express from "express";
import { PiratasController } from "../src/modules/piratas/PiratasController.js";
import { authMiddleware } from "../src/middleware/authMiddleware.js";

const piratasController = new PiratasController();

const routes = express.Router();

routes.get("/piratas", piratasController.getPiratas);
routes.post("/piratas", authMiddleware, piratasController.postPiratas);
routes.get("/piratas/:nome", piratasController.selectPiratas);
routes.delete(
  "/piratas/:nome",
  authMiddleware,
  piratasController.deletePiratas
);
routes.put("/piratas/:nome", authMiddleware, piratasController.updatePiratas);

export default routes;
