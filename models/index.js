// Import models
const User = require("./User");
const Comment = require("./Comment");
const CoinList = require("./CoinList")
const Favourites = require("./Favourites")

// User to Comment associations
User.hasMany(Comment, { foreignKey: "user_id", onDelete: "set null" });
Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "set null" });

// User to Favourites associations
User.hasMany(Favourites, {foreignKey: "user_id", onDelete: "CASCADE"})
Favourites.belongsTo(User, {foreignKey: "user_id"})

module.exports = { User, Comment, CoinList, Favourites };
