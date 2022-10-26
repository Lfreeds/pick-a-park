const Park = require("../models/park");

function index(req, res) {
  Park.find({}, function (err, parks) {
    res.render("parks/index", { title: "All Parks", parks });
  });
}

function newPark(req, res) {
  res.render("parks/new", { title: "Add Park" });
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
};
