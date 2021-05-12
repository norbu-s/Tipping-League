const router = require("express").Router();

const rapidRoutes = require("../api/rapidapi");
const usersRoutes = require("../api/usersapi");

router.use("/rapidapi", rapidRoutes);
router.use("/usersapi", usersRoutes);

module.exports = router;