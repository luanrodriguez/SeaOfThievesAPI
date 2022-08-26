import {} from "dotenv/config";
import { app } from "./app.js";

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Arrr, marujo! Navegando em águas de porta ${port} 🏴‍☠️`);
});
