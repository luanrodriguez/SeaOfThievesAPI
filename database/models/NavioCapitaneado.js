import { DataTypes } from "sequelize";

const navioCapitaneadoModel = {
  nome: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
};

export { navioCapitaneadoModel };
