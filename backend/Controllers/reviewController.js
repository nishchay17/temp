const Reviews = require("../models/reviewModel");

exports.getAllReviews = (req, res) => {
  Reviews.find()
    .populate("Users")
    .exec((err, reviews) => {
      if (err) {
        return res.status(400).json({
          error: "no review found",
        });
      }
      res.json(reviews);
    });
};

exports.getMyReviews = (req, res) => {
  // should be after addition of auth middleware req.user._id
  Reviews.find({ user: req.body.user }).exec((err, reviews) => {
    if (err) {
      return res.status(400).json({
        error: "Reviews not found",
      });
    }
    res.json(reviews);
  });
};

exports.createReview = (req, res) => {
  const { type, description } = req.body;
  const review = {
    name: req.user.name,
    user: req.user._id,
    type,
    description,
  };
  console.log(review);
  const reviews = new Reviews(review);

  reviews.save((err, review) => {
    if (err) {
      return res.status(400).json({
        error: "not able to save review",
      });
    }
    res.json({ review });
  });
};

exports.getReviewsByType = (req, res) => {
  Reviews.find({ type: req.body.type }).exec((err, review) => {
    if (err) {
      return res.status(400).json({
        error: "Reviews not found",
      });
    }
    res.json({ review });
  });
};

/*const asyncHandler = require("express-async-handler");
const Reviews = require("../models/reviewModel");

// @desc  Create experience
// @route PUT /api/reviews/exp
// @access Private

const createReview = asyncHandler(async (req, res) => {
  const { type, description } = req.body;
  const review = {
    name: req.user.name,
    userId: req.user._id,
    type,
    description,
  };
  const reviews = await Reviews.create(review);
  await reviews.save();
  res.status(201).json({ message: "Review added" });
});

module.exports = { createReview };

/*const createReview = asyncHandler(async (req, res) => {
  const { type, description } = req.body;

  const reviews = await Reviews.create({ type, description });

  if (reviews) {
    res.status(201).json({
      name: req.user.name,
      type: reviews.type,
      description: reviews.description,
      numReviews: reviews.numReviews + 1,
      user: req.user._id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid review data");
  }

  //await reviews.save();
});*/
