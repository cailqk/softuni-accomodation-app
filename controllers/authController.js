const authController = require('express').Router();

authController.get('/obtain', (req, res) => {
     res.send('Your token');

});

authController.get('/validate', (req, res) => {
    res.send('Valid token');
});

module.exports = {
    authController
}