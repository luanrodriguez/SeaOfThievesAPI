import request from "supertest";
import { app } from "../app.js";

describe("auth test suite", () => {
  it("deve retornar um token", () => {
    return request(app)
      .post("/login")
      .send({ username: "luan", password: "luansenha" })
      .expect(201)
      .then((response) => {
        expect(response.body.token.length).toBeGreaterThan(10);
      });
  });
});
