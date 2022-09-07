const { Model, DataTpyes } = require("sequelize");
const sequelize = require("../config/connection");

class Crypto extends Model {}

postMessage.init({
  id: {
    type: DataTpyes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTpyes.STRING,
    allowNull: false,
  },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "crypto",
});

module.exports = Crypto;
