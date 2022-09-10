const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CoinList extends Model {}

CoinList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    coin_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    symbol: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "coinList",
  }
);

module.exports = CoinList;
