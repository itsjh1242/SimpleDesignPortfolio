var express = require("express");
var router = express.Router();
const IndexPage = require("../public/javascripts/Strings").IndexPage;

/* GET home page. */
router.get("/", function (req, res, next) {
  const MenuCount = Object.keys(IndexPage.menu).length;

  res.render("index", {
    IndexPage: IndexPage,
    MenuCount: MenuCount,
  });
});

module.exports = router;
