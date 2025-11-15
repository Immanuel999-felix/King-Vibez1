const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  bio: String,
  socials: {
    instagram: String,
    facebook: String,
    twitter: String,
    youtube: String
  },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('About', AboutSchema);
