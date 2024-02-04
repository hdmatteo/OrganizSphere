const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, require: true, unique:true },
    password: { type: String, require: true },
  },
  { collection: "Users" }
);

const userModel = mongoose.model("Users", UserSchema);
module.exports = userModel;
