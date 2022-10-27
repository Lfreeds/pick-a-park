const Park = require("../models/park");
const Review = require("../models/review");

function index(req, res) {
  Park.find({}, function (err, parks) {
    res.render("parks/index", { title: "All Parks", parks });
  });
}

function newPark(req, res) {
  res.render("parks/new", { title: "Add Park" });
}

function show(req, res) {
  Park.findById(req.params.id)
    .populate("reviews")
    .exec(function (err, park) {
      Review.find({}).exec(function (err, reviews) {
        console.log(reviews);
        res.render("parks/show", { title: `${park.name}`, park, reviews });
      });
    });
}

function create(req, res) {
  const park = new Park(req.body);
  park.save(function (err) {
    if (err) return res.render("parks/new");
    res.redirect("/parks");
  });
}

module.exports = {
  new: newPark,
  create,
  index,
  show,
};
