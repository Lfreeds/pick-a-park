const express = require("express");
const router = express.Router();
const parksCtrl = require("../controllers/parks");

router.get("/", parksCtrl.index);
router.get("/new", parksCtrl.new);
router.get("/:id", parksCtrl.show);
router.post("/", parksCtrl.create);

module.exports = router;
