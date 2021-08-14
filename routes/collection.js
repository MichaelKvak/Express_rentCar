var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("collection_info", {
    title: "Rent car service",
    arr: [1, 2, 3, 4, 5],
    text: ["mazda", "bmw", "vw", "reno", "porsche"],
    arr2: ["male", "driving category", "driving category", "driving category"],
    arr3: ["female", "a", "b", "c"],
    arrayCar: [
      "https://www.carlogos.org/logo/BMW-M-logo-1920x1080.png",
      "https://www.carlogos.org/logo/Mini-logo-2001-1920x1080.png",
      "https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png",
      "https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png",
      "https://www.carlogos.org/logo/Jaguar-logo-2012-1920x1080.png",
      "https://www.carlogos.org/logo/Land-Rover-logo-2011-1920x1080.png",
      "https://www.carlogos.org/logo/Chevrolet-logo-2013-2560x1440.png",
      "https://www.carlogos.org/car-logos/ford-logo-2017.png",
      "https://www.carlogos.org/logo/Maybach-logo-2560x1440.png",
      "https://www.carlogos.org/logo/Bentley-logo-1920x1080.png",
      "https://www.carlogos.org/car-logos/porsche-logo-2100x1100.png",
      "https://www.carlogos.org/car-logos/lamborghini-logo-1000x1100.png",
      "https://www.carlogos.org/logo/Aston-Martin-logo-2003-6000x3000.png",
      "https://www.carlogos.org/logo/Bugatti-logo-1024x768.png",
      "https://www.carlogos.org/car-logos/honda-logo-1700x1150.png",
      "https://www.carlogos.org/logo/Subaru-logo-2003-2560x1440.png",
    ],
  });
});

module.exports = router;
