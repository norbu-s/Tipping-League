const router = require("express").Router();

const rapidRoutes = require("./rapid");
const usersRoutes = require("./users");

router.use("/rapid", rapidRoutes);
router.use("/users", usersRoutes);

module.exports = router;