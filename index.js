const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

// 2. Import route from Routes folder
const userRoutes = require('./Routes/userRoutes')

const app = express();

app.use(cors());
app.use(express.json());

// 1. connect with mongoose
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("Connected successful"))
  .catch((err) => console.log(err));

// 2. define a application route
app.use('/user', userRoutes);

app.get("/", (req, res) => {
  res.send("Mongoose server is running");
});

app.listen(5000, () => {
  console.log("App is connected with port 5000");
});
