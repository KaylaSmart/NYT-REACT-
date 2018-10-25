const articleController = require("../../controllers/nytcontroller");

//mathces "/api/nyt"

router
    .route("/")
    .get(articleController.findAll);

module.exports = router;

