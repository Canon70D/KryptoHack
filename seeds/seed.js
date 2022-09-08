const sequelize = require("../config/connection");

const { User } = require("../models");
const userData = require("./userData.json");
//const userSeeds = require("./userSeeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);

  // await sequelize.sync({ fource: true });

  // console.log("-----------database seed-----------");
  // await userSeeds();
  // console.log("-----------users seeded----------");
};

seedDatabase();
