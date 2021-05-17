const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
const tipsController = require("../../controllers/tipsController");
const resultsController = require("../../controllers/tipsController");
const fixturesController = require("../../controllers/fixturesController");
const leadershipController = require("../../controllers/leadershipController");
const bcrypt = require("bcrypt");

const Users = require("../../models/users");

router.get("/authenticated", (req, res) => {
  if (req.user) {
    return res.json({ isAuthenticated: true, id: req.user.id });
  }
  return res.json({ isAuthenticated: false });
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

router.post("/register", usersController.SignUp, (req, res) => {
  req.login(user, function (err) {
    if (err) {
      return next(err);
    }
    return res.json(req.user);
  });
});

router.get("/logged-in", (req, res) => {
  res.json({ isAuthenticated: req.isAuthenticated() });
});

router.get("/logout", (req, res) => {
  req.logout(); // This is a simple functionality provided by passport to log out a user and destroy any sessions associated with the user.
  res.send(200);
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

//Routes for Tips
router.route("/tips").post(tipsController.create, function (req, res) {
  res.status(200).send("tip has been added!");
});

router.get("tips/all", tipsController.findAll);
router.get("tips/:id", tipsController.findById);
router.put("tips/:id", tipsController.addPoints);

router.route("/tips/:id").delete(tipsController.remove);

//Routes for Results
router.route("/results").post(resultsController.create, function (req, res) {
  res.status(200).send("Results has been added!");
});

router.get("results/", resultsController.findAll);
// router.get("results/:id", resultsController.findById)

// router.route("/results/:id")
// .put(resultsController.update)
// .delete(resultsController.remove)

//Routes for Fixtures
router.get("/fixtures", fixturesController.findAll);

//Routes for LeaderBoard

router.get("/leadership", leadershipController.findAll);
module.exports = router;
