// backend/config/createAdmins.js

const User = require("../models/User");

async function createAdmins() {
  const admins = [
    { email: "emmanuelfelix829@gmail.com@gmail.com", isAdmin: true },
    { email: "KINGVIBEZ_EMAIL@gmail.com", isAdmin: true }
  ];

  for (let admin of admins) {
    const exists = await User.findOne({ email: admin.email });

    if (!exists) {
      await User.create(admin);
      console.log("Admin created:", admin.email);
    } else {
      console.log("Already exists:", admin.email);
    }
  }
}

module.exports = createAdmins;
