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
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password: hashedPassword, ...rest} =validUser;
    res.cookie("token", token, { httpOnly: true }).status(200).json(rest);
 
  } else {
    res.status(401).send({ message: "Wrong Credentials", success: false });
   
  }
}; 