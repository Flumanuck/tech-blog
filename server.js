// Dependencies
// =============================================================
const express = require("express");
// const exphbs = require("express-handlebars");
// Requires the 'express-session' module
// const session = require(`express-session`);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");

// Sets Handlebars as the default template engine
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
