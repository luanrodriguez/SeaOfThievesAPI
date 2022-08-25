import express from "express";
import { LoginController } from "../src/modules/login/LoginController.js";

const loginController = new LoginController();
const routes = express.Router();

routes.post("/login", loginController.postLogin);

export default routes;
