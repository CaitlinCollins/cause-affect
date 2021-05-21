const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const adminSchema = new Schema({
  username: { type: String, 
    trim: true, 
    required: "Username is Required",
    uniqueKey: true
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
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  }
  
});


const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;