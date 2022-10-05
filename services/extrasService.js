const Extra = require('../models/Extra');
const Room = require('../models/Room');

async function getAllExtras () {

return Extra.find({}).lean();

};


async function createExtra (label, iconUrl) {

    return Extra.create({
        label,
        iconUrl
    });

}

async function addExtras (placeId, extrasIds) {
    const place = await Room.findById(placeId).populate('extras');
    const extras = await Extra.find({ _id: {$in: extrasIds}});

    //Removing place ref from removed extras
    const toDelete = place.extras.filter(el => extras.every(x => x._id.toString() !== el._id.toString()));
    toDelete.forEach(el => {
        el.rooms.splice(el.rooms.findIndex(pId => pId.toString() === placeId), 1);
        place.extras.splice(place.extras.findIndex(x => x._id.toString() === el._id.toString()), 1)
    })

    //Checking newly added extras
    const newlyAdded = extras.filter(el => place.extras.every(x => x._id.toString() !== el._id.toString()));

    //Adding place ref for newly added extras
    newlyAdded.forEach(el => {
        place.extras.push(el);
        el.rooms.push(place);
    });

    await place.save();
    await Promise.all(toDelete.map(el => el.save()));
    await Promise.all(newlyAdded.map(el => el.save()));
}


module.exports = {
    getAllExtras,
    createExtra,
    addExtras
}

