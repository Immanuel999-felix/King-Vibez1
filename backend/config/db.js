const mongoose = require('mongoose');
const createAdmins = require('./createAdmins'); // import the file we made

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // AUTO CREATE ADMINS
    await createAdmins();
    console.log("Admin setup complete");

  } catch (err) {
    console.error("Mongo error:", err);
    process.exit(1);
  }
};
