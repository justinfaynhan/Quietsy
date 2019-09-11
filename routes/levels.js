let express = require("express"),
    router = express.Router({mergeParams: true});

// let Sensor = require("./models/sensor");

router.get("/home/level:whatLevel", (req, res) => {
    res.render("levels/level", {level: req.params.whatLevel});
});
// router.get("/home/level3", (req, res) => {
//     res.render("levels/level3");
// });
// router.get("/home/level4", (req, res) => {
//     res.render("levels/level4");
// });
// router.get("/home/level5", (req, res) => {
//     res.render("levels/level5");
// });
// router.get("/home/level6", (req, res) => {
//     res.render("levels/level6");
// });
// router.get("/home/level7", (req, res) => {
//     res.render("levels/level7");
// });
// router.get("/home/level8", (req, res) => {
//     res.render("levels/level8");
// });
// router.get("/home/level9", (req, res) => {
//     res.render("levels/level9");
// });

module.exports = router;