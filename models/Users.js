const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: { type: String, 
    trim: true, 
    required: "Username is Required",
    
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


const Users = mongoose.model("Users", userSchema);

module.exports = Users;

//user array of events like and volunteer for pulling user record adding events
