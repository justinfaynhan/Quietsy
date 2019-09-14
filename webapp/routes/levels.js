let express = require("express"),
    router = express.Router({mergeParams: true}),
    mongoose = require("mongoose");

let Sensor = require("../models/sensor");

router.get("/home/level:whatLevel", (req, res) => {
    if (req.params.whatLevel < 2 || req.params.whatLevel > 8) {
        res.redirect("*");
    }
    res.render("levels/level", {level: req.params.whatLevel});
});

module.exports = router;