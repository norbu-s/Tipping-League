const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
const competitionController = require("../../controllers/competitionController");
const tipsController = require("../../controllers/tipsController");
const resultsController = require("../../controllers/tipsController");

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
  req.login(user, function(err) {
    if (err) { return next(err); }
    return res.json(req.user);
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //Routes for Competiton 
router.route("/competition")
  .post(competitionController.create, function (req, res) {
    res.status(200).send("Competition has been successfully created!")
  });

  router.post("competition/", competitionController.findAll)
  router.post("competition/:id", competitionController.findById)

  router.route("/competition/:id")
  .put(competitionController.update)
  .delete(competitionController.remove)

//Routes for Tips
router.route("/tips")
  .post(tipsController.create, function(req, res) {
    res.status(200).send("tip has been added!")
  })

  router.get("tips/", tipsController.findAll)
  router.get("tips/:id", tipsController.findById)

  router.route("/tips/:id")
  .put(tipsController.update)
  .delete(tipsController.remove)


  //Routes for Results
  router.route("/results")
  .post(resultsController.create, function(req, res) {
    res.status(200).send("tip has been added!")
  })

  router.get("results/", resultsController.findAll)
  // router.get("results/:id", resultsController.findById)

  // router.route("/results/:id")
  // .put(resultsController.update)
  // .delete(resultsController.remove)
module.exports = router;