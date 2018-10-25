const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nty");

// NTY  routes
router.use("/articles", articleRoutes);

router.use("/nyt", nytRoutes);

module.exports = router;
