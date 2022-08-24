import express from "express";
import { authMiddleware } from "../src/middleware/authMiddleware.js";
import { TiposDeNaviosController } from "../src/modules/tipos_de_navios/TiposDeNavioController.js";

const tiposDeNavioController = new TiposDeNaviosController();

const routes = express.Router();

/**
 * @swagger
 * /tipos-de-navios:
 *  get:
 *    summary: Retorna todos os tipos de navios
 *    responses:
 *      '200':
 *        description: Retorna um array contendo todos os objetos de tipos de navios
 *      '500':
 *        description: Erro interno
 */
routes.get("/tipos-de-navios", tiposDeNavioController.getTiposDeNavios);

/**
 * @swagger
 * /tipos-de-navios/{nome}:
 *  get:
 *    summary: Retorna um tipo de navio filtrado por nome
 *    parameters:
 *      - in: path
 *        name: nome
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Retorna um objeto contendo um tipo de navio
 *      '404':
 *        description: Tipo de navio não encontrado
 *      '500':
 *        description: Erro interno
 */
routes.get(
  "/tipos-de-navios/:nome",
  tiposDeNavioController.selectTiposDeNavios
);

/**
 * @swagger
 * /tipos-de-navios:
 *  post:
 *    summary: Cria um tipo de navio
 *    parameters:
 *      - in: body
 *        schema:
 *         type: object
 *         properties:
 *           nome:
 *             type: string
 *           maxTripulantes:
 *             type: number
 *           qtdVelas:
 *             type: number
 *           preco:
 *             type: number
 *    responses:
 *      '200':
 *        description: Retorna o tipo de navio criado
 *      '500':
 *        description: Erro interno
 */
routes.post(
  "/tipos-de-navios",
  authMiddleware,
  tiposDeNavioController.postTiposDeNavios
);

/**
 * @swagger
 * /tipos-de-navios/{nome}:
 *  delete:
 *    summary: Retorna um tipo de navio filtrado por nome
 *    parameters:
 *      - in: path
 *        name: nome
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Retorna um objeto contendo um tipo de navio
 *      '404':
 *        description: Tipo de navio não encontrado
 *      '500':
 *        description: Erro interno
 */
routes.delete(
  "/tipos-de-navios/:nome",
  authMiddleware,
  tiposDeNavioController.deleteTiposDeNavios
);

routes.put(
  "/tipos-de-navios/:nome",
  authMiddleware,
  tiposDeNavioController.updateTiposDeNavios
);

export default routes;
