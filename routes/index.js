var express = require("express");
var router = express.Router();
const IndexPage = require("../public/javascripts/Strings").IndexPage;

/* GET home page. */
router.get("/", function (req, res, next) {
  const MenuCount = Object.keys(IndexPage.menu).length;
  const SlideTextCount = Object.keys(IndexPage.profile_slide).length;

  res.render("index", {
    IndexPage: IndexPage,
    MenuCount: MenuCount,
    SlideTextCount: SlideTextCount,
  });
});

router.get("/experience", function (req, res, next) {
  res.render("experience", {});
});

module.exports = router;
