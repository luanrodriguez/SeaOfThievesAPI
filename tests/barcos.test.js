import { deepStrictEqual } from "assert";
import { BarcosController } from "../src/modules/barcos/BarcosController.js";
const barcos = new BarcosController();

describe("Teste suite das requisições para a rota barcos", function () {
  it("Listar todos os barcos", async () => {
    const result = await barcos.getBarcos();
    deepStrictEqual();
  });
});
