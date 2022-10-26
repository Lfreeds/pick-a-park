const Park = require("../models/park");

function newPark(req, res) {
  res.render("parks/new");
}

function create(req, res) {
  const park = new Park(req.body);
  park.save(function (err) {
    if (err) return res.render("parks/new");
    res.redirect("/parks/new");
  });
}

module.exports = {
  new: newPark,
  create,
};
