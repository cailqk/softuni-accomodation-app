const authController = require("express").Router();
const jwt = require("jsonwebtoken");
const { login, register } = require("../services/userService");

authController.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

authController.post("/login", async (req, res) => {
  try {
    const result = await login(req.body.username, req.body.password);
    attachToken(req, res, result);
    res.redirect("/");
  } catch (error) {
    res.render("login", {
      title: "Login",
      error: error.message.split("/n"),
    });
  }
});

authController.get("/register", (req, res) => {
  res.render("register", {
    title: "Register",
  });
});

authController.post("/register", async (req, res) => {
  try {
    if (req.body.username.trim() == "" || req.body.password.trim() == "") {
      throw new Error("All fields are required!");
    }
    if (req.body.password.trim() != req.body.repassword.trim()) {
      throw new Error("Passwords do not match!");
    }
    const result = await register(
      req.body.username.trim(),
      req.body.password.trim()
    );
    attachToken(req, res, result);
    res.redirect("/");
  } catch (error) {
    res.render("register", {
      title: "Register",
      error: error.message.split("/n"),
    });
  }
});

function attachToken(req, res, result) {
  const token = req.signJwt(result);
  res.cookie("jwt", token, { maxAge: 14400000 });
}

module.exports = authController;
