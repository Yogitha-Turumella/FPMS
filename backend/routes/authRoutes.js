// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { loginFaculty, loginAdmin } = require("../controllers/authController");

router.post("/faculty/login", loginFaculty);
router.post("/admin/login", loginAdmin);

module.exports = router;
