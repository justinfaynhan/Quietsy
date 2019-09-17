let express = require("express"),
    router = express.Router({mergeParams: true});

router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", (req, res) => {
    res.render("index/home");
});

module.exports = router;