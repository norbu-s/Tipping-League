const router = require("express").Router();
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
const tipsController = require("../../controllers/tipsController");
const resultsController = require("../../controllers/tipsController");
const fixturesController = require("../../controllers/fixturesController");
const jobController = require("../../controllers/jobController");

router.get("/authenticated", (req, res) => {
  if (req.user) {
    return res.json({ isAuthenticated: true, id: req.user.id });
  } 
  return res.json({ isAuthenticated: false });
});

router.post("/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

router.post("/register", usersController.SignUp)


  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/user_data", function(req, res) {
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

//Routes for Tips
router.route("/tips")
  .post(tipsController.create, function(req, res) {
    res.status(200).send("tip has been added!")
  })

  router.get("tips/", tipsController.findAll)
  router.get("tips/:id", tipsController.findById)
  router.put("tips/:id", tipsController.addPoints)


  router.route("/tips/:id")
  .delete(tipsController.remove)


  //Routes for Results
  router.route("/results")
  .post(resultsController.create, function(req, res) {
    res.status(200).send("Reults has been added!")
  })

  router.get("results/", resultsController.findAll)
  // router.get("results/:id", resultsController.findById)

  // router.route("/results/:id")
  // .put(resultsController.update)
  // .delete(resultsController.remove)

  //Routes for Fixtures
router.get("/fixtures", fixturesController.findAll)
    

//Routes for scheduled Job

router.get("/notification", jobController.mailingList)

module.exports = router;