import { DataTypes } from "sequelize";

const tiposDeNavioModel = {
  nome: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },

  maxTripulantes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  qtdVelas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  preco: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

export { tiposDeNavioModel };
