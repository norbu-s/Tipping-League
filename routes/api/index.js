const router = require("express").Router();
// const userRoutes = require("./user");

// router.use("/user", userRoutes);
const competitionRoutes = require("../api/competitionapi");
// const leadershipRoutes = require("./leadershipapi");
const rapidRoutes = require("../api/rapidapi");
const resultsRoutes = require("../api/resultsapi");
const tipsRoutes = require("../api/tipsapi");
const usersRoutes = require("../api/usersapi");



// router.use("/api", apiRoutes);
router.use("/competitionapi", competitionRoutes);
// router.use("/leadershipapi", leadershipRoutes);
router.use("/rapidapi", rapidRoutes);
router.use("/resultsapi", resultsRoutes);
router.use("/tipsapi", tipsRoutes);
router.use("/usersapi", usersRoutes);

module.exports = router;