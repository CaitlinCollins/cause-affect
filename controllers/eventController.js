const db = require("../models");
// create  databases when user and organization register
module.exports = {
  create: function (req, res) {
    console.log(req.body);
    db.Events.create(req.body)
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Events.find({})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};