const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/causeaffect");

const orgSeed = [
  {
    name: "Steve Johnson",
    title: "Head HR",
    email: "HRlead@soupkitchen.com",
    orgName: "Soup Kitchen",
    website: "soupkitchen.com",
    details: "need 20 cans of soup",
    username:"HRlead",
    password:"password12345"
    
  },
  {
    name: "Sally Smith",
    title: "Head volunteer services",
    email: "S.Smith@volunteer.com",
    orgName: "Volunteer Services",
    website: "volunteerservices.com",
    details: "need 20 blankets",
    username:"ssmith",
    password:"password12345"
  },
  {
    name: "Don Higgs",
    title: "Ops Manager",
    email: "donhiggs@YMCA.com",
    orgName: "YMCA",
    website: "YMCA.com",
    details: "need 20 towels",
    username:"donhiggs",
    password:"password12345"
  },
  {
    name: "Beth Gruple",
    title: "Collections Coordinator",
    email: "Bethg@fooddrive.com",
    orgName: "Food Drive",
    website: "fooddrive.com",
    details: "need 20 bags of beans",
    username:"Bethg",
    password:"password12345"
  },
  {
    name: "Larry Bar",
    title: "Shelter Manager",
    email: "manager@shelterhome.com",
    orgName: "ShelterHome",
    website: "shelterhome.com",
    details: "need 20 diapers",
    username:"larrybar",
    password:"password12345"
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
