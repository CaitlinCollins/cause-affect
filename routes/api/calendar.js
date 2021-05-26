const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/")
  .get(eventController.findAll)
  .post(eventController.create);

module.exports = router;
