const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require("../Controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

module.exports = router;
