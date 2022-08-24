import express from "express";
import jwt from "jsonwebtoken";

const routes = express.Router();

const USER = {
  username: "luan",
  password: "luansenha",
};

routes.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password == USER.password) {
    const token = jwt.sign(
      {
        username,
        id: 1,
      },
      "secret"
    );
    return res.status(201).json({ token });
  }
  return res.status(403).json({ fail: "Autenticação inválida" });
});

export default routes;
