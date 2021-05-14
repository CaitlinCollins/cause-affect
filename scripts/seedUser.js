const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/causeaffect");

const userSeed = [
    {userName: "helper",
    password: "password12345",
    email:"helper@help.com"
    },
];

db.User.remove({}).then(() =>
  db.User.collection.insertMany(userSeed)
).then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
  });