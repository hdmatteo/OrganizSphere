const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, require:true, unique:true },
    email: { type: String, require:true, unique:true },
    password: { type: String, require:true },
    profilePicture:{type:String, default:"https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png",}
  },
  { timestamps:true }
);

const userModel = mongoose.model("User", UserSchema);
module.exports = userModel;
 