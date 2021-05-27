const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String },
  date: { type: String },
  start: { type: String },
  end: { type: String },
  volunteersNeeded: { type: Number },
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
