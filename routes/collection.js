var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("collection_info", {
    title: "Rent car service",
    arr: [1, 2, 3, 4, 5],
    text: ["mazda", "bmw", "vw", "reno", "porsche"],
  });
});

module.exports = router;
