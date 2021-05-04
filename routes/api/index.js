const router = require("express").Router();
const leagueController = require("../../controllers/competitionController");
const tipsController = require("../../controllers/tipsController");

router.route("/")
  .get(leagueController.getAll)
  .post(leagueController.save);

router.route("/:id")
  .delete(leagueController.delete);

router.route("/tips")
  .get(leagueController.getAll)
  .post(leagueController.save);

module.exports = router;
