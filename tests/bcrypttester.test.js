import { hashPassword, comparePassword } from "../src/utils/PasswordHandler.js";

const SENHA = "123456";
describe.only("bcrypt-test", () => {
  it("deve retornar um hash da senha e verificar a comparação", () => {
    hashPassword(SENHA).then((hash) => {
      expect(hash.length).toBeGreaterThan(10);
      comparePassword(SENHA, hash).then((verification) => {
        expect(verification).toBeTruthy();
      });
    });
  });
});
