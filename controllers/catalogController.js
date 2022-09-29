const { getAll, getById } = require("../services/accomodationService");

const router = require("express").Router();

router.get("/", (req, res) => {
  const city = req.query.city || '';
  const name = req.query.name || '';
  const lowPrice = Number(req.query.lowPrice) || 1;
  const highPrice = Number(req.query.highPrice) || 300;

  const places = getAll(city, name, lowPrice, highPrice);

  res.render("catalog", {
    title: "All Accomodations",
    places,
    city, 
    name,
    lowPrice,
    highPrice
  });
});

router.get("/:id", (req, res) => {
  const placeId = req.params.id;
  const place = getById(placeId);

  if (place) {
    res.render("details", {
      title: "Accomodation Details",
      place,
    });
  } else {
    res.render("placeNotFound", {
      title: "Accomodation Details",
      placeId,
    });
  }
});

module.exports = router;
