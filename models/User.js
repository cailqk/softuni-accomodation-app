const { Schema, model } = require("mongoose");

const roleSchema = new Schema({
  value: { type: String, enum: ["user", "admin"] },
});

const userSchema = new Schema({
  username: { type: String, minlenght: 4 },
  hashedPassword: { type: String, required: true },
  roles: { type: [{type: String, enum: ["user", "admin"]}], default: ["user"] },
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
