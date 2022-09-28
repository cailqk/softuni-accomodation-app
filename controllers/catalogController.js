const { getAll, getById } = require("../services/accomodationService");

const router = require("express").Router();

router.get("/", (req, res) => {
  const places = getAll();

  res.render("catalog", {
    title: "All Accomodations",
    places,
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
