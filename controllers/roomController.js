const { redirect } = require('express/lib/response');
const { getById, updatePlace, deletePlace } = require('../services/roomService');

const roomController = require('express').Router();

roomController.get('/:id/edit', async (req, res) => {
    const placeId = req.params.id;
    const place = await getById(placeId);

    if(!req.user || place.owner != req.user._id) {
        return res.redirect('/auth/login');
    };

    res.render('edit', {
        title: 'Edit Room',
        place
    })
});

roomController.post('/:id/edit', async (req, res) => {
    const placeId = req.params.id;

    if(!req.user || place.owner != req.user._id) {
        return res.redirect('/auth/login');
    };

    try {
        const result = await updatePlace(placeId, req.body);
         res.redirect(`/catalog/${result._id}`);
         
     } catch (error) {
         req.body._id = placeId;
         res.render('edit', {
             title: "Error!",
             place: req.body
         })
     }
});

roomController.get('/:id/delete', async (req, res) => {
    const placeId = req.params.id;
    const place = await getById(placeId);

    if(!req.user || place.owner != req.user._id) {
        return res.redirect('/auth/login');
    };

    res.render('delete', {
        title: 'Delete Room',
        place
    })
});

roomController.post('/:id/delete', async (req, res) => {
    const placeId = req.params.id;
    const place = await getById(placeId);

    if(!req.user || place.owner != req.user._id) {
        return res.redirect('/auth/login');
    };

    try {
        await deletePlace(placeId);
         res.redirect(`/catalog`);
         
     } catch (error) {
         req.body._id = placeId;
         res.render('delete', {
             title: "Delete Room",
             place: req.body
         })
     }
   

})

module.exports = roomController;