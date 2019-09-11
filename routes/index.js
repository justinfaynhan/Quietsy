let express = require("express"),
    router = express.Router({mergeParams: true});

// let Sensor = require("./models/sensor");

router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", (req, res) => {
    res.render("index/home");
});

module.exports = router;