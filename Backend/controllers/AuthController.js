const userModel = require("../models/UserModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    userModel
      .create({ username, email, password: hashedPassword })
      .then((data) => {
        console.log("Added Succesfully...");
        console.log(data);
        res.status(201).json({ message: "User created" });
      })
      .catch((err) => res.send({ message: "Duplicat", err }));
  } catch (err) {
    res.status().send(err);
  }
};
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const validUser = await userModel.findOne({ email }).lean();
  if (validUser == null) {
    res.send({ message: "Does not exist", success: false });
  } else if (await bcryptjs.compareSync(password, validUser.password)) {
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(validUser);
  } else {
    res.status(401).send({ message: "Wrong Credentials", success: false });
  }
};

module.exports.google = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user != null) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);  
      res.cookie("access_token", token, { httpOnly: true }).status(200).json(user._doc);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new userModel({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      
      res.cookie("access_token", token, { httpOnly: true }).status(200).json(newUser._doc);
    }
  } catch (error) {
    res.send({message : " something went wrong", success : false})
  } 
}; 
