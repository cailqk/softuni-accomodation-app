const { getById, updatePlace } = require('../services/roomService');

const roomController = require('express').Router();

roomController.get('/:id/edit', async (req, res) => {
    const placeId = req.params.id;
    const place = await getById(placeId);

    res.render('edit', {
        title: 'Edit Room',
        place
    })

});

roomController.post('/:id/edit', async (req, res) => {
    const placeId = req.params.id;
    try {
        const result = await updatePlace(placeId, req.body);
         res.redirect(`/catalog/${result._id}`);
         
     } catch (error) {
         res.render('edit', {
             title: "Error!",
             place: req.body
         })
     }
})

module.exports = roomController;