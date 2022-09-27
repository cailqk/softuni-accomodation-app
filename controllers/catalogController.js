const { getAll } = require('../services/accomodationService');

const router = require('express').Router();


router.get('/', (req, res) => {
    const places = getAll();

    res.render('catalog', {
        title: 'All Accomodations',
        places
    })
});

router.get('/:id', (req, res) => {
    res.render('details', {
        title: 'Accomodation Details'
    })
})

module.exports = router;