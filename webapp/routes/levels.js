let express = require("express"),
    router = express.Router({mergeParams: true}),
    mongoose = require("mongoose");

let Sensor = require("../models/sensor");

router.get("/home/level:whatLevel", (req, res) => {
    res.render("levels/level", {level: req.params.whatLevel});
});

module.exports = router;