import request from 'supertest'
import {app} from '../app.js'

describe("cadastro test", () => {
  it("deve retornar o usuario cadastrado", () => {
    return request(app)
    .post('/cadastrar')
    .send({usuario: 'luan', senha: 'luan'})
    .expect("Content-Type", /json/)
    .expect(201)
    .then((response) => {
      const { usuario } = response.body
      expect(usuario).toEqual('luan')
    })
  });
});
