const express = require("express");
const router = express.Router();
const {
  loginFaculty,
  loginAdmin,
  resetFacultyPassword,
  resetAdminPassword, // ✅ Admin reset handler
} = require("../controllers/authController");

router.post("/faculty/login", loginFaculty);
router.post("/admin/login", loginAdmin);

// ✅ Route for faculty password reset
router.post("/faculty/reset-password", resetFacultyPassword);

// ✅ Route for admin password reset (now enabled)
router.post("/admin/reset-password", resetAdminPassword);

module.exports = router;
