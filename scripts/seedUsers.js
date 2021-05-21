const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/causeaffect");

const userSeed = [
  { userName: "helper", password: "password12345", email: "helper@help.com" },
  { userName: "localhero", password: "password12345", email: "localhero@gmail.com" },
  { userName: "doug", password: "password12345", email: "doug@yahoo.com" },
  { userName: "rupert", password: "password12345", email: "rupert@aol.com" },
  { userName: "lucy", password: "password12345", email: "lucy@netscape.com" },
];

db.Users.remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
