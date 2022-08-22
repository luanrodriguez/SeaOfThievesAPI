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
    const {nome} = TEST_OBJECT_SELECT
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
      .send(TEST_OBJECT_CREATE_UPDATE_DELETE)
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(TEST_OBJECT_CREATE_UPDATE_DELETE);
      });
  });
  it("PUT /tipos-de-navios/nome --> texto com sucesso + verificar se foi alterado", () =>{
    const {nome} = TEST_OBJECT_CREATE_UPDATE_DELETE
    const newPreco = 100
    return request(app)
      .put(`/tipos-de-navios/${nome}`)
      .send({preco: newPreco})
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('success');
        request(app).get(`/tipos-de-navios/${nome}`).then((response) =>{
          expect(response.body).toMatchObject({...TEST_OBJECT_CREATE_UPDATE_DELETE, preco: newPreco})
        })
      })
  });
  it("DELETE /tipos-de-navios/nome --> texto com sucesso + verificar exclusão", ()=>{
    const {nome} = TEST_OBJECT_CREATE_UPDATE_DELETE
    return request(app)
      .delete(`/tipos-de-navios/${nome}`)
      .expect('Content-type', /json/)
      .expect(200)
      .then((response) =>{
        expect(response.body).toHaveProperty('success');
        request(app).get(`/tipos-de-navios/${nome}`).expect(404).then((response) => {
          expect(response.body).toHaveProperty('fail')
        })
      })
  })
});
