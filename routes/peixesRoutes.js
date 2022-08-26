import express from "express";
import { PeixesController } from "../src/modules/peixes/PeixesController.js";
import { authMiddleware } from "../src/middleware/authMiddleware.js";

const peixesController = new PeixesController();

const routes = express.Router();

/**
 * @swagger
 * /peixes:
 *  get:
 *    tags: 
 *      - Peixes
 *    summary: Retorna todos os peixes
 *    responses:
 *      '200':
 *        description: Retorna um array contendo todos os objetos de peixes
 *      '500':
 *        description: Erro interno
 */
routes.get("/peixes", peixesController.getPeixes);

/**
 * @swagger
 * /peixes/{nome}:
 *  get:
 *    tags:
 *      - Peixes
 *    summary: Retorna peixe filtrado por nome
 *    parameters:
 *      - in: path
 *        name: nome
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Retorna um objeto contendo um peixe
 *      '404':
 *        description: peixe não encontrado
 *      '500':
 *        description: Erro interno
 */
routes.post("/peixes", authMiddleware, peixesController.postPeixes);

routes.get("/peixes/:nome", peixesController.selectPeixes);
routes.delete("/peixes/:nome", authMiddleware, peixesController.deletePeixes);
routes.put("/peixes/:nome", authMiddleware, peixesController.updatePeixes);

export default routes;
