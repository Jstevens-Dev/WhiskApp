const express = require("express");
const {
  registerUser,
  authUser,
  updateUserAccount,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/account").post(protect, updateUserAccount);

module.exports = router;
