const router = require("express").Router();
const registerController = require("../../controllers/registerController");

router.route("/").post(registerController.create);

module.exports = router;
