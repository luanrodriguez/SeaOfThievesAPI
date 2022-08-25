import { database } from "../../../database/database.js";
const usuarios = database.models.Usuarios;

class UsuariosRepository {
    async create(userObject){
        return await usuarios.create(userObject)
    }
    
    async select(usuario){
        return await usuarios.findOne({where: {usuario}})
    }
}

export {UsuariosRepository}