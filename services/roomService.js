const Room = require('../models/Room');

function getAll(city, name, lowPrice, highPrice) {
return Room.find({}).lean();
}

function getById(id) {
  return Room.findById(id).populate('extras', 'label iconUrl').lean();
}

async function createPlace(placeData, ownerId) {
  const place = {
    name: placeData.name,
    description: placeData.description,
    city: placeData.city,
    beds: Number(placeData.beds),
    price: Number(placeData.price),
    imgUrl: placeData.imgUrl,
    owner: ownerId
  };

  const result = await Room.create(place);

  return result;
}

async function updatePlace (placeId, placeData) {
  const place = await Room.findById(placeId);

  place.name = placeData.name,
    place.description = placeData.description,
    place.city = placeData.city,
    place.beds = Number(placeData.beds),
    place.price = Number(placeData.price),
    place.imgUrl = placeData.imgUrl
 
    await place.save();
    return place;
}

module.exports = {
  getAll,
  getById,
  createPlace,
  updatePlace
};
