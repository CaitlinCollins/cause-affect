const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orgSchema = new Schema({
    name: { type: String, required: true },
    needs: { type: String, required: true },
    contact: String,
    
  });

const Organization = mongoose.model("Organization", orgSchema);

module.exports = Organization;