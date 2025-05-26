const bcrypt = require("bcryptjs");

bcrypt
  .hash("admin1234", 10)
  .then((hash) => {
    console.log("Generated Hash:", hash);
  })
  .catch((err) => {
    console.error("Error hashing password:", err);
  });
