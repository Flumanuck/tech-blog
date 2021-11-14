const { Post } = require("../models");

const postData = [
  {
    title: "Corn Computer",
    body: "I made a computer entirely out of corn and it works!",
  },
  {
    title: "Eggplant Computer",
    body: "Guys I just made a computer out of eggplants and it works perfectly.",
  },
  {
    title: "Actual Mechanical Parts Computer",
    body: "What is WRONG with you guys???",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
