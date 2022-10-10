const homeController = require("../controllers/homeController");
const catalogController = require("../controllers/catalogController");
const createController = require("../controllers/createController");
const notFoundController = require("../controllers/notFoundController");
const extrasController = require("../controllers/extrasControllers");
const { authController } = require("../controllers/authController");

module.exports = (app) => {
  app.use(homeController);
  app.use("/catalog", catalogController);
  app.use("/create", createController);
  app.use("/about", homeController);
  app.use("/extras", extrasController);
  app.use("/auth", authController)
  app.all("*", notFoundController);
};
