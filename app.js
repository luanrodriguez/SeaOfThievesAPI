import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import frutasRoutes from "./routes/frutasRoutes.js";
import peixesRoutes from "./routes/peixesRoutes.js";
import piratasRoutes from "./routes/piratasRoutes.js";
import tiposDeNaviosRoutes from "./routes/tiposDeNaviosRoutes.js";
import naviosCapitaneadosRoutes from "./routes/naviosCapitaneadosRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import usuariosRoutes from "./routes/usuariosRoutes.js";

const routes = [
  frutasRoutes,
  peixesRoutes,
  piratasRoutes,
  tiposDeNaviosRoutes,
  naviosCapitaneadosRoutes,
  loginRoutes,
  usuariosRoutes,
];
const app = express();

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: "Sea of Thieves API",
//       description:
//         "This API provides information about Sea of Thieves video-game",
//       contact: {
//         name: "Luan",
//       },
//       servers: ["http://localhost:5600"],
//     },
//   },
//   apis: ["routes.js"],
// };

// const swaggerDocs = swaggerJSDoc(swaggerOptions);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
routes.forEach((route) => app.use(route));

export { app };
