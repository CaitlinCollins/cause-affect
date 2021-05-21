const router = require("express").Router();
const registerRoutes = require("./register");

router.use("/register", registerRoutes)

module.exports = router;