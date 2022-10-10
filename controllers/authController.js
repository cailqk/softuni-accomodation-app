const authController = require("express").Router();
const jwt = require("jsonwebtoken");
const { login } = require("../services/userService");

authController.get("/login", (req, res) => {
    res.render('login', {
        title: 'Login'
    })
});

authController.post('/login', async (req, res) => {

const result = await login(req.body.username, req.body.password);
const token = req.signJwt(result);
res.cookie('jwt', token);
res.redirect('/');

});

module.exports = authController;
