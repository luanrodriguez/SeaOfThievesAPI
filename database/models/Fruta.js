import { DataTypes } from "sequelize";

const frutaModel = {
  nome: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },

  vidaCurada: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  qtdMordidas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

export { frutaModel };
