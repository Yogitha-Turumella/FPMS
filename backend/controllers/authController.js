// backend/controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findFacultyById } = require("../models/userModel");
const { findAdminById } = require("../models/adminModel");

const loginFaculty = async (req, res) => {
  const { login_id, password } = req.body;

  try {
    const user = await findFacultyById(login_id);
    if (!user) return res.status(404).json({ message: "Faculty not found" });

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    // Optional: generate a JWT if you want to use token-based auth
    res.json({ message: "Login successful" });
  } catch (err) {
    console.error("Faculty login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const loginAdmin = async (req, res) => {
  const { admin_id, password } = req.body;

  try {
    const admin = await findAdminById(admin_id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const match = await bcrypt.compare(password, admin.password_hash);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    res.json({ message: "Admin login successful" });
  } catch (err) {
    console.error("Admin login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  loginFaculty,
  loginAdmin,
};
