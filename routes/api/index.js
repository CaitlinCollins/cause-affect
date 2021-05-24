const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes=require("./loginRoutes");

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);

module.exports = router;