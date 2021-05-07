const db = require("../models");

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// const competitionRoutes = require("./competitionapi");
// const leadershipRoutes = require("./leadershipapi");
// const rapidRoutes = require("./rapidapi");
// const resultsRoutes = require("./resultsapi");
// const tipsRoutes = require("./tipsapi");
// const usersRoutes = require("./usersapi");



// router.use("/api", apiRoutes);
// router.use("/competitionapi", competitionRoutes);
// router.use("/leadershipapi", leadershipRoutes);
// router.use("/rapidapi", rapidRoutes);
// router.use("/resultsapi", resultsRoutes);
// router.use("/tipsapi", tipsRoutes);
// router.use("/usersapi", usersRoutes);


router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;