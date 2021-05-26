const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes=require("./loginRoutes");
const calendar=require("./calendar");

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/calendar", calendar);

module.exports = router;