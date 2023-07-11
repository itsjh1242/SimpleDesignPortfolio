var express = require("express");
var router = express.Router();
const IndexPage = require("../public/javascripts/Strings").IndexPage;
const ExperiencePage = require("../public/javascripts/Strings").ExperiencePage;

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

router.get("/menu/:index", function (req, res, next) {
  if (req.params.index == 0) {
    return res.render("experience", {
      ExperiencePage: ExperiencePage,
      menuTitle: "Experiences",
      menuSubTitle: "Job Responsibilities, Achievements",
    });
  } else if (req.params.index == 1) {
    return res.render("works", {});
  } else if (req.params.index == 2) {
    return res.render("skills", {});
  } else if (req.params.index == 3) {
    return res.render("activities", {});
  }
});

module.exports = router;
