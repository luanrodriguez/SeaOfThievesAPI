import { UsuariosRepository } from "../usuarios/UsuariosRepository.js"
import { comparePassword } from "../../utils/PasswordHandler.js"
import jwt from "jsonwebtoken"
const usuariosRepository = new UsuariosRepository()

const internalErrorMessage = { fail: "Ocorreu um erro" };

class LoginController{
    async postLogin(req, res){
        try{
            const {usuario, senha} = req.body;
            const user = await usuariosRepository.select(usuario)
            if(!user.dataValues.usuario){
                return res.status(404).json({fail: "Usuário não encontrado"})
            }

            if(await comparePassword(senha, user.dataValues.senha)){
                const token = jwt.sign(
                    {
                      usuario,
                    },
                    "secret",
                    {expiresIn:30}
                  );
                return res.status(201).json({ token });
            }
            return res.status(403).json({fail: "Senha inválida"})
            
        } catch(err){
            console.log(err)
            return res.status(500).json(internalErrorMessage);
        }
        
    }
}

export {LoginController}