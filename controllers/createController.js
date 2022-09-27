const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Add New Accomodation'
    })
});

module.exports = router;