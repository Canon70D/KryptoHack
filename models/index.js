const User = require("./User");
const Comment = require("./Comment");
// const Crypto = require("./Crypto");
// const UserCrypto = require("./UserCrypto");
const CoinList = require("./CoinList");
const Favorites = require("./Favorites");

//user to comment associations
User.hasMany(Comment, { foreignKey: "user_id", onDelete: "set null" });
Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "set null" });

// comment to crypto associations
// we need to figure how to make this work without save the crypto to database, the id would be null
// Crypto.hasMany(Comment, { foreignKey: "coin_id" });
// Comment.belongsTo(Favorites, { foreignKey: "coin_id", onDelete: "set null" });

// //user to crypto associations
// User.belongsToMany(Crypto, {
//   through: UserCrypto,
//   foreignKey: "user_id",
// });

// Crypto.belongsToMany(User, {
//   through: UserCrypto,
//   foreignKey: "crypto_id",
// });

module.exports = { User, Comment, CoinList, Favorites };
