const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const orgSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  },
  orgName: { type: String, required: true },
  website: { type: String, required: true },
  details: { type: String },

  username: {
    type: String,
    trim: true,
    required: "Username is Required",
    uniqueKey: true,
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      ({ length }) => length >= 6,
      "Password should be at least 6 characters.",
    ],
  },
});

const Organization = mongoose.model("Organization", orgSchema);

module.exports = Organization;

//organizations creating events. events belong to organization
