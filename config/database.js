const mongoose = require("mongoose");

const connectionStr = "mongodb://localhost:27017/booking";

module.exports = async (app) => {
  try {
    await mongoose.connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('DB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

