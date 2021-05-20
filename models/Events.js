const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: String },
  eventDate: { type: String },
  eventTime: { type: String },
  volunteersNeeded: { type: Number },
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
