const router = require("express").Router();
const Users = require("../models/Users");
const Organization = require("../models/Organization");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// register user
router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const insertResult = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPwd,
    });
    res.send(insertResult);
  } catch (error) {
    console.log(error);
    res.status(500).send("you have failed to register");
  }
});
// register organization
router.post("/registerorg", async (req, res) => {
  console.log(req.body);
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const insertResult = await Organization.create({
      name: req.body.name,
      title: req.body.title,
      email: req.body.email,
      orgName: req.body.orgName,
      website: req.body.website,
      details: req.body.details,
      username: req.body.username,
      password: hashedPwd,
    });
    res.send(insertResult);
  } catch (error) {
    console.log(error);
    res.status(500).send("you have failed to register");
  }
});
// login user
router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    console.log(user);
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
        //   ..... further code to maintain authentication like jwt or sessions javascrpt web token template react detect if logged in Auth0

        req.session.save(() => {
          req.session.username = user.username;
          req.session.password = user.password;
          req.session.logged_in = true;

          res.status(200).json(user);
        });
      } else {
        res.send("Wrong username or password.");
      }
    } else {
      res.send("Wrong username or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});
// login organization
router.post("/loginorg", async (req, res) => {
  try {
    const user = await Organization.findOne({ username: req.body.username });
    console.log(user);
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {

       req.session.save(() => {
          req.session.username = user.username;
          req.session.password = user.password;
          req.session.logged_in = true;

          res.status(200).json(user);
        });
      } else {
        res.send("Wrong username or password.");
      }
    } else {
      res.send("Wrong username or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});

module.exports = router;
