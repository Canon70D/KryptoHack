// Import models, seeds and sequelize connection
const sequelize = require("../config/connection");
const { User, Comment } = require("../models");
const userData = require("./userData.json");
const commentData = require("./commentData.json");

// Function that seeds the database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
