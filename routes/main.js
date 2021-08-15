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
    arrayAboutCar: [
      "Engine volume",
      "Power, h.p. / rev.min",
      "Torque, Nm / rpm",
      "Compression",
      "Fuel tank volume, liters",
      "Maximum speed, km / h",
      "Acceleration from 0 to 100/200 km/h, sec",
      "City consumption, l/100 km",
      "Highway consumption, l/100 km",
      "Combined cycle, l/100 km",
      "CO2 emissions g/km",
    ],
    arrayAboutCar2: [
      "4395",
      " 600/5600-6700",
      " 750/1800-5600",
      "10.0",
      "68",
      " 250/305",
      "3.4/11.1",
      "14.5",
      "8.2",
      "10.5",
      "241",
    ],
  });
});

module.exports = router;
