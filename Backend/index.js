const { log } = require("console");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const todoroutes = require("./routes/ToDoRoute");
const authroutes = require("./routes/AuthRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 2105;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(todoroutes);
app.use(authroutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.send(statusCode).json({
    succes : false,
    message,
    statusCode
  })
});

app.listen(PORT, () => console.log(`listening on : ${PORT}`)); 
