const express = require("express");
const router = express.Router();
const parksCtrl = require("../controllers/parks");

router.get("/new", parksCtrl.new);

module.exports = router;
