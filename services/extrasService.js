const Extra = require('../models/Extra');

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

    

}


module.exports = {
    getAllExtras,
    createExtra,
    addExtras
}

