const { createPlace } = require('../services/accomodationService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Add New Accomodation'
    })
});

router.post('/', async (req, res) => {
 try {
    const result = await createPlace(req.body);
     res.redirect(`/catalog/${result.id}`);
     
 } catch (error) {
     res.render('create', {
         title: "Error!"
     })
 }
})

module.exports = router;