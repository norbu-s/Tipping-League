const router = require("express").Router();
const competitionController = require("../controllers/competitionController");

router.route("/")
  .get(competitionController.findAll)
  .post(competitionController.create);


router
  .route("/:id")
  .get(competitionController.findById)
  .put(competitionController.update)
  .delete(competitionController.remove);

module.exports = router;