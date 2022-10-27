const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.get("/", reviewsCtrl.index);
router.get("/new", reviewsCtrl.new);
router.get("/:id", reviewsCtrl.show);
router.get("/update/:id", reviewsCtrl.update);
router.post("/update", reviewsCtrl.updateReview);
router.post("/", reviewsCtrl.create);
router.delete("/:id", reviewsCtrl.delete);

module.exports = router;
