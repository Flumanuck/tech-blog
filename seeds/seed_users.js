const { User } = require("../models");

const userData = [
  {
    username: "Username",
    password: "Password",
  },
  {
    username: "OrigamiMan",
    password: "1000PaperCranes",
  },
  {
    username: "aaaaaaaa",
    password: "bbbbbbbb",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
