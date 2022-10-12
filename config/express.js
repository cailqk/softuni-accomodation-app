const express = require("express");
const cookieParser = require("cookie-parser");
const authenticator = require("../middlewares/auth");
const userNav = require("../middlewares/userNav");

const hbs = require("express-handlebars").create({
  extname: ".hbs",
});

const jwtSecret = "7fgfdsh37fhds";

module.exports = (app) => {

  app.engine(".hbs", hbs.engine);
  app.set("view engine", ".hbs");
  app.use(cookieParser());
  app.use(authenticator(jwtSecret));
  app.use(userNav());

  app.use(express.urlencoded({ extended: true }));
  app.use("/static", express.static("static"));
};
