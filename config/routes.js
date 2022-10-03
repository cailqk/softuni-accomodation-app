const homeController = require("../controllers/homeController");
const catalogController = require("../controllers/catalogController");
const createController = require("../controllers/createController");
const notFoundController = require("../controllers/notFoundController");

module.exports = (app) => {
  app.use(homeController);
  app.use("/catalog", catalogController);
  app.use("/create", createController);
  app.use("/about", homeController);
  app.all("*", notFoundController);
};
