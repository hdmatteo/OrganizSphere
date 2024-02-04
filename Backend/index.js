const { log } = require("console");
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");



const routes = require("./routes/ToDoRoute");


require("dotenv").config();

const app = express();
const PORT = process.env.port || 2105;  

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(routes);



app.listen(PORT, () => console.log(`listening on : ${PORT}`))