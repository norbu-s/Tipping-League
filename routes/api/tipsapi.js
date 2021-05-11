const router = require("express").Router();
const tipsController = require("../../controllers/tipsController");

router.route("/")
  .get(tipsController.findAll)
  .post(tipsController.create);


router
  .route("/:id")
  // .get(tipsController.findById)
  // .put(tipsController.update)
  // .delete(tipsController.remove);

module.exports = router;