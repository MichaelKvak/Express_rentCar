var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("main", {
    title: "Rent car service",
    thnks: "Thank you for your choice",
    array: [
      "diesel",
      "petrol",
      "beer",
      "hard drinks",
      "map",
      "girls",
      "ice cream",
    ],
    arrayNew: [
      "4x4",
      "1-2L",
      "2-5L",
      "manual transmission",
      "automatic transmission",
      "electro engine",
    ],
  });
});

module.exports = router;
