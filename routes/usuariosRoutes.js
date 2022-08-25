import express from "express";
import {UsuariosController} from "../src/modules/usuarios/UsuariosController.js"

const usuariosController = new UsuariosController()
const routes = express.Router()

routes.post('/cadastrar', usuariosController.postUsuarios)

export default routes;