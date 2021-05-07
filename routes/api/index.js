const router = require("express").Router();
// const userRoutes = require("./user");

// router.use("/user", userRoutes);
const competitionRoutes = require("../competitionapi");
// const leadershipRoutes = require("./leadershipapi");
const rapidRoutes = require("../rapidapi");
const resultsRoutes = require("../resultsapi");
const tipsRoutes = require("../tipsapi");
const usersRoutes = require("../usersapi");



// router.use("/api", apiRoutes);
router.use("/competitionapi", competitionRoutes);
// router.use("/leadershipapi", leadershipRoutes);
router.use("/rapidapi", rapidRoutes);
router.use("/resultsapi", resultsRoutes);
router.use("/tipsapi", tipsRoutes);
router.use("/usersapi", usersRoutes);

module.exports = router;