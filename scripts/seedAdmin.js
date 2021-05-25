const mongoose = require("mongoose");
const db = require("../models");
// seed admin user
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/causeaffect");

const adminSeed = [
  {
    userName: "superuser",
    password: "strongpassword12345",
    email: "superuser@causeaffect.com",
  },
];

db.Admin.remove({})
  .then(() => db.Admin.collection.insertMany(adminSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
