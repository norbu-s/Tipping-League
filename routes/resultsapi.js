const router = require("express").Router();
const resultsController = require("../controllers/resultsController");

router.route("/")
  .get(resultsController.findAll)
  // .post(resultsController.create);


router
  .route("/:id")
  .get(resultsController.findById)
  // .put(resultsController.update)
  // .delete(resultsController.remove);

module.exports = router;