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
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

module.exports = router;
