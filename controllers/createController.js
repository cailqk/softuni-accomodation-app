const { createPlace } = require('../services/roomService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Add New Accomodation'
    })
});

router.post('/', async (req, res) => {
 try {
    const result = await createPlace(req.body, req.user._id);
     res.redirect(`/catalog/${result._id}`);
     
 } catch (error) {
     res.render('create', {
         title: "Error!"
     })
 }
})

module.exports = router;