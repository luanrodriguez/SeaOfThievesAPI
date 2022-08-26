import { DataTypes } from "sequelize";

const peixeModel = {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  variante: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tempestade: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  precoCru: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precoMalCozido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precoPerfeitamenteCozido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precoQueimado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ondeEncontrar: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tempoCozimentoPerfeito: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precoCruTrofeu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precoMalCozidoTrofeu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precoPerfeitamenteCozidoTrofeu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precoQueimadoTrofeu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tempoCozimentoPerfeito: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  linkImagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export { peixeModel };
