// Dependencies
// =============================================================
const express = require("express");
const { engine } = require("express-handlebars");
// Requires the 'express-session' module
const session = require(`express-session`);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");

// Sets Handlebars as the default template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//Sets route for login page
app.get("/", (req, res) => {
  res.render("home", { layout: "main" });
});

app.get("/login", (req, res) => {
  res.render("login", { layout: "main" });
});

app.get("/signup", (req, res) => {
  res.render("signup", { layout: "main" });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { layout: "main" });
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
