const { getAll, getById } = require("../services/roomService");

const router = require("express").Router();

router.get("/", async (req, res) => {

  const user = req.user;
  console.log(user);

  const city = req.query.city || '';
  const name = req.query.name || '';
  const lowPrice = Number(req.query.lowPrice) || 1;
  const highPrice = Number(req.query.highPrice) || 300;

  const places = await getAll(city, name, lowPrice, highPrice);

  res.render("catalog", {
    title: "All Accomodations",
    places,
    city, 
    name,
    lowPrice,
    highPrice
  });
});

router.get("/:id", async (req, res) => {
  const placeId = req.params.id;
  const place = await getById(placeId);

  if(req.user && req.user._id == place.owner) {
      place.isOwner = true;
  }

  if (place) {
    res.render("details", {
      title: "Accomodation Details",
      place
    });
  } else {
    res.render("placeNotFound", {
      title: "Accomodation Details",
      placeId,
    });
  }
});

module.exports = router;
