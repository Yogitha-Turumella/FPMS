// backend/models/adminModel.js
const pool = require("./db");

const getAdminById = async (login_id) => {
  const result = await pool.query(
    "SELECT * FROM admin_users WHERE admin_id = $1",
    [login_id]
  );
  return result.rows[0];
};

module.exports = {
  getAdminById,
};
