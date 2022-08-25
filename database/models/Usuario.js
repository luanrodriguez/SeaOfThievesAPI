import { DataTypes } from "sequelize";

const usuarioModel = {
  usuario: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

export { usuarioModel };
