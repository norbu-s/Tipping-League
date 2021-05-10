const router = require("express").Router();
const leadershipController = require("../../controllers/leadershipController");

router.route("/")
  .get(leadershipController.findAll)
  .post(leadershipController.create);


router
  .route("/:id")
  .get(leadershipController.findById)
  .put(leadershipController.update)
  .delete(leadershipController.remove);

module.exports = router;