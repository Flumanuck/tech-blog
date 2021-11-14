const User = require("./user");
const Post = require("./post");

Post.belongsTo(User);

User.hasMany(Post);

module.exports = { Post, User };
