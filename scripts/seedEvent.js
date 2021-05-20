const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/causeaffect");

const eventSeed = [
{eventName: "Food Drive",
eventDate: "6/21/2021",
eventTime: "6:30 pm",
volunteersNeeded: 12,
},
{eventName: "Clothing Drive",
eventDate: "5/21/2021",
eventTime: "8:30 am",
volunteersNeeded: 10,
},
{eventName: "Cook",
eventDate: "7/30/2021",
eventTime: "5:00 am",
volunteersNeeded: 3,
},
{eventName: "Blanket Drive",
eventDate: "9/15/2021",
eventTime: "12:00 pm",
volunteersNeeded: 12,
},
{eventName: "Food Drive",
eventDate: "6/21/2021",
eventTime: "6:30 pm",
volunteersNeeded: 12,
},


];

db.Events.remove({}).then(() =>
  db.Events.collection.insertMany(eventSeed)
).then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
  });
