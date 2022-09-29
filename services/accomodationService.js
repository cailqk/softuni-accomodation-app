const fs = require("fs");
const file = "./models/data.json";

const data = JSON.parse(fs.readFileSync(file));

async function memorize() {
  return new Promise((res, rej) => {
    fs.writeFile(file, JSON.stringify(data), (err) => {
      if (err === null) {
        res();
      } else {
        rej(err);
      }
    });
  });
}

function getAll(city, name, lowPrice, highPrice) {
  return data
  .filter(p => p.city.toLowerCase().includes(city.toLowerCase()))
  .filter(p => p.name.toLowerCase().includes(name.toLowerCase()))
  .filter(p => p.price >= lowPrice && p.price <= highPrice);

}

function getById(id) {
  return data.find((el) => el.id == id);
}

async function createPlace(placeData) {
  const place = {
    id: createId(),
    name: placeData.name,
    description: placeData.description,
    city: placeData.city,
    beds: Number(placeData.beds),
    price: Number(placeData.price),
    imgUrl: placeData.imgUrl,
  };

  data.push(place);
  await memorize();

  return place;
}

function createId() {
  return "00" + ((Math.random() * 99999) | 0).toString(16).slice(-4);
}

module.exports = {
  getAll,
  getById,
  createPlace,
};
