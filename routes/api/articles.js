const router = require("express").Router();
const articleController = require("../../controllers/articleController");


//article routes
router.route("/")
    .get(articleController.findAll)
    .post(articleController.create);


//to match with "/api/article/:id"

router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);


module.exports = router;