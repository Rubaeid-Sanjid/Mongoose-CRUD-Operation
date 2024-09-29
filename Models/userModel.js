const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: String,

  role: {
    type: String,
    enum: ["Student", "Developer"], //enum will take input only from this two value
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
