import request from "supertest";
import { app } from "../app.js";

const TEST_OBJECT_SELECT = {
  nome: "Chalupa",
  qtdVelas: 1,
  maxTripulantes: 2,
  preco: 250,
};

const TEST_OBJECT_CREATE_UPDATE_DELETE = {
  nome: "FOO",
  qtdVelas: 1,
  maxTripulantes: 1,
  preco: 1,
};

describe("Tipos de navios tests", () => {
  it("GET /tipos-de-navios --> array com todos os tipos de navios", () => {
    return request(app)
      .get("/tipos-de-navios")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.length).toEqual(3);
      });
  });
  it("GET /tipos-de-navios/nome --> objeto com caracteristicas do tipo de navio escolhido", () => {
    return request(app)
      .get("/tipos-de-navios/Chalupa")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(TEST_OBJECT_SELECT);
      });
  });
  it("POST /tipos-de-navios --> objeto criado", () => {
    return request(app)
      .post("/tipos-de-navios")
      .send(TEST_OBJECT_CREATE_UPDATE_DELETE)
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(TEST_OBJECT_CREATE_UPDATE_DELETE);
      });
  });
});
