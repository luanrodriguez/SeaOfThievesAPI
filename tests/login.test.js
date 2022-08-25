import request from 'supertest';
import {app} from '../app.js'

describe('login suite test', () =>{
    it('deve retornar um token', () => {
        return request(app)
        .post('/login')
        .send({usuario: 'luan', senha: 'luan'})
        .expect('Content-Type', /json/)
        .expect(201)
        .then((response) => {
            const {token} = response.body
            expect(token).toBeDefined()
        })
    })
})