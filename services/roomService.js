const Room = require('../models/Room');

function getAll(city, name, lowPrice, highPrice) {
return Room.find({}).lean();
}

function getById(id) {
  return Room.findById(id).lean();
}

async function createPlace(placeData) {
  const place = {
    name: placeData.name,
    description: placeData.description,
    city: placeData.city,
    beds: Number(placeData.beds),
    price: Number(placeData.price),
    imgUrl: placeData.imgUrl,
  };

  const result = await Room.create(place);

  return result;
}

module.exports = {
  getAll,
  getById,
  createPlace
};
