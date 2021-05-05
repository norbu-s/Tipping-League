const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const rapidRoutes = require("./rapidapi");


// router.use("/api", apiRoutes);
router.use("/rapidapi", rapidRoutes);


router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;