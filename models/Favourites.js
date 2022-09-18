// Import models and sequelize connection
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create Favourites class model
class Favourites extends Model {}

// Create properties for Favourites model
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
