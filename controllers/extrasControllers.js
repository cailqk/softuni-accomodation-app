const extrasController = require("express").Router();

const {
  createExtra,
  getAllExtras,
  addExtras,
} = require("../services/extrasService");
const { getById } = require("../services/roomService");

extrasController.get("/create", (req, res) => {
  //TODO
  //show form for adding extras
  res.render("createExtra", {
    title: "Create New Extra",
  });
});

extrasController.post("/create", async (req, res) => {
  try {
    await createExtra(req.body.label, req.body.iconUrl);
    res.redirect("/catalog");
  } catch (error) {
    //TODO deal with errors
    console.error(error.message);
    res.render("createExtra", {
      title: "Create New Extra",
    });
  }
});

extrasController.get("/:roomId/addToRoom", async (req, res) => {
  const roomId = req.params.roomId;
  const place = await getById(roomId);
  const extras = await getAllExtras();

  extras.forEach((el) => {
    if ((place.extras || []).some((x) => x.toString() === el._id.toString())) {
      el.checked = true;
    }
  });

  res.render("additions", {
    title: "Add Extra",
    place,
    extras,
  });
});

extrasController.post("/:roomId/addToRoom", async (req, res) => {
  await addExtras(req.params.roomId, Object.keys(req.body));

  res.redirect("/extras/" + req.params.roomId + "/addToRoom");
});

module.exports = extrasController;
