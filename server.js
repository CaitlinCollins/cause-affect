const express = require("express");
const session = require('express-session');

const axios = require("axios");

const bcrypt = require("bcrypt");
var cors = require("cors");


const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sess));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(require("./routes/authRoutes"));
// app.use(require("./routes/index"));
app.use(cors());
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/causeaffect");

app.post("/charityApi", async (req, res) => {
  console.log(req.body);
  await axios
    .get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&state=${req.body.state}&city=${req.body.city}&categoryID=${req.body.cause}`
    )
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(err => res.status(404).json(err));
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
