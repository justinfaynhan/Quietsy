let express = require("express"),
    router = express.Router({mergeParams: true});

router.get("/home/test", (req, res) => {
    res.render("levels/test", {level: 0});
});

router.get("/home/level:whatLevel", (req, res) => {
    if (req.params.whatLevel < 2 || req.params.whatLevel > 8) {
        res.redirect("*");
    }
    res.render("levels/level", {level: req.params.whatLevel});
});

module.exports = router;