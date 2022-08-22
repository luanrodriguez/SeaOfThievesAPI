import { DataTypes } from "sequelize";

const pirataModel = {
  nome: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
};

export { pirataModel };
