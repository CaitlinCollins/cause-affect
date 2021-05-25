const router = require("express").Router();

// const apiRoutes = require("./api");
const authRoutes = require("./authRoutes");

// router.use('/api', apiRoutes);
router.use("/authroutes", authRoutes);

module.exports = router;
