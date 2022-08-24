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

const AUTHORIZATION =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx1YW4iLCJpZCI6MSwiaWF0IjoxNjYxMjg5NDg3fQ.J_Hy1ljqYpZV_40bcj1Mx3fUyTDMCh4ct1S1JvXk1eY";

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
    const { nome } = TEST_OBJECT_SELECT;
    return request(app)
      .get(`/tipos-de-navios/${nome}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(TEST_OBJECT_SELECT);
      });
  });
  it("POST /tipos-de-navios --> objeto criado", () => {
    return request(app)
      .post("/tipos-de-navios")
      .set("authorization", AUTHORIZATION)
      .send(TEST_OBJECT_CREATE_UPDATE_DELETE)
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(TEST_OBJECT_CREATE_UPDATE_DELETE);
      });
  });
  it("PUT /tipos-de-navios/nome --> texto com sucesso + verificar se foi alterado", () => {
    const { nome } = TEST_OBJECT_CREATE_UPDATE_DELETE;
    const newPreco = 100;
    return request(app)
      .put(`/tipos-de-navios/${nome}`)
      .set("authorization", AUTHORIZATION)
      .send({ preco: newPreco })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("success");
        request(app)
          .get(`/tipos-de-navios/${nome}`)
          .then((response) => {
            expect(response.body).toMatchObject({
              ...TEST_OBJECT_CREATE_UPDATE_DELETE,
              preco: newPreco,
            });
          });
      });
  });
  it("DELETE /tipos-de-navios/nome --> texto com sucesso + verificar exclusão", () => {
    const { nome } = TEST_OBJECT_CREATE_UPDATE_DELETE;
    return request(app)
      .delete(`/tipos-de-navios/${nome}`)
      .set("authorization", AUTHORIZATION)
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("success");
        request(app)
          .get(`/tipos-de-navios/${nome}`)
          .expect(404)
          .then((response) => {
            expect(response.body).toHaveProperty("fail");
          });
      });
  });
});
