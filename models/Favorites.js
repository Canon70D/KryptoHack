const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favourites extends Model {}

Favourites.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    //   primaryKey: false,
    //   autoIncrement: false,
    },

    coin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "favourites",
  }
);

module.exports = Favourites;
