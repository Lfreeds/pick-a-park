var express = require("express");
var router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Welcome to Pick a Park" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/index",
    failureRedirect: "/index",
  })
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/index");
});

module.exports = router;
