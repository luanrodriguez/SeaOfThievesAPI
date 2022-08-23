import express from "express";
import { routes } from "./routes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

const swaggerOptions = {
    swaggerDefinition:{
        info: {
            title: 'Sea of Thieves API',
            description: 'This API provides information about Sea of Thieves video-game',
            contact: {
                name: 'Luan'
            },
            servers:["http://localhost:5600"]
        }
    },
    apis:['routes.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(express.json());
app.use(routes);

export { app };
