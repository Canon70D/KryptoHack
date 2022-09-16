const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favourites extends Model {}

Favourites.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // primaryKey: true,
      references: {
        model: "user",
        key: "id",
    },
    },

    coin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
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
