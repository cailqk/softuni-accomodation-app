const routes = require("../config/routes");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", {
      title: 'Home Page'
  });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us'
    })
});

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login page'
    })
});

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Login page'
    })
});


module.exports = router;