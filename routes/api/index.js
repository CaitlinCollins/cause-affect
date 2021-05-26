const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes=require("./loginRoutes");
const eventRoutes=require("./eventRoutes");

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/calendar", eventRoutes);

module.exports = router;