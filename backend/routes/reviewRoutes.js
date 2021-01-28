var express = require("express");
var router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getAllReviews,
  getMyReviews,
  getReviewsByType,
  createReview,
  // updateReview,
} = require("../Controllers/reviewController");

router.get("/all", getAllReviews);
router.get("/me", getMyReviews);
router.route("/new").post(protect, createReview);
router.post("/new", createReview);
router.get("/filter", getReviewsByType);
// router.put("/update", updateReview);

module.exports = router;
