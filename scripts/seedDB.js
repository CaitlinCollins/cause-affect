const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/causeaffect");

const orgSeed = [
  {
    name: "Soup Kitchen",
    needs: "soup",
    contact: "soupkitchen.com",
  },
  {
    name: "Our Lady of the Immaculate Birth",
    needs: "diapers ",
    contact: "612-213-9000",
  },
  {
    name: "YMCA",
    needs: "towels",
    contact: "ymca.com",
  },
  {
    name: "Food Drive",
    needs: "beans, corn",
    contact: "fooddrive.com",
  },
  {
    name: "Shelter",
    needs: "Blankets",
    contact: "Shelterhome.com",
  },
];

db.Organization.remove({}).then(() =>
  db.Organization.collection.insertMany(orgSeed)
).then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
  });
