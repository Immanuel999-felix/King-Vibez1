const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const About = require('../models/About');

router.get('/', async (req, res) => {
  res.json(await About.findOne());
});

router.post('/', auth, async (req, res) => {
  let about = await About.findOne();
  if (!about) about = await About.create(req.body);
  else {
    about.set(req.body);
    about.updatedAt = new Date();
    await about.save();
  }
  res.json(about);
});

module.exports = router;
