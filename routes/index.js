var express = require("express");
var router = express.Router();
const IndexPage = require("../public/javascripts/config").IndexPage;
const ExperiencePage = require("../public/javascripts/config").ExperiencePage;
const WorksPage = require("../public/javascripts/config").WorksPage;
const SkillsPage = require("../public/javascripts/config").SkillsPage;
const ActivitiesPage = require("../public/javascripts/config").ActivitiesPage;

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
    return res.render("works", {
      WorksPage: WorksPage,
      menuTitle: "Works",
      menuSubTitle: "Personal or Team Project Works",
    });
  } else if (req.params.index == 2) {
    return res.render("skills", {
      SkillsPage: SkillsPage,
      menuTitle: "Skills & Certificates",
      menuSubTitle: "Key Skills, Certificates",
    });
  } else if (req.params.index == 3) {
    return res.render("activities", {
      ActivitiesPage: ActivitiesPage,
      menuTitle: "Activities",
      menuSubTitle: "Extracurricular Activities, Leadership Roles",
    });
  }
});

module.exports = router;
