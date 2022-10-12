const { Schema, model } = require("mongoose");

const roleSchema = new Schema({
  value: { type: String, enum: ["user", "admin"] },
});

const userSchema = new Schema({
  username: { type: String, minlenght: 4 },
  hashedPassword: { type: String, required: true },

  //try and fix the roles to be saved the right way
  roles: { type: [roleSchema], default: ["user"] },
});

userSchema.index(
  { username: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
