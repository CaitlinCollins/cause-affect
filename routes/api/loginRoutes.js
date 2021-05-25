const router = require("express").Router();
const Users = require("../../models");

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
});

module.exports = router;
