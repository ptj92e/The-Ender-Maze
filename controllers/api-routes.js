let express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
    res.render("welcome");
});

router.get("/characters", function(req, res) {
    res.render("class");
});

router.get("/paladin", function(req, res) {
    res.render("./characters/paladin");
});

router.get("/wizard", function(req, res) {
    res.render("./characters/wizard");
});

router.get("/cleric", function(req, res) {
    res.render("./characters/cleric");
});

router.get("/rogue", function(req, res) {
    res.render("./characters/rogue");
});

module.exports = router;