const { Schema } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your Email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = { userSchema };