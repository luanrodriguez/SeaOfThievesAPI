import express from "express";
import { FrutasController } from "../src/modules/frutas/FrutasController.js";
import { authMiddleware } from "../src/middleware/authMiddleware.js";

const frutasController = new FrutasController();

const routes = express.Router();

/**
 * @swagger
 * /frutas:
 *  get:
 *    tags:
 *      - Frutas
 *    summary: Retorna todas frutas
 *    responses:
 *      '200':
 *        description: Retorna um array contendo todos os objetos de frutas
 *      '500':
 *        description: Erro interno
 */
routes.get("/frutas", frutasController.getFrutas);


/**
 * @swagger
 * /frutas/{nome}:
 *  get:
 *    tags:
 *      - Frutas
 *    summary: Retorna uma fruta filtrada por nome
 *    parameters:
 *      - in: path
 *        name: nome
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Retorna um objeto contendo uma fruta
 *      '404':
 *        description: fruta não encontrada
 *      '500':
 *        description: Erro interno
 */
routes.get("/frutas/:nome", frutasController.selectFrutas);

routes.post("/frutas", authMiddleware, frutasController.postFrutas);
routes.delete("/frutas/:nome", authMiddleware, frutasController.deleteFrutas);
routes.put("/frutas/:nome", authMiddleware, frutasController.updateFrutas);

export default routes;
