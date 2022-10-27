const Review = require("../models/review");
const Park = require("../models/park");

function index(req, res) {
  Review.find()
    .populate("park")
    .then((reviews) => {
      res.render("reviews/index", { title: "All Reviews", reviews });
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

function updateReview(req, res) {}

function show(req, res) {
  Review.findById(req.params.id)
    .populate("park")
    .exec(function (err, review) {
      console.log(Park);
      res.render("reviews/show", { title: `${review.title}`, review });
    });
}

function deleteReview(req, res) {
  console.log(req.params.id);
  Review.find({ _id: req.params.id }).then((review) => {
    console.log(review);
  });
  Review.deleteOne({ _id: req.params.id }).then(res.redirect("/reviews"));
}

function update(req, res) {
  Review.findById(req.params.id)
    .populate("park")
    .exec(function (err, review) {
      console.log(Park);
      res.render("reviews/update", { title: `Update Form`, review });
    });
}

module.exports = {
  new: newReview,
  show,
  create,
  index,
  delete: deleteReview,
  update,
};
