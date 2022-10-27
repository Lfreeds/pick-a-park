const Review = require("../models/review");
const Park = require("../models/park");

function index(req, res) {
  Review.find({}, function (err, reviews, parks) {
    res.render("reviews/index", { title: "All Reviews", reviews, parks });
  });
}

function newReview(req, res) {
  Park.find({}, function (err, parks) {
    res.render("reviews/new", { title: "Add Review", parks });
  });
}

function create(req, res) {
  const review = new Review(req.body);
  console.log(req.body);
  review.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/reviews");
  });
}

function show(req, res) {
  Review.findById(req.params.id).exec(function (err, review) {
    res.render("reviews/show", { title: `${review.title}`, review });
  });
}

module.exports = {
  new: newReview,
  show,
  create,
  index,
};
