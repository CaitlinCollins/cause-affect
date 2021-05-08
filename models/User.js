// username, password, organizations, events, donations
const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, trim: true, required: "Username is Required" },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    bcrypt: true,
    validate: [
      ({ length }) => length >= 6,
      "Password should be at least 6 characters.",
    ],
  },
  secret: { type: String, bcrypt: true },
  email: {
    type: String,
    required: true,
    min: [8, "Password must be 8 characters"],
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  },
  userCreated: {
    date: {
      type: Date,
      default: Date.now,
    },
  },
});
userSchema.plugin(require('mongoose-bcrypt'));

const User = mongoose.model("User", userSchema);

module.exports = User;

//user array of events like and volunteer for pulling user record adding events
